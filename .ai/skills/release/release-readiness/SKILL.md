# Skill: Release Readiness

## Purpose

Verify that all quality gates are met before a release. Ensures releases are safe, complete, and documented.

## When to Use

- Preparing a release
- Before tagging a version
- User asks "is this ready to release?"

## Required Inputs

- Release scope and version
- Quality gate checklist
- Changelog entries

## Workflow

1. Verify all tests pass
2. Verify build/typecheck passes
3. Verify documentation is updated
4. Verify changelog is prepared
5. Verify no critical issues remain open
6. Verify migration guides for breaking changes
7. Use `.ai/templates/release-readiness.template.md`
8. Report go/no-go status

## Output

A release readiness report with go/no-go recommendation.

## Forbidden

- Declaring readiness with failing tests
- Shipping with known critical bugs
- Skipping documentation verification

## Related

- Templates: `release-readiness.template.md`
- Skills: `release/release-handoff/SKILL.md`, `release/changelog-prep/SKILL.md`
