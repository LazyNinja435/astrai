# Skill: Test Strategy

## Purpose

Define a comprehensive test strategy for a feature, system, or release. Ensures testing is systematic and proportional to risk.

## When to Use

- Before implementing a significant feature
- Planning QA for a release
- User asks "what's our test strategy?"

## Required Inputs

- Feature or system requirements
- Risk assessment
- Project test infrastructure

## Workflow

1. Assess risk: what could go wrong, impact, likelihood
2. Define test levels: unit, integration, E2E, manual
3. Allocate testing effort proportional to risk
4. Identify what NOT to test (and why)
5. Document strategy using `.ai/templates/test-case.template.md` concepts

## Output

A test strategy document covering what, how, and when to test.

## Forbidden

- Testing everything equally — effort must match risk
- Ignoring non-functional testing (performance, security, accessibility)
- Creating a strategy that can't be executed

## Related

- Templates: `test-case.template.md`
- Skills: `test-case-design/SKILL.md`, `automation-planning/SKILL.md`
