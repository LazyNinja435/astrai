# Dev Skills — Superpowers

This folder contains development skills copied directly from the upstream Superpowers repository by Jesse Vincent / obra.

**Source:** https://github.com/obra/superpowers/tree/main/skills
**License:** MIT (see `.ai/vendor/superpowers/LICENSE`)
**Attribution:** See `.ai/NOTICE.md`

## What's Here

These are the original Superpowers skills, preserved as-is. AstrAI does not rewrite, paraphrase, or duplicate these skills.

Available skills:
- `brainstorming/` — Generate and evaluate solution alternatives
- `dispatching-parallel-agents/` — Coordinate parallel agent work
- `executing-plans/` — Execute implementation plans step by step
- `finishing-a-development-branch/` — Clean up and prepare branch for merge
- `receiving-code-review/` — Process and act on code review feedback
- `requesting-code-review/` — Request and prepare for code review
- `subagent-driven-development/` — Delegate work to sub-agents
- `systematic-debugging/` — Systematically isolate and fix bugs
- `test-driven-development/` — Write tests before implementation
- `using-git-worktrees/` — Use git worktrees for parallel work
- `using-superpowers/` — How to use the Superpowers system
- `verification-before-completion/` — Verify changes before declaring done
- `writing-plans/` — Create structured implementation plans
- `writing-skills/` — Author and update skills

## Important

- **Do not edit these files** unless intentionally maintaining a fork.
- **Do not recreate or paraphrase** these skills as AstrAI-authored alternatives.
- **If skills are missing**, populate this folder from upstream: `git clone https://github.com/obra/superpowers && cp -r superpowers/skills/* .ai/skills/dev/`
- **For updates**, re-copy from upstream and review the diff.

## Usage in AstrAI

Development workflows should prefer these Superpowers skills. AstrAI-authored skills live under `.ai/skills/astrai/` and are for AstrAI-specific operations, not general development workflows.
