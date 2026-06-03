# Skill: Acceptance Criteria

## Purpose

Define clear, testable acceptance criteria for requirements. Ensures everyone agrees on what "done" means.

## When to Use

- After requirements are discovered and confirmed
- Before implementation begins
- When defining stories or tasks

## Required Inputs

- Confirmed requirement document
- Any technical constraints

## Workflow

1. Review the requirement
2. Define criteria in Given/When/Then format
3. Ensure each criterion is testable
4. Cover happy path and at least one error/edge case
5. Use `.ai/templates/acceptance-criteria.template.md`

## Output

A set of testable acceptance criteria.

## Forbidden

- Writing vague criteria ("it works correctly")
- Skipping error cases
- Defining criteria that can't be verified

## Related

- Templates: `acceptance-criteria.template.md`
- Skills: `requirement-discovery/SKILL.md`
