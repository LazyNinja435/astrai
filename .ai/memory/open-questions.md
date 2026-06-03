# Open Questions

> Unresolved questions that need future attention. Add questions that matter beyond the current session.

---

## Design Questions

### Q: Should AstrAI define a standard format for skill/agent invocation across harnesses?
**Context:** Each harness (Cursor, Claude Code, Codex) has different invocation mechanisms. Should AstrAI define a standard "invocation interface" that adapters implement?
**Status:** Open
**Added:** 2025-06-02

### Q: Should `.ai/` support nested directories for skills?
**Context:** Currently skills are flat folders under `.ai/skills/`. For large projects, sub-organization might help (e.g., `.ai/skills/frontend/`, `.ai/skills/backend/`).
**Status:** Open
**Added:** 2025-06-02

### Q: Should AstrAI include a validation script?
**Context:** A simple script could validate that the manifest references resolve, templates are complete, and no broken links exist. This would add a dependency (a script runtime).
**Status:** Open
**Added:** 2025-06-02

## Process Questions

### Q: How should users override a skill trigger?
**Context:** Skills are triggered by conditions. In some edge cases, a user might want to skip a skill or use a different one. How should this be communicated?
**Status:** Open
**Added:** 2025-06-02

### Q: How should AstrAI handle project-specific extensions to the default rules?
**Context:** Projects will add custom rules. Should there be a convention for naming (e.g., `custom-*.md`) or a designated section in the manifest?
**Status:** Open
**Added:** 2025-06-02

---

> Move questions here when they're identified. Move them out when they're resolved (and record the answer as a decision).
