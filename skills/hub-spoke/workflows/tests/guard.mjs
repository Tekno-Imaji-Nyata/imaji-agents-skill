// Static guard on hub-spoke.js. The failure this catches is silent at runtime:
// an agent() call with no model: inherits the Fable main-loop model.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const src = readFileSync(join(here, '..', 'hub-spoke.js'), 'utf8')

// \bagent excludes 'subagent(' on purpose — the word boundary is doing work.
const calls = (src.match(/\bagent\s*\(/g) || []).length
const models = (src.match(/\bmodel\s*:/g) || []).length

let failed = false
console.log(`agent() calls: ${calls}   model: keys: ${models}`)

if (calls === 0) {
  console.error('FAIL: no agent() calls found — is the script body written?')
  failed = true
}
if (calls !== models) {
  console.error(`FAIL: ${calls} agent() call(s) but ${models} model: key(s) — one is missing an explicit model and would inherit Fable`)
  failed = true
}
if (/model:\s*['"`]fable/.test(src)) {
  console.error('FAIL: "fable" used as a spoke model — the hub must never be a spoke')
  failed = true
}
if (/subagent_type:\s*['"`]fork/.test(src)) {
  console.error('FAIL: fork subagents always inherit the parent model and cannot be overridden')
  failed = true
}

if (failed) process.exit(1)
console.log('PASS: Fable containment holds')
