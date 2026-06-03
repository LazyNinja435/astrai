# Skill: Regression Scope

## Purpose

Define the scope and selection of regression tests for a change or release. Ensures regression testing is focused and efficient.

## When to Use

- Before a release
- After a significant code change
- When deciding what to retest

## Required Inputs

- Change description or changelog
- Test inventory or test suite
- Risk assessment

## Workflow

1. Analyze what changed: files, modules, APIs
2. Map changes to affected test areas
3. Select regression tests: impacted areas + high-risk areas
4. Balance breadth vs. depth: smoke tests first, then deep dives
5. Document what was selected and why

## Output

A regression test scope definition: which tests to run and why.

## Forbidden

- Running all tests blindly without selection
- Skipping regression testing entirely
- Omitting high-risk areas from scope

## Related

- Skills: `test-strategy/SKILL.md`
