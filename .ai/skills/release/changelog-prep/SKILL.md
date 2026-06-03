# Skill: Changelog Prep

## Purpose

Generate and format a changelog from git history. Categorizes changes for clear, user-friendly release communication.

## When to Use

- Preparing a release
- User asks for "changelog" or "what's new"

## Required Inputs

- Git history since last release
- Release version
- Changelog format preference

## Workflow

1. Gather commits since last release
2. Categorize: features, fixes, breaking changes, improvements, chores
3. Write user-friendly descriptions (not raw commit messages)
4. Sort by importance: breaking changes first, then features, then fixes
5. Add any migration guidance for breaking changes
6. Link to relevant issues or PRs

## Output

A formatted changelog ready for release notes.

## Forbidden

- Including internal-only changes users don't care about
- Copying raw commit messages without editing
- Missing breaking change documentation

## Related

- Skills: `documentation/release-notes/SKILL.md`, `release/release-readiness/SKILL.md`
