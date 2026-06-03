# Protocol: Defect Triage Flow

## Purpose

Triage and analyze defects.

## Trigger

New defect reported.

## Flow

```
Defect Reported
    │
    ▼
[1] Reproduce → Confirm defect exists
    │
    ▼
[2] Triage → Severity, priority, scope
    │
    ▼
[3] Root Cause → Skill: qa/defect-analysis
    │              Template: defect-report.template.md
    │
    ▼
[4] Assign → To fix or backlog
```

## Related

- Skills: `qa/defect-analysis/`
- Templates: `defect-report.template.md`
