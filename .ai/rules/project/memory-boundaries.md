# Memory Boundaries

## Rule: Memory Is Durable Project Context

`.ai/memory/` stores information that matters beyond a single session. Do not treat it as session scratch space.

## Rule: What Goes in Memory

- Architectural decisions → `decisions.md`
- Project-specific terminology → `glossary.md`
- Hard constraints → `constraints.md`
- Unresolved questions → `open-questions.md`
- Project overview → `project.md`

## Rule: What Does NOT Go in Memory

- Session-specific notes or temporary state
- TODO lists or task tracking
- Secrets, credentials, or API keys
- Personal user information
- Transient debugging notes
- Speculative or unconfirmed information

## Rule: Huddle Memory Is the Exception for Exploration

`.ai/memory/huddle/` is the one place exploratory, in-progress, and not-yet-decided architectural thinking may live. Huddle session logs are append-only conversation records, not durable decisions. When a huddle idea becomes a durable decision, promote it to `decisions.md` (with user approval); when it stays unresolved, record it in `open-questions.md`. Huddle files reference these canonical files — they do not duplicate them. The "no speculative information" rule above does not apply inside `.ai/memory/huddle/`; all other rules (no secrets, no personal data) still do.

## Rule: Update Sparingly

Only write to memory when the information will matter beyond the current session. If in doubt, ask the user before writing.

## Rule: Use Templates

When recording decisions, use `.ai/templates/decision-record.template.md`.
