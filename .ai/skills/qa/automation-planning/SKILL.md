# Skill: Automation Planning

## Purpose

Plan which tests to automate, at what level, and with what tools. Ensures automation investment pays off.

## When to Use

- Setting up test automation for a new project
- Expanding automation coverage
- Evaluating automation ROI

## Required Inputs

- Test strategy document
- Project tech stack and test infrastructure
- Existing test coverage

## Workflow

1. Review the test strategy
2. Identify candidates for automation: high-frequency, high-risk, regression-prone
3. Choose automation level: unit, integration, API, E2E
4. Select tools compatible with the tech stack
5. Estimate effort and ongoing maintenance cost
6. Prioritize by ROI: automate tests that catch regressions and run frequently first

## Output

An automation plan with prioritized test cases and tool recommendations.

## Forbidden

- Automating everything without ROI analysis
- Choosing tools not compatible with the project stack
- Ignoring test maintenance cost

## Related

- Skills: `test-strategy/SKILL.md`, `test-case-design/SKILL.md`
