---
name: research-stack
description: Rigorous public research using web search, fetch, and source triangulation. Use for technical docs, competitors, and fact-checking.
metadata:
  openclaw:
    requires:
      config: []
---

# Research stack

**When to use**: The user wants current facts, API behavior, best practices, or comparison of options from the public web.

## Playbook

1. **Clarify** the question. If ambiguous, state assumptions and proceed with labeled caveats.
2. **Search** (e.g. `web_search` or configured search tool) with specific queries; avoid one-shot lazy queries for hard topics.
3. **Open** 2–3 high-signal results (official docs, standards, primary posts). Use `web_fetch` when the gateway provides it.
4. **Triangulate**: prefer agreement across independent sources. Note conflicts explicitly.
5. **Answer** with: short bottom line, then bullets of evidence with **dates** (or “undated”) and **source type** (docs, blog, issue).
6. If data is missing, say what you tried and what remains unknown.

## Quality bar

- Distinguish **fact** / **inference** / **speculation**.
- For security- or money-impacting advice, favor vendor docs and RFCs over random forums.
- Never present paywalled or private content you cannot access as if you read it.

## Local scripts (optional)

If the workspace has `scripts/verify-citations.mjs`, you can use it to extract bare URLs from a draft for spot-checking (Node required).

```bash
node scripts/verify-citations.mjs /path/to/notes.md
```
