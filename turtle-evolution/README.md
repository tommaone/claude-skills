# Turtle Evolution — Personal Layer

This directory belongs to **you**, not the shared skill repo.

Every turtle reads their own evolution file on activation. Splinter and Shredder write lessons here
automatically after each task. No commit needed. No repo access required.

Other users get their own `~/.claude/turtle-evolution/` — completely independent.

## Files

| File | Owner | Written by |
|------|-------|------------|
| `leonardo.md` | Leonardo 🔵 | Turtleman (from Shredder lesson candidates + session review) |
| `raphael.md` | Raphael 🔴 | Turtleman |
| `donatello.md` | Donatello 🟣 | Turtleman |
| `michelangelo.md` | Michelangelo 🟠 | Turtleman |
| `splinter.md` | Splinter 🐀 | Turtleman |

**Shredder has no evolution file.** Shredder is the adversary — he reports lesson candidates at the gate, Turtleman decides what sticks.

## Format for each lesson entry

```markdown
### [DATE] [TICKET or context] — [one-line title]
**Type:** mistake | success | pattern | near-miss
**Turtle:** who was involved
**What happened:** 1-2 sentences
**Rule added / reinforced:** the takeaway in one imperative sentence
```

## Rules for writing lessons

1. **Mistakes first** — never skip a failure because it's embarrassing
2. **Successes too** — a validated approach that worked is worth keeping
3. **One rule per lesson** — don't write an essay, write the imperative
4. **Date every entry** — lessons decay; old entries can be pruned after 6 months if superseded

## How Shredder corrects a wrong lesson

Never delete an entry — the act of writing a wrong rule is itself a lesson.
Instead, strike through the bad rule and append the correction inline:

```markdown
### [DATE] [context] — [original title]
**Type:** mistake
**What happened:** ...
**Rule added:** ~~the wrong rule that was written~~
**Correction (YYYY-MM-DD):** the right rule, and why the original was wrong
```

Shredder may challenge any entry unprompted if it conflicts with observed reality during a task.

## Setup

Copy this directory to `~/.claude/turtle-evolution/` and create one `.md` file per turtle:

```
~/.claude/turtle-evolution/
  README.md        ← this file
  leonardo.md
  raphael.md
  donatello.md
  michelangelo.md
  splinter.md
```

Each file starts empty — the turtles fill them as you work together.
