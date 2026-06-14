# Skill: Memory Update

## Purpose

Update durable curated memory with information that matters across sessions. Ensures memory is current, lean, and conflict-free.

## When to Use

- A durable architectural decision was made
- A new project constraint was identified
- New terminology or concepts were introduced
- An open question was resolved or a new one identified

Per-session LEARNINGS (clarifications answered, mistakes corrected, failures diagnosed, reusable observations) do NOT use this skill — they go through the event model via `astrai/memory-harvest`.

## Required Inputs

- The information to record
- The target: a decision record, or one of the curated files (constraints, glossary, open-questions, project)

## Workflow

1. Assess: is this durable? Will it matter beyond this session?
2. Route: if this is a per-session learning rather than curated context, use `astrai/memory-harvest` instead and stop here
3. Classify: what type of memory? (decision, constraint, term, question, project info)
4. For decisions: create a new write-once record file `.ai/memory/decisions/YYYY-MM-DD-<slug>.md` using the template — there is no index to update; decisions are discovered by globbing the directory, newest first
5. For curated files (`constraints.md`, `glossary.md`, `open-questions.md`, `project.md`): read the target file to check for existing entries, then write or update the entry
6. Cross-reference related entries

## Output

A new decision record file, or an updated curated memory file.

## Forbidden

- Writing session-specific notes to memory
- Storing secrets or credentials
- Duplicating existing entries
- Deleting memory entries without user approval
- Touching `events/` or `snapshots/` — those belong to `astrai/memory-harvest` and the fold script (see `project/memory-events.md`)

## Related

- Skills: `astrai/memory-harvest/SKILL.md`
- Protocols: `astrai/memory-update-flow.md`
- Templates: `decision-record.template.md`
- Rules: `project/memory-boundaries.md`, `project/memory-events.md`
