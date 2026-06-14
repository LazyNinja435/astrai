# Decision Records

## Rule: Record Durable Decisions

When making an architectural decision that will matter beyond the current session, record it as a write-once file in `.ai/memory/decisions/`. There is no decisions index — record files are the only artifact.

## Rule: One Write-Once File Per Decision

- Each decision gets its own file at `.ai/memory/decisions/YYYY-MM-DD-<slug>.md` containing the full context, alternatives, rationale, and consequences.
- Record files are write-once: after a record is created, the only permitted later edit is a status change (e.g. marking it Superseded with a pointer to the superseding record).
- Discover decisions by globbing `.ai/memory/decisions/`, newest first (filenames sort chronologically). Open a record's body only when its context matters to the task — do not bulk-load all records.
- Never create an index, ledger, or summary file that must be edited every time a decision is added. Shared mutable files conflict under concurrent contributors (see `rules/project/memory-events.md`).

## Rule: Use the Template

Use `.ai/templates/decision-record.template.md` for all record files. Include:
- What was decided
- Why it was needed (context)
- Alternatives considered
- Rationale for the choice
- Consequences (positive and negative)

## Rule: Date and Status

Every decision record must include a date and status (Proposed, Accepted, Superseded).

## Rule: Supersede, Never Rewrite

When a decision is superseded:

1. Create the new record file as usual.
2. Update the old record file's status to Superseded with a one-line pointer to the new record. Keep the file — it is the historical record. Do not rewrite its body.

## Rule: Cross-Reference

Link decision records to related constraints, decisions, and issues when applicable.
