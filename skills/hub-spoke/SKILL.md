---
name: hub-spoke
description: Run a Fable hub that plans and delegates work to Sonnet and Opus spokes through the /hub command and the hub-spoke Workflow in Claude Code. Use when a request should be scouted, split into file-owned units, executed on the cheapest capable model, and adversarially verified while Fable spends tokens only on planning.
---

# Fable hub, Sonnet and Opus spokes

Fable is expensive and good at judgment. This skill keeps Fable on judgment: it plans and approves, and never reads source or edits files. Sonnet scouts and does mechanical work, Opus implements and verifies, and a Claude Code Workflow enforces the split so no spoke can silently inherit the Fable model.

Use this skill inside Claude Code. It relies on the `Agent` and `Workflow` tools and on the codebase-memory MCP server. Codex has no Workflow tool, so this skill has no `agents/openai.yaml`.

## What ships in this directory

| Path | Installed to | Role |
| --- | --- | --- |
| `commands/hub.md` | `~/.claude/commands/hub.md` | The `/hub` slash command. Fable parses the mode, scouts with one Sonnet agent, drafts a plan, shows it as a table, and waits for approval. |
| `workflows/hub-spoke.js` | `~/.claude/workflows/hub-spoke.js` | The `hub-spoke` Workflow. Validates the approved plan, derives file-disjoint waves, then runs recon, execute, and verify per unit and synthesises a report. |
| `workflows/tests/` | `~/.claude/workflows/tests/` | A static guard that fails if any spoke lacks an explicit model, plus unit tests for wave derivation and plan validation. |
| `agents/codebase-memory-scout.md` | `~/.claude/agents/codebase-memory-scout.md` | The Sonnet scout the hub spawns. Read-only graph lookups with a provisional report. |

## How a run works

**`/hub [--read-only] <request>` → scout → plan table → approval → Workflow → report**

1. **Parse.** `--read-only` marks audits and questions; anything else is write mode.
2. **Scout.** Exactly one Sonnet `codebase-memory-scout` agent returns a compact map of the repositories, files, callers, and natural seams. Fable reads the report and opens nothing.
3. **Plan.** Fable drafts units with an `id`, a `tier` of `opus` or `sonnet`, a self-contained `prompt`, the `files` the unit will write, and a falsifiable `acceptance` criterion. `fable` is never a valid tier.
4. **Approve.** The plan is shown as a table with the derived wave grouping. Nothing runs until the user explicitly approves through AskUserQuestion.
5. **Execute.** The Workflow groups units into waves whose file claims do not overlap. Each unit runs Sonnet recon at low effort, execution on its assigned tier, and an Opus verifier at high effort prompted to refute the claim of completion. A refuted or dropped unit blocks every later unit that shares its files.
6. **Synthesise.** Opus writes the final report. Fable relays `passed`, `refuted`, `dropped`, and `skipped` by id and does not re-verify the work.

## Routing rule

| Tier | Use for |
| --- | --- |
| **Sonnet** | Scouting, recon, search, per-file transforms, lint, boilerplate, tests, and documentation. |
| **Opus** | Implementation, debugging, design-sensitive changes, adversarial verification, and the final synthesis. |
| **Fable** | Planning and approval only. The Workflow rejects any plan that names Fable as a spoke. |

This matches the routing policy in [super-engineering-fable](../super-engineering-fable/SKILL.md). That skill operates through the super.engineering interface; this one operates through Claude Code tools in the terminal.

## Plan contract

The Workflow rejects a plan after approval if it breaks these rules, so the hub must get them right at draft time:

- `request` is non-empty and `mode` is `write` or `read-only`.
- Every unit has a unique `id`, a `tier` of `opus` or `sonnet`, a non-empty `prompt`, and a non-empty `acceptance`.
- `files` is `[]` in read-only mode and lists at least one normalised path in write mode. Paths are plain strings, spelled identically across units, with no `.`, `..`, empty, or trailing segments, and never a mix of absolute and repo-relative forms.
- `reconHints`, when present, is a non-empty string that tells recon agents how to find the graph project for each repo in play.

The full rules, including how waves are derived, are in [commands/hub.md](commands/hub.md).

## Install

Run from this repository. Inspect existing files first and preserve local customisations.

```sh
mkdir -p ~/.claude/commands ~/.claude/workflows/tests ~/.claude/agents
cp skills/hub-spoke/commands/hub.md ~/.claude/commands/
cp skills/hub-spoke/workflows/hub-spoke.js ~/.claude/workflows/
cp skills/hub-spoke/workflows/tests/*.mjs ~/.claude/workflows/tests/
cp skills/hub-spoke/agents/codebase-memory-scout.md ~/.claude/agents/
```

Requirements:

- Claude Code with the `Agent` and `Workflow` tools and a Fable main-loop model.
- The codebase-memory MCP server, with the target repositories indexed. The scout and recon agents query it by project name; see the `reconHints` rule in the command for how names are derived.
- Node.js to run the tests.

Start a new Claude Code session after installing so the command, workflow, and agent are discovered.

## Verify

```sh
cd ~/.claude/workflows
node tests/guard.mjs
node --test tests/hub-spoke.test.mjs
```

The guard counts `agent(` calls against explicit `model:` keys and fails on any mismatch, on a `fable` model, or on a `fork` subagent, because each of those would spend Fable quota on spoke work. Run it after any edit to the workflow.

## Scope

The hub never edits files, and spokes edit only the files their unit claims. A refuted, dropped, or skipped unit is reported as unfinished, never as done. If the Workflow errors or returns no summary, the run failed. The skill does not grant permission to deploy, publish, or act outside the user's authorized task.
