# Skill: Release Handoff

## Purpose

Prepare release handoff documentation including changelog, migration notes, and deployment instructions.

## When to Use

- Release is approved and ready for publication
- Handing off release to operations or deployment team

## Required Inputs

- Release version
- Changelog
- Migration notes (if breaking)
- Deploy instructions

## Workflow

1. Verify release readiness is confirmed
2. Compile release notes from changelog
3. Document breaking changes with migration guides
4. List deployment steps and rollback plan
5. Identify post-release monitoring and verification
6. Use `.ai/templates/handoff.template.md`

## Output

A release handoff document ready for the deployment team.

## Forbidden

- Releasing without documented rollback plan
- Omitting breaking changes from migration guide
- Publishing without explicit user approval

## Related

- Templates: `handoff.template.md`
- Skills: `release/release-readiness/SKILL.md`
