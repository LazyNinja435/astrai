# Skill: Startup

## Purpose

Guide an AI agent through the mandatory AstrAI startup sequence when entering the project.

## When to Use

- First invocation in a new session
- User says "start fresh" or "reload instructions"
- After major context changes

## Required Inputs

- Access to `AGENTS.md`, `.ai/manifest.json`

## Workflow

1. Read `AGENTS.md` — root dispatcher
2. Read `.ai/manifest.json` — discoverable index
3. Read `.ai/rules/rules.md` — rules dispatcher
4. Read `.ai/protocols/protocols.md` — protocol dispatcher
5. Load only the rule files relevant to the task from `.ai/rules/<category>/`
6. Load only the protocol files relevant to the task from `.ai/protocols/<category>/`
7. Identify relevant skills by their "When to Use" triggers
8. Confirm readiness with a brief summary of what was loaded

## Output

Confirmation that startup sequence is complete, with a list of loaded rules, protocols, and matched skills.

## Forbidden

- Loading all files just because they exist
- Skipping the dispatchers
- Loading rules or protocols not relevant to the current task

## Related

- Rules: `rules/rules.md`
- Protocols: `protocols/protocols.md`, `astrai/startup-flow.md`
