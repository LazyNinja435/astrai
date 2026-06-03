# Skill: Dispatcher Maintenance

## Purpose

Create, update, and validate AstrAI dispatcher files (rules dispatcher, protocol dispatcher, manifest.json, AGENTS.md). Ensures dispatchers stay accurate as the project evolves.

## When to Use

- Adding or removing rules, protocols, skills, or agents
- Updating `.ai/manifest.json`
- Found a broken reference in a dispatcher

## Required Inputs

- The change to make (add, remove, rename)
- The current dispatcher file(s) to update

## Workflow

1. Identify which dispatcher(s) need updating
2. Read the current dispatcher file
3. Make the minimal change (add entry, remove entry, update path)
4. Verify all paths resolve to existing files
5. Verify no orphaned entries (paths that don't resolve)
6. Update manifest.json if paths changed

## Output

Updated dispatcher file(s) with all references resolving correctly.

## Forbidden

- Creating dispatcher entries for files that don't exist
- Removing entries without removing the referenced file
- Duplicating entries

## Related

- Files: `.ai/rules/rules.md`, `.ai/protocols/protocols.md`, `.ai/manifest.json`, `AGENTS.md`
