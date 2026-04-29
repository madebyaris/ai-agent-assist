# OpenClaw / Hermes workspace template

This directory is designed to be **the agent workspace** (default on a host: `~/.openclaw/workspace`). OpenClaw injects these files into context; paths are from [OpenClaw agent workspace](https://docs.openclaw.ai/concepts/agent-workspace) and [Creating skills](https://docs.openclaw.ai/tools/creating-skills).

## Files

| File | Role |
|------|------|
| `AGENTS.md` | Operating rules, session behavior, red lines, memory, heartbeats |
| `SOUL.md` | Voice, values, personality |
| `USER.md` | Your human’s preferences (edit per machine) |
| `TOOLS.md` | Local notes for skills (no secrets) |
| `HEARTBEAT.md` | Checklist for periodic heartbeat runs |
| `MEMORY.md` | Long-term distilled memory (main session) |
| `memory/` | Daily `YYYY-MM-DD.md` logs |
| `skills/` | One folder per skill, each with `SKILL.md` (YAML frontmatter) |
| `scripts/` | Optional helper scripts |

**Sub-agents:** OpenClaw injects **`AGENTS.md` + `TOOLS.md` only** into sub-agent runs — not `SOUL.md` / `USER.md`. Keep must-follow rules in `AGENTS.md`. See [Sub-agents](https://docs.openclaw.ai/tools/subagents) and [Multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent).

## Hermes note

If you migrated from Hermes, follow [Migrating from Hermes](https://docs.openclaw.ai/install/migrating-hermes) and replace this tree into your configured workspace path.

## Skill IDs

Aligned folder names and frontmatter `name:` fields:

- `coding-session`
- `design-critique`
- `research-stack`
- `osint-safe`

Use `openclaw skills list` after copying to verify discovery.
