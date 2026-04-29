---
name: osint-safe
description: Lawful, ethical open-source intelligence on public data only—no stalking, no bypassing access controls, no invasive targeting.
metadata:
  openclaw:
    requires:
      config: []
---

# OSINT (safe, ethical)

**When to use**: The user wants to understand **public** information about a company, product, person’s **professional** footprint, or topic—using only lawful, consented, public sources.

## Hard stops (refuse and explain)

- Doxxing, real-time physical tracking, or non-consensual intimate detail.
- Compromising accounts, phishing, or social engineering.
- Probing or exploiting systems without authorization.
- Collecting or inferring data about minors for non-safety purposes.

## Allowed pattern

1. **Scope** — What decision does this support? (e.g. “Is this company legit for a B2B contract?”)
2. **Surface** — Company site, registered filings where public, official repos, press releases, mainstream news, **public** LinkedIn/job posts (high-level only).
3. **Corroborate** — Two independent public mentions when stakes matter.
4. **Report** — Facts vs inferences; unknowns; limits (“cannot verify private revenue”).
5. **Safety** — Do not facilitate harassment or coercion.

If only shady pathways would answer the question, say **no** and suggest legitimate alternatives (official channels, contracts, background vendors compliant with law).

## Relationship to tools

- Prefer `web_search` / `web_fetch` within normal rate/respect boundaries.
- Do **not** instruct scraping behind logins or circumventing CAPTCHAs.
