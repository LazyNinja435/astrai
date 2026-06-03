# Injection Risk

## Rule: Never Concatenate Into Commands

Do not build SQL queries, shell commands, or HTML output by concatenating user input. Use:
- Parameterized queries for databases
- Prepared statements for SQL
- Template engines with auto-escaping for HTML
- Proper argument arrays for shell commands

## Rule: Validate All Input

Every input from users, external APIs, files, or environment variables must be validated before use. Check:
- Type (string, number, etc.)
- Range (min/max)
- Format (email, URL, etc.)
- Length limits

## Rule: Escape Output

When rendering user-provided content in HTML, use proper escaping for the context (HTML entity encoding, URL encoding, JavaScript string escaping).

## Rule: Principle of Least Privilege

Code should run with the minimum permissions needed. Database connections should use least-privilege accounts. File operations should be scoped narrowly.
