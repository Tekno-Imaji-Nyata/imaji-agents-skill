export const meta = {
  name: 'hub-spoke',
  description: 'Execute an approved hub-and-spoke plan with Sonnet recon, tiered execution, adversarial Opus verify',
  whenToUse: 'Invoked by the /hub command with an already-approved plan. Not for ad-hoc use.',
  phases: [
    { title: 'Execute', detail: 'recon (sonnet) then execute (opus|sonnet) then verify (opus), wave by wave' },
    { title: 'Synthesize', detail: 'opus merges results, conflicts and dropped units' },
  ],
}

// >>> deriveWaves
// Group units into waves whose file claims are pairwise disjoint, so no two spokes
// in the same wave can write the same file. First-fit: each unit joins the earliest
// wave it does not collide with. Units claiming no files never collide.
// Claims are compared case- and Unicode-normalisation-insensitively: a false
// collision costs one extra wave, a missed one corrupts a file, so over-approximate.
function deriveWaves(units) {
  const key = f => f.normalize('NFC').toLowerCase()
  const waves = []
  for (const unit of units) {
    const claimed = new Set((unit.files || []).map(key))
    let placed = false
    for (const wave of waves) {
      const collides = wave.some(other => (other.files || []).some(f => claimed.has(key(f))))
      if (!collides) {
        wave.push(unit)
        placed = true
        break
      }
    }
    if (!placed) waves.push([unit])
  }
  return waves
}
// <<< deriveWaves

// >>> validatePlan
// Returns an array of human-readable errors; empty means the plan is safe to run.
// The tier check is the load-bearing one: an unset or "fable" tier would inherit the
// Fable main-loop model and spend the quota this whole design exists to protect.
function validatePlan(plan) {
  const errors = []
  if (!plan || typeof plan !== 'object') return ['plan must be an object']
  if (plan.mode !== 'write' && plan.mode !== 'read-only') {
    errors.push(`mode must be "write" or "read-only", got ${JSON.stringify(plan.mode)}`)
  }
  if (typeof plan.request !== 'string' || plan.request.trim() === '') {
    errors.push('request must be a non-empty string')
  }
  if (plan.reconHints !== undefined && (typeof plan.reconHints !== 'string' || plan.reconHints.trim() === '')) {
    errors.push('reconHints must be a string when provided')
  }
  if (!Array.isArray(plan.units) || plan.units.length === 0) {
    errors.push('units must be a non-empty array')
    return errors
  }
  const seen = new Set()
  plan.units.forEach((unit, i) => {
    const at = `units[${i}]`
    if (!unit || typeof unit !== 'object') {
      errors.push(`${at} must be an object`)
      return
    }
    if (!unit.id || typeof unit.id !== 'string') errors.push(`${at}.id is required`)
    else if (seen.has(unit.id)) errors.push(`${at}.id "${unit.id}" is duplicated`)
    else seen.add(unit.id)

    if (unit.tier !== 'opus' && unit.tier !== 'sonnet') {
      errors.push(`${at}.tier must be "opus" or "sonnet", got ${JSON.stringify(unit.tier)} — an unset or "fable" tier would spend Fable quota`)
    }
    if (typeof unit.prompt !== 'string' || unit.prompt.trim() === '') errors.push(`${at}.prompt is required`)
    if (typeof unit.acceptance !== 'string' || unit.acceptance.trim() === '') errors.push(`${at}.acceptance is required`)

    if (!Array.isArray(unit.files)) {
      errors.push(`${at}.files must be an array (use [] in read-only mode)`)
    } else if (unit.files.some(f => !f || typeof f !== 'string')) {
      errors.push(`${at}.files must contain only non-empty path strings`)
    } else if (unit.files.some(f => f !== f.trim())) {
      errors.push(`${at}.files must contain only non-empty path strings with no surrounding whitespace`)
    } else if (unit.files.some(f => f.split('/').some((seg, i) => seg === '.' || seg === '..' || (seg === '' && i > 0)))) {
      errors.push(`${at}.files must be normalised paths: no ".", "..", empty or trailing segments (a leading "/" for absolute paths is allowed)`)
    } else if (plan.mode === 'read-only' && unit.files.length > 0) {
      errors.push(`${at}.files must be empty in read-only mode`)
    } else if (plan.mode === 'write' && unit.files.length === 0) {
      errors.push(`${at}.files must list at least one file in write mode`)
    }
  })

  // deriveWaves and the failed-file block compare claims literally, so "src/x.ts"
  // and "/repo/src/x.ts" would look like two different files. Pick one form.
  const allFiles = plan.units.flatMap(unit =>
    unit && Array.isArray(unit.files) ? unit.files.filter(f => f && typeof f === 'string') : []
  )
  if (allFiles.some(f => f.startsWith('/')) && allFiles.some(f => !f.startsWith('/'))) {
    errors.push('files must not mix absolute and repo-relative paths — the workflow compares them literally')
  }
  return errors
}
// <<< validatePlan

const plan = args
const errors = validatePlan(plan)
if (errors.length) {
  throw new Error('invalid plan:\n' + errors.map(e => '  - ' + e).join('\n'))
}

// Agent output is unbounded; interpolating it whole can blow the next agent's context.
const clip = (s, n) => (typeof s === 'string' && s.length > n ? s.slice(0, n) + `\n…[truncated ${s.length - n} chars]` : s)

const readOnly = plan.mode === 'read-only'
const waves = readOnly ? [plan.units] : deriveWaves(plan.units)

log(`${plan.units.length} unit(s) in ${waves.length} wave(s), mode=${plan.mode}`)
waves.forEach((wave, i) => log(`  wave ${i + 1}: ${wave.map(u => u.id).join(', ')}`))
if (!readOnly && waves.length > 1) {
  log('multiple waves means overlapping file claims — those units run sequentially, not in parallel')
}

const VERDICT = {
  type: 'object',
  properties: {
    refuted: { type: 'boolean' },
    reason: { type: 'string' },
  },
  required: ['refuted', 'reason'],
}

phase('Execute')
const results = []
// Files owned by a unit that failed or never ran. A later unit touching any of them
// would be building on a foundation that is not there, so it does not run at all.
const failedFiles = new Set()
// Waves that actually ran. A wave every one of whose units was skipped is planned but never executed.
let executedWaves = 0

for (const wave of waves) {
  const runnable = []
  // Indexed by position in `wave`, so plan order survives into `results`.
  const waveResults = new Array(wave.length).fill(null)
  const runnableAt = []
  wave.forEach((unit, i) => {
    if (unit.files.some(f => failedFiles.has(f))) {
      log(`SKIPPED: ${unit.id} — depends on files touched by a failed unit`)
      waveResults[i] = { unit, report: null, verdict: null, skipped: true }
      // A skipped unit's own files are unfinished too, so the block propagates.
      unit.files.forEach(f => failedFiles.add(f))
    } else {
      runnableAt.push(i)
      runnable.push(unit)
    }
  })
  if (!runnable.length) {
    results.push(...waveResults)
    continue
  }
  executedWaves++

  const out = await pipeline(
    runnable,
    // Stage 1 — recon. Always Sonnet at low effort: reading is not judgment work.
    unit => agent(
      `Recon only. Do NOT modify anything.\n\n` +
      `Upcoming task:\n${unit.prompt}\n\n` +
      `Files in scope: ${unit.files.length ? unit.files.join(', ') : '(discover them yourself)'}\n\n` +
      `Use the codebase graph before grep: load mcp__codebase-memory-mcp__search_graph, trace_path and ` +
      `get_code_snippet via ToolSearch, and query the project whose name matches the repo. ` +
      `Fall back to grep only where the graph is empty.\n\n` +
      `Return a compact brief: what these files currently do, the exact symbols and line ranges that matter, ` +
      `who calls them (from trace_path), and anything that would surprise whoever implements this.` +
      (plan.reconHints ? `\n\nProject-specific hints from the hub:\n${plan.reconHints}` : ''),
      { model: 'sonnet', effort: 'low', label: `recon:${unit.id}`, phase: 'Execute' }
    ),
    // Stage 2 — execute, on the tier the approved plan assigned.
    (brief, unit) => agent(
      `${unit.prompt}\n\n` +
      `--- Recon brief ---\n${clip(brief, 12000)}\n\n` +
      `--- Acceptance criterion ---\n${unit.acceptance}\n\n` +
      (readOnly
        ? `READ-ONLY MODE: report findings only. Do not modify any file.`
        : `You own exactly these files: ${unit.files.join(', ')}. Do not modify any other file — a parallel worker owns them.`) +
      `\n\nReturn what you did and precisely how it satisfies the acceptance criterion.`,
      {
        model: unit.tier,
        effort: unit.tier === 'sonnet' ? 'low' : 'medium',
        label: `exec:${unit.id}`,
        phase: 'Execute',
      }
    ),
    // Stage 3 — adversarial verify. Always Opus at high effort, prompted to refute.
    (report, unit) => agent(
      `Attempt to REFUTE this claim of completion. Default to refuted=true when uncertain.\n\n` +
      `Acceptance criterion: ${unit.acceptance}\n\n` +
      `Task the worker was given:\n${unit.prompt}\n\n` +
      `Files in scope: ${unit.files.length ? unit.files.join(', ') : '(none declared — read-only)'}\n\n` +
      `The worker's claim:\n${clip(report, 12000)}\n\n` +
      `Inspect the actual files yourself. Do not take the claim at face value. ` +
      `Set refuted=true if the criterion is not demonstrably met, and say exactly why.`,
      { model: 'opus', effort: 'high', label: `verify:${unit.id}`, phase: 'Execute', schema: VERDICT }
    ).then(verdict => ({ unit, report, verdict })),
  )

  out.forEach((r, i) => {
    const at = runnableAt[i]
    if (at === undefined) {
      // No slot to write into: the result cannot be attributed to a unit, so drop it loudly.
      log(`WARN: pipeline returned more results than runnable units in this wave`)
      return
    }
    if (r) {
      waveResults[at] = r
    } else {
      const unit = runnable[i]
      // pipeline() collapses a failed item to null without saying which stage failed; per-stage attribution is not available here.
      log(`DROPPED: ${unit.id} — agent skipped or died after retries`)
      waveResults[at] = { unit, report: null, verdict: null }
    }
  })
  // A slot pipeline() never filled owns no unit; keep it out of the synthesis input.
  results.push(...waveResults.filter(Boolean))

  for (const r of waveResults) {
    // A slot pipeline() never filled stays null; it owns no unit, so it blocks nothing.
    if (!r) continue
    if (!r.verdict || r.verdict.refuted === true) {
      r.unit.files.forEach(f => failedFiles.add(f))
    }
  }
}

phase('Synthesize')

const skipped = results.filter(r => r.skipped).map(r => r.unit.id)
const dropped = results.filter(r => !r.verdict && !r.skipped).map(r => r.unit.id)
const refuted = results.filter(r => r.verdict && r.verdict.refuted)
const passed = results.filter(r => r.verdict && !r.verdict.refuted)

const digest = results.map(r => {
  const status = r.skipped ? 'SKIPPED' : !r.verdict ? 'DROPPED' : r.verdict.refuted ? 'REFUTED' : 'PASSED'
  return `### ${r.unit.id} [${r.unit.tier}] — ${status}\n` +
    `acceptance: ${r.unit.acceptance}\n` +
    `report: ${clip(r.report, 6000) || '(none)'}\n` +
    (r.verdict ? `verdict: ${r.verdict.reason}` : 'verdict: (not reached)')
}).join('\n\n')

// Opus, not Fable — the hub reads this report, it does not write it.
const summary = await agent(
  `Synthesise the final report for this request:\n\n${plan.request}\n\n` +
  `Unit results:\n\n${digest}\n\n` +
  `Produce three sections: (1) a direct answer to the request, (2) any contradictions between units, ` +
  `(3) refuted, dropped and skipped units with what still needs doing. ` +
  `Never describe a refuted, dropped or skipped unit as successful.`,
  { model: 'opus', effort: 'high', label: 'synthesize', phase: 'Synthesize' }
)

return {
  mode: plan.mode,
  executedWaveCount: executedWaves,
  plannedWaveCount: waves.length,
  passed: passed.map(r => r.unit.id),
  refuted: refuted.map(r => ({ id: r.unit.id, reason: r.verdict.reason })),
  dropped,
  skipped,
  summary,
}
