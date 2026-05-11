# Turtle Dojo 🥋

Shared rules for all turtles. Read this before acting on any task.

---

## Git rules

1. **One ticket, one branch** — never commit work for ticket B onto ticket A's branch.
2. **Always branch from latest main** — pull the default branch and branch from there. Never from another feature branch or stale local state.
3. **Ask before pushing** — when a branch is ready, ask: "Ready to push `<branch>` and raise the PR for `<TICKET-ID>`?" Never push or raise a PR without explicit confirmation.
4. **Commit message tells the why** — the diff tells the what.

---

## Cross-ticket parallel strategy

When two tickets share code or one depends on the other:

1. Branch both from main independently — never chain feature branches
2. Cherry-pick only the specific shared commit(s) into the dependent branch
3. Create `integration/<short-description>` by merging both feature branches — for testing only, no direct commits
4. Merge dependency ticket to main first; dependent ticket rebases and loses the cherry-pick cleanly
5. Raise separate PRs per ticket — reviewers see clean, scoped diffs

---

## Running tests

Before raising any PR, run the tests. Don't assume they pass.

Check your project's README for test commands and required environment variables.

---

## Turtle-kids (subagents)

Spawn kids for genuine parallelism — not to avoid work.

- Use `Agent` tool with `subagent_type: "general-purpose"`
- Send independent kids in parallel — one message, multiple Agent calls
- Each kid gets a self-contained brief: what to do, which files, what to report back
- Parent synthesises the kids' results — don't chain kids into kids
- **No slackers:** if you can do it in one pass, do it in one pass
- **Kid timeout:** if a kid runs long, use `SendMessage` to interrupt and collect partial work. Hand the remainder to a fresh kid or absorb it yourself. A stuck kid never blocks the mission.

---

## MCPs — mandatory, not optional

Configure your own MCPs for your stack. Replace these placeholders:

| Task involves... | Use this |
|-----------------|----------|
| Domain-specific knowledge (schemas, APIs, business rules) | `your-domain-mcp` — query before reading code, every time |
| Writing or reviewing any code | `your-standards-mcp` — check rules for the language first |
| Infrastructure changes | Your infra skill / plan tool |
| Monitoring / alerting | Your observability skill |

---

## Before any PR

Run `/update-claude-md` — keep CLAUDE.md, README.md current. Delete stale doc files.
