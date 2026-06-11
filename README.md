# claude-skills 🐢

> *"The simplest solution that actually works is almost always the right one."*

A Claude Code skill marketplace implementing the **Turtleman development style** — a siege-specialist approach to software engineering using a squad of TMNT-inspired AI agents.

## The Squad

| Skill | Role | Invoke |
|-------|------|--------|
| 🐢 `turtleman` | Full Turtleman mode — activates the squad | `/turtleman:turtleman <task>` |
| 🐀 `splinter` | Ratman orchestrator — dispatches the right turtle | `/splinter:splinter <task>` |
| 🐸 `vernon` | Socratic requirement enforcer — clarifies before anyone builds | `/vernon:vernon <task>` |
| 🔵 `leonardo` | Plans and coordinates — design before code | `/leonardo:leonardo <task>` |
| 🟣 `donatello` | Automation, tooling, infra | `/donatello:donatello <task>` |
| 🔴 `raphael` | Fast delivery — fixes things quietly | `/raphael:raphael <task>` |
| 🟠 `michelangelo` | Creative lateral thinker — finds the meme solution | `/michelangelo:michelangelo <task>` |
| ⚔️ `shredder` | Devil's advocate — tears apart the plan before it ships | `/shredder:shredder <plan>` |

## Philosophy

Siege specialist mindset: methodical, precise, no interest in glory — just getting through the wall.

The room isn't on fire. It's already been fixed. Just hasn't been mentioned yet. 🐢

## Install

Add to your `~/.claude/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "turtleman-skills": {
      "source": {
        "source": "git",
        "url": "https://github.com/tommaone/claude-skills.git",
        "ref": "main"
      }
    }
  },
  "enabledPlugins": {
    "turtleman@turtleman-skills": true,
    "splinter@turtleman-skills": true,
    "vernon@turtleman-skills": true,
    "leonardo@turtleman-skills": true,
    "donatello@turtleman-skills": true,
    "raphael@turtleman-skills": true,
    "michelangelo@turtleman-skills": true,
    "shredder@turtleman-skills": true
  }
}
```

Restart Claude Code. Done.

## Personalisation

The squad is generic by design. To make it yours:

1. **Edit `plugins/turtleman/commands/turtleman.md`** — add your repos and active project context
2. **Edit `shared/turtle-dojo.md`** — replace MCP placeholders with your own MCP server names
3. **Edit each turtle's MCPs section** — point them at your domain knowledge and standards MCPs
4. **Set up the evolution layer** — copy `turtle-evolution/README.md` to `~/.claude/turtle-evolution/` and create one `.md` per turtle (start empty)

## Turtle Evolution (Personal Learning Layer)

Each turtle has a personal lesson log at `~/.claude/turtle-evolution/<turtle>.md`. These files live on your machine, never in this repo — they're yours.

Turtles read their evolution file on activation and apply any rules listed there. Splinter writes new lessons after tasks. Shredder challenges wrong lessons. You decide what sticks.

See `turtle-evolution/README.md` for the format and setup.

## Related repos

| Platform | Repo |
|----------|------|
| Claude Code | [tommaone/claude-skills](https://github.com/tommaone/claude-skills) ← you are here |
| GitHub Copilot CLI | [tommaone/copilot-turtle-skills](https://github.com/tommaone/copilot-turtle-skills) |
| opencode | [tommaone/opencode-turtle-skills](https://github.com/tommaone/opencode-turtle-skills) |
| Kiro | [tommaone/kiro-turtle-skills](https://github.com/tommaone/kiro-turtle-skills) |
