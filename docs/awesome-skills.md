# Awesome Skills

[← Back to Imaji Agent Skills](../README.md) · [Awesome Plugins](awesome-plugins.md)

**564 skill entries across 33 collections.** Inventory snapshot: September 10, 2026.

This is the installed Imaji toolkit: shared and user skills, installed Codex and Claude Code plugin skills, and project-level skills. A skill is a reusable instruction file; a plugin may bundle skills, tools, hooks, or language servers.

Names are deduplicated within each source collection across agent hosts and installed versions. Older Claude-only skills remain included. Different collections can expose the same name. Counts include ECC command wrappers that have their own `SKILL.md`, but exclude ordinary commands, reference files, and empty folders. Installation does not establish that every skill has been exercised in production.

Source links point to a verified repository path when available, otherwise to the source collection or a clearly labeled tool/plugin reference. Public sources may differ from locally customized versions. Local definitions without recorded public provenance are listed explicitly; they are not silently replaced by unrelated community skills.

## Collections

| Collection | Entries |
| --- | ---: |
| [Imaji](#imaji) | 2 |
| [Anthropic skills](#anthropic-skills) | 1 |
| [claude-mem](#claude-mem) | 20 |
| [Cloudflare](#cloudflare) | 11 |
| [codex](#codex) | 3 |
| [deep-research-work](#deep-research-work) | 1 |
| [documents](#documents) | 1 |
| [ecc](#ecc) | 325 |
| [fable-advisor](#fable-advisor) | 1 |
| [frontend-design](#frontend-design) | 1 |
| [github](#github) | 4 |
| [gmail](#gmail) | 2 |
| [google-drive](#google-drive) | 5 |
| [htmlstreamofficial/preline](#htmlstreamofficial-preline) | 2 |
| [impeccable](#impeccable) | 1 |
| [komand-widgets](#komand-widgets) | 1 |
| [mattpocock/skills](#mattpocock-skills) | 26 |
| [neon-postgres](#neon-postgres) | 2 |
| [OpenAI system skills](#openai-system-skills) | 6 |
| [pdf](#pdf) | 1 |
| [ponytail](#ponytail) | 6 |
| [presentations](#presentations) | 1 |
| [sites](#sites) | 2 |
| [spreadsheets](#spreadsheets) | 2 |
| [stablyai/orca](#stablyai-orca) | 1 |
| [Standalone and local](#standalone-and-local) | 45 |
| [superpowers](#superpowers) | 14 |
| [template-creator](#template-creator) | 1 |
| [thinking-skills](#thinking-skills) | 39 |
| [tt-a1i/archify](#tt-a1i-archify) | 1 |
| [vercel](#vercel) | 34 |
| [vercel-labs/skills](#vercel-labs-skills) | 1 |
| [visualize](#visualize) | 1 |

## Imaji

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="imaji-super-engineering-chat"></a>[super-engineering-chat](../skills/super-engineering-chat/SKILL.md) | Open, select, message, and control coding agents or editors through the super.engineering interface when the user requests that environment, including Claude Code, Codex, Pycode,… | Included here |
| <a id="imaji-super-engineering-fable"></a>[super-engineering-fable](../skills/super-engineering-fable/SKILL.md) | Brainstorm and debate with Fable in super.engineering, then let Fable route workers between Sonnet, Opus, and Fable by task difficulty while Codex orchestrates, reviews,… | Included here |

## Anthropic skills

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="anthropic-skills-brand-guidelines"></a>[brand-guidelines](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md) | Apply Anthropic brand colors and typography. This is not the Imaji brand guide. | Source definition |

## claude-mem

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="claude-mem-babysit"></a>[babysit](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/babysit/SKILL.md) | Watch a pull request or review cycle until it is ready to merge. | Source definition |
| <a id="claude-mem-ccs-align"></a>[ccs-align](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/ccs-align/SKILL.md) | Run the CCS Align seat&#x27;s hourly breathing cycle — prove the local claude-mem worker is healthy, pull needle observations through search → timeline →… | Source definition |
| <a id="claude-mem-cloud-sync"></a>[cloud-sync](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/cloud-sync/SKILL.md) | Set up or check claude-mem cloud sync with cmem.ai Pro. | Source definition |
| <a id="claude-mem-design-is"></a>[design-is](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/design-is/SKILL.md) | Audit a design against Dieter Rams&#x27; ten &quot;Good design is...&quot; principles, then hand off a /make-plan prompt for one of three outcomes — new… | Source definition |
| <a id="claude-mem-do"></a>[do](https://github.com/thedotmack/claude-mem) | Execute a phased implementation plan using subagents. | Source collection; installed path differs |
| <a id="claude-mem-how-it-works"></a>[how-it-works](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/how-it-works/SKILL.md) | Explain how claude-mem captures observations, when memory injection kicks in, and where data lives. | Source definition |
| <a id="claude-mem-knowledge-agent"></a>[knowledge-agent](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/knowledge-agent/SKILL.md) | Build and query AI-powered knowledge bases from claude-mem observations. | Source definition |
| <a id="claude-mem-learn-codebase"></a>[learn-codebase](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/learn-codebase/SKILL.md) | Prime a codebase by reading every source file in full. | Source definition |
| <a id="claude-mem-make-plan"></a>[make-plan](https://github.com/thedotmack/claude-mem) | Create a detailed, phased implementation plan with documentation discovery. | Source collection; installed path differs |
| <a id="claude-mem-mem-search"></a>[mem-search](https://github.com/thedotmack/claude-mem) | Search claude-mem&#x27;s persistent cross-session memory database. | Source collection; installed path differs |
| <a id="claude-mem-mode-creator"></a>[mode-creator](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/mode-creator/SKILL.md) | Interactively create, install, activate, and verify custom claude-mem modes, including domain-specific observation types, concept tags, optional Telegram alerts, bot setup, worker restart, and startup-context… | Source definition |
| <a id="claude-mem-oh-my-issues"></a>[oh-my-issues](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/oh-my-issues/SKILL.md) | Cluster a GitHub issue backlog by root cause into a small set of plan-master issues, redirect children with a standardized comment, and bundle architectural-fix… | Source definition |
| <a id="claude-mem-pathfinder"></a>[pathfinder](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/pathfinder/SKILL.md) | Map a codebase into feature-grouped flowcharts, identify duplicated concerns across features, and propose a unified architecture. | Source definition |
| <a id="claude-mem-smart-explore"></a>[smart-explore](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/smart-explore/SKILL.md) | Token-optimized structural code search using tree-sitter AST parsing. | Source definition |
| <a id="claude-mem-standup"></a>[standup](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/standup/SKILL.md) | Facilitate a read-only standup across git worktrees, branches, or PRs to compare changes and produce one consolidation plan. | Source definition |
| <a id="claude-mem-timeline-report"></a>[timeline-report](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/timeline-report/SKILL.md) | Generate a &quot;Journey Into [Project]&quot; narrative report analyzing a project&#x27;s entire development history from claude-mem&#x27;s timeline. | Source definition |
| <a id="claude-mem-version-bump"></a>[version-bump](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/version-bump/SKILL.md) | Automated semantic versioning and release workflow for Claude Code plugins. | Source definition |
| <a id="claude-mem-weekly-digests"></a>[weekly-digests](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/weekly-digests/SKILL.md) | Generate a serial week-by-week narrative digest of a project&#x27;s full claude-mem timeline. | Source definition |
| <a id="claude-mem-what-the"></a>[what-the](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/what-the/SKILL.md) | What the? | Source definition |
| <a id="claude-mem-wowerpoint"></a>[wowerpoint](https://github.com/thedotmack/claude-mem/blob/main/plugin/skills/wowerpoint/SKILL.md) | Turn one document into a kawaii NotebookLM slide-deck PDF. | Source definition |

## Cloudflare

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="cloudflare-agents-sdk"></a>[agents-sdk](https://github.com/cloudflare/skills/blob/main/skills/agents-sdk/SKILL.md) | Build AI agents on Cloudflare Workers using the Agents SDK. | Source definition |
| <a id="cloudflare-cloudflare"></a>[cloudflare](https://github.com/cloudflare/skills/blob/main/skills/cloudflare/SKILL.md) | Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags (Flagship), networking (Tunnel, Spectrum), security… | Source definition |
| <a id="cloudflare-cloudflare-email-service"></a>[cloudflare-email-service](https://github.com/cloudflare/skills/blob/main/skills/cloudflare-email-service/SKILL.md) | Send and receive transactional emails with Cloudflare Email Service (Email Sending + Email Routing). | Source definition |
| <a id="cloudflare-cloudflare-one"></a>[cloudflare-one](https://github.com/cloudflare/skills/blob/main/skills/cloudflare-one/SKILL.md) | Guides Cloudflare One Zero Trust and SASE work across Access, Gateway, WARP, Tunnel, Cloudflare WAN, DLP, CASB, device posture, and identity. | Source definition |
| <a id="cloudflare-cloudflare-one-migrations"></a>[cloudflare-one-migrations](https://github.com/cloudflare/skills/blob/main/skills/cloudflare-one-migrations/SKILL.md) | Plans migrations from Zscaler ZIA/ZPA, Palo Alto, legacy VPN, SWG, or SASE stacks to Cloudflare One. | Source definition |
| <a id="cloudflare-durable-objects"></a>[durable-objects](https://github.com/cloudflare/skills/blob/main/skills/durable-objects/SKILL.md) | Create and review Cloudflare Durable Objects. | Source definition |
| <a id="cloudflare-sandbox-sdk"></a>[sandbox-sdk](https://github.com/cloudflare/skills) | Build sandboxed applications for secure code execution. | Source collection; installed path differs |
| <a id="cloudflare-turnstile-spin"></a>[turnstile-spin](https://github.com/cloudflare/skills/blob/main/skills/turnstile-spin/SKILL.md) | Set up Cloudflare Turnstile end-to-end in a project — scan the codebase, create the widget via the Cloudflare API, deploy the managed siteverify Worker,… | Source definition |
| <a id="cloudflare-web-perf"></a>[web-perf](https://github.com/cloudflare/skills/blob/main/skills/web-perf/SKILL.md) | Analyzes web performance using Chrome DevTools MCP. | Source definition |
| <a id="cloudflare-workers-best-practices"></a>[workers-best-practices](https://github.com/cloudflare/skills/blob/main/skills/workers-best-practices/SKILL.md) | Reviews and authors Cloudflare Workers code against production best practices. | Source definition |
| <a id="cloudflare-wrangler"></a>[wrangler](https://github.com/cloudflare/skills/blob/main/skills/wrangler/SKILL.md) | Cloudflare Workers CLI for deploying, developing, and managing Workers, KV, R2, D1, Vectorize, Hyperdrive, Workers AI, Containers, Queues, Workflows, Pipelines, and Secrets Store. | Source definition |

## codex

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="codex-codex-cli-runtime"></a>[codex-cli-runtime](https://github.com/openai/codex-plugin-cc/blob/main/plugins/codex/skills/codex-cli-runtime/SKILL.md) | Internal helper contract for calling the codex-companion runtime from Claude Code | Source definition |
| <a id="codex-codex-result-handling"></a>[codex-result-handling](https://github.com/openai/codex-plugin-cc/blob/main/plugins/codex/skills/codex-result-handling/SKILL.md) | Internal guidance for presenting Codex helper output back to the user | Source definition |
| <a id="codex-gpt-5-4-prompting"></a>[gpt-5-4-prompting](https://github.com/openai/codex-plugin-cc/blob/main/plugins/codex/skills/gpt-5-4-prompting/SKILL.md) | Internal guidance for composing Codex and GPT-5.4 prompts for coding, review, diagnosis, and research tasks inside the Codex Claude Code plugin | Source definition |

## deep-research-work

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="deep-research-work-deep-research"></a>[deep-research](awesome-plugins.md#deep-research-work) | Use only when the user asks for deep research (or a clear equivalent), invokes $deep-research, or selects Deep Research in Work mode. | Plugin record; no verified public definition |

## documents

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="documents-documents"></a>[documents](awesome-plugins.md#documents) | Create, edit, redline, and comment on .docx, Word, and Google Docs-targeted document artifacts inside the container, with a strict render-and-verify workflow. | Plugin record; no verified public definition |

## ecc

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="ecc-accessibility"></a>[accessibility](https://github.com/affaan-m/ECC/blob/main/skills/accessibility/SKILL.md) | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA. | Source definition |
| <a id="ecc-agent-architecture-audit"></a>[agent-architecture-audit](https://github.com/affaan-m/ECC/blob/main/skills/agent-architecture-audit/SKILL.md) | Full-stack diagnostic for agent and LLM applications. | Source definition |
| <a id="ecc-agent-eval"></a>[agent-eval](https://github.com/affaan-m/ECC/blob/main/skills/agent-eval/SKILL.md) | Head-to-head comparison of coding agents (Claude Code, Aider, Codex, etc.) on custom tasks with pass rate, cost, time, and consistency metrics. | Source definition |
| <a id="ecc-agent-harness-construction"></a>[agent-harness-construction](https://github.com/affaan-m/ECC/blob/main/skills/agent-harness-construction/SKILL.md) | Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates. | Source definition |
| <a id="ecc-agent-introspection-debugging"></a>[agent-introspection-debugging](https://github.com/affaan-m/ECC/blob/main/skills/agent-introspection-debugging/SKILL.md) | Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports. | Source definition |
| <a id="ecc-agent-payment-x402"></a>[agent-payment-x402](https://github.com/affaan-m/ECC/blob/main/skills/agent-payment-x402/SKILL.md) | Add x402 payment execution to AI agents with per-task budgets, spending controls, and non-custodial wallets. | Source definition |
| <a id="ecc-agent-self-evaluation"></a>[agent-self-evaluation](https://github.com/affaan-m/ECC/blob/main/skills/agent-self-evaluation/SKILL.md) | Use after completing any non-trivial task. | Source definition |
| <a id="ecc-agent-sort"></a>[agent-sort](https://github.com/affaan-m/ECC/blob/main/skills/agent-sort/SKILL.md) | Build an evidence-backed ECC install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY buckets using… | Source definition |
| <a id="ecc-agentic-engineering"></a>[agentic-engineering](https://github.com/affaan-m/ECC/blob/main/skills/agentic-engineering/SKILL.md) | Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing. | Source definition |
| <a id="ecc-agentic-os"></a>[agentic-os](https://github.com/affaan-m/ECC/blob/main/skills/agentic-os/SKILL.md) | Build persistent multi-agent operating systems on Claude Code. | Source definition |
| <a id="ecc-ai-first-engineering"></a>[ai-first-engineering](https://github.com/affaan-m/ECC/blob/main/skills/ai-first-engineering/SKILL.md) | Engineering operating model for teams where AI agents generate a large share of implementation output. | Source definition |
| <a id="ecc-ai-regression-testing"></a>[ai-regression-testing](https://github.com/affaan-m/ECC/blob/main/skills/ai-regression-testing/SKILL.md) | Regression testing strategies for AI-assisted development. | Source definition |
| <a id="ecc-android-clean-architecture"></a>[android-clean-architecture](https://github.com/affaan-m/ECC/blob/main/skills/android-clean-architecture/SKILL.md) | Clean Architecture patterns for Android and Kotlin Multiplatform projects — module structure, dependency rules, UseCases, Repositories, and data layer patterns. | Source definition |
| <a id="ecc-angular-developer"></a>[angular-developer](https://github.com/affaan-m/ECC/blob/main/skills/angular-developer/SKILL.md) | Generates Angular code and provides architectural guidance. | Source definition |
| <a id="ecc-api-connector-builder"></a>[api-connector-builder](https://github.com/affaan-m/ECC/blob/main/skills/api-connector-builder/SKILL.md) | Build a new API connector or provider by matching the target repo&#x27;s existing integration pattern exactly. | Source definition |
| <a id="ecc-api-design"></a>[api-design](https://github.com/affaan-m/ECC/blob/main/skills/api-design/SKILL.md) | REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs. | Source definition |
| <a id="ecc-architecture-decision-records"></a>[architecture-decision-records](https://github.com/affaan-m/ECC/blob/main/skills/architecture-decision-records/SKILL.md) | Capture architectural decisions made during Claude Code sessions as structured ADRs. | Source definition |
| <a id="ecc-article-writing"></a>[article-writing](https://github.com/affaan-m/ECC/blob/main/skills/article-writing/SKILL.md) | Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. | Source definition |
| <a id="ecc-automation-audit-ops"></a>[automation-audit-ops](https://github.com/affaan-m/ECC/blob/main/skills/automation-audit-ops/SKILL.md) | Evidence-first automation inventory and overlap audit workflow for ECC. | Source definition |
| <a id="ecc-autonomous-agent-harness"></a>[autonomous-agent-harness](https://github.com/affaan-m/ECC/blob/main/skills/autonomous-agent-harness/SKILL.md) | Transform Claude Code into a fully autonomous agent system with persistent memory, scheduled operations, computer use, and task queuing. | Source definition |
| <a id="ecc-autonomous-loops"></a>[autonomous-loops](https://github.com/affaan-m/ECC/blob/main/skills/autonomous-loops/SKILL.md) | Patterns and architectures for autonomous Claude Code loops — from simple sequential pipelines to RFC-driven multi-agent DAG systems. | Source definition |
| <a id="ecc-backend-patterns"></a>[backend-patterns](https://github.com/affaan-m/ECC/blob/main/skills/backend-patterns/SKILL.md) | Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes. | Source definition |
| <a id="ecc-benchmark"></a>[benchmark](https://github.com/affaan-m/ECC/blob/main/skills/benchmark/SKILL.md) | Use this skill to measure performance baselines, detect regressions before/after PRs, and compare stack alternatives. | Source definition |
| <a id="ecc-benchmark-methodology"></a>[benchmark-methodology](https://github.com/affaan-m/ECC/blob/main/skills/benchmark-methodology/SKILL.md) | Use after competitive-platform-analysis has produced a tiered competitor set. | Source definition |
| <a id="ecc-benchmark-optimization-loop"></a>[benchmark-optimization-loop](https://github.com/affaan-m/ECC/blob/main/skills/benchmark-optimization-loop/SKILL.md) | Use when the user asks to make something faster, try many variants, run recursive optimization, benchmark latency/throughput/cost, or choose the best implementation by repeated… | Source definition |
| <a id="ecc-blender-motion-state-inspection"></a>[blender-motion-state-inspection](https://github.com/affaan-m/ECC/blob/main/skills/blender-motion-state-inspection/SKILL.md) | Use this skill when inspecting Blender characters, rigs, poses, animation retargeting, ground contact, facing direction, or model-vs-motion alignment where screenshots alone are not enough. | Source definition |
| <a id="ecc-blueprint"></a>[blueprint](https://github.com/affaan-m/ECC/blob/main/skills/blueprint/SKILL.md) | Turn a one-line objective into a step-by-step construction plan for multi-session, multi-agent engineering projects. | Source definition |
| <a id="ecc-brand-discovery"></a>[brand-discovery](https://github.com/affaan-m/ECC/blob/main/skills/brand-discovery/SKILL.md) | Use when a brand needs to discover or articulate its identity through structured multi-session interviews. | Source definition |
| <a id="ecc-brand-voice"></a>[brand-voice](https://github.com/affaan-m/ECC/blob/main/skills/brand-voice/SKILL.md) | Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and… | Source definition |
| <a id="ecc-browser-qa"></a>[browser-qa](https://github.com/affaan-m/ECC/blob/main/skills/browser-qa/SKILL.md) | Use this skill to automate visual testing and UI interaction verification using browser automation after deploying features. | Source definition |
| <a id="ecc-bun-runtime"></a>[bun-runtime](https://github.com/affaan-m/ECC/blob/main/skills/bun-runtime/SKILL.md) | Bun as runtime, package manager, bundler, and test runner. | Source definition |
| <a id="ecc-canary-watch"></a>[canary-watch](https://github.com/affaan-m/ECC/blob/main/skills/canary-watch/SKILL.md) | Use this skill to monitor and verify a deployed URL after releases — checks HTTP endpoints, SSE streams, static assets, console errors, and performance… | Source definition |
| <a id="ecc-carrier-relationship-management"></a>[carrier-relationship-management](https://github.com/affaan-m/ECC/blob/main/skills/carrier-relationship-management/SKILL.md) | Codified expertise for managing carrier portfolios, negotiating freight rates, tracking carrier performance, allocating freight, and maintaining strategic carrier relationships. | Source definition |
| <a id="ecc-cisco-ios-patterns"></a>[cisco-ios-patterns](https://github.com/affaan-m/ECC/blob/main/skills/cisco-ios-patterns/SKILL.md) | Cisco IOS and IOS-XE review patterns for show commands, config hierarchy, wildcard masks, ACL placement, interface hygiene, and safe change-window verification. | Source definition |
| <a id="ecc-ck"></a>[ck](https://github.com/affaan-m/ECC/blob/main/skills/ck/SKILL.md) | Persistent per-project memory for Claude Code. | Source definition |
| <a id="ecc-claude-devfleet"></a>[claude-devfleet](https://github.com/affaan-m/ECC/blob/main/skills/claude-devfleet/SKILL.md) | Orchestrate multi-agent coding tasks via Claude DevFleet — plan projects, dispatch parallel agents in isolated worktrees, monitor progress, and read structured reports. | Source definition |
| <a id="ecc-click-path-audit"></a>[click-path-audit](https://github.com/affaan-m/ECC/blob/main/skills/click-path-audit/SKILL.md) | Trace every user-facing button/touchpoint through its full state change sequence to find bugs where functions individually work but cancel each other out, produce wrong… | Source definition |
| <a id="ecc-clickhouse-io"></a>[clickhouse-io](https://github.com/affaan-m/ECC/blob/main/skills/clickhouse-io/SKILL.md) | ClickHouse database patterns, query optimization, analytics, and data engineering best practices for high-performance analytical workloads. | Source definition |
| <a id="ecc-code-tour"></a>[code-tour](https://github.com/affaan-m/ECC/blob/main/skills/code-tour/SKILL.md) | Create CodeTour .tour files — persona-targeted, step-by-step walkthroughs with real file and line anchors. | Source definition |
| <a id="ecc-codebase-onboarding"></a>[codebase-onboarding](https://github.com/affaan-m/ECC/blob/main/skills/codebase-onboarding/SKILL.md) | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. | Source definition |
| <a id="ecc-codehealth-mcp"></a>[codehealth-mcp](https://github.com/affaan-m/ECC/blob/main/skills/codehealth-mcp/SKILL.md) | Real-time structural Code Health via CodeScene MCP — review before edits, verify score deltas after changes, gate commits and PRs. | Source definition |
| <a id="ecc-coding-standards"></a>[coding-standards](https://github.com/affaan-m/ECC/blob/main/skills/coding-standards/SKILL.md) | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. | Source definition |
| <a id="ecc-competitive-platform-analysis"></a>[competitive-platform-analysis](https://github.com/affaan-m/ECC/blob/main/skills/competitive-platform-analysis/SKILL.md) | Use when scoping a competitive landscape — identifying, categorising, and score-filtering a competitor set before any benchmarking begins. | Source definition |
| <a id="ecc-competitive-report-structure"></a>[competitive-report-structure](https://github.com/affaan-m/ECC/blob/main/skills/competitive-report-structure/SKILL.md) | Use after benchmark-methodology has produced scored competitor profile cards. | Source definition |
| <a id="ecc-compose-multiplatform-patterns"></a>[compose-multiplatform-patterns](https://github.com/affaan-m/ECC/blob/main/skills/compose-multiplatform-patterns/SKILL.md) | Compose Multiplatform and Jetpack Compose patterns for KMP projects — state management, navigation, theming, performance, and platform-specific UI. | Source definition |
| <a id="ecc-config-gc"></a>[config-gc](https://github.com/affaan-m/ECC/blob/main/skills/config-gc/SKILL.md) | Garbage collection for your Claude Code configuration. | Source definition |
| <a id="ecc-configure-ecc"></a>[configure-ecc](https://github.com/affaan-m/ECC/blob/main/skills/configure-ecc/SKILL.md) | Guide ECC installation, update, or reconfiguration from inside Claude Code, Codex, or Kimi while respecting each harness&#x27;s real plugin, scope, and hook capabilities. | Source definition |
| <a id="ecc-connections-optimizer"></a>[connections-optimizer](https://github.com/affaan-m/ECC/blob/main/skills/connections-optimizer/SKILL.md) | Reorganize the user&#x27;s X and LinkedIn network with review-first pruning, add/follow recommendations, and channel-specific warm outreach drafted in the user&#x27;s real voice. | Source definition |
| <a id="ecc-content-engine"></a>[content-engine](https://github.com/affaan-m/ECC/blob/main/skills/content-engine/SKILL.md) | Create platform-native content systems for X, LinkedIn, TikTok, YouTube, newsletters, and repurposed multi-platform campaigns. | Source definition |
| <a id="ecc-content-hash-cache-pattern"></a>[content-hash-cache-pattern](https://github.com/affaan-m/ECC/blob/main/skills/content-hash-cache-pattern/SKILL.md) | Cache expensive file processing results using SHA-256 content hashes — path-independent, auto-invalidating, with service layer separation. | Source definition |
| <a id="ecc-context-budget"></a>[context-budget](https://github.com/affaan-m/ECC/blob/main/skills/context-budget/SKILL.md) | Audits Claude Code context window consumption across agents, skills, MCP servers, and rules. | Source definition |
| <a id="ecc-continuous-agent-loop"></a>[continuous-agent-loop](https://github.com/affaan-m/ECC/blob/main/skills/continuous-agent-loop/SKILL.md) | Patterns for continuous autonomous agent loops with quality gates, evals, and recovery controls. | Source definition |
| <a id="ecc-continuous-learning"></a>[continuous-learning](https://github.com/affaan-m/ECC/blob/main/skills/continuous-learning/SKILL.md) | [DEPRECATED - use continuous-learning-v2] Legacy v1 stop-hook skill extractor. | Source definition |
| <a id="ecc-continuous-learning-v2"></a>[continuous-learning-v2](https://github.com/affaan-m/ECC/blob/main/skills/continuous-learning-v2/SKILL.md) | Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into skills/commands/agents. | Source definition |
| <a id="ecc-contract-first"></a>[contract-first](https://github.com/affaan-m/ECC/blob/main/skills/contract-first/SKILL.md) | Use when multiple consumers and providers must evolve an API or event schema without field drift, integration surprises, or one side silently redefining the… | Source definition |
| <a id="ecc-cost-aware-llm-pipeline"></a>[cost-aware-llm-pipeline](https://github.com/affaan-m/ECC/blob/main/skills/cost-aware-llm-pipeline/SKILL.md) | Cost optimization patterns for LLM API usage — model routing by task complexity, budget tracking, retry logic, and prompt caching. | Source definition |
| <a id="ecc-cost-tracking"></a>[cost-tracking](https://github.com/affaan-m/ECC/blob/main/skills/cost-tracking/SKILL.md) | Track and report Claude Code token usage, spending, and budgets from the local ECC cost-tracker metrics log. | Source definition |
| <a id="ecc-council"></a>[council](https://github.com/affaan-m/ECC/blob/main/skills/council/SKILL.md) | Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. | Source definition |
| <a id="ecc-council-multi-model"></a>[council-multi-model](https://github.com/affaan-m/ECC/blob/main/skills/council-multi-model/SKILL.md) | Add one optional external Codex critique after the existing council has produced a decision draft. | Source definition |
| <a id="ecc-cpp-coding-standards"></a>[cpp-coding-standards](https://github.com/affaan-m/ECC/blob/main/skills/cpp-coding-standards/SKILL.md) | C++ coding standards based on the C++ Core Guidelines (isocpp.github.io). | Source definition |
| <a id="ecc-cpp-testing"></a>[cpp-testing](https://github.com/affaan-m/ECC/blob/main/skills/cpp-testing/SKILL.md) | Use only when writing/updating/fixing C++ tests, configuring GoogleTest/CTest, diagnosing failing or flaky tests, or adding coverage/sanitizers. | Source definition |
| <a id="ecc-crosspost"></a>[crosspost](https://github.com/affaan-m/ECC/blob/main/skills/crosspost/SKILL.md) | Multi-platform content distribution across X, LinkedIn, Threads, and Bluesky. | Source definition |
| <a id="ecc-csharp-testing"></a>[csharp-testing](https://github.com/affaan-m/ECC/blob/main/skills/csharp-testing/SKILL.md) | C# and .NET testing patterns with xUnit, FluentAssertions, mocking, integration tests, and test organization best practices. | Source definition |
| <a id="ecc-customer-billing-ops"></a>[customer-billing-ops](https://github.com/affaan-m/ECC/blob/main/skills/customer-billing-ops/SKILL.md) | Operate customer billing workflows such as subscriptions, refunds, churn triage, billing-portal recovery, and plan analysis using connected billing tools like Stripe. | Source definition |
| <a id="ecc-customs-trade-compliance"></a>[customs-trade-compliance](https://github.com/affaan-m/ECC/blob/main/skills/customs-trade-compliance/SKILL.md) | Codified expertise for customs documentation, tariff classification, duty optimization, restricted party screening, and regulatory compliance across multiple jurisdictions. | Source definition |
| <a id="ecc-dart-flutter-patterns"></a>[dart-flutter-patterns](https://github.com/affaan-m/ECC/blob/main/skills/dart-flutter-patterns/SKILL.md) | Production-ready Dart and Flutter patterns covering null safety, immutable state, async composition, widget architecture, popular state management frameworks (BLoC, Riverpod, Provider), GoRouter navigation, Dio… | Source definition |
| <a id="ecc-dashboard-builder"></a>[dashboard-builder](https://github.com/affaan-m/ECC/blob/main/skills/dashboard-builder/SKILL.md) | Build monitoring dashboards that answer real operator questions for Grafana, SigNoz, and similar platforms. | Source definition |
| <a id="ecc-data-scraper-agent"></a>[data-scraper-agent](https://github.com/affaan-m/ECC/blob/main/skills/data-scraper-agent/SKILL.md) | Build a fully automated AI-powered data collection agent for any public source — job boards, prices, news, GitHub, sports, anything. | Source definition |
| <a id="ecc-data-throughput-accelerator"></a>[data-throughput-accelerator](https://github.com/affaan-m/ECC/blob/main/skills/data-throughput-accelerator/SKILL.md) | Use when large data ingestion, backfill, export, ETL, warehouse loading, manifest catch-up, or table synchronization needs to become much faster while preserving data correctness. | Source definition |
| <a id="ecc-database-migrations"></a>[database-migrations](https://github.com/affaan-m/ECC/blob/main/skills/database-migrations/SKILL.md) | Database migration best practices for schema changes, data migrations, rollbacks, and zero-downtime deployments across PostgreSQL, MySQL, and common ORMs (Prisma, Drizzle, Kysely, Django, TypeORM,… | Source definition |
| <a id="ecc-deep-research"></a>[deep-research](https://github.com/affaan-m/ECC/blob/main/skills/deep-research/SKILL.md) | Multi-source deep research using firecrawl and exa MCPs. | Source definition |
| <a id="ecc-defi-amm-security"></a>[defi-amm-security](https://github.com/affaan-m/ECC/blob/main/skills/defi-amm-security/SKILL.md) | Security checklist for Solidity AMM contracts, liquidity pools, and swap flows. | Source definition |
| <a id="ecc-delivery-gate"></a>[delivery-gate](https://github.com/affaan-m/ECC/blob/main/skills/delivery-gate/SKILL.md) | Stop hook that blocks Claude from finishing until quality checks pass. | Source definition |
| <a id="ecc-deployment-patterns"></a>[deployment-patterns](https://github.com/affaan-m/ECC/blob/main/skills/deployment-patterns/SKILL.md) | Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness checklists for web applications. | Source definition |
| <a id="ecc-design-system"></a>[design-system](https://github.com/affaan-m/ECC/blob/main/skills/design-system/SKILL.md) | Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling. | Source definition |
| <a id="ecc-dev-team"></a>[dev-team](https://github.com/affaan-m/ECC/blob/main/skills/dev-team/SKILL.md) | Simulate a collaborative dev team session where multiple role-based personas (PM, Architect, Developer, QA) respond to the same problem together in one session. | Source definition |
| <a id="ecc-django-celery"></a>[django-celery](https://github.com/affaan-m/ECC/blob/main/skills/django-celery/SKILL.md) | Django + Celery async task patterns — configuration, task design, beat scheduling, retries, canvas workflows, monitoring, and testing. | Source definition |
| <a id="ecc-django-patterns"></a>[django-patterns](https://github.com/affaan-m/ECC/blob/main/skills/django-patterns/SKILL.md) | Django architecture patterns, REST API design with DRF, ORM best practices, caching, signals, middleware, and production-grade Django apps. | Source definition |
| <a id="ecc-django-security"></a>[django-security](https://github.com/affaan-m/ECC/blob/main/skills/django-security/SKILL.md) | Django security best practices, authentication, authorization, CSRF protection, SQL injection prevention, XSS prevention, and secure deployment configurations. | Source definition |
| <a id="ecc-django-tdd"></a>[django-tdd](https://github.com/affaan-m/ECC/blob/main/skills/django-tdd/SKILL.md) | Django testing strategies with pytest-django, TDD methodology, factory_boy, mocking, coverage, and testing Django REST Framework APIs. | Source definition |
| <a id="ecc-django-verification"></a>[django-verification](https://github.com/affaan-m/ECC/blob/main/skills/django-verification/SKILL.md) | Verification loop for Django projects: migrations, linting, tests with coverage, security scans, and deployment readiness checks before release or PR. | Source definition |
| <a id="ecc-dmux-workflows"></a>[dmux-workflows](https://github.com/affaan-m/ECC/blob/main/skills/dmux-workflows/SKILL.md) | Multi-agent orchestration using dmux (tmux pane manager for AI agents). | Source definition |
| <a id="ecc-docker-patterns"></a>[docker-patterns](https://github.com/affaan-m/ECC/blob/main/skills/docker-patterns/SKILL.md) | Docker and Docker Compose patterns for local development, hardened CLI installer harnesses, container security, networking, volumes, and multi-service orchestration. | Source definition |
| <a id="ecc-documentation-lookup"></a>[documentation-lookup](https://github.com/affaan-m/ECC/blob/main/skills/documentation-lookup/SKILL.md) | Use up-to-date library and framework docs via Context7 MCP instead of training data. | Source definition |
| <a id="ecc-dotnet-patterns"></a>[dotnet-patterns](https://github.com/affaan-m/ECC/blob/main/skills/dotnet-patterns/SKILL.md) | Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications. | Source definition |
| <a id="ecc-dynamic-workflow-mode"></a>[dynamic-workflow-mode](https://github.com/affaan-m/ECC/blob/main/skills/dynamic-workflow-mode/SKILL.md) | Design task-local harnesses, eval gates, and reusable skill extraction for Claude dynamic workflow mode and other adaptive agent harnesses. | Source definition |
| <a id="ecc-e2e-testing"></a>[e2e-testing](https://github.com/affaan-m/ECC/blob/main/skills/e2e-testing/SKILL.md) | Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. | Source definition |
| <a id="ecc-ecc-guide"></a>[ecc-guide](https://github.com/affaan-m/ECC/blob/main/skills/ecc-guide/SKILL.md) | Guide users through ECC&#x27;s current agents, skills, commands, hooks, rules, install profiles, and project onboarding by reading the live repository surface before answering. | Source definition |
| <a id="ecc-ecc-recipes"></a>[ecc-recipes](https://github.com/affaan-m/ECC/blob/main/skills/ecc-recipes/SKILL.md) | Map a described workflow to the right ECC command-GROUP with run-order and stop condition, and browse all command-group recipe families. | Source definition |
| <a id="ecc-ecc-tools-cost-audit"></a>[ecc-tools-cost-audit](https://github.com/affaan-m/ECC/blob/main/skills/ecc-tools-cost-audit/SKILL.md) | Evidence-first ECC Tools burn and billing audit workflow. | Source definition |
| <a id="ecc-email-ops"></a>[email-ops](https://github.com/affaan-m/ECC/blob/main/skills/email-ops/SKILL.md) | Evidence-first mailbox triage, drafting, send verification, and sent-mail-safe follow-up workflow for ECC. | Source definition |
| <a id="ecc-energy-procurement"></a>[energy-procurement](https://github.com/affaan-m/ECC/blob/main/skills/energy-procurement/SKILL.md) | Codified expertise for electricity and gas procurement, tariff optimization, demand charge management, renewable PPA evaluation, and multi-facility energy cost management. | Source definition |
| <a id="ecc-enterprise-agent-ops"></a>[enterprise-agent-ops](https://github.com/affaan-m/ECC/blob/main/skills/enterprise-agent-ops/SKILL.md) | Operate long-lived agent workloads with observability, security boundaries, and lifecycle management. | Source definition |
| <a id="ecc-error-handling"></a>[error-handling](https://github.com/affaan-m/ECC/blob/main/skills/error-handling/SKILL.md) | Patterns for robust error handling across TypeScript, Python, and Go. | Source definition |
| <a id="ecc-eval-harness"></a>[eval-harness](https://github.com/affaan-m/ECC/blob/main/skills/eval-harness/SKILL.md) | Formal evaluation framework for Claude Code sessions implementing eval-driven development (EDD) principles. | Source definition |
| <a id="ecc-evm-token-decimals"></a>[evm-token-decimals](https://github.com/affaan-m/ECC/blob/main/skills/evm-token-decimals/SKILL.md) | Prevent silent decimal mismatch bugs across EVM chains. | Source definition |
| <a id="ecc-exa-search"></a>[exa-search](https://github.com/affaan-m/ECC/blob/main/skills/exa-search/SKILL.md) | Neural search via Exa MCP for web, code, and company research. | Source definition |
| <a id="ecc-fal-ai-media"></a>[fal-ai-media](https://github.com/affaan-m/ECC/blob/main/skills/fal-ai-media/SKILL.md) | Unified media generation via fal.ai MCP — image, video, and audio. | Source definition |
| <a id="ecc-fastapi-patterns"></a>[fastapi-patterns](https://github.com/affaan-m/ECC/blob/main/skills/fastapi-patterns/SKILL.md) | FastAPI best practices covering project structure, Pydantic v2 schemas, dependency injection, async handlers, authentication, authorization, transactional service layers, and testing with httpx and pytest. | Source definition |
| <a id="ecc-finance-billing-ops"></a>[finance-billing-ops](https://github.com/affaan-m/ECC/blob/main/skills/finance-billing-ops/SKILL.md) | Evidence-first revenue, pricing, refunds, team-billing, and billing-model truth workflow for ECC. | Source definition |
| <a id="ecc-flox-environments"></a>[flox-environments](https://github.com/affaan-m/ECC/blob/main/skills/flox-environments/SKILL.md) | Create reproducible, cross-platform (macOS/Linux) development environments with Flox, a declarative Nix-based environment manager. | Source definition |
| <a id="ecc-flutter-dart-code-review"></a>[flutter-dart-code-review](https://github.com/affaan-m/ECC/blob/main/skills/flutter-dart-code-review/SKILL.md) | Library-agnostic Flutter/Dart code review checklist covering widget best practices, state management patterns (BLoC, Riverpod, Provider, GetX, MobX, Signals), Dart idioms, performance, accessibility, security, and… | Source definition |
| <a id="ecc-foundation-models-on-device"></a>[foundation-models-on-device](https://github.com/affaan-m/ECC/blob/main/skills/foundation-models-on-device/SKILL.md) | Apple FoundationModels framework for on-device LLM — text generation, guided generation with @Generable, tool calling, and snapshot streaming in iOS 26+. | Source definition |
| <a id="ecc-frontend-a11y"></a>[frontend-a11y](https://github.com/affaan-m/ECC/blob/main/skills/frontend-a11y/SKILL.md) | Accessibility patterns for React and Next.js — semantic HTML, ARIA attributes, form labeling, keyboard navigation, focus management, and screen reader support. | Source definition |
| <a id="ecc-frontend-design-direction"></a>[frontend-design-direction](https://github.com/affaan-m/ECC/blob/main/skills/frontend-design-direction/SKILL.md) | Set an ECC-specific frontend design direction for production UI work. | Source definition |
| <a id="ecc-frontend-patterns"></a>[frontend-patterns](https://github.com/affaan-m/ECC/blob/main/skills/frontend-patterns/SKILL.md) | Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. | Source definition |
| <a id="ecc-frontend-slides"></a>[frontend-slides](https://github.com/affaan-m/ECC/blob/main/skills/frontend-slides/SKILL.md) | Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. | Source definition |
| <a id="ecc-fsharp-testing"></a>[fsharp-testing](https://github.com/affaan-m/ECC/blob/main/skills/fsharp-testing/SKILL.md) | F# testing patterns with xUnit, FsUnit, Unquote, FsCheck property-based testing, integration tests, and test organization best practices. | Source definition |
| <a id="ecc-gan-style-harness"></a>[gan-style-harness](https://github.com/affaan-m/ECC/blob/main/skills/gan-style-harness/SKILL.md) | GAN-inspired Generator-Evaluator agent harness for building high-quality applications autonomously. | Source definition |
| <a id="ecc-gateguard"></a>[gateguard](https://github.com/affaan-m/ECC/blob/main/skills/gateguard/SKILL.md) | Fact-forcing gate that blocks Edit/Write/Bash (including MultiEdit) and demands concrete investigation (importers, data schemas, user instruction) before allowing the action. | Source definition |
| <a id="ecc-generating-python-installer"></a>[generating-python-installer](https://github.com/affaan-m/ECC/blob/main/skills/generating-python-installer/SKILL.md) | Commercial-grade Python installer expert for Windows: Nuitka extreme compilation, dist slimming, DLL footprint analysis, and Inno Setup packaging to ship the smallest, fastest installers. | Source definition |
| <a id="ecc-git-workflow"></a>[git-workflow](https://github.com/affaan-m/ECC/blob/main/skills/git-workflow/SKILL.md) | Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes. | Source definition |
| <a id="ecc-github-ops"></a>[github-ops](https://github.com/affaan-m/ECC/blob/main/skills/github-ops/SKILL.md) | GitHub repository operations, automation, and management. | Source definition |
| <a id="ecc-golang-patterns"></a>[golang-patterns](https://github.com/affaan-m/ECC/blob/main/skills/golang-patterns/SKILL.md) | Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications. | Source definition |
| <a id="ecc-golang-testing"></a>[golang-testing](https://github.com/affaan-m/ECC/blob/main/skills/golang-testing/SKILL.md) | Go testing patterns including table-driven tests, subtests, benchmarks, fuzzing, and test coverage. | Source definition |
| <a id="ecc-google-workspace-ops"></a>[google-workspace-ops](https://github.com/affaan-m/ECC/blob/main/skills/google-workspace-ops/SKILL.md) | Operate across Google Drive, Docs, Sheets, and Slides as one workflow surface for plans, trackers, decks, and shared documents. | Source definition |
| <a id="ecc-growth-log"></a>[growth-log](https://github.com/affaan-m/ECC/blob/main/skills/growth-log/SKILL.md) | Use after a complex task, failure, or when reviewing what was learned. | Source definition |
| <a id="ecc-healthcare-cdss-patterns"></a>[healthcare-cdss-patterns](https://github.com/affaan-m/ECC/blob/main/skills/healthcare-cdss-patterns/SKILL.md) | Clinical Decision Support System (CDSS) development patterns. | Source definition |
| <a id="ecc-healthcare-emr-patterns"></a>[healthcare-emr-patterns](https://github.com/affaan-m/ECC/blob/main/skills/healthcare-emr-patterns/SKILL.md) | EMR/EHR development patterns for healthcare applications. | Source definition |
| <a id="ecc-healthcare-eval-harness"></a>[healthcare-eval-harness](https://github.com/affaan-m/ECC/blob/main/skills/healthcare-eval-harness/SKILL.md) | Patient safety evaluation harness for healthcare application deployments. | Source definition |
| <a id="ecc-healthcare-phi-compliance"></a>[healthcare-phi-compliance](https://github.com/affaan-m/ECC/blob/main/skills/healthcare-phi-compliance/SKILL.md) | Protected Health Information (PHI) and Personally Identifiable Information (PII) compliance patterns for healthcare applications. | Source definition |
| <a id="ecc-hermes-imports"></a>[hermes-imports](https://github.com/affaan-m/ECC/blob/main/skills/hermes-imports/SKILL.md) | Convert local Hermes operator workflows into sanitized ECC skills and release-pack artifacts. | Source definition |
| <a id="ecc-hexagonal-architecture"></a>[hexagonal-architecture](https://github.com/affaan-m/ECC/blob/main/skills/hexagonal-architecture/SKILL.md) | Design, implement, and refactor Ports &amp; Adapters systems with clear domain boundaries, dependency inversion, and testable use-case orchestration across TypeScript, Java, Kotlin, and Go… | Source definition |
| <a id="ecc-hipaa-compliance"></a>[hipaa-compliance](https://github.com/affaan-m/ECC/blob/main/skills/hipaa-compliance/SKILL.md) | HIPAA-specific entrypoint for healthcare privacy and security work. | Source definition |
| <a id="ecc-homelab-network-readiness"></a>[homelab-network-readiness](https://github.com/affaan-m/ECC/blob/main/skills/homelab-network-readiness/SKILL.md) | Readiness checklist for homelab VLAN segmentation, local DNS filtering, and WireGuard-style remote access before changing router, firewall, DHCP, or VPN configuration. | Source definition |
| <a id="ecc-homelab-network-setup"></a>[homelab-network-setup](https://github.com/affaan-m/ECC/blob/main/skills/homelab-network-setup/SKILL.md) | Practical home and homelab network planning for gateways, switches, access points, IP ranges, DHCP reservations, DNS, cabling, and common beginner mistakes. | Source definition |
| <a id="ecc-homelab-pihole-dns"></a>[homelab-pihole-dns](https://github.com/affaan-m/ECC/blob/main/skills/homelab-pihole-dns/SKILL.md) | Pi-hole installation, blocklist management, DNS-over-HTTPS setup, DHCP integration, local DNS records, and troubleshooting broken DNS resolution on a home network. | Source definition |
| <a id="ecc-homelab-vlan-segmentation"></a>[homelab-vlan-segmentation](https://github.com/affaan-m/ECC/blob/main/skills/homelab-vlan-segmentation/SKILL.md) | Segmenting home networks into VLANs for IoT, guest, trusted, and server traffic using UniFi, pfSense/OPNsense, and MikroTik — including switch trunk config, firewall rules,… | Source definition |
| <a id="ecc-homelab-wireguard-vpn"></a>[homelab-wireguard-vpn](https://github.com/affaan-m/ECC/blob/main/skills/homelab-wireguard-vpn/SKILL.md) | WireGuard VPN server setup, peer configuration, key generation, split tunneling vs full tunnel routing, and remote access to a home network from mobile and… | Source definition |
| <a id="ecc-hookify-rules"></a>[hookify-rules](https://github.com/affaan-m/ECC/blob/main/skills/hookify-rules/SKILL.md) | This skill should be used when the user asks to create a hookify rule, write a hook rule, configure hookify, add a hookify rule,… | Source definition |
| <a id="ecc-inherit-legacy-style"></a>[inherit-legacy-style](https://github.com/affaan-m/ECC/blob/main/skills/inherit-legacy-style/SKILL.md) | Legacy-project style inheritance skill. | Source definition |
| <a id="ecc-intent-driven-development"></a>[intent-driven-development](https://github.com/affaan-m/ECC/blob/main/skills/intent-driven-development/SKILL.md) | Turn ambiguous or high-impact product and engineering changes into scoped, verifiable acceptance criteria before or alongside implementation. | Source definition |
| <a id="ecc-inventory-demand-planning"></a>[inventory-demand-planning](https://github.com/affaan-m/ECC/blob/main/skills/inventory-demand-planning/SKILL.md) | Codified expertise for demand forecasting, safety stock optimization, replenishment planning, and promotional lift estimation at multi-location retailers. | Source definition |
| <a id="ecc-investor-materials"></a>[investor-materials](https://github.com/affaan-m/ECC/blob/main/skills/investor-materials/SKILL.md) | Create and update pitch decks, one-pagers, investor memos, accelerator applications, financial models, and fundraising materials. | Source definition |
| <a id="ecc-investor-outreach"></a>[investor-outreach](https://github.com/affaan-m/ECC/blob/main/skills/investor-outreach/SKILL.md) | Draft cold emails, warm intro blurbs, follow-ups, update emails, and investor communications for fundraising. | Source definition |
| <a id="ecc-ios-icon-gen"></a>[ios-icon-gen](https://github.com/affaan-m/ECC/blob/main/skills/ios-icon-gen/SKILL.md) | Generate iOS app icons as PNG imagesets for Xcode asset catalogs from SF Symbols (5000+ Apple-native) or Iconify API (275k+ open source icons from… | Source definition |
| <a id="ecc-iterative-retrieval"></a>[iterative-retrieval](https://github.com/affaan-m/ECC/blob/main/skills/iterative-retrieval/SKILL.md) | Pattern for progressively refining context retrieval to solve the subagent context problem. | Source definition |
| <a id="ecc-ito-basket-compare"></a>[ito-basket-compare](https://github.com/affaan-m/ECC) | Compare Itô prediction-market baskets against a user&#x27;s knowledge base, portfolio notes, financial context, watchlist, or research thesis. | Source collection; installed path differs |
| <a id="ecc-ito-baskets"></a>[ito-baskets](https://github.com/affaan-m/ECC/blob/main/skills/ito-baskets/SKILL.md) | Read-only Itô basket and prediction-market data skill. | Source definition |
| <a id="ecc-ito-compute"></a>[ito-compute](https://github.com/affaan-m/ECC/blob/main/skills/ito-compute/SKILL.md) | Query live GPU inventory, submit an authenticated Itô fixed-rate RFQ, inspect RFQ or procurement status, revoke device credentials, and run explicitly gated node qualification… | Source definition |
| <a id="ecc-ito-data-atlas-agent"></a>[ito-data-atlas-agent](https://github.com/affaan-m/ECC) | Design background Data Atlas style agents for Itô basket research, market discovery, parameter drafting, and human-in-the-loop editing. | Source collection; installed path differs |
| <a id="ecc-ito-inference"></a>[ito-inference](https://github.com/affaan-m/ECC/blob/main/skills/ito-inference/SKILL.md) | Inspect the availability of model serving on a completed Itô compute booking and, when the canonical backend becomes available, hand off an explicitly confirmed… | Source definition |
| <a id="ecc-ito-market-intelligence"></a>[ito-market-intelligence](https://github.com/affaan-m/ECC) | Research prediction-market events, venues, underliers, liquidity, and news context for Itô basket workflows. | Source collection; installed path differs |
| <a id="ecc-ito-trade-planner"></a>[ito-trade-planner](https://github.com/affaan-m/ECC) | Build a non-advisory prediction-market trade planning worksheet for Itô or venue workflows. | Source collection; installed path differs |
| <a id="ecc-ito-training"></a>[ito-training](https://github.com/affaan-m/ECC/blob/main/skills/ito-training/SKILL.md) | Inspect the availability of ML training on a completed Itô compute booking and, when the canonical backend becomes available, hand off an explicitly confirmed… | Source definition |
| <a id="ecc-java-coding-standards"></a>[java-coding-standards](https://github.com/affaan-m/ECC/blob/main/skills/java-coding-standards/SKILL.md) | Java coding standards for Spring Boot and Quarkus services: naming, immutability, Optional usage, streams, exceptions, generics, CDI, reactive patterns, and project layout. | Source definition |
| <a id="ecc-jira-integration"></a>[jira-integration](https://github.com/affaan-m/ECC/blob/main/skills/jira-integration/SKILL.md) | Use this skill when retrieving Jira tickets, analyzing requirements, updating ticket status, adding comments, or transitioning issues. | Source definition |
| <a id="ecc-jpa-patterns"></a>[jpa-patterns](https://github.com/affaan-m/ECC/blob/main/skills/jpa-patterns/SKILL.md) | JPA/Hibernate patterns for entity design, relationships, query optimization, transactions, auditing, indexing, pagination, and pooling in Spring Boot. | Source definition |
| <a id="ecc-knowledge-ops"></a>[knowledge-ops](https://github.com/affaan-m/ECC/blob/main/skills/knowledge-ops/SKILL.md) | Knowledge base management, ingestion, sync, and retrieval across multiple storage layers (local files, MCP memory, vector stores, Git repos). | Source definition |
| <a id="ecc-kotlin-coroutines-flows"></a>[kotlin-coroutines-flows](https://github.com/affaan-m/ECC/blob/main/skills/kotlin-coroutines-flows/SKILL.md) | Kotlin Coroutines and Flow patterns for Android and KMP — structured concurrency, Flow operators, StateFlow, error handling, and testing. | Source definition |
| <a id="ecc-kotlin-exposed-patterns"></a>[kotlin-exposed-patterns](https://github.com/affaan-m/ECC/blob/main/skills/kotlin-exposed-patterns/SKILL.md) | JetBrains Exposed ORM patterns including DSL queries, DAO pattern, transactions, HikariCP connection pooling, Flyway migrations, and repository pattern. | Source definition |
| <a id="ecc-kotlin-ktor-patterns"></a>[kotlin-ktor-patterns](https://github.com/affaan-m/ECC/blob/main/skills/kotlin-ktor-patterns/SKILL.md) | Ktor server patterns including routing DSL, plugins, authentication, Koin DI, kotlinx.serialization, WebSockets, and testApplication testing. | Source definition |
| <a id="ecc-kotlin-patterns"></a>[kotlin-patterns](https://github.com/affaan-m/ECC/blob/main/skills/kotlin-patterns/SKILL.md) | Idiomatic Kotlin patterns, best practices, and conventions for building robust, efficient, and maintainable Kotlin applications with coroutines, null safety, and DSL builders. | Source definition |
| <a id="ecc-kotlin-testing"></a>[kotlin-testing](https://github.com/affaan-m/ECC/blob/main/skills/kotlin-testing/SKILL.md) | Kotlin testing patterns with Kotest, MockK, coroutine testing, property-based testing, and Kover coverage. | Source definition |
| <a id="ecc-kubernetes-patterns"></a>[kubernetes-patterns](https://github.com/affaan-m/ECC/blob/main/skills/kubernetes-patterns/SKILL.md) | Kubernetes workload patterns, resource management, RBAC, probes, autoscaling, ConfigMap/Secret handling, and kubectl debugging for production-grade deployments. | Source definition |
| <a id="ecc-laravel-patterns"></a>[laravel-patterns](https://github.com/affaan-m/ECC/blob/main/skills/laravel-patterns/SKILL.md) | Laravel architecture patterns, routing/controllers, Eloquent ORM, service layers, queues, events, caching, and API resources for production apps. | Source definition |
| <a id="ecc-laravel-plugin-discovery"></a>[laravel-plugin-discovery](https://github.com/affaan-m/ECC/blob/main/skills/laravel-plugin-discovery/SKILL.md) | Discover and evaluate Laravel packages via LaraPlugins.io MCP. | Source definition |
| <a id="ecc-laravel-security"></a>[laravel-security](https://github.com/affaan-m/ECC/blob/main/skills/laravel-security/SKILL.md) | Laravel security best practices — authentication, authorization, Eloquent safety, CSRF, XSS prevention, API security, and secure deployment configurations. | Source definition |
| <a id="ecc-laravel-tdd"></a>[laravel-tdd](https://github.com/affaan-m/ECC/blob/main/skills/laravel-tdd/SKILL.md) | Laravel testing strategies with PHPUnit, Pest, model factories, HTTP tests, Sanctum authentication testing, mocking, and coverage. | Source definition |
| <a id="ecc-laravel-verification"></a>[laravel-verification](https://github.com/affaan-m/ECC/blob/main/skills/laravel-verification/SKILL.md) | Verification loop for Laravel projects: env checks, linting, static analysis, tests with coverage, security scans, and deployment readiness. | Source definition |
| <a id="ecc-latency-critical-systems"></a>[latency-critical-systems](https://github.com/affaan-m/ECC/blob/main/skills/latency-critical-systems/SKILL.md) | Use for latency-sensitive systems such as realtime dashboards, market data, streaming agents, execution gateways, queues, caches, or HFT-like infrastructure where freshness and p95 latency… | Source definition |
| <a id="ecc-lead-intelligence"></a>[lead-intelligence](https://github.com/affaan-m/ECC/blob/main/skills/lead-intelligence/SKILL.md) | AI-native lead intelligence and outreach pipeline. | Source definition |
| <a id="ecc-liquid-glass-design"></a>[liquid-glass-design](https://github.com/affaan-m/ECC/blob/main/skills/liquid-glass-design/SKILL.md) | iOS 26 Liquid Glass design system — dynamic glass material with blur, reflection, and interactive morphing for SwiftUI, UIKit, and WidgetKit. | Source definition |
| <a id="ecc-living-docs-governance"></a>[living-docs-governance](https://github.com/affaan-m/ECC/blob/main/skills/living-docs-governance/SKILL.md) | Keep a long-lived project&#x27;s documentation from rotting by assigning existing project docs clear constitution, map, status, and history roles, then wiring the active agent… | Source definition |
| <a id="ecc-llm-trading-agent-security"></a>[llm-trading-agent-security](https://github.com/affaan-m/ECC/blob/main/skills/llm-trading-agent-security/SKILL.md) | Security patterns for autonomous trading agents with wallet or transaction authority. | Source definition |
| <a id="ecc-logistics-exception-management"></a>[logistics-exception-management](https://github.com/affaan-m/ECC/blob/main/skills/logistics-exception-management/SKILL.md) | Codified expertise for handling freight exceptions, shipment delays, damages, losses, and carrier disputes. | Source definition |
| <a id="ecc-loop-design-check"></a>[loop-design-check](https://github.com/affaan-m/ECC/blob/main/skills/loop-design-check/SKILL.md) | Design a goal-oriented agent loop, and review it for the ways loops go wrong — spinning and burning tokens, Goodhart-gaming the verifier, or running… | Source definition |
| <a id="ecc-mailtrap-email-integration"></a>[mailtrap-email-integration](https://github.com/affaan-m/ECC/blob/main/skills/mailtrap-email-integration/SKILL.md) | Guides agents through integrating transactional email sending via Mailtrap&#x27;s Email API, including sandbox testing, domain verification, and API authentication. | Source definition |
| <a id="ecc-make-interfaces-feel-better"></a>[make-interfaces-feel-better](https://github.com/affaan-m/ECC/blob/main/skills/make-interfaces-feel-better/SKILL.md) | Apply concrete design-engineering details that make interfaces feel polished. | Source definition |
| <a id="ecc-manim-video"></a>[manim-video](https://github.com/affaan-m/ECC/blob/main/skills/manim-video/SKILL.md) | Build reusable Manim explainers for technical concepts, graphs, system diagrams, and product walkthroughs, then hand off to the wider ECC video stack if needed. | Source definition |
| <a id="ecc-market-research"></a>[market-research](https://github.com/affaan-m/ECC/blob/main/skills/market-research/SKILL.md) | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. | Source definition |
| <a id="ecc-marketing-campaign"></a>[marketing-campaign](https://github.com/affaan-m/ECC/blob/main/skills/marketing-campaign/SKILL.md) | End-to-end marketing campaign planning and execution. | Source definition |
| <a id="ecc-mcp-server-patterns"></a>[mcp-server-patterns](https://github.com/affaan-m/ECC/blob/main/skills/mcp-server-patterns/SKILL.md) | Build MCP servers with Node/TypeScript SDK — tools, resources, prompts, Zod validation, stdio vs Streamable HTTP. | Source definition |
| <a id="ecc-messages-ops"></a>[messages-ops](https://github.com/affaan-m/ECC/blob/main/skills/messages-ops/SKILL.md) | Evidence-first live messaging workflow for ECC. | Source definition |
| <a id="ecc-ml-adoption-playbook"></a>[ml-adoption-playbook](https://github.com/affaan-m/ECC/blob/main/skills/ml-adoption-playbook/SKILL.md) | End-to-end methodology for AI agents and software engineers to add machine learning algorithms to existing non-ML codebases. | Source definition |
| <a id="ecc-mle-workflow"></a>[mle-workflow](https://github.com/affaan-m/ECC/blob/main/skills/mle-workflow/SKILL.md) | Production machine-learning engineering workflow for data contracts, reproducible training, model evaluation, deployment, monitoring, and rollback. | Source definition |
| <a id="ecc-motion-advanced"></a>[motion-advanced](https://github.com/affaan-m/ECC/blob/main/skills/motion-advanced/SKILL.md) | Advanced motion patterns for React / Next.js — drag &amp; drop, gestures, text animations, SVG path drawing, custom hooks, imperative sequences (useAnimate), loaders, and… | Source definition |
| <a id="ecc-motion-foundations"></a>[motion-foundations](https://github.com/affaan-m/ECC/blob/main/skills/motion-foundations/SKILL.md) | Motion tokens, spring presets, performance rules, device adaptation, accessibility enforcement, and SSR safety for React / Next.js using motion/react. | Source definition |
| <a id="ecc-motion-patterns"></a>[motion-patterns](https://github.com/affaan-m/ECC/blob/main/skills/motion-patterns/SKILL.md) | Production-ready animation patterns for React / Next.js — button, modal, toast, stagger, page transitions, exit animations, scroll, and layout — built on motion-foundations tokens… | Source definition |
| <a id="ecc-motion-ui"></a>[motion-ui](https://github.com/affaan-m/ECC/blob/main/skills/motion-ui/SKILL.md) | Production-ready UI motion system for React/Next.js. | Source definition |
| <a id="ecc-mysql-patterns"></a>[mysql-patterns](https://github.com/affaan-m/ECC/blob/main/skills/mysql-patterns/SKILL.md) | MySQL and MariaDB schema, query, indexing, transaction, replication, and connection-pool patterns for production backends. | Source definition |
| <a id="ecc-nanoclaw-repl"></a>[nanoclaw-repl](https://github.com/affaan-m/ECC/blob/main/skills/nanoclaw-repl/SKILL.md) | Operate and extend NanoClaw v2, ECC&#x27;s zero-dependency session-aware REPL built on claude -p. | Source definition |
| <a id="ecc-nasiko-control-plane"></a>[nasiko-control-plane](https://github.com/affaan-m/ECC/blob/main/skills/nasiko-control-plane/SKILL.md) | Use the experimental Nasiko CLI lifecycle bridge for pinned installation, read-only status, and qualified uninstall with explicit consent and telemetry and secrets boundaries. | Source definition |
| <a id="ecc-nestjs-patterns"></a>[nestjs-patterns](https://github.com/affaan-m/ECC/blob/main/skills/nestjs-patterns/SKILL.md) | NestJS architecture patterns for modules, controllers, providers, DTO validation, guards, interceptors, config, and production-grade TypeScript backends. | Source definition |
| <a id="ecc-netmiko-ssh-automation"></a>[netmiko-ssh-automation](https://github.com/affaan-m/ECC/blob/main/skills/netmiko-ssh-automation/SKILL.md) | Safe Python Netmiko patterns for read-only collection, bounded batch SSH, TextFSM parsing, guarded config changes, timeouts, and network automation error handling. | Source definition |
| <a id="ecc-network-bgp-diagnostics"></a>[network-bgp-diagnostics](https://github.com/affaan-m/ECC/blob/main/skills/network-bgp-diagnostics/SKILL.md) | Diagnostics-only BGP troubleshooting patterns for neighbor state, route exchange, prefix policy, AS path inspection, and safe evidence collection. | Source definition |
| <a id="ecc-network-config-validation"></a>[network-config-validation](https://github.com/affaan-m/ECC/blob/main/skills/network-config-validation/SKILL.md) | Pre-deployment checks for router and switch configuration, including dangerous commands, duplicate addresses, subnet overlaps, stale references, management-plane risk, and IOS-style security hygiene. | Source definition |
| <a id="ecc-network-interface-health"></a>[network-interface-health](https://github.com/affaan-m/ECC/blob/main/skills/network-interface-health/SKILL.md) | Diagnose interface errors, drops, CRCs, duplex mismatches, flapping, speed negotiation issues, and counter trends on routers, switches, and Linux hosts. | Source definition |
| <a id="ecc-nextjs-turbopack"></a>[nextjs-turbopack](https://github.com/affaan-m/ECC/blob/main/skills/nextjs-turbopack/SKILL.md) | Next.js 16+ and Turbopack — incremental bundling, FS caching, dev speed, and when to use Turbopack vs webpack. | Source definition |
| <a id="ecc-nodejs-keccak256"></a>[nodejs-keccak256](https://github.com/affaan-m/ECC/blob/main/skills/nodejs-keccak256/SKILL.md) | Prevent Ethereum hashing bugs in JavaScript and TypeScript. | Source definition |
| <a id="ecc-nutrient-document-processing"></a>[nutrient-document-processing](https://github.com/affaan-m/ECC/blob/main/skills/nutrient-document-processing/SKILL.md) | Process, convert, OCR, extract, redact, sign, and fill documents using the Nutrient DWS API. | Source definition |
| <a id="ecc-nuxt4-patterns"></a>[nuxt4-patterns](https://github.com/affaan-m/ECC/blob/main/skills/nuxt4-patterns/SKILL.md) | Nuxt 4 app patterns for hydration safety, performance, route rules, lazy loading, and SSR-safe data fetching with useFetch and useAsyncData. | Source definition |
| <a id="ecc-openclaw-persona-forge"></a>[openclaw-persona-forge](https://github.com/affaan-m/ECC/blob/main/skills/openclaw-persona-forge/SKILL.md) | 为 OpenClaw AI Agent 锻造完整的龙虾灵魂方案。根据用户偏好或随机抽卡， 输出身份定位、灵魂描述(SOUL.md)、角色化底线规则、名字和头像生图提示词。 如当前环境提供已审核的生图 skill，可自动生成统一风格头像图片。 当用户需要创建、设计或定制 OpenClaw 龙虾灵魂时使用。 不适用于：微调已有 SOUL.md、非 OpenClaw 平台的角色设计、纯工具型无性格 Agent。 触发词：龙虾灵魂、虾魂、OpenClaw 灵魂、养虾灵魂、龙虾角色、龙虾定位、 龙虾剧本杀角色、龙虾游戏角色、龙虾 NPC、龙虾性格、龙虾背景故事、 lobster soul、lobster character、抽卡、随机龙虾、龙虾 SOUL、gacha。… | Source definition |
| <a id="ecc-opensource-pipeline"></a>[opensource-pipeline](https://github.com/affaan-m/ECC/blob/main/skills/opensource-pipeline/SKILL.md) | Open-source pipeline: fork, sanitize, and package private projects for safe public release. | Source definition |
| <a id="ecc-orch-add-feature"></a>[orch-add-feature](https://github.com/affaan-m/ECC/blob/main/skills/orch-add-feature/SKILL.md) | Orchestrate building a brand-new feature end to end — research, plan, TDD implementation, review, and gated commit — by delegating each phase to the… | Source definition |
| <a id="ecc-orch-build-mvp"></a>[orch-build-mvp](https://github.com/affaan-m/ECC/blob/main/skills/orch-build-mvp/SKILL.md) | Orchestrate bootstrapping a working MVP from a design or spec document — ingest the doc, plan thin vertical slices, scaffold the first end-to-end slice,… | Source definition |
| <a id="ecc-orch-change-feature"></a>[orch-change-feature](https://github.com/affaan-m/ECC/blob/main/skills/orch-change-feature/SKILL.md) | Orchestrate altering an existing, working feature to new desired behavior — update its tests to the new spec, change the implementation to match, review,… | Source definition |
| <a id="ecc-orch-fix-defect"></a>[orch-fix-defect](https://github.com/affaan-m/ECC/blob/main/skills/orch-fix-defect/SKILL.md) | Orchestrate fixing a bug — reproduce it as a failing regression test, fix to green, review, and gated commit — by delegating each phase… | Source definition |
| <a id="ecc-orch-pipeline"></a>[orch-pipeline](https://github.com/affaan-m/ECC/blob/main/skills/orch-pipeline/SKILL.md) | Shared orchestration engine for the orch-* skill family. | Source definition |
| <a id="ecc-orch-refine-code"></a>[orch-refine-code](https://github.com/affaan-m/ECC/blob/main/skills/orch-refine-code/SKILL.md) | Orchestrate a behavior-preserving refactor — confirm tests are green, restructure without changing behavior, keep tests green, review, and gated commit. | Source definition |
| <a id="ecc-parallel-execution-optimizer"></a>[parallel-execution-optimizer](https://github.com/affaan-m/ECC/blob/main/skills/parallel-execution-optimizer/SKILL.md) | Use when the user wants a task done much faster through parallel work, concurrent agents, batched tool calls, isolated worktrees, or many independent verification… | Source definition |
| <a id="ecc-perl-patterns"></a>[perl-patterns](https://github.com/affaan-m/ECC/blob/main/skills/perl-patterns/SKILL.md) | Modern Perl 5.36+ idioms, best practices, and conventions for building robust, maintainable Perl applications. | Source definition |
| <a id="ecc-perl-security"></a>[perl-security](https://github.com/affaan-m/ECC/blob/main/skills/perl-security/SKILL.md) | Comprehensive Perl security covering taint mode, input validation, safe process execution, DBI parameterized queries, web security (XSS/SQLi/CSRF), and perlcritic security policies. | Source definition |
| <a id="ecc-perl-testing"></a>[perl-testing](https://github.com/affaan-m/ECC/blob/main/skills/perl-testing/SKILL.md) | Perl testing patterns using Test2::V0, Test::More, prove runner, mocking, coverage with Devel::Cover, and TDD methodology. | Source definition |
| <a id="ecc-plan-canvas"></a>[plan-canvas](https://github.com/affaan-m/ECC/blob/main/skills/plan-canvas/SKILL.md) | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the… | Source definition |
| <a id="ecc-plan-orchestrate"></a>[plan-orchestrate](https://github.com/affaan-m/ECC/blob/main/skills/plan-orchestrate/SKILL.md) | Read a plan document, decompose it into steps, design a per-step agent chain from the ECC catalogue, and emit ready-to-paste /orchestrate custom prompts. | Source definition |
| <a id="ecc-plankton-code-quality"></a>[plankton-code-quality](https://github.com/affaan-m/ECC/blob/main/skills/plankton-code-quality/SKILL.md) | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. | Source definition |
| <a id="ecc-postgres-patterns"></a>[postgres-patterns](https://github.com/affaan-m/ECC/blob/main/skills/postgres-patterns/SKILL.md) | PostgreSQL database patterns for query optimization, schema design, indexing, and security. | Source definition |
| <a id="ecc-prediction-market-oracle-research"></a>[prediction-market-oracle-research](https://github.com/affaan-m/ECC/blob/main/skills/prediction-market-oracle-research/SKILL.md) | Research prediction markets as data sources or oracle signals for products, agents, dashboards, and corporate decision intelligence. | Source definition |
| <a id="ecc-prediction-market-risk-review"></a>[prediction-market-risk-review](https://github.com/affaan-m/ECC/blob/main/skills/prediction-market-risk-review/SKILL.md) | Review prediction-market, basket, oracle, and trading-agent workflows for compliance, safety, data-quality, privacy, and execution risk. | Source definition |
| <a id="ecc-prisma-patterns"></a>[prisma-patterns](https://github.com/affaan-m/ECC/blob/main/skills/prisma-patterns/SKILL.md) | Prisma ORM patterns for TypeScript backends — schema design, query optimization, transactions, pagination, and critical traps like updateMany returning count not records, $transaction timeouts,… | Source definition |
| <a id="ecc-product-capability"></a>[product-capability](https://github.com/affaan-m/ECC/blob/main/skills/product-capability/SKILL.md) | Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and unresolved decisions before multi-service work… | Source definition |
| <a id="ecc-product-lens"></a>[product-lens](https://github.com/affaan-m/ECC/blob/main/skills/product-lens/SKILL.md) | Use this skill to validate the &quot;why&quot; before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract. | Source definition |
| <a id="ecc-production-audit"></a>[production-audit](https://github.com/affaan-m/ECC/blob/main/skills/production-audit/SKILL.md) | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and &quot;what breaks in prod?&quot; questions without sending repo data to an external… | Source definition |
| <a id="ecc-production-scheduling"></a>[production-scheduling](https://github.com/affaan-m/ECC/blob/main/skills/production-scheduling/SKILL.md) | Codified expertise for production scheduling, job sequencing, line balancing, changeover optimization, and bottleneck resolution in discrete and batch manufacturing. | Source definition |
| <a id="ecc-project-flow-ops"></a>[project-flow-ops](https://github.com/affaan-m/ECC/blob/main/skills/project-flow-ops/SKILL.md) | Operate execution flow across GitHub and Linear by triaging issues and pull requests, linking active work, and keeping GitHub public-facing while Linear remains the… | Source definition |
| <a id="ecc-prompt-optimizer"></a>[prompt-optimizer](https://github.com/affaan-m/ECC/blob/main/skills/prompt-optimizer/SKILL.md) | Analyze raw prompts, identify intent and gaps, match ECC components (skills/commands/agents/hooks), and output a ready-to-paste optimized prompt. | Source definition |
| <a id="ecc-python-patterns"></a>[python-patterns](https://github.com/affaan-m/ECC/blob/main/skills/python-patterns/SKILL.md) | Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications. | Source definition |
| <a id="ecc-python-testing"></a>[python-testing](https://github.com/affaan-m/ECC/blob/main/skills/python-testing/SKILL.md) | Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization, and coverage requirements. | Source definition |
| <a id="ecc-pytorch-patterns"></a>[pytorch-patterns](https://github.com/affaan-m/ECC/blob/main/skills/pytorch-patterns/SKILL.md) | PyTorch deep learning patterns and best practices for building robust, efficient, and reproducible training pipelines, model architectures, and data loading. | Source definition |
| <a id="ecc-quality-nonconformance"></a>[quality-nonconformance](https://github.com/affaan-m/ECC/blob/main/skills/quality-nonconformance/SKILL.md) | Codified expertise for quality control, non-conformance investigation, root cause analysis, corrective action, and supplier quality management in regulated manufacturing. | Source definition |
| <a id="ecc-quarkus-patterns"></a>[quarkus-patterns](https://github.com/affaan-m/ECC/blob/main/skills/quarkus-patterns/SKILL.md) | Quarkus 3.x LTS architecture patterns with Camel for messaging, RESTful API design, CDI services, data access with Panache, and async processing. | Source definition |
| <a id="ecc-quarkus-security"></a>[quarkus-security](https://github.com/affaan-m/ECC/blob/main/skills/quarkus-security/SKILL.md) | Quarkus Security best practices for authentication, authorization, JWT/OIDC, RBAC, input validation, CSRF, secrets management, and dependency security. | Source definition |
| <a id="ecc-quarkus-tdd"></a>[quarkus-tdd](https://github.com/affaan-m/ECC/blob/main/skills/quarkus-tdd/SKILL.md) | Test-driven development for Quarkus 3.x LTS using JUnit 5, Mockito, REST Assured, Camel testing, and JaCoCo. | Source definition |
| <a id="ecc-quarkus-verification"></a>[quarkus-verification](https://github.com/affaan-m/ECC/blob/main/skills/quarkus-verification/SKILL.md) | Verification loop for Quarkus projects: build, static analysis, tests with coverage, security scans, native compilation, and diff review before release or PR. | Source definition |
| <a id="ecc-ralphinho-rfc-pipeline"></a>[ralphinho-rfc-pipeline](https://github.com/affaan-m/ECC/blob/main/skills/ralphinho-rfc-pipeline/SKILL.md) | RFC-driven multi-agent DAG execution pattern with quality gates, merge queues, and work unit orchestration. | Source definition |
| <a id="ecc-react-native-patterns"></a>[react-native-patterns](https://github.com/affaan-m/ECC/blob/main/skills/react-native-patterns/SKILL.md) | React Native and Expo app patterns — Expo Router navigation, state separation (server/client/route/form), TanStack Query data fetching with Zod, performant lists, NativeWind/StyleSheet styling, native… | Source definition |
| <a id="ecc-react-patterns"></a>[react-patterns](https://github.com/affaan-m/ECC/blob/main/skills/react-patterns/SKILL.md) | React 18/19 patterns including hooks discipline, server/client component boundaries, Suspense + error boundaries, form actions, data fetching, state management decision trees, and accessibility-first composition. | Source definition |
| <a id="ecc-react-performance"></a>[react-performance](https://github.com/affaan-m/ECC/blob/main/skills/react-performance/SKILL.md) | React and Next.js performance optimization patterns adapted from Vercel Engineering&#x27;s React Best Practices (https://github.com/vercel-labs/agent-skills). | Source definition |
| <a id="ecc-react-testing"></a>[react-testing](https://github.com/affaan-m/ECC/blob/main/skills/react-testing/SKILL.md) | React component testing with React Testing Library, Vitest/Jest, MSW for network mocking, accessibility assertions with axe, and the decision boundary between component tests and… | Source definition |
| <a id="ecc-recsys-pipeline-architect"></a>[recsys-pipeline-architect](https://github.com/affaan-m/ECC/blob/main/skills/recsys-pipeline-architect/SKILL.md) | Design composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framework popularized by xAI&#x27;s open-sourced For You algorithm. | Source definition |
| <a id="ecc-recursive-decision-ledger"></a>[recursive-decision-ledger](https://github.com/affaan-m/ECC/blob/main/skills/recursive-decision-ledger/SKILL.md) | Use when the user asks for repeated rollouts, marked decision processes, high-dimensional search, stochastic optimization, local-optima exploration, ensemble comparison, or recursive reasoning with a… | Source definition |
| <a id="ecc-redis-patterns"></a>[redis-patterns](https://github.com/affaan-m/ECC/blob/main/skills/redis-patterns/SKILL.md) | Redis data structure patterns, caching strategies, distributed locks, rate limiting, pub/sub, and connection management for production applications. | Source definition |
| <a id="ecc-regex-vs-llm-structured-text"></a>[regex-vs-llm-structured-text](https://github.com/affaan-m/ECC/blob/main/skills/regex-vs-llm-structured-text/SKILL.md) | Decision framework for choosing between regex and LLM when parsing structured text — start with regex, add LLM only for low-confidence edge cases. | Source definition |
| <a id="ecc-remotion-video-creation"></a>[remotion-video-creation](https://github.com/affaan-m/ECC/blob/main/skills/remotion-video-creation/SKILL.md) | Best practices for Remotion - Video creation in React. | Source definition |
| <a id="ecc-repo-scan"></a>[repo-scan](https://github.com/affaan-m/ECC/blob/main/skills/repo-scan/SKILL.md) | Bootstrap pointer that installs the external repo-scan skill from a pinned, reviewable commit. | Source definition |
| <a id="ecc-research-ops"></a>[research-ops](https://github.com/affaan-m/ECC/blob/main/skills/research-ops/SKILL.md) | Evidence-first current-state research workflow for ECC. | Source definition |
| <a id="ecc-returns-reverse-logistics"></a>[returns-reverse-logistics](https://github.com/affaan-m/ECC/blob/main/skills/returns-reverse-logistics/SKILL.md) | Codified expertise for returns authorization, receipt and inspection, disposition decisions, refund processing, fraud detection, and warranty claims management. | Source definition |
| <a id="ecc-rules-distill"></a>[rules-distill](https://github.com/affaan-m/ECC/blob/main/skills/rules-distill/SKILL.md) | Scan skills to extract cross-cutting principles and distill them into rules — append, revise, or create new rule files. | Source definition |
| <a id="ecc-rust-patterns"></a>[rust-patterns](https://github.com/affaan-m/ECC/blob/main/skills/rust-patterns/SKILL.md) | Idiomatic Rust patterns, ownership, error handling, traits, concurrency, and best practices for building safe, performant applications. | Source definition |
| <a id="ecc-rust-testing"></a>[rust-testing](https://github.com/affaan-m/ECC/blob/main/skills/rust-testing/SKILL.md) | Rust testing patterns including unit tests, integration tests, async testing, property-based testing, mocking, and coverage. | Source definition |
| <a id="ecc-safety-guard"></a>[safety-guard](https://github.com/affaan-m/ECC/blob/main/skills/safety-guard/SKILL.md) | Use this skill to prevent destructive operations when working on production systems or running agents autonomously. | Source definition |
| <a id="ecc-santa-method"></a>[santa-method](https://github.com/affaan-m/ECC/blob/main/skills/santa-method/SKILL.md) | Multi-agent adversarial verification with convergence loop. | Source definition |
| <a id="ecc-scientific-db-pubmed-database"></a>[scientific-db-pubmed-database](https://github.com/affaan-m/ECC/blob/main/skills/scientific-db-pubmed-database/SKILL.md) | Direct PubMed and NCBI E-utilities search workflows for biomedical literature, MeSH queries, PMID lookup, citation retrieval, and API-backed literature monitoring. | Source definition |
| <a id="ecc-scientific-db-uspto-database"></a>[scientific-db-uspto-database](https://github.com/affaan-m/ECC/blob/main/skills/scientific-db-uspto-database/SKILL.md) | USPTO patent and trademark data workflow for official record lookup, PatentSearch queries, TSDR checks, assignment data, and reproducible IP research logs. | Source definition |
| <a id="ecc-scientific-pkg-gget"></a>[scientific-pkg-gget](https://github.com/affaan-m/ECC/blob/main/skills/scientific-pkg-gget/SKILL.md) | gget CLI and Python workflow for quick genomic database queries, sequence lookup, BLAST-style searches, enrichment checks, and reproducible bioinformatics evidence logs. | Source definition |
| <a id="ecc-scientific-thinking-literature-review"></a>[scientific-thinking-literature-review](https://github.com/affaan-m/ECC/blob/main/skills/scientific-thinking-literature-review/SKILL.md) | Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, and evidence logging. | Source definition |
| <a id="ecc-scientific-thinking-scholar-evaluation"></a>[scientific-thinking-scholar-evaluation](https://github.com/affaan-m/ECC/blob/main/skills/scientific-thinking-scholar-evaluation/SKILL.md) | Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback. | Source definition |
| <a id="ecc-search-first"></a>[search-first](https://github.com/affaan-m/ECC/blob/main/skills/search-first/SKILL.md) | Research-before-coding workflow. | Source definition |
| <a id="ecc-security-bounty-hunter"></a>[security-bounty-hunter](https://github.com/affaan-m/ECC/blob/main/skills/security-bounty-hunter/SKILL.md) | Hunt for exploitable, bounty-worthy security issues in repositories. | Source definition |
| <a id="ecc-security-review"></a>[security-review](https://github.com/affaan-m/ECC/blob/main/skills/security-review/SKILL.md) | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. | Source definition |
| <a id="ecc-security-scan"></a>[security-scan](https://github.com/affaan-m/ECC/blob/main/skills/security-scan/SKILL.md) | Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. | Source definition |
| <a id="ecc-seo"></a>[seo](https://github.com/affaan-m/ECC/blob/main/skills/seo/SKILL.md) | Audit, plan, and implement SEO improvements across technical SEO, on-page optimization, structured data, Core Web Vitals, and content strategy. | Source definition |
| <a id="ecc-skill-comply"></a>[skill-comply](https://github.com/affaan-m/ECC/blob/main/skills/skill-comply/SKILL.md) | Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies behavioral sequences, and… | Source definition |
| <a id="ecc-skill-scout"></a>[skill-scout](https://github.com/affaan-m/ECC/blob/main/skills/skill-scout/SKILL.md) | Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. | Source definition |
| <a id="ecc-skill-stocktake"></a>[skill-stocktake](https://github.com/affaan-m/ECC/blob/main/skills/skill-stocktake/SKILL.md) | Use when auditing Claude skills and commands for quality. | Source definition |
| <a id="ecc-social-graph-ranker"></a>[social-graph-ranker](https://github.com/affaan-m/ECC/blob/main/skills/social-graph-ranker/SKILL.md) | Weighted social-graph ranking for warm intro discovery, bridge scoring, and network gap analysis across X and LinkedIn. | Source definition |
| <a id="ecc-social-publisher"></a>[social-publisher](https://github.com/affaan-m/ECC/blob/main/skills/social-publisher/SKILL.md) | Agent-driven scheduling and publishing of social media posts across 13 platforms via SocialClaw. | Source definition |
| <a id="ecc-source-command-auto-update"></a>[source-command-auto-update](https://github.com/affaan-m/ECC) | Pull the latest ECC repo changes and reinstall the current managed targets. | Source collection; installed path differs |
| <a id="ecc-source-command-build-fix"></a>[source-command-build-fix](https://github.com/affaan-m/ECC) | Detect the project build system and incrementally fix build/type errors with minimal safe changes. | Source collection; installed path differs |
| <a id="ecc-source-command-cpp-review"></a>[source-command-cpp-review](https://github.com/affaan-m/ECC) | Comprehensive C++ code review for memory safety, modern C++ idioms, concurrency, and security. | Source collection; installed path differs |
| <a id="ecc-source-command-ecc-guide"></a>[source-command-ecc-guide](https://github.com/affaan-m/ECC) | Navigate ECC&#x27;s current agents, skills, commands, hooks, install profiles, and docs from the live repository surface. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-claim"></a>[source-command-epic-claim](https://github.com/affaan-m/ECC) | Claim an epic issue, stamp coordination state, and sync local ownership. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-decompose"></a>[source-command-epic-decompose](https://github.com/affaan-m/ECC) | Break an epic into task children without creating task branches. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-publish"></a>[source-command-epic-publish](https://github.com/affaan-m/ECC) | Publish a validated epic update back to the issue and local cache. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-review"></a>[source-command-epic-review](https://github.com/affaan-m/ECC) | Mark epic review requested, approved, or changes requested. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-sync"></a>[source-command-epic-sync](https://github.com/affaan-m/ECC) | Sync epic issue bodies, labels, and local coordination snapshots from GitHub. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-unblock"></a>[source-command-epic-unblock](https://github.com/affaan-m/ECC) | Sweep blocked epic issues and reopen anything whose dependencies are closed. | Source collection; installed path differs |
| <a id="ecc-source-command-epic-validate"></a>[source-command-epic-validate](https://github.com/affaan-m/ECC) | Validate epic readiness, dependencies, and coordination policy. | Source collection; installed path differs |
| <a id="ecc-source-command-fastapi-review"></a>[source-command-fastapi-review](https://github.com/affaan-m/ECC) | Review a FastAPI application for architecture, async correctness, dependency injection, Pydantic schemas, security, performance, and testability. | Source collection; installed path differs |
| <a id="ecc-source-command-feature-dev"></a>[source-command-feature-dev](https://github.com/affaan-m/ECC) | Guided feature development with codebase understanding and architecture focus | Source collection; installed path differs |
| <a id="ecc-source-command-go-build"></a>[source-command-go-build](https://github.com/affaan-m/ECC) | Fix Go build errors, go vet warnings, and linter issues incrementally. | Source collection; installed path differs |
| <a id="ecc-source-command-go-review"></a>[source-command-go-review](https://github.com/affaan-m/ECC) | Comprehensive Go code review for idiomatic patterns, concurrency safety, error handling, and security. | Source collection; installed path differs |
| <a id="ecc-source-command-gradle-build"></a>[source-command-gradle-build](https://github.com/affaan-m/ECC) | Fix Gradle build errors for Android and KMP projects | Source collection; installed path differs |
| <a id="ecc-source-command-hookify"></a>[source-command-hookify](https://github.com/affaan-m/ECC) | Create hooks to prevent unwanted behaviors from conversation analysis or explicit instructions | Source collection; installed path differs |
| <a id="ecc-source-command-hookify-configure"></a>[source-command-hookify-configure](https://github.com/affaan-m/ECC) | Enable or disable hookify rules interactively | Source collection; installed path differs |
| <a id="ecc-source-command-hookify-help"></a>[source-command-hookify-help](https://github.com/affaan-m/ECC) | Get help with the hookify system | Source collection; installed path differs |
| <a id="ecc-source-command-hookify-list"></a>[source-command-hookify-list](https://github.com/affaan-m/ECC) | List all configured hookify rules | Source collection; installed path differs |
| <a id="ecc-source-command-instinct-export"></a>[source-command-instinct-export](https://github.com/affaan-m/ECC) | Export instincts from project/global scope to a file | Source collection; installed path differs |
| <a id="ecc-source-command-instinct-import"></a>[source-command-instinct-import](https://github.com/affaan-m/ECC) | Import instincts from file or URL into project/global scope | Source collection; installed path differs |
| <a id="ecc-source-command-instinct-status"></a>[source-command-instinct-status](https://github.com/affaan-m/ECC) | Show learned instincts (project + global) with confidence | Source collection; installed path differs |
| <a id="ecc-source-command-jira"></a>[source-command-jira](https://github.com/affaan-m/ECC) | Retrieve a Jira ticket, analyze requirements, update status, or add comments. | Source collection; installed path differs |
| <a id="ecc-source-command-learn"></a>[source-command-learn](https://github.com/affaan-m/ECC) | Extract reusable patterns from the current session and save them as candidate skills or guidance. | Source collection; installed path differs |
| <a id="ecc-source-command-plan-canvas"></a>[source-command-plan-canvas](https://github.com/affaan-m/ECC) | Open a plan or HTML artifact in the browser Plan Canvas for annotate-and-approve review | Source collection; installed path differs |
| <a id="ecc-source-command-projects"></a>[source-command-projects](https://github.com/affaan-m/ECC) | List known projects and their instinct statistics | Source collection; installed path differs |
| <a id="ecc-source-command-promote"></a>[source-command-promote](https://github.com/affaan-m/ECC) | Promote project-scoped instincts to global scope | Source collection; installed path differs |
| <a id="ecc-source-command-prune"></a>[source-command-prune](https://github.com/affaan-m/ECC) | Delete pending instincts older than 30 days that were never promoted | Source collection; installed path differs |
| <a id="ecc-source-command-refactor-clean"></a>[source-command-refactor-clean](https://github.com/affaan-m/ECC) | Safely identify and remove dead code with verification after each change. | Source collection; installed path differs |
| <a id="ecc-source-command-review-pr"></a>[source-command-review-pr](https://github.com/affaan-m/ECC) | Comprehensive PR review using specialized agents | Source collection; installed path differs |
| <a id="ecc-source-command-setup-pm"></a>[source-command-setup-pm](https://github.com/affaan-m/ECC) | Configure your preferred package manager (npm/pnpm/yarn/bun) | Source collection; installed path differs |
| <a id="ecc-source-command-test-coverage"></a>[source-command-test-coverage](https://github.com/affaan-m/ECC) | Analyze coverage, identify gaps, and generate missing tests toward the target threshold. | Source collection; installed path differs |
| <a id="ecc-source-command-update-codemaps"></a>[source-command-update-codemaps](https://github.com/affaan-m/ECC) | Scan project structure and generate token-lean architecture codemaps. | Source collection; installed path differs |
| <a id="ecc-source-command-update-docs"></a>[source-command-update-docs](https://github.com/affaan-m/ECC) | Sync documentation from source-of-truth files such as scripts, schemas, routes, and exports. | Source collection; installed path differs |
| <a id="ecc-springboot-patterns"></a>[springboot-patterns](https://github.com/affaan-m/ECC/blob/main/skills/springboot-patterns/SKILL.md) | Spring Boot architecture patterns, REST API design, layered services, data access, caching, async processing, and logging. | Source definition |
| <a id="ecc-springboot-security"></a>[springboot-security](https://github.com/affaan-m/ECC/blob/main/skills/springboot-security/SKILL.md) | Spring Security best practices for authn/authz, validation, CSRF, secrets, headers, rate limiting, and dependency security in Java Spring Boot services. | Source definition |
| <a id="ecc-springboot-tdd"></a>[springboot-tdd](https://github.com/affaan-m/ECC/blob/main/skills/springboot-tdd/SKILL.md) | Test-driven development for Spring Boot using JUnit 5, Mockito, MockMvc, Testcontainers, and JaCoCo. | Source definition |
| <a id="ecc-springboot-verification"></a>[springboot-verification](https://github.com/affaan-m/ECC/blob/main/skills/springboot-verification/SKILL.md) | Verification loop for Spring Boot projects: build, static analysis, tests with coverage, security scans, and diff review before release or PR. | Source definition |
| <a id="ecc-strategic-compact"></a>[strategic-compact](https://github.com/affaan-m/ECC/blob/main/skills/strategic-compact/SKILL.md) | Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction. | Source definition |
| <a id="ecc-swift-actor-persistence"></a>[swift-actor-persistence](https://github.com/affaan-m/ECC/blob/main/skills/swift-actor-persistence/SKILL.md) | Thread-safe data persistence in Swift using actors — in-memory cache with file-backed storage, eliminating data races by design. | Source definition |
| <a id="ecc-swift-concurrency-6-2"></a>[swift-concurrency-6-2](https://github.com/affaan-m/ECC/blob/main/skills/swift-concurrency-6-2/SKILL.md) | Swift 6.2 Approachable Concurrency — single-threaded by default, @concurrent for explicit background offloading, isolated conformances for main actor types. | Source definition |
| <a id="ecc-swift-protocol-di-testing"></a>[swift-protocol-di-testing](https://github.com/affaan-m/ECC/blob/main/skills/swift-protocol-di-testing/SKILL.md) | Protocol-based dependency injection for testable Swift code — mock file system, network, and external APIs using focused protocols and Swift Testing. | Source definition |
| <a id="ecc-swiftui-patterns"></a>[swiftui-patterns](https://github.com/affaan-m/ECC/blob/main/skills/swiftui-patterns/SKILL.md) | SwiftUI architecture patterns, state management with @Observable, view composition, navigation, performance optimization, and modern iOS/macOS UI best practices. | Source definition |
| <a id="ecc-taste"></a>[taste](https://github.com/affaan-m/ECC/blob/main/skills/taste/SKILL.md) | A creative-direction (taste) layer for music videos and short-form edits in the angelcore / cloud-trance / hyperpop visual family. | Source definition |
| <a id="ecc-tasteforge-video"></a>[tasteforge-video](https://github.com/affaan-m/ECC/blob/main/skills/tasteforge-video/SKILL.md) | Use for file-driven multimodal image, video, and 3D-asset discovery; taste interviews; distill or apply workflows; style-pack validation; editable EDL/FCPXML export; provenance audits; and offline… | Source definition |
| <a id="ecc-tdd-workflow"></a>[tdd-workflow](https://github.com/affaan-m/ECC/blob/main/skills/tdd-workflow/SKILL.md) | Use this skill when writing new features, fixing bugs, or refactoring code. | Source definition |
| <a id="ecc-team-agent-orchestration"></a>[team-agent-orchestration](https://github.com/affaan-m/ECC/blob/main/skills/team-agent-orchestration/SKILL.md) | Run team-based orchestration for agent squads using work items, ownership, agent Kanban, merge gates, and control pane handoffs. | Source definition |
| <a id="ecc-team-builder"></a>[team-builder](https://github.com/affaan-m/ECC/blob/main/skills/team-builder/SKILL.md) | Interactive agent picker for composing and dispatching parallel teams. | Source definition |
| <a id="ecc-terminal-opener"></a>[terminal-opener](https://github.com/affaan-m/ECC/blob/main/skills/terminal-opener/SKILL.md) | Open an executable and its argument array in a visible terminal window through a reusable, shell-free launch plan with dry-run, JSON, capability detection, detached… | Source definition |
| <a id="ecc-terminal-ops"></a>[terminal-ops](https://github.com/affaan-m/ECC/blob/main/skills/terminal-ops/SKILL.md) | Evidence-first repo execution workflow for ECC. | Source definition |
| <a id="ecc-tinystruct-patterns"></a>[tinystruct-patterns](https://github.com/affaan-m/ECC/blob/main/skills/tinystruct-patterns/SKILL.md) | Expert guidance for developing with the tinystruct Java framework. | Source definition |
| <a id="ecc-token-budget-advisor"></a>[token-budget-advisor](https://github.com/affaan-m/ECC/blob/main/skills/token-budget-advisor/SKILL.md) | Offers the user an informed choice about how much response depth to consume before answering. | Source definition |
| <a id="ecc-ui-demo"></a>[ui-demo](https://github.com/affaan-m/ECC/blob/main/skills/ui-demo/SKILL.md) | Record polished UI demo videos using Playwright. | Source definition |
| <a id="ecc-ui-to-vue"></a>[ui-to-vue](https://github.com/affaan-m/ECC/blob/main/skills/ui-to-vue/SKILL.md) | Use when the user has UI screenshots or design exports that need batch conversion into Vue 3 components, especially with Vant, Element Plus, or… | Source definition |
| <a id="ecc-uncloud"></a>[uncloud](https://github.com/affaan-m/ECC/blob/main/skills/uncloud/SKILL.md) | Use when managing an Uncloud cluster — deploying services, configuring Caddy ingress, adding static proxy routes for non-cluster devices, publishing ports, scaling, inspecting logs,… | Source definition |
| <a id="ecc-unified-memory"></a>[unified-memory](https://github.com/affaan-m/ECC/blob/main/skills/unified-memory/SKILL.md) | Share durable, inspectable context and handoffs between Claude, Codex, Hermes, Cursor, OpenCode, and other agents through the local ECC Memory Vault. | Source definition |
| <a id="ecc-unified-notifications-ops"></a>[unified-notifications-ops](https://github.com/affaan-m/ECC/blob/main/skills/unified-notifications-ops/SKILL.md) | Operate notifications as one ECC-native workflow across GitHub, Linear, desktop alerts, hooks, and connected communication surfaces. | Source definition |
| <a id="ecc-verification-loop"></a>[verification-loop](https://github.com/affaan-m/ECC/blob/main/skills/verification-loop/SKILL.md) | A comprehensive verification system for Claude Code sessions. | Source definition |
| <a id="ecc-video-editing"></a>[video-editing](https://github.com/affaan-m/ECC/blob/main/skills/video-editing/SKILL.md) | AI-assisted video editing workflows for cutting, structuring, and augmenting real footage. | Source definition |
| <a id="ecc-videodb"></a>[videodb](https://github.com/affaan-m/ECC/blob/main/skills/videodb/SKILL.md) | See, Understand, Act on video and audio. | Source definition |
| <a id="ecc-visa-doc-translate"></a>[visa-doc-translate](https://github.com/affaan-m/ECC/blob/main/skills/visa-doc-translate/SKILL.md) | Translate visa application documents (images) to English and create a bilingual PDF with original and translation. | Source definition |
| <a id="ecc-vite-patterns"></a>[vite-patterns](https://github.com/affaan-m/ECC/blob/main/skills/vite-patterns/SKILL.md) | Vite build tool patterns including config, plugins, HMR, env variables, proxy setup, SSR, library mode, dependency pre-bundling, and build optimization. | Source definition |
| <a id="ecc-vue-patterns"></a>[vue-patterns](https://github.com/affaan-m/ECC/blob/main/skills/vue-patterns/SKILL.md) | Vue.js 3 Composition API patterns, component architecture, reactivity best practices, Pinia state management, Vue Router navigation, and Nuxt SSR patterns. | Source definition |
| <a id="ecc-windows-desktop-e2e"></a>[windows-desktop-e2e](https://github.com/affaan-m/ECC/blob/main/skills/windows-desktop-e2e/SKILL.md) | E2E testing for Windows native desktop apps (WPF, WinForms, Win32/MFC, Qt) using pywinauto and Windows UI Automation. | Source definition |
| <a id="ecc-workspace-surface-audit"></a>[workspace-surface-audit](https://github.com/affaan-m/ECC/blob/main/skills/workspace-surface-audit/SKILL.md) | Audit the active repo, MCP servers, plugins, connectors, env surfaces, and harness setup, then recommend the highest-value ECC-native skills, hooks, agents, and operator workflows. | Source definition |
| <a id="ecc-x-api"></a>[x-api](https://github.com/affaan-m/ECC/blob/main/skills/x-api/SKILL.md) | X/Twitter API integration for posting tweets, threads, reading timelines, search, and analytics. | Source definition |

## fable-advisor

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="fable-advisor-orchestration"></a>[orchestration](https://github.com/DannyMac180/fable-advisor/blob/main/skills/orchestration/SKILL.md) | Routing doctrine for the architect-as-orchestrator pattern — how a Fable 5.1 session delegates routine implementation to the GPT-5.6 Luna lane, escalates high-complexity one-offs to… | Source definition |

## frontend-design

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="frontend-design-frontend-design"></a>[frontend-design](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md) | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. | Source definition |

## github

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="github-gh-address-comments"></a>[gh-address-comments](https://github.com/openai/plugins) | Address actionable GitHub pull request review feedback. | Source collection; installed path differs |
| <a id="github-gh-fix-ci"></a>[gh-fix-ci](https://github.com/openai/plugins) | Use when a user asks to debug or fix failing GitHub PR checks that run in GitHub Actions. | Source collection; installed path differs |
| <a id="github-github"></a>[github](https://github.com/openai/plugins) | Triage and orient GitHub repository, pull request, and issue work through the connected GitHub app. | Source collection; installed path differs |
| <a id="github-yeet"></a>[yeet](https://github.com/openai/plugins) | Publish local changes to GitHub by confirming scope, committing intentionally, pushing the branch, and opening a draft PR through the GitHub app from this… | Source collection; installed path differs |

## gmail

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="gmail-gmail"></a>[gmail](https://github.com/openai/plugins) | Manage Gmail inbox triage, mailbox search, thread summaries, action extraction, reply drafting, and email forwarding through connected Gmail data. | Source collection; installed path differs |
| <a id="gmail-gmail-inbox-triage"></a>[gmail-inbox-triage](https://github.com/openai/plugins) | Triage a Gmail inbox into actionable buckets such as urgent, needs reply soon, waiting, and FYI using connected Gmail data. | Source collection; installed path differs |

## google-drive

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="google-drive-google-docs"></a>[google-docs](https://github.com/openai/plugins/blob/main/plugins/google-drive/skills/google-docs/SKILL.md) | Connector-first Google Docs creation and editing in local Codex plugin sessions, with direct native create and batchUpdate workflows for simple docs, DOCX-first import for… | Source definition |
| <a id="google-drive-google-drive"></a>[google-drive](https://github.com/openai/plugins/blob/main/plugins/google-drive/skills/google-drive/SKILL.md) | Use connected Google Drive as the single entrypoint for Drive, Docs, Sheets, and Slides work. | Source definition |
| <a id="google-drive-google-drive-comments"></a>[google-drive-comments](https://github.com/openai/plugins/blob/main/plugins/google-drive/skills/google-drive-comments/SKILL.md) | Write, reply to, and resolve Google Drive comments on Docs, Sheets, Slides, and Drive files with evidence-backed location context. | Source definition |
| <a id="google-drive-google-sheets"></a>[google-sheets](https://github.com/openai/plugins/blob/main/plugins/google-drive/skills/google-sheets/SKILL.md) | Analyze and edit connected Google Sheets with range precision. | Source definition |
| <a id="google-drive-google-slides"></a>[google-slides](https://github.com/openai/plugins/blob/main/plugins/google-drive/skills/google-slides/SKILL.md) | Google Slides work for finding, reading, summarizing, creating, importing, template following, visual cleanup, source-deck adaptation, structural repair, and content edits in native Slides decks. | Source definition |

<a id="htmlstreamofficial-preline"></a>

## htmlstreamofficial/preline

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="htmlstreamofficial-preline-preline-mcp"></a>[preline-mcp](https://github.com/htmlstreamofficial/preline/blob/main/skills/preline-mcp/SKILL.md) | Add, integrate, or build Preline UI components and blocks into HTML files via the Preline MCP server. | Source definition |
| <a id="htmlstreamofficial-preline-preline-theme-generator"></a>[preline-theme-generator](https://github.com/htmlstreamofficial/preline/blob/main/skills/theme-generator/SKILL.md) | Generate, preview, save, or validate Preline theme CSS using the bundled local generator in this skill. | Source definition |

## impeccable

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="impeccable-impeccable"></a>[impeccable](https://github.com/pbakaus/impeccable) | Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a… | Source collection; installed path differs |

## komand-widgets

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="komand-widgets-create-widget"></a>[create-widget](awesome-plugins.md#komand-widgets) | Create or edit a custom Vibespace widget — a small live HTML card on the Komand canvas (music player, clock, pomodoro, stock ticker, system… | Plugin record; no verified public definition |

<a id="mattpocock-skills"></a>

## mattpocock/skills

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="mattpocock-skills-ask-matt"></a>[ask-matt](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md) | Ask which skill or flow fits your situation. | Source definition |
| <a id="mattpocock-skills-code-review"></a>[code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md) | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes — Standards (does the code follow this repo&#x27;s documented… | Source definition |
| <a id="mattpocock-skills-codebase-design"></a>[codebase-design](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md) | Shared vocabulary for designing deep modules. | Source definition |
| <a id="mattpocock-skills-diagnosing-bugs"></a>[diagnosing-bugs](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md) | Diagnosis loop for hard bugs and performance regressions. | Source definition |
| <a id="mattpocock-skills-domain-modeling"></a>[domain-modeling](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md) | Build and sharpen a project&#x27;s domain model. | Source definition |
| <a id="mattpocock-skills-grill-me"></a>[grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) | A relentless interview to sharpen a plan or design. | Source definition |
| <a id="mattpocock-skills-grill-with-docs"></a>[grill-with-docs](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md) | A relentless interview to sharpen a plan or design, which also creates docs (ADR&#x27;s and glossary) as we go. | Source definition |
| <a id="mattpocock-skills-grilling"></a>[grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md) | Grill the user relentlessly about a plan, decision, or idea. | Source definition |
| <a id="mattpocock-skills-handoff"></a>[handoff](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md) | Compact the current conversation into a handoff document for another agent to pick up. | Source definition |
| <a id="mattpocock-skills-implement"></a>[implement](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md) | Implement a piece of work based on a spec or set of tickets. | Source definition |
| <a id="mattpocock-skills-improve-codebase-architecture"></a>[improve-codebase-architecture](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md) | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. | Source definition |
| <a id="mattpocock-skills-loop-me"></a>[loop-me](https://github.com/mattpocock/skills/blob/main/skills/in-progress/loop-me/SKILL.md) | Grill me about specs for the workflows I want to build, within this workspace. | Source definition |
| <a id="mattpocock-skills-prototype"></a>[prototype](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md) | Build a throwaway prototype to answer a design question. | Source definition |
| <a id="mattpocock-skills-research"></a>[research](https://github.com/mattpocock/skills/blob/main/skills/engineering/research/SKILL.md) | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. | Source definition |
| <a id="mattpocock-skills-resolving-merge-conflicts"></a>[resolving-merge-conflicts](https://github.com/mattpocock/skills/blob/main/skills/engineering/resolving-merge-conflicts/SKILL.md) | Use when you need to resolve an in-progress git merge/rebase conflict. | Source definition |
| <a id="mattpocock-skills-setup-matt-pocock-skills"></a>[setup-matt-pocock-skills](https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/SKILL.md) | Configure this repo for the engineering skills — set up its issue tracker, triage label vocabulary, and domain doc layout. | Source definition |
| <a id="mattpocock-skills-tdd"></a>[tdd](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md) | Test-driven development. | Source definition |
| <a id="mattpocock-skills-teach"></a>[teach](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md) | Teach the user a new skill or concept, within this workspace. | Source definition |
| <a id="mattpocock-skills-to-questionnaire"></a>[to-questionnaire](https://github.com/mattpocock/skills/blob/main/skills/productivity/to-questionnaire/SKILL.md) | Turn a decision you can&#x27;t fully answer into a questionnaire for someone else to fill in. | Source definition |
| <a id="mattpocock-skills-to-spec"></a>[to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md) | Turn the current conversation into a spec and publish it to the project issue tracker — no interview, just synthesis of what you&#x27;ve already… | Source definition |
| <a id="mattpocock-skills-to-tickets"></a>[to-tickets](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md) | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker… | Source definition |
| <a id="mattpocock-skills-triage"></a>[triage](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md) | Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs. | Source definition |
| <a id="mattpocock-skills-wait-what"></a>[wait-what](https://github.com/mattpocock/skills/blob/main/skills/productivity/wait-what/SKILL.md) | Stop. | Source definition |
| <a id="mattpocock-skills-wayfinder"></a>[wayfinder](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md) | Plan a huge chunk of work — more than one agent session can hold — as a shared map of decision tickets on your… | Source definition |
| <a id="mattpocock-skills-wizard"></a>[wizard](https://github.com/mattpocock/skills/blob/main/skills/engineering/wizard/SKILL.md) | Generate an interactive bash wizard that walks a human through steps only they can perform. | Source definition |
| <a id="mattpocock-skills-writing-for-agents"></a>[writing-for-agents](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md) | Writing documents for agents. | Source definition |

## neon-postgres

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="neon-postgres-neon-postgres"></a>[neon-postgres](https://github.com/openai/plugins) | Guides and best practices for working with Neon Serverless Postgres. | Source collection; installed path differs |
| <a id="neon-postgres-neon-postgres-egress-optimizer"></a>[neon-postgres-egress-optimizer](https://github.com/openai/plugins) | Diagnose and fix excessive Postgres egress (network data transfer) in a codebase. | Source collection; installed path differs |

## OpenAI system skills

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="openai-system-skills-imagegen"></a>[imagegen](https://github.com/openai/skills/blob/main/skills/.system/imagegen/SKILL.md) | Use when the user asks to generate or edit images via the OpenAI Image API (for example: generate image, edit/inpaint/mask, background removal or replacement,… | Source definition |
| <a id="openai-system-skills-openai-docs"></a>[openai-docs](https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md) | Use for Codex models/pricing, scheduled tasks, skills, settings, setup, troubleshooting, customization, automations, and self-knowledge—including &#x27;you,&#x27; &#x27;your,&#x27; &#x27;this app,&#x27; or &#x27;this coding agent&#x27; when they… | Source definition |
| <a id="openai-system-skills-plugin-creator"></a>[plugin-creator](https://github.com/openai/skills/blob/main/skills/.system/plugin-creator/SKILL.md) | Create and scaffold plugin directories for Codex with a required .codex-plugin/plugin.json, optional plugin folders/files, valid manifest defaults, and personal-marketplace entries by default. | Source definition |
| <a id="openai-system-skills-review-agent"></a>[review-agent](https://github.com/openai/skills) | Perform a read-only, defect-first review of a specified code change and return every actionable finding. | Source collection; installed path differs |
| <a id="openai-system-skills-skill-creator"></a>[skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md) | Create or update a Codex skill with appropriately scoped instructions and any needed supporting resources. | Source definition |
| <a id="openai-system-skills-skill-installer"></a>[skill-installer](https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md) | Install Codex skills into $CODEX_HOME/skills from a curated list or a GitHub repo path. | Source definition |

## pdf

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="pdf-pdf"></a>[pdf](awesome-plugins.md#pdf) | Read, create, inspect, render, and verify PDF files where visual layout matters, including fillable AcroForms. | Plugin record; no verified public definition |

## ponytail

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="ponytail-ponytail"></a>[ponytail](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail/SKILL.md) | Forces the laziest solution that actually works, simplest, shortest, most minimal. | Source definition |
| <a id="ponytail-ponytail-audit"></a>[ponytail-audit](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-audit/SKILL.md) | Whole-repo audit for over-engineering. | Source definition |
| <a id="ponytail-ponytail-debt"></a>[ponytail-debt](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-debt/SKILL.md) | Harvest every ponytail: comment in the codebase into a debt ledger, so the deliberate shortcuts and deferrals ponytail leaves behind get tracked instead of… | Source definition |
| <a id="ponytail-ponytail-gain"></a>[ponytail-gain](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-gain/SKILL.md) | Show ponytail&#x27;s measured impact as a compact scoreboard: less code, less cost, more speed, from the benchmark medians. | Source definition |
| <a id="ponytail-ponytail-help"></a>[ponytail-help](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-help/SKILL.md) | Quick-reference card for all ponytail modes, skills, and commands. | Source definition |
| <a id="ponytail-ponytail-review"></a>[ponytail-review](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-review/SKILL.md) | Code review focused exclusively on over-engineering. | Source definition |

## presentations

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="presentations-presentations"></a>[presentations](awesome-plugins.md#presentations) | Read, create or edit PowerPoint or Google Slides decks. | Plugin record; no verified public definition |

## sites

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="sites-sites-building"></a>[sites-building](awesome-plugins.md#sites) | Use Sites to build websites, including landing pages, portfolios, dashboards, portals, trackers, hubs, and internal tools. | Plugin record; no verified public definition |
| <a id="sites-sites-hosting"></a>[sites-hosting](awesome-plugins.md#sites) | Host websites with Sites. | Plugin record; no verified public definition |

## spreadsheets

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="spreadsheets-excel-live-control"></a>[excel-live-control](awesome-plugins.md#spreadsheets) | Control an open or active Microsoft Excel workbook through the ChatGPT add-in or connected session. | Plugin record; no verified public definition |
| <a id="spreadsheets-spreadsheets"></a>[spreadsheets](awesome-plugins.md#spreadsheets) | Use skill when user requests to create, modify, analyze, visualize, or work with spreadsheet files (.xlsx, .xls, .csv, .tsv) or Google Sheets with formulas,… | Plugin record; no verified public definition |

<a id="stablyai-orca"></a>

## stablyai/orca

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="stablyai-orca-orchestration"></a>[orchestration](https://github.com/stablyai/orca/blob/main/skills/orchestration/SKILL.md) | Use Orca orchestration for structured multi-agent coordination: threaded messages, blocking ask/reply flows, task dispatch, worker_done/escalation waits, task DAGs, decision gates, coordinator loops, or decomposing… | Source definition |

## Standalone and local

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="standalone-and-local-automate"></a>[automate](#standalone-and-local-automate) | Create agent automations. | Local definition; public source not recorded |
| <a id="standalone-and-local-autopilot"></a>[autopilot](#standalone-and-local-autopilot) | Keep a PR merge-ready by triaging comments, resolving clear conflicts, and fixing CI in a loop. | Local definition; public source not recorded |
| <a id="standalone-and-local-bridgespace-bridge-skill-bridgemind-mcp"></a>[bridgespace-bridge-skill-bridgemind-mcp](#standalone-and-local-bridgespace-bridge-skill-bridgemind-mcp) | How to use the BridgeMind MCP (mcp__bridgemind__*) effectively — projects, tasks, agents, knowledge, attachments, messaging, and the strict task lifecycle. | Local definition; public source not recorded |
| <a id="standalone-and-local-bridgespace-bridge-skill-github-commit"></a>[bridgespace-bridge-skill-github-commit](#standalone-and-local-bridgespace-bridge-skill-github-commit) | Universal commit-and-push methodology. | Local definition; public source not recorded |
| <a id="standalone-and-local-bridgespace-bridge-skill-memory"></a>[bridgespace-bridge-skill-memory](#standalone-and-local-bridgespace-bridge-skill-memory) | Use the BridgeMemory MCP tools proactively without being asked. | Local definition; public source not recorded |
| <a id="standalone-and-local-bridgespace-bridge-skill-obsidian"></a>[bridgespace-bridge-skill-obsidian](#standalone-and-local-bridgespace-bridge-skill-obsidian) | Operate an Obsidian vault as an agent — vault structure, frontmatter, wikilinks, daily notes, and the three integration paths (filesystem, URI scheme, Local REST… | Local definition; public source not recorded |
| <a id="standalone-and-local-bridgespace-bridge-skill-security-audit"></a>[bridgespace-bridge-skill-security-audit](#standalone-and-local-bridgespace-bridge-skill-security-audit) | Senior security-engineer instincts for any agent that reads, writes, or reviews code. | Local definition; public source not recorded |
| <a id="standalone-and-local-bridgespace-bridge-skill-seo"></a>[bridgespace-bridge-skill-seo](#standalone-and-local-bridgespace-bridge-skill-seo) | Modern (2025/2026) SEO methodology for auditing and writing pages — title tags, meta, headings, structured data, Core Web Vitals, and AI-search citation patterns. | Local definition; public source not recorded |
| <a id="standalone-and-local-canvas"></a>[canvas](#standalone-and-local-canvas) | Create interactive analytical canvases. | Local definition; public source not recorded |
| <a id="standalone-and-local-claude-d3js-skill-main"></a>[claude-d3js-skill-main](https://d3js.org) | Creating interactive data visualisations using d3.js. | Related tool documentation; local definition |
| <a id="standalone-and-local-codebase-memory"></a>[codebase-memory](https://github.com/DeusData/codebase-memory-mcp) | Use the codebase knowledge graph for structural code queries. | Related tool documentation; local definition |
| <a id="standalone-and-local-create-hook"></a>[create-hook](#standalone-and-local-create-hook) | Configure agent lifecycle hooks. | Local definition; public source not recorded |
| <a id="standalone-and-local-create-rule"></a>[create-rule](#standalone-and-local-create-rule) | Configure persistent editor guidance. | Local definition; public source not recorded |
| <a id="standalone-and-local-create-skill"></a>[create-skill](#standalone-and-local-create-skill) | Author reusable agent skills. | Local definition; public source not recorded |
| <a id="standalone-and-local-create-subagent"></a>[create-subagent](#standalone-and-local-create-subagent) | Create custom subagents for specialized AI tasks. | Local definition; public source not recorded |
| <a id="standalone-and-local-deploy-with-vercel"></a>[deploy-with-vercel](#standalone-and-local-deploy-with-vercel) | Link this repository to a Vercel project and deploy it using the Vercel MCP tools. | Local definition; public source not recorded |
| <a id="standalone-and-local-design-stealer"></a>[design-stealer](#standalone-and-local-design-stealer) | Copies an existing landing page (from URL or image) into a specified page in the codebase using Playwright MCP. | Local definition; public source not recorded |
| <a id="standalone-and-local-front-end-design"></a>[front-end-design](#standalone-and-local-front-end-design) | Create distinctive, production-grade frontend interfaces with high design quality. | Local definition; public source not recorded |
| <a id="standalone-and-local-gauntlet-loop"></a>[gauntlet-loop](#standalone-and-local-gauntlet-loop) | Turns any goal into one short, paste-ready &quot;gauntlet loop&quot; prompt - a prompt that makes an agent set a concrete quality bar, split the… | Local definition; public source not recorded |
| <a id="standalone-and-local-goal"></a>[goal](#standalone-and-local-goal) | Set and pursue a concrete agent goal. | Local definition; public source not recorded |
| <a id="standalone-and-local-graft"></a>[graft](https://github.com/trailhq/Graft) | Build and query codebase graphs through CLI or MCP tools for source search, repository maps, file APIs, and caller tracing. Used in Imaji's coding workflows. | Related tool documentation; local definition |
| <a id="standalone-and-local-komand"></a>[komand](https://komand.ai/) | Orchestrate the Komand macOS app — launch and supervise AI coding agents (Claude/Codex/Cursor/OpenCode), open workspace terminals, and run autonomous Clonk goal loops via the… | Related tool documentation; local definition |
| <a id="standalone-and-local-loop"></a>[loop](#standalone-and-local-loop) | Run a prompt or skill in this session on a recurring or variable interval (e.g. | Local definition; public source not recorded |
| <a id="standalone-and-local-migrate-to-skills"></a>[migrate-to-skills](#standalone-and-local-migrate-to-skills) | Convert &#x27;Applied intelligently&#x27; Codex rules (.cursor/rules/*.mdc) and slash commands (.cursor/commands/*.md) to Agent Skills format (.cursor/skills/). | Local definition; public source not recorded |
| <a id="standalone-and-local-miwa"></a>[miwa](#standalone-and-local-miwa) | Create character poses and outfit references. | Local definition; public source not recorded |
| <a id="standalone-and-local-new-repo"></a>[new-repo](#standalone-and-local-new-repo) | Create a hosted repository and push the current project. | Local definition; public source not recorded |
| <a id="standalone-and-local-onboard"></a>[onboard](#standalone-and-local-onboard) | Guide initial agent setup and preferences. | Local definition; public source not recorded |
| <a id="standalone-and-local-origin"></a>[origin](#standalone-and-local-origin) | Manage the Origin CLI and repository authentication. | Local definition; public source not recorded |
| <a id="standalone-and-local-playwright"></a>[playwright](https://playwright.dev) | Use when the task requires automating a real browser from the terminal (navigation, form filling, snapshots, screenshots, data extraction, UI-flow debugging) via playwright-cli or… | Related tool documentation; local definition |
| <a id="standalone-and-local-playwright-interactive"></a>[playwright-interactive](https://playwright.dev) | Persistent browser and Electron interaction through js_repl for fast iterative UI debugging. | Related tool documentation; local definition |
| <a id="standalone-and-local-rename-chat"></a>[rename-chat](#standalone-and-local-rename-chat) | Rename the current chat to match its focus. | Local definition; public source not recorded |
| <a id="standalone-and-local-review"></a>[review](#standalone-and-local-review) | Review code changes with the Bugbot or Security Review subagent. | Local definition; public source not recorded |
| <a id="standalone-and-local-review-bugbot"></a>[review-bugbot](#standalone-and-local-review-bugbot) | Review code changes with Bugbot subagent. | Local definition; public source not recorded |
| <a id="standalone-and-local-review-implementing"></a>[review-implementing](#standalone-and-local-review-implementing) | Process and implement code review feedback systematically. | Local definition; public source not recorded |
| <a id="standalone-and-local-review-security"></a>[review-security](#standalone-and-local-review-security) | Review code changes with Security Review subagent. | Local definition; public source not recorded |
| <a id="standalone-and-local-sdk"></a>[sdk](#standalone-and-local-sdk) | Build integrations with the Cursor SDK. | Local definition; public source not recorded |
| <a id="standalone-and-local-shadcn-ui-designing"></a>[shadcn-ui-designing](https://ui.shadcn.com) | Designs modern, clean UI components and pages following Shadcn principles with minimalism, accessibility, and beautiful defaults. | Related tool documentation; local definition |
| <a id="standalone-and-local-share"></a>[share](#standalone-and-local-share) | Save or share the current project as a repository. | Local definition; public source not recorded |
| <a id="standalone-and-local-shell"></a>[shell](#standalone-and-local-shell) | Run an explicitly requested shell command. | Local definition; public source not recorded |
| <a id="standalone-and-local-software-architecture"></a>[software-architecture](#standalone-and-local-software-architecture) | Guide for quality focused software architecture. | Local definition; public source not recorded |
| <a id="standalone-and-local-split-to-prs"></a>[split-to-prs](#standalone-and-local-split-to-prs) | Split current work into small reviewable PRs. | Local definition; public source not recorded |
| <a id="standalone-and-local-statusline"></a>[statusline](#standalone-and-local-statusline) | Configure a custom status line in the CLI. | Local definition; public source not recorded |
| <a id="standalone-and-local-update-cli-config"></a>[update-cli-config](#standalone-and-local-update-cli-config) | Manage local agent CLI configuration. | Local definition; public source not recorded |
| <a id="standalone-and-local-update-cursor-settings"></a>[update-cursor-settings](#standalone-and-local-update-cursor-settings) | Update Cursor and VS Code editor settings. | Local definition; public source not recorded |
| <a id="standalone-and-local-vercel-deploying"></a>[vercel-deploying](https://vercel.com/docs) | Automatically deploys to Vercel production, uses Vercel MCP to fetch build logs, analyzes errors, fixes them, and retries until successful deployment. | Related tool documentation; local definition |

## superpowers

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="superpowers-brainstorming"></a>[brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md) | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. | Source definition |
| <a id="superpowers-dispatching-parallel-agents"></a>[dispatching-parallel-agents](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md) | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies | Source definition |
| <a id="superpowers-executing-plans"></a>[executing-plans](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md) | Use when you have a written implementation plan to execute in a separate session with review checkpoints | Source definition |
| <a id="superpowers-finishing-a-development-branch"></a>[finishing-a-development-branch](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md) | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work | Source definition |
| <a id="superpowers-receiving-code-review"></a>[receiving-code-review](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md) | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not… | Source definition |
| <a id="superpowers-requesting-code-review"></a>[requesting-code-review](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md) | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | Source definition |
| <a id="superpowers-subagent-driven-development"></a>[subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md) | Use when executing implementation plans with independent tasks in the current session | Source definition |
| <a id="superpowers-systematic-debugging"></a>[systematic-debugging](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md) | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes | Source definition |
| <a id="superpowers-test-driven-development"></a>[test-driven-development](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md) | Use when implementing any feature or bugfix, before writing implementation code | Source definition |
| <a id="superpowers-using-git-worktrees"></a>[using-git-worktrees](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md) | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native… | Source definition |
| <a id="superpowers-using-superpowers"></a>[using-superpowers](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md) | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions | Source definition |
| <a id="superpowers-verification-before-completion"></a>[verification-before-completion](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md) | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output… | Source definition |
| <a id="superpowers-writing-plans"></a>[writing-plans](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md) | Use when you have a spec or requirements for a multi-step task, before touching code | Source definition |
| <a id="superpowers-writing-skills"></a>[writing-skills](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md) | Use when creating new skills, editing existing skills, or verifying skills work before deployment | Source definition |

## template-creator

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="template-creator-template-creator"></a>[template-creator](awesome-plugins.md#template-creator) | Create or update a reusable personal Codex artifact-template skill. | Plugin record; no verified public definition |

## thinking-skills

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="thinking-skills-thinking-archetypes"></a>[thinking-archetypes](https://github.com/tjboudreaux/cc-thinking-skills) | Recognize Senge&#x27;s Systems Archetypes to diagnose recurring organizational and technical problems, identify why fixes keep failing, and design interventions that address root structure. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-bayesian"></a>[thinking-bayesian](https://github.com/tjboudreaux/cc-thinking-skills) | Update beliefs systematically based on new evidence using probabilistic reasoning. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-bounded-rationality"></a>[thinking-bounded-rationality](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-bounded-rationality/SKILL.md) | Use when search or investigation could run forever. | Source definition |
| <a id="thinking-skills-thinking-circle-of-competence"></a>[thinking-circle-of-competence](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-circle-of-competence/SKILL.md) | Use when a specific claim may lack grounding. | Source definition |
| <a id="thinking-skills-thinking-cynefin"></a>[thinking-cynefin](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-cynefin/SKILL.md) | When the right response mode is unclear, classify the cause-effect domain first; decompose disorder. | Source definition |
| <a id="thinking-skills-thinking-debiasing"></a>[thinking-debiasing](https://github.com/tjboudreaux/cc-thinking-skills) | Systematic checklist to identify and counteract cognitive biases in decision-making. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-dual-process"></a>[thinking-dual-process](https://github.com/tjboudreaux/cc-thinking-skills) | Apply Kahneman&#x27;s Dual-Process Theory to recognize when to trust intuition vs engage deliberate analysis. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-effectuation"></a>[thinking-effectuation](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-effectuation/SKILL.md) | Under genuine uncertainty with no reliable forecast, inventory means, cap downside at affordable loss, act for commitments, and let goals emerge from controllable moves. | Source definition |
| <a id="thinking-skills-thinking-feedback-loops"></a>[thinking-feedback-loops](https://github.com/tjboudreaux/cc-thinking-skills) | Analyze systems using Donella Meadows&#x27; feedback loop framework to identify reinforcing loops, balancing loops, delays, and leverage points. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-fermi-estimation"></a>[thinking-fermi-estimation](https://github.com/tjboudreaux/cc-thinking-skills) | Make order-of-magnitude estimates for unknown quantities by decomposing into known or estimable factors. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-first-principles"></a>[thinking-first-principles](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-first-principles/SKILL.md) | When a constraint is treated as fixed, separate physics from convention, keep only independently supported primitives, and rebuild the simplest solution that satisfies real… | Source definition |
| <a id="thinking-skills-thinking-five-whys-plus"></a>[thinking-five-whys-plus](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-five-whys-plus/SKILL.md) | When a fault is localized and the proximate cause is known but the systemic root is not, chain evidence-linked whys with a counterfactual stop… | Source definition |
| <a id="thinking-skills-thinking-inversion"></a>[thinking-inversion](https://github.com/tjboudreaux/cc-thinking-skills) | Approach problems backward by identifying paths to failure, then systematically avoiding them. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-jobs-to-be-done"></a>[thinking-jobs-to-be-done](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-jobs-to-be-done/SKILL.md) | Deciding what to build or why adoption fails. | Source definition |
| <a id="thinking-skills-thinking-kepner-tregoe"></a>[thinking-kepner-tregoe](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-kepner-tregoe/SKILL.md) | Use when a selective defect needs IS/IS-NOT difference analysis or a consequential option choice needs must/want weighting and adverse-consequence comparison. | Source definition |
| <a id="thinking-skills-thinking-leverage-points"></a>[thinking-leverage-points](https://github.com/tjboudreaux/cc-thinking-skills) | Identify where small changes can have large effects using Donella Meadows&#x27; hierarchy of system intervention points. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-lindy-effect"></a>[thinking-lindy-effect](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-lindy-effect/SKILL.md) | Use when longevity of a non-perishable option matters. | Source definition |
| <a id="thinking-skills-thinking-map-territory"></a>[thinking-map-territory](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-map-territory/SKILL.md) | When a claim, doc, test, metric, or assumption conflicts with observed behavior, stop theorizing from the map and verify the live code or data;… | Source definition |
| <a id="thinking-skills-thinking-margin-of-safety"></a>[thinking-margin-of-safety](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-margin-of-safety/SKILL.md) | When provisioning, setting a limit, or committing an estimate under uncertainty, size a buffer to residual error and the cost of breach—not to the… | Source definition |
| <a id="thinking-skills-thinking-model-combination"></a>[thinking-model-combination](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-model-combination/SKILL.md) | When one mental model leaves a material blind spot on a multi-domain or high-stakes problem, sequence complementary models with named roles and a conflict… | Source definition |
| <a id="thinking-skills-thinking-model-router"></a>[thinking-model-router](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-model-router/SKILL.md) | When unsure which thinking skill fits, map domain and problem type, then return NONE or one primary skill by default (at most three complementary). | Source definition |
| <a id="thinking-skills-thinking-model-selection"></a>[thinking-model-selection](https://github.com/tjboudreaux/cc-thinking-skills) | Choose the right mental model for the problem at hand. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-occams-razor"></a>[thinking-occams-razor](https://github.com/tjboudreaux/cc-thinking-skills) | Apply parsimony principle to prefer simpler explanations with fewer assumptions. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-ooda"></a>[thinking-ooda](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-ooda/SKILL.md) | Use under time pressure when the situation is still changing and you must act before certainty — cycle Observe→Orient→Decide→Act on ~70% confidence, then re-observe. | Source definition |
| <a id="thinking-skills-thinking-opportunity-cost"></a>[thinking-opportunity-cost](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-opportunity-cost/SKILL.md) | Before committing scarce time, people, or money, name the best forgone use of those resources and the value delta of the chosen path versus… | Source definition |
| <a id="thinking-skills-thinking-pre-mortem"></a>[thinking-pre-mortem](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-pre-mortem/SKILL.md) | Before committing to a plan or launch, assume it already failed and reason backward through concrete causes — convert failure paths into mitigations, gates,… | Source definition |
| <a id="thinking-skills-thinking-probabilistic"></a>[thinking-probabilistic](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-probabilistic/SKILL.md) | Use when forecasting, estimating, or sizing risk — anchor on base rates, give ranges, update prior→likelihood→posterior on evidence, and factor unmeasured quantities into order-of-magnitude… | Source definition |
| <a id="thinking-skills-thinking-red-team"></a>[thinking-red-team](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-red-team/SKILL.md) | For authorized security review of code, auth, or APIs you control, model the attacker, map the attack surface, and report only findings with a… | Source definition |
| <a id="thinking-skills-thinking-regret-minimization"></a>[thinking-regret-minimization](https://github.com/tjboudreaux/cc-thinking-skills) | Project to your future self and ask what you would regret not doing. | Source collection; installed path differs |
| <a id="thinking-skills-thinking-reversibility"></a>[thinking-reversibility](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-reversibility/SKILL.md) | Before heavy deliberation, classify the decision as cheap or costly to undo; decide two-way doors fast and stage one-way doors to preserve options. | Source definition |
| <a id="thinking-skills-thinking-scientific-method"></a>[thinking-scientific-method](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-scientific-method/SKILL.md) | When a symptom has several plausible causes, rank falsifiable hypotheses and run the cheapest discriminating observation first; prefer least-assumptive survivors only after evidence fit. | Source definition |
| <a id="thinking-skills-thinking-second-order"></a>[thinking-second-order](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-second-order/SKILL.md) | When a change has effects past the immediate fix—incentives, scale, feedback—trace consequence chains with timing and probability before committing. | Source definition |
| <a id="thinking-skills-thinking-socratic"></a>[thinking-socratic](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-socratic/SKILL.md) | When a request is vague, assumption-laden, or &quot;obvious,&quot; ask the few load-bearing questions that expose hidden requirements before building or committing. | Source definition |
| <a id="thinking-skills-thinking-steel-manning"></a>[thinking-steel-manning](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-steel-manning/SKILL.md) | Before rejecting a proposal or reflexively agreeing, build the strongest faithful opposing case, state agreement conditions, then update or reaffirm. | Source definition |
| <a id="thinking-skills-thinking-systems"></a>[thinking-systems](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-systems/SKILL.md) | When behavior is emergent across components—fixes elsewhere break, loops/delays dominate—map boundary, stocks/flows, feedback, archetypes, then rank leverage. | Source definition |
| <a id="thinking-skills-thinking-theory-of-constraints"></a>[thinking-theory-of-constraints](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-theory-of-constraints/SKILL.md) | When throughput or latency is pipeline-limited, identify the single binding constraint and exploit, subordinate, elevate, then recheck—ignore non-constraints. | Source definition |
| <a id="thinking-skills-thinking-thought-experiment"></a>[thinking-thought-experiment](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-thought-experiment/SKILL.md) | When a real test is too rare, large, or irreversible, run a controlled counterfactual: isolate one variable, fix conditions, trace the mechanistic chain, and… | Source definition |
| <a id="thinking-skills-thinking-triz"></a>[thinking-triz](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-triz/SKILL.md) | When two design requirements seem mutually exclusive, name the contradiction, separate conflicting states, then invent a concrete no-compromise resolution. | Source definition |
| <a id="thinking-skills-thinking-via-negativa"></a>[thinking-via-negativa](https://github.com/tjboudreaux/cc-thinking-skills/blob/main/skills/thinking-via-negativa/SKILL.md) | Use when the reflex is to add a feature, layer, or process. | Source definition |

<a id="tt-a1i-archify"></a>

## tt-a1i/archify

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="tt-a1i-archify-archify"></a>[archify](https://github.com/tt-a1i/archify/blob/main/archify/SKILL.md) | Create polished, validated architecture, workflow, sequence, data-flow, and lifecycle/state diagrams as explorable standalone HTML with inline SVG, dark/light themes, optional trace motion, and PNG/JPEG/WebP/SVG/WebM… | Source definition |

## vercel

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="vercel-access-protected-vercel-deployment"></a>[access-protected-vercel-deployment](https://github.com/vercel/vercel-plugin/blob/main/skills/access-protected-vercel-deployment/SKILL.md) | Access and test Vercel deployments protected by Vercel Authentication, SSO, or Deployment Protection. | Source definition |
| <a id="vercel-ai-gateway"></a>[ai-gateway](https://github.com/vercel/vercel-plugin/blob/main/skills/ai-gateway/SKILL.md) | Vercel AI Gateway expert guidance. | Source definition |
| <a id="vercel-ai-sdk"></a>[ai-sdk](https://github.com/vercel/vercel-plugin/blob/main/skills/ai-sdk/SKILL.md) | Vercel AI SDK expert guidance. | Source definition |
| <a id="vercel-auth"></a>[auth](https://github.com/vercel/vercel-plugin/blob/main/skills/auth/SKILL.md) | Authentication integration guidance — Clerk (native Vercel Marketplace), Descope, and Auth0 setup for Next.js applications. | Source definition |
| <a id="vercel-bootstrap"></a>[bootstrap](https://github.com/vercel/vercel-plugin/blob/main/skills/bootstrap/SKILL.md) | Project bootstrapping orchestrator for repos that depend on Vercel-linked resources (databases, auth, and managed integrations). | Source definition |
| <a id="vercel-build-agents"></a>[build-agents](https://github.com/vercel/vercel-plugin/blob/main/skills/build-agents/SKILL.md) | Default guidance for building AI agents. | Source definition |
| <a id="vercel-cdn-caching"></a>[cdn-caching](https://github.com/vercel/vercel-plugin/blob/main/skills/cdn-caching/SKILL.md) | Debug Vercel CDN caching — cache hit rate, stale content, revalidation behavior, ISR + PPR, per-request cache reasons (cacheReason) and PPR state (ppr_state), and… | Source definition |
| <a id="vercel-chat-sdk"></a>[chat-sdk](https://github.com/vercel/vercel-plugin/blob/main/skills/chat-sdk/SKILL.md) | Vercel Chat SDK expert guidance. | Source definition |
| <a id="vercel-deployments-cicd"></a>[deployments-cicd](https://github.com/vercel/vercel-plugin/blob/main/skills/deployments-cicd/SKILL.md) | Vercel deployment and CI/CD expert guidance. | Source definition |
| <a id="vercel-env-vars"></a>[env-vars](https://github.com/vercel/vercel-plugin/blob/main/skills/env-vars/SKILL.md) | Vercel environment variable expert guidance. | Source definition |
| <a id="vercel-eve"></a>[eve](https://github.com/vercel/vercel-plugin/blob/main/skills/eve/SKILL.md) | eve framework guidance for durable AI agents and agent-powered applications. | Source definition |
| <a id="vercel-knowledge-update"></a>[knowledge-update](https://github.com/vercel/vercel-plugin/blob/main/skills/knowledge-update/SKILL.md) | Corrects outdated LLM knowledge about the Vercel platform and introduces new products. | Source definition |
| <a id="vercel-marketplace"></a>[marketplace](https://github.com/vercel/vercel-plugin/blob/main/skills/marketplace/SKILL.md) | Vercel Marketplace expert guidance — discovering, installing, and managing third-party integrations via the vercel integration CLI. | Source definition |
| <a id="vercel-microfrontends"></a>[microfrontends](https://github.com/vercel/vercel-plugin/blob/main/skills/microfrontends/SKILL.md) | Guide for building, configuring, and deploying microfrontends on Vercel. | Source definition |
| <a id="vercel-next-cache-components"></a>[next-cache-components](https://github.com/vercel/vercel-plugin/blob/main/skills/next-cache-components/SKILL.md) | Next.js 16 Cache Components guidance — PPR, use cache directive, cacheLife, cacheTag, updateTag, and migration from unstable_cache. | Source definition |
| <a id="vercel-next-forge"></a>[next-forge](https://github.com/vercel/vercel-plugin/blob/main/skills/next-forge/SKILL.md) | next-forge expert guidance — production-grade Turborepo monorepo SaaS starter by Vercel. | Source definition |
| <a id="vercel-next-upgrade"></a>[next-upgrade](https://github.com/vercel/vercel-plugin/blob/main/skills/next-upgrade/SKILL.md) | Upgrade Next.js to the latest version following official migration guides and codemods. | Source definition |
| <a id="vercel-nextjs"></a>[nextjs](https://github.com/vercel/vercel-plugin/blob/main/skills/nextjs/SKILL.md) | Next.js App Router expert guidance. | Source definition |
| <a id="vercel-react-best-practices"></a>[react-best-practices](https://github.com/vercel/vercel-plugin/blob/main/skills/react-best-practices/SKILL.md) | React best-practices reviewer for TSX files. | Source definition |
| <a id="vercel-routing-middleware"></a>[routing-middleware](https://github.com/vercel/vercel-plugin/blob/main/skills/routing-middleware/SKILL.md) | Vercel Routing Middleware guidance — request interception before cache, rewrites, redirects, personalization. | Source definition |
| <a id="vercel-runtime-cache"></a>[runtime-cache](https://github.com/vercel/vercel-plugin/blob/main/skills/runtime-cache/SKILL.md) | Vercel Runtime Cache API guidance — ephemeral per-region key-value cache with tag-based invalidation. | Source definition |
| <a id="vercel-shadcn"></a>[shadcn](https://github.com/vercel/vercel-plugin/blob/main/skills/shadcn/SKILL.md) | shadcn/ui expert guidance — CLI, component installation, composition patterns, custom registries, theming, Tailwind CSS integration, and high-quality interface design. | Source definition |
| <a id="vercel-turbopack"></a>[turbopack](https://github.com/vercel/vercel-plugin/blob/main/skills/turbopack/SKILL.md) | Turbopack expert guidance. | Source definition |
| <a id="vercel-upstream"></a>[upstream](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-cli/upstream/SKILL.md) | Deploy, manage, and develop projects on Vercel from the command line | Source definition |
| <a id="vercel-vercel-agent"></a>[vercel-agent](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-agent/SKILL.md) | Vercel Agent guidance — AI-powered code review, incident investigation, and SDK installation. | Source definition |
| <a id="vercel-vercel-cli"></a>[vercel-cli](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-cli/SKILL.md) | Vercel CLI expert guidance. | Source definition |
| <a id="vercel-vercel-connect"></a>[vercel-connect](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-connect/SKILL.md) | Vercel Connect expert guidance — securely obtain scoped OAuth tokens for third-party services (Slack, GitHub, MCP servers, OAuth, Snowflake) on behalf of apps or… | Source definition |
| <a id="vercel-vercel-firewall"></a>[vercel-firewall](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-firewall/SKILL.md) | Vercel Firewall expert guidance — automatic DDoS mitigation, the Vercel WAF (custom rules, IP blocking, managed rulesets, rate limiting), Attack Mode, system bypass, bot… | Source definition |
| <a id="vercel-vercel-functions"></a>[vercel-functions](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-functions/SKILL.md) | Vercel Functions expert guidance — Serverless Functions, Edge Functions, Fluid Compute, streaming, Cron Jobs, and runtime configuration. | Source definition |
| <a id="vercel-vercel-sandbox"></a>[vercel-sandbox](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-sandbox/SKILL.md) | Vercel Sandbox guidance — ephemeral Firecracker microVMs for running untrusted code safely. | Source definition |
| <a id="vercel-vercel-services"></a>[vercel-services](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-services/SKILL.md) | Configure and troubleshoot Vercel Services for multiple frontends and backends in one project. | Source definition |
| <a id="vercel-vercel-storage"></a>[vercel-storage](https://github.com/vercel/vercel-plugin/blob/main/skills/vercel-storage/SKILL.md) | Vercel storage expert guidance — Blob, Edge Config, and Marketplace storage (Neon Postgres, Upstash Redis). | Source definition |
| <a id="vercel-verification"></a>[verification](https://github.com/vercel/vercel-plugin/blob/main/skills/verification/SKILL.md) | Full-story verification — infers what the user is building, then verifies the complete flow end-to-end: browser → API → data → response. | Source definition |
| <a id="vercel-workflow"></a>[workflow](https://github.com/vercel/vercel-plugin/blob/main/skills/workflow/SKILL.md) | Vercel Workflow SDK expert guidance. | Source definition |

<a id="vercel-labs-skills"></a>

## vercel-labs/skills

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="vercel-labs-skills-find-skills"></a>[find-skills](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md) | Helps users discover and install agent skills when they ask questions like &quot;how do I do X&quot;, &quot;find a skill for X&quot;, &quot;is there… | Source definition |

## visualize

| Skill | Purpose | Source / availability |
| --- | --- | --- |
| <a id="visualize-visualize"></a>[visualize](awesome-plugins.md#visualize) | Create visualizations and interactive tools directly in conversation. | Plugin record; no verified public definition |

## Cached templates

20 additional template definitions were found in the OpenAI templates cache. Activation was not confirmed; they are excluded from the installed skill count. See the [plugin record](awesome-plugins.md#openai-templates).

- `artifact-template-analytics-dashboard`
- `artifact-template-business-review`
- `artifact-template-design-report`
- `artifact-template-experiment-analysis`
- `artifact-template-financial-budget`
- `artifact-template-investment-committee-memo`
- `artifact-template-legal-memorandum`
- `artifact-template-market-trends-report`
- `artifact-template-minimal-letterhead`
- `artifact-template-operating-calendar`
- `artifact-template-operating-review`
- `artifact-template-project-kickoff`
- `artifact-template-project-tracker`
- `artifact-template-sales-pipeline`
- `artifact-template-simple-dark-mode`
- `artifact-template-simple-light-mode`
- `artifact-template-strategy-memorandum`
- `artifact-template-system-design`
- `artifact-template-team-alignment`
- `artifact-template-three-statement-forecast`

## Inventory scope

Checked user skill roots: `~/.osaurus/skills`, `~/.qwen/skills`, `~/.cursor/skills`, `~/.bridgespace/skills`, `~/.copilot/skills`, `~/.gemini/skills`, `~/.grok/skills`, `~/.kimi-code/skills`, `~/.agents/skills`, `~/.claude/skills`, `~/.kilocode/skills`, `~/.codex/skills`, `~/.github/skills`, `~/.factory/skills`, `~/.kiro/skills`, `~/.cline/skills`, `~/.hermes/skills`, `~/.config/opencode/skills`, `~/.pi/agent/skills`.

Also checked the Codex plugin cache against enabled plugin configuration, Claude Code’s installed plugin registry, shared Komand plugin targets referenced by skill symlinks, and project-level skill folders. Cached plugins without activation evidence are labeled separately.

No credentials, local account configuration, private session transcripts, or third-party skill implementations are included in this catalog. Third-party authors retain their own licenses.
