# Decision Record: Skills are triggered by conditions, not commands

**Date:** 2025-06-02
**Status:** Accepted

---

## Decision

Skills have a "When to Use" section with specific triggers. When a trigger condition matches, the skill is mandatory.

## Context

Traditional "commands" require the user to know what to invoke. AI agents should automatically select the right workflow.

## Rationale

- Reduces user burden
- Prevents agents from skipping important steps
- Consistent behavior across different tasks and agents

## Consequences

- Skill triggers must be precise to avoid false matches
- Users and agents should be able to override skill selection in edge cases
