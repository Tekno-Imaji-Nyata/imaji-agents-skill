<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/imaji-logo-white.png">
    <source media="(prefers-color-scheme: light)" srcset="assets/imaji-logo-black.png">
    <img src="assets/imaji-logo-black.png" alt="Imaji" width="320">
  </picture>
</p>

<h1 align="center">Imaji Agent Skills</h1>

<p align="center">
  <strong>Better decisions. Focused agents. Verified work.</strong><br>
  Reusable orchestration skills and the agent toolkit behind Imaji.
</p>

<p align="center">
  <a href="#imaji-skills">Imaji Skills</a> ·
  <a href="#awesome-skills">Awesome Skills</a> ·
  <a href="#awesome-plugins">Awesome Plugins</a> ·
  <a href="#install">Install</a>
</p>

---

This repository brings together Imaji’s own agent workflows and a source-linked directory of the skills and plugins installed across our toolkit. Start with the Imaji skills to coordinate work in **super.engineering** or run a Fable hub in Claude Code, or explore the catalogs to find tools for engineering, design, research, and delivery.

**565 skill entries · 33 collections · 30 installed, linked, or runtime-provided plugin names**

Inventory snapshot: September 10, 2026. [Scope and counting rules](docs/awesome-skills.md#inventory-scope).

## Imaji skills

These are the skills maintained and included in this repository. The two super.engineering skills are installed together; hub-spoke is a Claude Code command and workflow.

| Skill | What it does | Use it for |
| --- | --- | --- |
| [super-engineering-chat](skills/super-engineering-chat/SKILL.md) | Operates agents through super.engineering’s visible interface, checks message submission, and keeps the intended workspace and session. | Reliable interaction with coding agents in the app. |
| [super-engineering-fable](skills/super-engineering-fable/SKILL.md) | Structures brainstorming and debate with Fable, delegates bounded work, and checks the integrated result. | Features that benefit from a manager and multiple workers. |
| [hub-spoke](skills/hub-spoke/SKILL.md) | Runs a Fable hub in Claude Code that scouts with Sonnet, plans file-owned units, and executes them on Opus or Sonnet spokes with adversarial Opus verification. | Terminal work where Fable should plan and approve but never read or edit files. |

### How we work

**Brief → Brainstorm & debate → Assign workers → Implement → Review & verify**

Codex orchestrates the work and verifies the outcome. Fable debates the approach, manages implementation, and assigns workers based on uncertainty, task difficulty, and the consequences of mistakes.

| Worker | Best fit | Routing rule |
| --- | --- | --- |
| **Sonnet** | Routine implementation, focused discovery, tests, and documentation. | Start here when the task and verification are clear. |
| **Opus** | Interacting components, migrations, concurrency, security-sensitive changes, and difficult debugging. | Use when implementation needs deeper reasoning. |
| **Fable** | Ambiguous architecture, unresolved investigations, important judgment, and final review. | Reserve for work where additional judgment changes the outcome. |

Workers receive a clear scope, file ownership, and a definition of done. Independent work can run in parallel; overlapping ownership is resolved before implementation. Escalate from evidence, and return routine follow-through to Sonnet when useful. Inspect the models and effort settings available in the app rather than hardcoding version names.

The [Fable Advisor plugin](docs/awesome-plugins.md#fable-advisor) is listed as part of the wider toolkit. Its upstream worker defaults are separate from the Imaji workflow defined here.

## Awesome Skills

Explore the [complete skill catalog](docs/awesome-skills.md), with every discovered skill listed by collection and linked to its source or a labeled local/plugin reference.

| Collection | What you’ll find |
| --- | --- |
| [Imaji orchestration](docs/awesome-skills.md#imaji) | The three workflows maintained here. |
| [Superpowers](docs/awesome-skills.md#superpowers) | Planning, debugging, testing, code review, and parallel development. |
| [ECC](docs/awesome-skills.md#ecc) | Engineering workflows, language and framework guides, security, research, and agent operations. |
| [Matt Pocock’s skills](docs/awesome-skills.md#mattpocock-skills) | Clarifying requirements, domain modeling, implementation, review, and handoff. |
| [Thinking Skills](docs/awesome-skills.md#thinking-skills) | Mental models for evaluating decisions and solving problems. |
| [Cloudflare](docs/awesome-skills.md#cloudflare) & [Vercel](docs/awesome-skills.md#vercel) | Platform development, infrastructure, and deployment. |
| [Impeccable](docs/awesome-skills.md#impeccable) & [Frontend Design](docs/awesome-skills.md#frontend-design) | Interface design, critique, and refinement. |
| [Claude-Mem](docs/awesome-skills.md#claude-mem) | Persistent context, research, planning, and knowledge workflows. |
| [Documents](docs/awesome-skills.md#documents), [Spreadsheets](docs/awesome-skills.md#spreadsheets), [Presentations](docs/awesome-skills.md#presentations) & [PDF](docs/awesome-skills.md#pdf) | Create, inspect, and export work artifacts. |
| [Standalone and local skills](docs/awesome-skills.md#standalone-and-local) | [Graft](docs/awesome-skills.md#standalone-and-local-graft) codebase graphs, BridgeSpace workflows, editor tools, and local customizations. |

## Awesome Plugins

Browse the [complete plugin catalog](docs/awesome-plugins.md) for source links, installed versions, providers, and availability evidence.

| Area | Installed toolkit |
| --- | --- |
| Agent workflows | [Fable Advisor](docs/awesome-plugins.md#fable-advisor), [Codex](docs/awesome-plugins.md#codex), [Superpowers](docs/awesome-plugins.md#superpowers), [ECC](docs/awesome-plugins.md#ecc), [Ponytail](docs/awesome-plugins.md#ponytail) |
| Design and development | [Impeccable](docs/awesome-plugins.md#impeccable), [Frontend Design](docs/awesome-plugins.md#frontend-design), [Vercel](docs/awesome-plugins.md#vercel), [Rust Analyzer](docs/awesome-plugins.md#rust-analyzer-lsp) |
| Memory and reasoning | [Claude-Mem](docs/awesome-plugins.md#claude-mem), [Thinking Skills](docs/awesome-plugins.md#thinking-skills), [Deep Research](docs/awesome-plugins.md#deep-research-work) |
| Browser and desktop | [Playwright](docs/awesome-plugins.md#playwright), [Browser](docs/awesome-plugins.md#browser), [Chrome](docs/awesome-plugins.md#chrome), [Computer Use](docs/awesome-plugins.md#computer-use), [Unified Computer Use](docs/awesome-plugins.md#unified-computer-use) |
| Work artifacts | [Documents](docs/awesome-plugins.md#documents), [Spreadsheets](docs/awesome-plugins.md#spreadsheets), [Presentations](docs/awesome-plugins.md#presentations), [PDF](docs/awesome-plugins.md#pdf), [Visualize](docs/awesome-plugins.md#visualize), [Sites](docs/awesome-plugins.md#sites) |
| Shared integrations | [GitHub](docs/awesome-plugins.md#github), [Google Drive](docs/awesome-plugins.md#google-drive), [Gmail](docs/awesome-plugins.md#gmail), [Neon Postgres](docs/awesome-plugins.md#neon-postgres), [Komand Widgets](docs/awesome-plugins.md#komand-widgets) |

A skill is an instruction file. A plugin can also provide tools, hooks, services, and dependencies. Installing the Imaji skills does not install the entire catalog or authenticate its integrations.

## Install

Clone the repository:

```sh
git clone https://github.com/Tekno-Imaji-Nyata/imaji-agents-skill.git
cd imaji-agents-skill
```

For your Codex user account:

```sh
mkdir -p ~/.codex/skills
cp -R skills/super-engineering-chat ~/.codex/skills/
cp -R skills/super-engineering-fable ~/.codex/skills/
```

For one project's shared agent skills, run from this repository and replace the project path:

```sh
project_dir=/absolute/path/to/project
mkdir -p "$project_dir/.agents/skills"
cp -R skills/super-engineering-chat "$project_dir/.agents/skills/"
cp -R skills/super-engineering-fable "$project_dir/.agents/skills/"
```

To expose the same project copies to Claude Code without duplicating them:

```sh
mkdir -p "$project_dir/.claude/skills"
ln -s ../../.agents/skills/super-engineering-chat "$project_dir/.claude/skills/super-engineering-chat"
ln -s ../../.agents/skills/super-engineering-fable "$project_dir/.claude/skills/super-engineering-fable"
```

For the Claude Code hub-spoke command, workflow, tests, and scout agent:

```sh
mkdir -p ~/.claude/commands ~/.claude/workflows/tests ~/.claude/agents
cp skills/hub-spoke/commands/hub.md ~/.claude/commands/
cp skills/hub-spoke/workflows/hub-spoke.js ~/.claude/workflows/
cp skills/hub-spoke/workflows/tests/*.mjs ~/.claude/workflows/tests/
cp skills/hub-spoke/agents/codebase-memory-scout.md ~/.claude/agents/
```

It needs the codebase-memory MCP server with your repositories indexed. See [the skill](skills/hub-spoke/SKILL.md) for requirements and how to run its tests.

Inspect existing folders or links before installing; preserve any local customizations. Start a new agent session after installation so it can discover the skills.

## Use

Example request:

> Use $super-engineering-fable to brainstorm and debate this feature with Fable in super.engineering. Have Fable choose Sonnet, Opus, or Fable workers according to task difficulty while Codex orchestrates and verifies the result.

Use `$super-engineering-chat` for direct agent interaction in the app.

In Claude Code, run a hub:

```
/hub add rate limiting to the login endpoint
/hub --read-only where is session expiry enforced?
```

Fable scouts with Sonnet, shows a plan table, and waits for approval before the `hub-spoke` workflow runs anything.

The workflow needs super.engineering, supported computer-use tools, and access to the requested model integrations. The skills do not bundle software, model access, or credentials. They do not grant permission to deploy, publish, purchase services, or message people beyond the user's authorized task.

## Contributing

Keep each Imaji skill in its own directory with a `SKILL.md` entrypoint. Preserve companion links and align `agents/openai.yaml` metadata with the instructions. Validate the frontmatter and relative links before sharing changes.

When updating the catalogs, record the inventory date, retain source attribution, and distinguish installed, enabled, runtime-provided, linked, and cache-only entries. Do not add credentials or local session details. Local copies may differ from their upstream sources.

## License

The original Imaji skills, agent metadata, and documentation in this repository
are available under the [MIT License](LICENSE). Preserve the copyright and
license notice when copying or distributing them.

Imaji logos are excluded from the MIT license; see [brand asset terms](assets/README.md).
Third-party material remains subject to its respective authors' licenses.
Links in the catalogs do not grant rights to the linked projects.

## Credits

Maintained by [Tekno Imaji Nyata](https://github.com/Tekno-Imaji-Nyata). The Imaji logo includes variants for light and dark GitHub themes.

Third-party skills and plugins belong to their respective authors and retain their own licenses. This repository links to those projects; it does not relicense or redistribute their implementations. Brand assets remain Imaji’s.
