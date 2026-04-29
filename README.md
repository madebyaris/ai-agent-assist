# ai-agent-assist

Opinionated **OpenClaw** (and **Hermes → OpenClaw** compatible) workspace: rules in `AGENTS.md`, identity in `SOUL.md`, and composable **skills** under `workspace/skills/`.

## Quick start

1. Clone or copy this repository.
2. Copy **`workspace/`** to your agent home (default **`~/.openclaw/workspace`**) **or** set **`agents.defaults.workspace`** (and per-agent **`workspace`** if you use multiple agents) in OpenClaw config.
3. Edit **`workspace/USER.md`** on the machine where the agent runs.
4. Merge the config example that matches your setup (see below) into **`~/.config/openclaw/openclaw.json`** (or **`OPENCLAW_CONFIG_PATH`**).
5. Restart the gateway or start a new session (`/new`) so bootstrap files and skills load. Verify skills with `openclaw skills list`.

## Repository layout

| Path | Purpose |
|------|---------|
| **`workspace/`** | Agent workspace: `AGENTS.md`, `SOUL.md`, `USER.md`, `TOOLS.md`, `HEARTBEAT.md`, `MEMORY.md`, `memory/`, `skills/`, `scripts/` |
| **`openclaw.example.json5`** | Minimal single-agent example: default workspace path, optional **`skills.load.extraDirs`** |
| **`openclaw.multi-agent.example.json5`** | Multi-agent example: **`agents.list`**, **`bindings`**, **`subagents`** defaults, **`tools.profile`**, optional **`agentToAgent`** |
| **`workspace/README.md`** | Workspace file reference, skill IDs, multi-agent pointer |

See also [OpenClaw docs](https://docs.openclaw.ai/), [agent workspace](https://docs.openclaw.ai/concepts/agent-workspace), [multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent), and [sub-agents](https://docs.openclaw.ai/tools/subagents).

## What you get

- **`workspace/AGENTS.md`** — Session startup, memory, red lines, group chats, heartbeats, **email/SMTP** guidance (dedicated mailbox before integrations), **multi-agent & sub-agents** (incl. sub-agent context: **`AGENTS.md` + `TOOLS.md` only**).
- **Skills** (`workspace/skills/*/SKILL.md`) — `coding-session`, `design-critique`, `research-stack`, `osint-safe`, **`subagent-brief`** (delegation / `sessions_spawn`).
- **`workspace/scripts/verify-citations.mjs`** — Lists unique URLs in a notes file for manual verification (no network calls).

This repo is a **portable template**, not a fork of OpenClaw itself.

**Hermes migration:** [Migrating from Hermes](https://docs.openclaw.ai/install/migrating-hermes).
