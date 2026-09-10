---
name: super-engineering-chat
description: Open, select, message, and control coding agents or editors through the super.engineering interface when the user requests that environment, including Claude Code, Codex, Pycode, and OpenCode.
---

# super.engineering agents and editors

The user requires opening, selecting, messaging, and controlling coding agents or editors requested through super.engineering to happen exclusively through the application's visible interface. This covers every provider or editor available there, including Claude Code, Codex, Pycode, and OpenCode. Verify availability in the application; these examples are not a claim that every integration is installed.

Do not substitute direct agent CLIs, orchestration APIs, standalone editor windows, or separate Codex tasks for these actions. Do not enable orchestration settings to bypass this preference.

- Locate the intended workspace, project, and existing conversation before sending. Match its content, not just a generic Claude Code tab label.
- Use supported computer-use tools to open the requested agent/editor, select its session, or enter and submit the authorized message inside super.engineering. Follow the current session's execution-routing rules for who operates the UI.
- If the requested integration or action is unavailable in super.engineering, report that limitation rather than silently moving the work to another interface.
- Preserve the user's requested scope and target branch. A request to create a PR does not authorize merging or deployment.
- Verify the submitted message appears and the intended agent accepts it. If submission is uncertain, inspect the conversation before retrying to avoid duplicates.
- Read-only CLI queries may inspect workspaces, sessions, or progress. Successful submission is not completion; report the agent's actual outcome or blocker.

This rule applies to agents and editors the user asks to operate through super.engineering. It does not reroute unrelated apps into super.engineering.

For a requested Fable-managed build, also read [super-engineering-fable](../super-engineering-fable/SKILL.md) for brainstorming, difficulty-based Sonnet/Opus/Fable worker routing, and integrated verification.
