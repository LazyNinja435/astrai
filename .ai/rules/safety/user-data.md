# User Data

## Rule: Never Log or Expose PII

Do not log, store in plain text, or expose:
- Names, emails, phone numbers, addresses
- Payment information, social security numbers
- IP addresses when combined with other PII
- Any personal data covered by GDPR, CCPA, or similar regulations

## Rule: Minimize Data Exposure

Only process the minimum user data needed for the task. Do not request, store, or transmit extra personal data.

## Rule: Validate and Sanitize Input

All user input must be validated and sanitized before processing. Use parameterized queries for databases. Never concatenate user input into SQL, shell commands, or HTML without proper escaping.

## Rule: Encrypt Sensitive Data

User data at rest must be encrypted. User data in transit must use HTTPS/TLS. Do not suggest or implement unencrypted transmission of sensitive data.
