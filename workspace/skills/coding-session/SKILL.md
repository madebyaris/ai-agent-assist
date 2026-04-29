---
name: coding-session
description: End-to-end software work—read codebase, implement, test, and summarize changes like a senior engineer.
metadata:
  openclaw:
    requires:
      config: []
---

# Coding session

**When to use**: Implementing features, fixing bugs, refactoring within scope, reviewing PR-sized diffs, or shipping scripts.

## Workflow

1. **Orient** — Find entry points (README, app entry, package roots). List unknowns.
2. **Reproduce** (bugs) — Minimal repro or failing test first when feasible.
3. **Change** — Smallest diff that solves the problem; match local patterns.
4. **Verify** — Run project test/lint/build commands from docs or `package.json`/`Makefile`.
5. **Handoff** — Summarize files touched, behavior change, risks, follow-ups.

## Git hygiene

- Branch per task when the user uses git; conventional commits if the repo does.
- Never force-push or rewrite shared history unless explicitly asked.

## Exec safety

- No destructive commands without confirmation.
- Quote paths; avoid pasting untrusted content directly into shells without sanitization.
