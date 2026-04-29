---
name: subagent-brief
description: Spawn effective OpenClaw sub-agents — clear briefs, isolated vs fork context, no polling loops, cheaper models for workers.
metadata:
  openclaw:
    requires:
      config: []
---

# Sub-agent brief (OpenClaw)

**When to use**: Delegating **parallel research**, **long-running tasks**, or **heavy tool use** without blocking the main chat — via `sessions_spawn`, `/subagents spawn`, or equivalent.

## Before you spawn

1. **Self-contained brief** — Sub-agents receive **`AGENTS.md` + `TOOLS.md` only** (not `SOUL.md`, `USER.md`, `HEARTBEAT.md`). Put must-have constraints **in the task text** or ensure they live in `AGENTS.md` / `TOOLS.md`.
2. **Right context mode** (native sub-agents):
   - **`isolated` (default)** — Fresh child transcript. Use for independent research, implementation from a written spec, or anything you can fully specify in the prompt. **Lower token cost.**
   - **`fork`** — Branches the parent transcript into the child. Use **only** when the child needs prior conversation or tool results not practical to restate. Use rarely.
3. **Tool profile** — `sessions_spawn` is available on **`coding`** / **`full`** profiles by default. On **`messaging`**, add `tools.alsoAllow` for spawn tools or switch profile. Confirm with `/tools` in-session.

## Writing the task string

Include:

- **Goal** (one sentence) and **done criteria** (“return X”, “files changed under Y”).
- **Inputs** (paths, URLs, quoted constraints) — don’t assume the child saw the parent chat unless you used `fork`.
- **Forbidden** actions if relevant (e.g. “do not push to remote”).
- **Output shape**: bullets, patch summary, or structured JSON if orchestration needs it.

## After spawn — do not poll in a tight loop

Completion is **push-based**: the child announces back when done. Do **not** repeatedly call `/subagents list`, `sessions_list`, or `sessions_history` just to wait. Check status **only** for debugging or user-requested intervention.

Use **`sessions_history`** for bounded recall when synthesizing child output (sanitized). Inspect on-disk transcript path only when you need raw detail.

## Models and cost

Each sub-agent has **its own context and token usage**. Prefer a **cheaper / faster model** for children via `agents.defaults.subagents.model` or spawn overrides when the task is mechanical.

## Nesting (`maxSpawnDepth` ≥ 2)

Depth-1 can orchestrate depth-2 **workers**; depth-2 **cannot** spawn further. Stop/kill behavior **cascades** to children. Keep fan-out within **`maxChildrenPerAgent`**.

## Silent / skip behaviors

- Reply exactly **`ANNOUNCE_SKIP`** in the child if nothing should be posted back.
- **`NO_REPLY` / `no_reply`** suppresses announce noise when appropriate.

## Gateway restart

Announce delivery is **best-effort**; after a **gateway restart**, pending completion handoff may be **lost**. Don’t assume the child finished — verify if it matters.

## Related

- [Sub-agents](https://docs.openclaw.ai/tools/subagents)
- [Multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent)
- [Multi-agent sandbox and tools](https://docs.openclaw.ai/tools/multi-agent-sandbox-tools)
