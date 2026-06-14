# Skill: Decision Record Writing

## Purpose

Document architectural and project decisions with context, alternatives, and rationale. Creates a durable decision log.

## When to Use

- Making an architectural decision
- Recording why a technology was chosen or rejected
- Documenting tradeoffs for future context

## Required Inputs

- The decision made
- Alternatives considered
- The rationale for the choice

## Workflow

1. State the decision clearly
2. Explain the context: why was a decision needed?
3. List alternatives considered with pros and cons
4. Explain rationale for the choice
5. Document consequences (positive and negative)
6. Use `.ai/templates/decision-record.template.md`
7. Save the record as a write-once file at `.ai/memory/decisions/YYYY-MM-DD-<slug>.md` — there is no index to update; decisions are discovered by globbing the directory, newest first
8. If this decision supersedes an earlier one, follow the supersession rule in `rules/documentation/decision-records.md`: mark the old record's status Superseded with a pointer to the new record (do not rewrite its body)

## Output

A decision record file in `.ai/memory/decisions/`.

## Forbidden

- Recording decisions without context or rationale
- Omitting alternatives considered
- Writing opinions as facts
- Creating or maintaining a decisions index — record files are the only artifact

## Related

- Templates: `decision-record.template.md`
- Rules: `documentation/decision-records.md`
