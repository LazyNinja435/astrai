# Skill: Memory Update

## Purpose

Update project memory files with durable context. Ensures memory is current and useful across sessions.

## When to Use

- A durable architectural decision was made
- A new project constraint was identified
- New terminology or concepts were introduced
- An open question was resolved or a new one identified

## Required Inputs

- The information to record
- The target memory file (decisions, constraints, glossary, open-questions, project)

## Workflow

1. Assess: is this durable? Will it matter beyond this session?
2. Classify: what type of memory? (decision, constraint, term, question, project info)
3. Read the target memory file to check for existing entries
4. Write or update the entry following the appropriate template
5. Cross-reference related entries

## Output

Updated memory file with the new or updated entry.

## Forbidden

- Writing session-specific notes to memory
- Storing secrets or credentials
- Duplicating existing entries
- Deleting memory entries without user approval

## Related

- Protocols: `astrai/memory-update-flow.md`
- Templates: `decision-record.template.md`
- Rules: `project/memory-boundaries.md`
