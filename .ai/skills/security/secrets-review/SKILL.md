# Skill: Secrets Review

## Purpose

Audit codebase for accidentally committed secrets, credentials, and sensitive data. Prevents security breaches from exposed secrets.

## When to Use

- Before a public release or open-sourcing
- After major code contributions
- User asks "check for secrets" or "security audit"

## Required Inputs

- Codebase files to scan
- Known secret patterns (API key formats, token patterns)

## Workflow

1. Scan files for common secret patterns: API keys, tokens, passwords, private keys
2. Check environment files (.env, .env.local) for committed copies
3. Check configuration files for hardcoded credentials
4. Check git history for previously committed secrets
5. Flag all findings with severity
6. Recommend remediation: rotation, removal, .gitignore updates

## Output

A secrets audit report with findings and remediation steps.

## Forbidden

- Committing the audit report if it contains actual secrets
- Ignoring potential false negatives
- Recommending insecure remediation

## Related

- Rules: `safety/secrets-and-credentials.md`
- Agents: `security/security-reviewer.md`
