# Skill: Dependency Review

## Purpose

Review project dependencies for security vulnerabilities, licensing issues, and maintenance status. Reduces supply chain risk.

## When to Use

- Adding or updating dependencies
- Periodic security audit
- Before a release

## Required Inputs

- Project dependency manifest (package.json, Cargo.toml, requirements.txt, etc.)
- Known vulnerability databases (CVE, GitHub Advisory)

## Workflow

1. List all direct and transitive dependencies
2. Check each for known CVEs or advisories
3. Check license compatibility
4. Assess maintenance status: last commit, release frequency, maintainer activity
5. Identify unmaintained or risky dependencies
6. Recommend actions: update, replace, or accept risk

## Output

A dependency review with risk assessment and recommendations.

## Forbidden

- Adding dependencies with known critical vulnerabilities
- Ignoring license incompatibilities
- Accepting risk without documenting the decision

## Related

- Rules: `security/dependency-risk.md`
- Agents: `security/security-reviewer.md`
