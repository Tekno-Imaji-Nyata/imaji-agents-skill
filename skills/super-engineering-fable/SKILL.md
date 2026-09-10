---
name: super-engineering-fable
description: Brainstorm and debate with Fable in super.engineering, then let Fable route workers between Sonnet, Opus, and Fable by task difficulty while Codex orchestrates, reviews, and verifies. Use when the user requests this Fable-led multi-agent workflow or invokes this skill.
---

# Codex orchestrator, Fable manager

Codex owns the user's objective and final verification; Fable challenges the design, manages implementation agents, and integrates their work. Brainstorm before implementation. Let Fable launch multiple independent workflows when useful; do not make Codex relay every worker instruction.

## Operating surface and scope

Read [super-engineering-chat](../super-engineering-chat/SKILL.md) before operating agents. That skill preserves the user's preference for visible-interface control. Open, select, configure, message, and submit agent actions through super.engineering's UI using supported computer-use tools. Read-only CLI inspection can supplement the UI. Do not substitute standalone Claude sessions or Codex tasks for the requested environment.

Inspect the current app for the intended workspace, checkout, available Fable model, provider sessions, and workflow controls. Reuse a matching manager session when appropriate. Verify the model actually selected; do not label another model “Fable.” If Fable or workflow delegation is unavailable, explain the concrete limitation without pretending the requested collaboration occurred.

Use the user's existing authorization. This skill does not independently authorize deployment, paid services, messaging people, or changes outside the task. User-directed manager delegation belongs within the requested workflow; do not enable orchestration settings to circumvent the visible-interface preference.

Keep version-specific session IDs, model availability, coordinates, credentials, and project paths out of this reusable skill. Discover them for each run.

## Establish responsibilities

- **Codex, orchestrator:** capture requirements, constraints and acceptance criteria; provide repository evidence; debate decisions with Fable; resolve integration boundaries; independently inspect changes and validate the final result. Handle authorized infrastructure and release work when that is the agreed ownership split.
- **Fable, manager:** challenge assumptions, propose tradeoffs, decompose implementation, launch and coordinate supported Claude workflows, resolve worker conflicts, and report integrated evidence and remaining gaps.
- **Implementation agents:** own bounded files or modules plus the relevant checks. Use available Claude models appropriate to the work. Model selection is per task, not a fixed version binding.
- **Fresh Fable reviewer:** review the integrated deliverable against the objective in a separate context when practical. Fresh context reduces shared assumptions; it is not independent-model review. Codex supplies the separate verification perspective.

Before delegating code discovery, follow the repository's graph and coverage rules. Initialize each new coding worktree with Graft when required. Supply graph project/generation, relevant symbols and paths, call relationships, coverage gaps and source fallbacks; do not assume children inherit repository context or MCP access.

## Choose workers by difficulty

Fable chooses the worker for each bounded task, rather than assigning one model family to the whole project. Use the least expensive available model that can reliably satisfy the task; inspect the current model choices and effort controls rather than assuming versions, prices, or supported settings.

| Worker | Default fit | Examples |
| --- | --- | --- |
| **Sonnet** | Well-defined work with established patterns, limited uncertainty, and straightforward verification. Start here for routine implementation. | UI forms from an agreed design, ordinary CRUD with existing authorization helpers, documentation, mechanical refactors, test fixtures, and focused read-only discovery. |
| **Opus** | Complex implementation with interacting behavior, difficult debugging, or costly correctness mistakes. | Transaction boundaries, concurrent workers, retry/idempotency logic, authentication changes, migrations, cross-module integration, and regressions requiring several hypotheses. |
| **Fable** | The hardest unresolved judgment, architecture, or investigations where the specification cannot yet determine the solution. Also use a fresh Fable context for the final review. | Competing architectural approaches, subtle system-wide failures, adversarial design review, or a problem still unresolved after a well-scoped Opus attempt. |

This is a routing policy, not a claim that one family always outperforms another. Respect an explicit user model choice. If a requested model is unavailable, disclose the limitation and chosen available substitute; never mislabel the substitute.

Assess uncertainty, interacting components, consequences of failure, and strength of available checks. File count or typing volume alone does not make a task hard. A large, mechanical update may suit Sonnet; a five-line authorization or concurrency change may deserve Opus or Fable. Split judgment-heavy decisions from routine implementation so Fable can resolve the decision and hand a precise spec to Sonnet or Opus.

Include one routing line in each worker handoff: `Worker: <available model>; effort: <supported setting or inherited>; reason: <specific difficulty/risk>; done when: <observable check>`. Pick effort per task, without defaulting every worker to maximum. Preserve user budgets and concurrency limits; otherwise launch only as many independent tasks as can be usefully reviewed and integrated.

### Escalate based on evidence

- Inspect a failed check before changing models. Missing credentials, unavailable infrastructure, and an ambiguous spec need access, repair, or clarification; a stronger model does not fix those by itself.
- Give the current worker a bounded correction when the cause is understood. If it remains stuck, repeats a conceptual mistake, or reveals greater risk than expected, escalate the unresolved part: Sonnet → Opus → Fable. High-risk work can start directly at the appropriate tier.
- Send the next worker the failing evidence, attempted approaches, current diff, and remaining question. Transfer file ownership and stop overlapping edits before takeover. Do not have multiple workers implement competing fixes in the same checkout.
- After a hard decision or root cause is resolved, route the remaining routine edits back to Sonnet when worthwhile. Do not keep an expensive worker occupied with mechanical follow-through solely because it handled the investigation.
- Fable remains the manager even when another Fable worker is assigned. Keep that worker bounded; avoid recursive manager chains, duplicate investigations, and spawning extra agents just to use every model.

## Brainstorm and debate before writing

Give Fable the actual problem, existing system, constraints, authorized scope, and open decisions. Ask for a recommended approach, credible alternatives, pros and cons, failure modes, and the smallest complete implementation.

Codex then challenges the consequential choices rather than simply accepting the first response. Discuss the tradeoffs that matter for this task: ownership of state, failure recovery, concurrency, trust boundaries, operational burden, and future extension versus speculative complexity. Let Fable respond to the objections. A single round may suffice; continue only while a material disagreement remains.

Record the chosen approach and reasons in the project's existing decision format. For a substantial build, a concise debate record and implementation contract are useful. For a small fix, a short manager handoff is sufficient. Do not require user confirmation merely because the debate is complete; proceed within the authorized scope.

## Give Fable a complete manager handoff

Include:

1. Objective and observable acceptance criteria.
2. Agreed decisions, interfaces and dependencies.
3. Checkout/branch and precise module or file ownership.
4. Constraints, existing work to preserve, and external actions outside worker scope.
5. Verification commands or behaviors, including relevant failure cases.
6. Available workflow/model choices, the difficulty-based routing plan above, and any user-specified budget or concurrency limits.
7. Required report: changed files, actual checks and outcomes, unresolved questions, and review status.

Explicitly tell Fable it may create and manage multiple supported workflows in super.engineering. Require each worker to know it is not alone in the codebase, preserve others' edits, and coordinate shared files through the manager. Keep independent modules parallel and dependency chains sequential. Do not create extra agents for tasks too small to benefit.

If a plugin's default routing doctrine differs from the user's requested Codex-orchestrator/Fable-manager/Claude-worker arrangement, preserve the user's arrangement and explain any necessary substitution. Do not silently swap implementation families or models.

## Dispatch and progress verification

A successful dispatch is not evidence that the prompt was submitted, that an agent started, or that work completed. Inspect the intended session and confirm the message appears as submitted and the agent begins responding.

When operating super.engineering:

- A terminal prompt can be pasted but remain unsubmitted. After checking the visible buffer, submit through the UI and confirm acceptance.
- A queued manager message can wait until a later turn. When immediate steering is needed, use the visible Steer control if available. Inspect the queue before retrying; remove superseded prompts only when their identity and replacement are clear.
- CLI session listings or `agent read` can lag native conversation state. Treat a disagreement as uncertainty, not completion. Prefer the live session. If needed, inspect the provider transcript read-only after discovering its exact current session path; do not guess an old session ID or dump unrelated history.
- UI selectors and coordinates can become stale after navigation or re-rendering. Refresh the visible state before acting. Do not invent unsupported hover or movement APIs.

Use bounded waits and concise progress updates. Route corrections back to the responsible worker through Fable instead of accumulating overlapping edits. If Codex must take over a file, explicitly transfer ownership first.

## Review, correct, and finish

Have the fresh reviewer inspect the integrated changes against the requirements and name material defects, affected paths, and practical checks. Pass findings to Fable for bounded corrections. Focus subsequent review on changed paths and remaining concerns; stop cycling when those are resolved and the appropriate checks pass.

Codex inspects the actual diff and verifies meaningful evidence against the current source. An agent's completion claim, empty diff, stale test output, or “should pass” is insufficient. After fixes, run the appropriate combined checks. Do not repeat a full suite solely because another agent reported progress.

For an authorized deployment, verify the deployed revision and actual integration behavior. Keep synthetic acceptance data isolated and respect the user's authorization for external test messages. Record operational caveats in the project's runbook rather than baking project-specific infrastructure into this skill.

Finish with what shipped, where it can be reviewed, what was verified, and any material unfinished work. Preserve reusable coordination lessons when actual behavior warrants a narrow update to this skill.
