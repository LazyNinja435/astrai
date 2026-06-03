# Protocol: Multi-Agent Review

## Purpose

Coordinate parallel code reviews from multiple specialized agents for high-risk changes.

## Trigger

High-risk or complex changes where a single reviewer might miss issues.

## Flow

```
Change Ready for Review
    │
    ▼
[1] Assess scope → Which domains affected?
    │
    ▼
[2] Select panel → reviewer + security-reviewer + architect as needed
    │
    ▼
[3] Prepare briefs → Each agent gets focused review brief
    │
    ▼
[4] Dispatch parallel → All agents review simultaneously
    │
    ▼
[5] Collect and de-duplicate → Merge findings
    │
    ▼
[6] Synthesize → Unified review report
    │
    ▼
[7] Present → To user/developer
```

## Related

- Skills: `dev/dispatching-parallel-agents/` (Superpowers)
- Agents: `dev/reviewer.md`, `security/security-reviewer.md`, `dev/architect.md`
