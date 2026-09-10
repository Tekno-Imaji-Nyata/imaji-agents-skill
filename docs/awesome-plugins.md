# Awesome Plugins

[← Back to Imaji Agent Skills](../README.md) · [Awesome Skills](awesome-skills.md)

**Inventory snapshot: September 10, 2026.** Plugin names are deduplicated across hosts and marketplaces. Versions below describe this installation, not a claim about the latest release.

“Enabled” is confirmed in Codex configuration. “Installed” comes from Claude Code’s registry and does not prove it is enabled in every session. “Linked” means shared plugin skills are exposed through user skill symlinks; it does not prove the associated connector is authenticated. Runtime-provided and cache-only entries are distinguished below.

## Directory


### Community and official integrations

- [claude-mem](#claude-mem)
- [codex](#codex)
- [ecc](#ecc)
- [fable-advisor](#fable-advisor)
- [frontend-design](#frontend-design)
- [impeccable](#impeccable)
- [playwright](#playwright)
- [ponytail](#ponytail)
- [rust-analyzer-lsp](#rust-analyzer-lsp)
- [superpowers](#superpowers)
- [thinking-skills](#thinking-skills)
- [vercel](#vercel)

### App-bundled tools

- [browser](#browser)
- [chrome](#chrome)
- [codex-app-tools](#codex-app-tools)
- [computer-use](#computer-use)
- [deep-research-work](#deep-research-work)
- [documents](#documents)
- [pdf](#pdf)
- [presentations](#presentations)
- [sites](#sites)
- [spreadsheets](#spreadsheets)
- [template-creator](#template-creator)
- [unified-computer-use](#unified-computer-use)
- [visualize](#visualize)

### Shared plugin skills

- [github](#github)
- [gmail](#gmail)
- [google-drive](#google-drive)
- [neon-postgres](#neon-postgres)
- [komand-widgets](#komand-widgets)

### Cache only

- [openai-templates](#openai-templates)

## Community and official integrations


### claude-mem

Memory compression system for Claude Code - persist context across sessions

[Source collection](https://github.com/thedotmack/claude-mem) · [Skill entries](awesome-skills.md#claude-mem)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `claude-mem-local` | `13.24.5` | enabled |
| Claude Code | `thedotmack` | `13.4.0` | installed |

### codex

Use Codex from Claude Code to review code or delegate tasks.

[Source collection](https://github.com/openai/codex-plugin-cc) · [Skill entries](awesome-skills.md#codex)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-codex` | `1.0.6` | enabled |
| Claude Code | `openai-codex` | `1.0.4` | installed |

### ecc

Engineering skills, agents, command wrappers, hooks, and review workflows.

[Source collection](https://github.com/affaan-m/ECC) · [Skill entries](awesome-skills.md#ecc)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `ecc` | `2.2.1` | enabled |
| Claude Code | `ecc` | `2.0.0-rc.1` | installed |

### fable-advisor

Architecture advice, worker coordination, and deliverable review. Its upstream model defaults differ from the Imaji Fable/Sonnet/Opus workflow.

[Source collection](https://github.com/DannyMac180/fable-advisor) · [Skill entries](awesome-skills.md#fable-advisor)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `fable-advisor` | `5.0.0` | enabled |
| Claude Code | `fable-advisor` | `5.0.0` | installed |

### frontend-design

Frontend design skill for UI/UX implementation

[Source collection](https://github.com/anthropics/claude-plugins-official) · [Skill entries](awesome-skills.md#frontend-design)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `claude-plugins-official` | `local` | enabled |
| Claude Code | `claude-plugins-official` | `3ea32df27be7` | installed |

### impeccable

Frontend design guidance, review, and refinement commands.

[Source collection](https://github.com/pbakaus/impeccable) · [Skill entries](awesome-skills.md#impeccable)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `impeccable` | `4.3.1` | enabled |
| Claude Code | `impeccable` | `3.5.0` | installed |

### playwright

Browser automation and end-to-end testing MCP server by Microsoft.

[Source collection](https://github.com/anthropics/claude-plugins-official)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `claude-plugins-official` | `local` | enabled |
| Claude Code | `claude-plugins-official` | `3ea32df27be7` | installed |

### ponytail

Lazy senior dev mode.

[Source collection](https://github.com/DietrichGebert/ponytail) · [Skill entries](awesome-skills.md#ponytail)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `ponytail` | `4.9.0` | enabled |
| Claude Code | `ponytail` | `4.7.0` | installed |

### rust-analyzer-lsp

Rust language server for code intelligence and analysis

[Source collection](https://github.com/anthropics/claude-plugins-official)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `claude-plugins-official` | `1.0.0` | enabled |
| Claude Code | `claude-plugins-official` | `1.0.0` | installed |

### superpowers

Core skills library for Claude Code: TDD, debugging, collaboration patterns, and proven techniques

[Source collection](https://github.com/obra/superpowers) · [Skill entries](awesome-skills.md#superpowers)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `superpowers-marketplace` | `6.3.0` | enabled |
| Codex | `claude-plugins-official` | `6.3.0` | enabled |
| Claude Code | `superpowers-marketplace` | `5.1.0` | installed |
| Claude Code | `claude-plugins-official` | `6.3.0` | installed |
| Shared skills | `Komand` | `local` | linked |

### thinking-skills

Mental models for decisions, critical thinking, and problem analysis.

[Source collection](https://github.com/tjboudreaux/cc-thinking-skills) · [Skill entries](awesome-skills.md#thinking-skills)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `thinking-skills-marketplace` | `1.0.0` | enabled |
| Claude Code | `thinking-skills-marketplace` | `1.0.0` | installed |

### vercel

Build and deploy web apps and agents

[Source collection](https://github.com/vercel/vercel-plugin) · [Skill entries](awesome-skills.md#vercel)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `claude-plugins-official` | `0.48.0` | enabled |
| Claude Code | `claude-plugins-official` | `0.48.0` | installed |

## App-bundled tools


### browser

Operate the app’s in-app browser.

Supplied by the host application; no verified public source for this exact plugin package. No `SKILL.md` entrypoint was found in this package.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `26.903.61454` | enabled |

### chrome

Operate Chrome browser sessions.

Supplied by the host application; no verified public source for this exact plugin package. No `SKILL.md` entrypoint was found in this package.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `26.903.61454` | enabled |

### codex-app-tools

Manage Codex tasks, projects, panels, and app workflows.

Supplied by the host application; no verified public source for this exact plugin package. No `SKILL.md` entrypoint was found in this package.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `0.1.3` | enabled |

### computer-use

Control desktop apps on macOS from ChatGPT through Computer Use.

Supplied by the host application; no verified public source for this exact plugin package. No `SKILL.md` entrypoint was found in this package.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `1.0.1000968` | enabled |

### deep-research-work

Conduct cited, multi-pass research inside the current Work or Codex session.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#deep-research-work).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-curated-remote` | `0.1.15` | runtime available |

### documents

Create and edit document artifacts in Codex, including Word files and Google Docs.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#documents).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-primary-runtime` | `26.905.11957` | enabled |

### pdf

Read, create, inspect, render, and verify PDF files in Codex.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#pdf).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-primary-runtime` | `26.905.11957` | enabled |

### presentations

Create, render, verify, and export slide decks.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#presentations).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-primary-runtime` | `26.905.11957` | enabled |

### sites

Build and deploy websites through the Sites integration.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#sites).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `0.1.66` | enabled |

### spreadsheets

Create, edit, analyze, visualize, render, and export spreadsheets, Microsoft Excel or Google Sheets-ready workbooks in Codex.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#spreadsheets).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-primary-runtime` | `26.905.11957` | enabled |

### template-creator

Create and update personal templates from files, Google Docs, Slides, and Sheets links, ImageGen or Product Design images, emails, Slack messages, and Site projects.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#template-creator).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-primary-runtime` | `26.905.11957` | enabled |

### unified-computer-use

Shared app-managed browser and desktop automation runtime.

Supplied by the host application; no verified public source for this exact plugin package. No `SKILL.md` entrypoint was found in this package.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `26.903.61454` | enabled |

### visualize

Create interactive charts, maps, diagrams, simulations, 3D models, data explorers, and UI previews directly in Codex.

Supplied by the host application; no verified public source for this exact plugin package. [Skill entries](awesome-skills.md#visualize).

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-bundled` | `1.0.32` | enabled |

## Shared plugin skills


### github

Inspect repositories, triage pull requests and issues, debug CI, and publish changes through a hybrid GitHub connector and CLI workflow.

[Source collection](https://github.com/openai/plugins) · [Skill entries](awesome-skills.md#github)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Shared skills | `Komand` | `local` | linked |

### gmail

Work with Gmail using the configured Gmail app connector.

[Source collection](https://github.com/openai/plugins) · [Skill entries](awesome-skills.md#gmail)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Shared skills | `Komand` | `local` | linked |

### google-drive

Use Google Drive as the single entrypoint for Drive, Docs, Sheets, and Slides work.

[Source collection](https://github.com/openai/plugins) · [Skill entries](awesome-skills.md#google-drive)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Shared skills | `Komand` | `local` | linked |

### neon-postgres

Manage Neon Serverless Postgres projects and databases with the neon-postgres agent skill and the Neon MCP Server

[Source collection](https://github.com/openai/plugins) · [Skill entries](awesome-skills.md#neon-postgres)

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Shared skills | `Komand` | `local` | linked |

### komand-widgets

Create live HTML widgets for the Komand canvas.

[Komand](https://komand.ai/) · [Skill entry](awesome-skills.md#komand-widgets). Local integration; published implementation not verified.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Shared skills | `Komand` | `local` | linked |

## Cache only


### openai-templates

OpenAI default document, presentation, and spreadsheet templates.

Supplied by the host application; no verified public source for this exact plugin package. No `SKILL.md` entrypoint was found in this package.

| Host | Marketplace / provider | Version | Evidence |
| --- | --- | --- | --- |
| Codex | `openai-curated-remote` | `0.1.1` | cached; activation unconfirmed |

## Using this list

Install through the source project’s documented route or the host’s plugin manager. Copying a `SKILL.md` does not install a plugin’s MCP servers, hooks, dependencies, credentials, or model integrations.

The two [Imaji orchestration skills](../README.md#imaji-skills) are maintained in this repository. The plugin catalog is a directory of external and app-provided tools, not a bundled installer. Plugins offered as recommendations but not found in the inspected installation are not listed.
