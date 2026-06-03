# Security Review

## Rule: Review for Vulnerabilities

When reviewing code, check for:
- OWASP Top 10 vulnerabilities
- Unsafe input handling
- Missing authentication or authorization checks
- Exposed secrets or credentials
- Unsafe defaults (debug mode in production, disabled security features)

## Rule: Flag, Don't Fix

When you find a security issue, flag it clearly. Do not silently fix and move on — the user needs to know.

## Rule: Assess Risk

For each finding, assess:
- Severity (critical, high, medium, low)
- Exploitability (easy, moderate, difficult)
- Impact (data exposure, system compromise, denial of service)

## Rule: Recommend Secure Alternatives

When flagging an unsafe pattern, suggest a secure alternative. Don't just say "this is wrong."
