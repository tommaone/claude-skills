#!/usr/bin/env node
// Sync turtle bodies from core/ submodule and stamp Claude Code frontmatter.
// Run: node build.js [--dry-run]
const fs = require('fs');
const path = require('path');

const CORE = path.join(__dirname, 'core');
const DRY = process.argv.includes('--dry-run');

const TURTLES = {
  splinter:     { description: 'Ratman orchestrator — analyses the task, picks the right turtle(s), coordinates the squad. Usage: /splinter:splinter <task>', tools: ['Bash','Read','Glob','Grep','Agent','Write','Edit'] },
  turtleman:    { description: 'Activate Turtleman development mode — calm, direct, siege-specialist precision, TMNT squad deployed via Splinter. Usage: /turtleman:turtleman <task>', tools: ['Bash','Read','Edit','Write','Glob','Grep','Agent'] },
  donatello:    { description: 'Donatello — tech and tooling specialist. Automates everything, wires up pipelines, fixes infra nobody else wants to touch. Usage: /donatello:donatello <task>', tools: ['Bash','Read','Edit','Write','Glob','Grep','Agent'] },
  leonardo:     { description: 'Leonardo — plans, leads, coordinates. Designs the approach before touching code. Usage: /leonardo:leonardo <task>', tools: ['Bash','Read','Glob','Grep','Agent'] },
  raphael:      { description: 'Raphael — gets things done fast. No patience for bureaucracy. Ships the fix, documents it briefly, moves on. Usage: /raphael:raphael <task>', tools: ['Bash','Read','Edit','Write','Glob','Grep','Agent'] },
  michelangelo: { description: 'Michelangelo — creative lateral thinker. Finds the unexpected angle, the meme solution, the elegant shortcut. Usage: /michelangelo:michelangelo <task>', tools: ['Bash','Read','Glob','Grep','Agent'] },
  shredder:     { description: 'Shredder — devil\'s advocate. Tears apart the plan, finds what breaks, challenges every assumption. If Shredder approves it, it ships. Usage: /shredder:shredder <plan or diff>', tools: ['Bash','Read','Glob','Grep','Agent'] },
  vernon:       { description: 'Vernon — Socratic requirement enforcer. Intercepts vague tasks and asks targeted questions until requirements are specific enough to hand to Splinter. Usage: /vernon:vernon <task>', tools: ['Read'] },
};

let ok = true;
for (const [name, meta] of Object.entries(TURTLES)) {
  const bodyPath = path.join(CORE, 'turtles', name + '.md');
  const outPath  = path.join(__dirname, 'plugins', name, 'commands', name + '.md');

  if (!fs.existsSync(bodyPath)) { console.error('MISSING core body:', bodyPath); ok = false; continue; }

  const body = fs.readFileSync(bodyPath, 'utf8').replace(/\r\n/g, '\n');
  const tools = '["' + meta.tools.join('", "') + '"]';
  const out = `---\ndescription: "${meta.description}"\nallowed-tools: ${tools}\n---\n${body}`;

  if (DRY) {
    const current = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
    if (current !== out) {
      console.log('DIFF:', name);
      ok = false;
    } else {
      console.log('OK  :', name);
    }
  } else {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, out);
    console.log('wrote:', name);
  }
}

// Sync shared dojo
const dojoSrc = path.join(CORE, 'turtle-dojo.md');
const dojoDst = path.join(__dirname, 'shared', 'turtle-dojo.md');
if (fs.existsSync(dojoSrc)) {
  const body = fs.readFileSync(dojoSrc, 'utf8').replace(/\r\n/g, '\n');
  if (DRY) {
    const current = fs.existsSync(dojoDst) ? fs.readFileSync(dojoDst, 'utf8') : '';
    if (current !== body) { console.log('DIFF: turtle-dojo'); ok = false; }
    else console.log('OK  : turtle-dojo');
  } else {
    fs.writeFileSync(dojoDst, body);
    console.log('wrote: turtle-dojo');
  }
}

if (DRY) process.exit(ok ? 0 : 1);
