import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const src = readFileSync(join(here, '..', 'hub-spoke.js'), 'utf8')

// The workflow script cannot import anything at runtime, so its pure helpers live
// inline between markers. Extract them here so there is only one copy of the logic.
function extract(name) {
  const m = src.match(new RegExp(`// >>> ${name}\\n([\\s\\S]*?)// <<< ${name}`))
  if (!m) throw new Error(`block "${name}" not found in hub-spoke.js`)
  return m[1]
}

const mod = await import(
  'data:text/javascript,' +
  encodeURIComponent(
    extract('deriveWaves') +
    extract('validatePlan') +
    '\nexport { deriveWaves, validatePlan }'
  )
)
const { deriveWaves, validatePlan } = mod

const u = (id, files) => ({ id, files })

test('deriveWaves: no units yields no waves', () => {
  assert.deepEqual(deriveWaves([]), [])
})

test('deriveWaves: units with no file claims all share one wave', () => {
  const units = [u('a', []), u('b', []), u('c', [])]
  const waves = deriveWaves(units)
  assert.equal(waves.length, 1)
  assert.deepEqual(waves[0].map(x => x.id), ['a', 'b', 'c'])
})

test('deriveWaves: disjoint file claims share one wave', () => {
  const units = [u('a', ['x.ts']), u('b', ['y.ts'])]
  const waves = deriveWaves(units)
  assert.equal(waves.length, 1)
  assert.deepEqual(waves[0].map(x => x.id), ['a', 'b'])
})

test('deriveWaves: colliding file claims split into two waves', () => {
  const units = [u('a', ['x.ts']), u('b', ['x.ts'])]
  const waves = deriveWaves(units)
  assert.equal(waves.length, 2)
  assert.deepEqual(waves[0].map(x => x.id), ['a'])
  assert.deepEqual(waves[1].map(x => x.id), ['b'])
})

test('deriveWaves: first-fit packs a later non-colliding unit into an earlier wave', () => {
  const units = [u('a', ['x.ts']), u('b', ['x.ts']), u('c', ['y.ts'])]
  const waves = deriveWaves(units)
  assert.equal(waves.length, 2)
  assert.deepEqual(waves[0].map(x => x.id), ['a', 'c'])
  assert.deepEqual(waves[1].map(x => x.id), ['b'])
})

test('deriveWaves: partial overlap still counts as a collision', () => {
  const units = [u('a', ['x.ts', 'y.ts']), u('b', ['y.ts', 'z.ts'])]
  const waves = deriveWaves(units)
  assert.equal(waves.length, 2)
})

test('deriveWaves: does not mutate the input array', () => {
  const units = [u('a', ['x.ts']), u('b', ['x.ts'])]
  const before = JSON.stringify(units)
  deriveWaves(units)
  assert.equal(JSON.stringify(units), before)
})

const validUnit = (over = {}) => ({
  id: 'unit-a',
  tier: 'opus',
  why: 'implementation work',
  prompt: 'do the thing',
  acceptance: 'the thing is done',
  files: ['x.ts'],
  ...over,
})

const validPlan = (over = {}) => ({
  mode: 'write',
  request: 'original request',
  units: [validUnit()],
  ...over,
})

test('validatePlan: a well-formed plan has no errors', () => {
  assert.deepEqual(validatePlan(validPlan()), [])
})

test('validatePlan: rejects a non-object', () => {
  assert.equal(validatePlan(null).length, 1)
})

test('validatePlan: rejects an unknown mode', () => {
  const errs = validatePlan(validPlan({ mode: 'turbo' }))
  assert.ok(errs.some(e => e.includes('mode')))
})

test('validatePlan: rejects an empty units array', () => {
  const errs = validatePlan(validPlan({ units: [] }))
  assert.ok(errs.some(e => e.includes('non-empty')))
})

test('validatePlan: rejects a missing tier', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ tier: undefined })] }))
  assert.ok(errs.some(e => e.includes('tier')))
})

test('validatePlan: rejects fable as a unit tier', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ tier: 'fable' })] }))
  assert.ok(errs.some(e => e.includes('tier')))
})

test('validatePlan: rejects duplicate unit ids', () => {
  const errs = validatePlan(validPlan({ units: [validUnit(), validUnit()] }))
  assert.ok(errs.some(e => e.includes('duplicated')))
})

test('validatePlan: rejects a missing acceptance criterion', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ acceptance: undefined })] }))
  assert.ok(errs.some(e => e.includes('acceptance')))
})

test('validatePlan: rejects a non-array files field', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ files: 'x.ts' })] }))
  assert.ok(errs.some(e => e.includes('files')))
})

test('validatePlan: rejects file claims in read-only mode', () => {
  const errs = validatePlan(validPlan({ mode: 'read-only' }))
  assert.ok(errs.some(e => e.includes('read-only')))
})

test('validatePlan: accepts read-only units with empty file claims', () => {
  const plan = validPlan({ mode: 'read-only', units: [validUnit({ files: [] })] })
  assert.deepEqual(validatePlan(plan), [])
})

test('validatePlan: reports every problem at once, not just the first', () => {
  const errs = validatePlan(validPlan({ mode: 'turbo', units: [validUnit({ tier: 'fable', prompt: undefined })] }))
  assert.ok(errs.length >= 3)
})

test('validatePlan: rejects a null unit without throwing', () => {
  const errs = validatePlan(validPlan({ units: [null] }))
  assert.ok(errs.some(e => e.includes('units[0] must be an object')))
})

test('validatePlan: rejects a non-object unit without throwing', () => {
  const errs = validatePlan(validPlan({ units: ['unit-a'] }))
  assert.ok(errs.some(e => e.includes('units[0] must be an object')))
})

test('validatePlan: rejects an object inside files', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ files: [{ path: 'x.ts' }] })] }))
  assert.ok(errs.some(e => e.includes('must contain only non-empty path strings')))
})

test('validatePlan: rejects an empty string inside files', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ files: ['x.ts', ''] })] }))
  assert.ok(errs.some(e => e.includes('must contain only non-empty path strings')))
})

test('validatePlan: rejects an empty files array in write mode', () => {
  const errs = validatePlan(validPlan({ units: [validUnit({ files: [] })] }))
  assert.ok(errs.some(e => e.includes('at least one file in write mode')))
})

test('validatePlan: rejects a missing request', () => {
  const errs = validatePlan(validPlan({ request: undefined }))
  assert.ok(errs.some(e => e.includes('request must be a non-empty string')))
})

test('validatePlan: rejects a non-string request', () => {
  const errs = validatePlan(validPlan({ request: 42 }))
  assert.ok(errs.some(e => e.includes('request must be a non-empty string')))
})

test('validatePlan: rejects a non-string reconHints', () => {
  const errs = validatePlan(validPlan({ reconHints: ['a hint'] }))
  assert.ok(errs.some(e => e.includes('reconHints must be a string when provided')))
})

test('validatePlan: accepts a string reconHints', () => {
  assert.deepEqual(validatePlan(validPlan({ reconHints: 'the gateway maps routes' })), [])
})

test('exactly one definition of each helper exists in the script', () => {
  assert.equal((src.match(/function deriveWaves\b/g) || []).length, 1)
  assert.equal((src.match(/function validatePlan\b/g) || []).length, 1)
})

// deriveWaves compares file strings literally, so two spellings of one path would
// defeat the collision guard. validatePlan rejects unnormalised paths outright.
for (const bad of ['./x.ts', 'a/../x.ts', 'src/./x.ts', 'x.ts/', './/x.ts']) {
  test(`validatePlan: rejects the unnormalised path ${JSON.stringify(bad)}`, () => {
    const errs = validatePlan(validPlan({ units: [validUnit({ files: [bad] })] }))
    assert.ok(errs.some(e => e.includes('must be normalised paths')), `expected rejection, got ${JSON.stringify(errs)}`)
  })
}

test('validatePlan: accepts an absolute path', () => {
  assert.deepEqual(validatePlan(validPlan({ units: [validUnit({ files: ['/tmp/x.ts'] })] })), [])
})

test('validatePlan: accepts a normalised relative path', () => {
  assert.deepEqual(validatePlan(validPlan({ units: [validUnit({ files: ['src/x.ts'] })] })), [])
})

test('validatePlan: rejects a whitespace-only request', () => {
  const errs = validatePlan(validPlan({ request: '   ' }))
  assert.ok(errs.some(e => e.includes('request must be a non-empty string')))
})

// Surrounding whitespace makes two spellings of one path compare unequal, which
// would slip a real collision past deriveWaves. Rejected outright.
for (const bad of ['src/x.ts ', ' src/x.ts', 'src/x.ts\t', 'a/b.ts\n']) {
  test(`validatePlan: rejects the whitespace-padded path ${JSON.stringify(bad)}`, () => {
    const errs = validatePlan(validPlan({ units: [validUnit({ files: [bad] })] }))
    assert.ok(
      errs.some(e => e.includes('no surrounding whitespace')),
      `expected rejection, got ${JSON.stringify(errs)}`,
    )
  })
}

test('validatePlan: rejects a plan mixing absolute and repo-relative file claims', () => {
  const plan = validPlan({
    units: [
      validUnit({ id: 'a', files: ['src/x.ts'] }),
      validUnit({ id: 'b', files: ['/abs/src/x.ts'] }),
    ],
  })
  const errs = validatePlan(plan)
  assert.ok(
    errs.some(e => e.includes('must not mix absolute and repo-relative paths')),
    `expected rejection, got ${JSON.stringify(errs)}`,
  )
})

test('validatePlan: accepts a plan whose file claims are all absolute', () => {
  const plan = validPlan({
    units: [
      validUnit({ id: 'a', files: ['/abs/src/x.ts'] }),
      validUnit({ id: 'b', files: ['/abs/src/y.ts'] }),
    ],
  })
  assert.deepEqual(validatePlan(plan), [])
})

test('validatePlan: accepts a plan whose file claims are all repo-relative', () => {
  const plan = validPlan({
    units: [
      validUnit({ id: 'a', files: ['src/x.ts'] }),
      validUnit({ id: 'b', files: ['src/y.ts'] }),
    ],
  })
  assert.deepEqual(validatePlan(plan), [])
})

test('deriveWaves: paths differing only in case count as a collision', () => {
  const waves = deriveWaves([u('a', ['src/X.ts']), u('b', ['src/x.ts'])])
  assert.equal(waves.length, 2)
  assert.deepEqual(waves[0].map(x => x.id), ['a'])
  assert.deepEqual(waves[1].map(x => x.id), ['b'])
})

test('deriveWaves: paths differing only in Unicode normalisation count as a collision', () => {
  // 'é' precomposed (NFC) vs 'e' + combining acute (NFD): the same file on disk.
  const waves = deriveWaves([u('a', ['src/caf\u00e9.ts']), u('b', ['src/cafe\u0301.ts'])])
  assert.equal(waves.length, 2)
})

// The four probe pairs the review used as evidence: each is one file spelled two
// ways, which a literal string comparison would treat as two distinct claims.
const probePairs = [
  { name: 'trailing space', a: 'src/x.ts', b: 'src/x.ts ', reject: 'no surrounding whitespace' },
  { name: 'leading space', a: 'src/x.ts', b: ' src/x.ts', reject: 'no surrounding whitespace' },
  { name: 'mixed absolute and relative', a: 'src/x.ts', b: '/repo/src/x.ts', reject: 'must not mix absolute and repo-relative paths' },
]

for (const pair of probePairs) {
  test(`validatePlan: rejects the ${pair.name} probe pair`, () => {
    const plan = validPlan({
      units: [
        validUnit({ id: 'a', files: [pair.a] }),
        validUnit({ id: 'b', files: [pair.b] }),
      ],
    })
    const errs = validatePlan(plan)
    assert.ok(
      errs.some(e => e.includes(pair.reject)),
      `expected rejection, got ${JSON.stringify(errs)}`,
    )
  })
}

test('deriveWaves: the case-only probe pair yields two waves', () => {
  assert.equal(deriveWaves([u('a', ['src/X.ts']), u('b', ['src/x.ts'])]).length, 2)
})
