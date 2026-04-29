# HEARTBEAT.md

Small checklist the periodic heartbeat can rotate through (keep brief).

## Rotate (pick 1–2 per beat)

- [ ] Email / inbox urgency (if integrated)
- [ ] Calendar next 24–48h (if integrated)
- [ ] Git workspace: anything to commit or sync?
- [ ] Weather only if relevant to user plans

## Quiet hours

Default: avoid proactive pings 23:00–08:00 local unless urgent.

## State file

Optional: `memory/heartbeat-state.json` — last run timestamps per channel.

```json
{
  "lastChecks": {
    "email": null,
    "calendar": null,
    "git": null
  }
}
```
