# Skill: Test Case Design

## Purpose

Design effective, maintainable test cases from requirements and acceptance criteria. Ensures test coverage is meaningful and complete.

## When to Use

- After requirements and acceptance criteria are defined
- Before writing test automation
- When expanding test coverage

## Required Inputs

- Requirements with acceptance criteria
- System under test context
- Risk assessment

## Workflow

1. Review acceptance criteria
2. Design test cases in Given/When/Then format
3. Cover: happy path, error cases, edge cases, boundary values
4. Ensure each test case is independently executable
5. Prioritize by risk and business value
6. Use `.ai/templates/test-case.template.md`

## Output

A set of well-designed test cases ready for implementation.

## Forbidden

- Writing test cases without clear expected results
- Duplicating coverage unnecessarily
- Designing tests that depend on execution order
- Ignoring edge cases and error conditions

## Related

- Templates: `test-case.template.md`
- Skills: `test-strategy/SKILL.md`
