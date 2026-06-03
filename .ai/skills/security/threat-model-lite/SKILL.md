# Skill: Threat Model Lite

## Purpose

Perform a lightweight threat model for a feature or system. Identifies key threats and mitigations without heavy process overhead.

## When to Use

- New feature handles sensitive data or authentication
- Before security review of a significant change
- User asks "what could go wrong?"

## Required Inputs

- System architecture and data flow
- Assets to protect (data, access, availability)

## Workflow

1. Identify assets: what are we protecting?
2. Identify threat actors: who might attack?
3. Map attack surface: entry points, APIs, data stores
4. For each threat, assess likelihood and impact
5. Propose mitigations for high-risk threats
6. Document findings with risk levels

## Output

A lightweight threat model with identified threats and mitigations.

## Forbidden

- Skipping threat modeling for security-sensitive features
- Creating overly complex threat models for simple features
- Treating threat modeling as a one-time activity

## Related

- Agents: `security/security-reviewer.md`
- Rules: `security/security-review.md`
