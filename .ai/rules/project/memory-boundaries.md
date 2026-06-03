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

## Rule: Update Sparingly

Only write to memory when the information will matter beyond the current session. If in doubt, ask the user before writing.

## Rule: Use Templates

When recording decisions, use `.ai/templates/decision-record.template.md`.
