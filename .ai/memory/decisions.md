# Decisions

> This file stores durable architectural and project-level decisions. Add entries for decisions that matter beyond the current session.

---

## Decision: Use categorized folders with dispatchers instead of flat structure

**Date:** 2025-06-02
**Status:** Accepted

### Context
The original AstrAI structure used flat directories (e.g., `.ai/rules/safety-rules.md`, `.ai/skills/planning/SKILL.md`). As the project grew, flat organization made it impossible to tell which rules/skills/agents applied to which domain. Agents tended to load everything or nothing.

### Decision
Reorganize into categorized folders with dispatcher files:
- `.ai/rules/<category>/` with `.ai/rules/rules.md` dispatcher
- `.ai/skills/<domain>/` (dev, astrai, product-owner, qa, documentation, security, release)
- `.ai/agents/<category>/` with category READMEs
- `.ai/protocols/<category>/` with `.ai/protocols/protocols.md` dispatcher
- "Dispatchers before details" — agents read dispatchers first, then load only what applies

### Rationale
- Prevents context bloat — agents load only relevant files
- Clear domain boundaries — dev skills (Superpowers) vs AstrAI ops vs product vs QA
- Dispatchers provide a single entry point per concern
- Scales to many more rules/skills without overwhelming agents

### Consequences
- Old flat-structure decisions below are superseded
- Cross-references in examples and docs must use new paths
- New contributors need to understand the dispatcher pattern

---

## Decision: Use `.ai/` as the single source of truth for AI instructions

**Date:** 2025-06-02
**Status:** Accepted

### Context
Multiple AI coding tools each have their own configuration format. This fragments project intelligence across tool-specific configs.

### Decision
All AI operating instructions live under `.ai/` with `AGENTS.md` as the root dispatcher. No tool-specific config files are required.

### Rationale
- Single source of truth for all AI agents regardless of tool
- Human-readable Markdown and JSON
- Harness-agnostic: works with any AI coding tool

### Consequences
- Each harness must be configured to point to `.ai/`
- Tool-specific features not directly usable through AstrAI's generic interface

---

## Decision: Skills are triggered by conditions, not commands

**Date:** 2025-06-02
**Status:** Accepted

### Context
Traditional "commands" require the user to know what to invoke. AI agents should automatically select the right workflow.

### Decision
Skills have a "When to Use" section with specific triggers. When a trigger condition matches, the skill is mandatory.

### Rationale
- Reduces user burden
- Prevents agents from skipping important steps
- Consistent behavior across different tasks and agents

### Consequences
- Skill triggers must be precise to avoid false matches
- Users and agents should be able to override skill selection in edge cases

---

## Superseded Decisions

### Decision: Rules are laws, not guidelines (Superseded by categorized structure)
**Original Date:** 2025-06-02 | **Superseded:** 2025-06-02
The principle stands — rules are still laws — but the mechanism changed from individual flat files to categorized folders with a rules dispatcher.

### Decision: Superpowers integration for development skills (Superseded by category-based integration)
**Original Date:** 2025-06-02 | **Superseded:** 2025-06-02
Superpowers skills now live under `.ai/skills/dev/` with clear attribution and integration docs.
