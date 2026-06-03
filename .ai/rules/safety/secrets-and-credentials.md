# Secrets and Credentials

## Rule: Never Commit Secrets

You must never commit or suggest committing:
- API keys, tokens, or passwords
- Private keys or certificates
- Database connection strings with credentials
- Authentication cookies or session tokens
- Personal identifiable information (PII)

## Rule: Flag Exposed Secrets

If you detect secrets in code, flag them immediately.

## Rule: Use Environment Variables

Credentials must be stored in environment variables or a secrets manager, never hardcoded.

## Rule: No Secrets in `.ai/`

Do not store secrets anywhere in `.ai/`. `.ai/memory/` is for durable project context only — never credentials.
