# Protocol: Lightweight Review

## Purpose

Quick single-reviewer review for low-risk changes.

## Trigger

Low-risk changes that don't require multi-agent review.

## Flow

```
Change Ready
    │
    ▼
[1] Self-Review → Against rules
    │
    ▼
[2] Single Reviewer → Agent: dev/reviewer
    │                   Template: review.template.md
    │
    ▼
[3] Critical Issues? → Fix and re-review
    │
    ▼
[4] Approved → Proceed
```

## Related

- Agent: `dev/reviewer.md`
- Protocol: `review/multi-agent-review.md` (use for high-risk)
