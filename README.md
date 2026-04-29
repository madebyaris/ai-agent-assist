# ai-agent-assist

Opinionated **OpenClaw** (and **Hermes → OpenClaw** compatible) workspace: rules in `AGENTS.md`, identity in `SOUL.md`, and composable **skills** under `workspace/skills/`.

## Quick start

1. Clone or copy this repository.
2. Copy `workspace/` to your agent home (default `~/.openclaw/workspace`) **or** set `agents.defaults.workspace` in OpenClaw config to point at `workspace/`.
3. Edit `workspace/USER.md` on the machine where the agent runs.
4. Restart the gateway or start a new session (`/new`) so bootstrap files and skills load.

See `workspace/README.md` and `openclaw.example.json5` for layout and config hints.

## What you get

- **AGENTS.md** — Merges OpenClaw’s template patterns (session startup, memory, red lines, groups, heartbeats) with broader missions: coding, design critique, research, and ethical OSINT-style discovery.
- **Skills** — `SKILL.md` playbooks for `coding-session`, `research-stack`, `osint-safe`, `design-critique`.
- **scripts/verify-citations.mjs** — Lists unique URLs in a notes file for manual verification (no network calls).

This repo is a **portable template**, not a fork of OpenClaw itself. For upstream behavior, see [OpenClaw docs](https://docs.openclaw.ai/).
