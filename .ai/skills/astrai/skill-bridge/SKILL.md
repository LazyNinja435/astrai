# Skill: Skill Bridge

## Purpose

Route development tasks to the appropriate Superpowers skill under `.ai/skills/dev/`. Ensures AstrAI uses upstream Superpowers skills instead of reimplementing them.

## When to Use

- Any development task that has a matching Superpowers skill
- When unsure which dev skill to use
- When a task spans multiple Superpowers skills

## Required Inputs

- The development task description
- Knowledge of available Superpowers skills (see `.ai/skills/dev/README.md`)

## Workflow

1. Identify the type of development task
2. Match to the Superpowers skill:
   - New feature/change → `writing-plans` → `executing-plans`
   - Bug fix → `systematic-debugging`
   - Code review request → `requesting-code-review`
   - Code review feedback → `receiving-code-review`
   - TDD → `test-driven-development`
   - Branch finish → `finishing-a-development-branch`
   - Multi-agent work → `dispatching-parallel-agents`
   - Design discussion → `brainstorming`
   - Writing skills → `writing-skills`
   - Git worktrees → `using-git-worktrees`
   - Finishing work → `verification-before-completion`
3. Load and execute the matched Superpowers skill
4. If no direct match, use the closest skill and note the gap

## Output

The output of the routed Superpowers skill.

## Forbidden

- Reimplementing Superpowers functionality in AstrAI skills
- Skipping available Superpowers skills in favor of ad-hoc approaches
- Treating Superpowers skills as optional when they match the task

## Related

- Skills: `.ai/skills/dev/` (all Superpowers skills)
- Readme: `.ai/skills/dev/README.md`
