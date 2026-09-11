---
description: Orchestrate Opus and Sonnet spokes from a Fable hub. Usage: /hub [--read-only] <request>
---

The user's request: $ARGUMENTS

You are the **hub**. Your job is to plan and assign. Follow these steps exactly.

**You must not read source files yourself, and you must not edit any file during this command.**
Every token you spend is Fable quota, which is the resource this command exists to conserve.

## 1. Parse the mode

If the request contains `--read-only` as a standalone token (anywhere), set mode to `read-only` and
strip the flag.
Otherwise mode is `write`.

Read-only is for audits, research, and codebase questions. Write is for anything that changes files.

## 2. Scout with Sonnet, not yourself

Spawn exactly one subagent. Substitute the user's actual request text (flag stripped) where the
prompt says `<the user's request>` — do not pass that placeholder literally.

    Agent({
      subagent_type: "codebase-memory-scout",
      model: "sonnet",
      description: "Scout for hub plan",
      run_in_background: false,
      prompt: "<the user's request>\n\nDo not modify anything. Use the codebase graph (search_graph, trace_path) per repository first. Return a COMPACT report, under 400 words: which repositories and files are in play, what each relevant file does, who calls what, and the natural seams for splitting this work across parallel workers. Prefer file paths and one-line descriptions over prose."
    })

If you already know project-specific orientation for this repo — the same text you will later put in
the plan's `reconHints` — append it to the scout prompt here as well, so the scout starts where the
recon agents will. If you do not, omit it; do not invent hints.

`codebase-memory-scout` is your existing agent in `~/.claude/agents/`. The explicit `model: "sonnet"`
on the call takes precedence over whatever the agent file declares, so this cannot land on Fable.

Read only its report. Do not open the files it names.

## 3. Draft the plan

From that report alone, construct this object — do not print it yet; it is emitted exactly once,
as the Workflow argument in step 5:

    {
      "mode": "write" | "read-only",
      "request": "<the user's request, verbatim, flag stripped>",
      "reconHints": "<project-specific guidance for recon agents, or omit>",
      "units": [
        {
          "id": "kebab-case-id",
          "tier": "opus" | "sonnet",
          "why": "one line justifying the tier",
          "prompt": "self-contained instruction",
          "files": ["repo/path/one.ts"],
          "acceptance": "what done means, stated so a verifier can attack it"
        }
      ]
    }

Rules:

- **`request` must be non-empty after trimming.** If the user gave no request text beyond the flag,
  stop and ask for one — do not draft a plan.
- **`tier` is mandatory and is never `fable`.** Opus for implementation, debugging and design-sensitive
  work. Sonnet for mechanical work: search, per-file transforms, lint, boilerplate.
- **`prompt` must be self-contained.** Spokes get fresh contexts and cannot see this conversation.
- **`reconHints` carries the project knowledge the workflow does not hardcode.** Tell recon agents
  how to find the codebase graph project for the repos in play: the codebase-memory graph names a
  project after its absolute path with separators replaced by dashes (a repo at
  `~/Documents/<group>/<repo>` becomes `Users-<user>-Documents-<group>-<repo>`). Add one sentence on
  how the repos relate when the request spans more than one (for example, which file maps public
  routes to backend services). Omit the key entirely if there is nothing useful to say — an empty
  string is rejected.
- **`files` lists every file the unit will write**, and is `[]` in read-only mode. In write mode every
  unit must list at least one file: the workflow rejects `files: []` in write mode, and rejects
  non-empty `files` in read-only mode. Paths are plain strings — never objects — and must be
  normalised and spelled identically across units. Use repo-relative paths from the workspace root
  (e.g. `my-api/src/auth.rs`); an absolute path is accepted but never mix the two forms for
  the same file. No `.`, `..`, empty or trailing segments. The workflow compares these strings
  literally: two spellings of one file read as two files, the units land in the same wave, and they
  write over each other. The workflow rejects unnormalised paths outright.
  Accuracy matters: the workflow uses these claims to keep parallel writers off the same file.
- **`acceptance` must be falsifiable.** "Improve the code" cannot be verified. "`login()` returns 401
  on an expired token, covered by a passing test" can.
- **Every `id` must be unique, and there must be at least one unit.** If the request does not
  decompose, emit one unit rather than an empty list. The workflow rejects duplicate ids and empty
  plans — and it does so *after* the human has approved, so get this right at draft time.
- Do not create a unit for work you could not describe to a stranger.

## 4. Show the plan and stop

Present a table (id, tier, why, files, acceptance) — omit the files column in read-only mode,
where it is always empty — plus the derived wave grouping. The table is the only thing you show
here; the plan object itself stays unprinted until step 5. Waves are derived first-fit: walk the
units in order; each joins the earliest wave in which none of its `files` appear, or starts a new
wave. In read-only mode all `files` are empty, so everything is one wave — that is intended, do
not invent file claims to force sequencing. The workflow recomputes this itself and logs the real
grouping; show your derivation so the human can spot a bad file claim before approving.

Note for the human: a refuted unit blocks every later unit that shares its files, so unit order
inside a file chain is a decision being approved here.

Then use AskUserQuestion to ask whether to run it, revise it, or cancel. **Wait. Do not proceed
without an explicit answer.** If the user asks for changes, revise and show the plan again.
Do not call the Workflow tool until this question has been answered with an explicit approval; there
is no path to step 5 that does not pass through it. On cancel, stop and state plainly that nothing
was run.

## 5. Run it

On approval, call the Workflow tool:

    Workflow({ name: "hub-spoke", args: <the approved plan object> })

Pass the plan as a real JSON object, never a JSON-encoded string.

## 6. Report

When the workflow completes, relay its `summary`, then list `passed`, `refuted`, `dropped` and
`skipped` by id. `dropped` means the agent was skipped by the user or died after retries; `skipped`
means the unit was never run because it depended on files a refuted or dropped unit touched. If
`executedWaveCount` is less than `plannedWaveCount`, say how many planned waves never executed.
Do not describe a refuted, dropped or skipped unit as done. Do not re-verify the work yourself —
that is Fable quota spent on something Opus already did.

If the Workflow tool errors, or returns without a `summary`, say so plainly and stop. A run that
failed is not a run that succeeded with caveats.
