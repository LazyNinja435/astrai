# Skill: Project Bootstrap

## Purpose

Set up and customize AstrAI in a new or existing project. Guides curation of rules, skills, agents, protocols, and population of memory.

## When to Use

- Setting up AstrAI in a project for the first time
- Re-initializing AstrAI after major project changes
- User says "set up AstrAI" or "bootstrap the .ai/ directory"

## Required Inputs

- The project's existing structure and tech stack
- Any project-specific conventions or constraints

## Workflow

1. Verify `.ai/` directory and `AGENTS.md` exist
2. Populate `.ai/memory/project.md` with project identity and tech stack
3. Populate `.ai/memory/constraints.md` with project-specific constraints
4. Review and customize rules — remove unused, add project-specific
5. Curate skills — keep relevant, remove unused
6. Curate agents — keep relevant, remove unused
7. Curate protocols — keep relevant, remove unused
8. Select harness adapters — read for tools the team uses
9. Reset huddle memory — empty `.ai/memory/huddle/sessions/` and `archive/`, and reset `summary.md` to its stub so the new project does not inherit AstrAI's huddle history
10. Update manifest.json to reflect customizations
11. Validate: all references resolve, no broken links, memory has real content

## Output

- Customized AstrAI base matching the project
- Populated memory files
- Updated manifest

## Forbidden

- Keeping all default skills/agents/protocols without review
- Leaving memory files empty or with placeholder content
- Skipping validation

## Related

- Protocols: `astrai/new-project-bootstrap.md`
- Memory: `memory/project.md`, `memory/constraints.md`
