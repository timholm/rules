const GENERAL = [
  { title: "Separate the work from the system", body: "Content is for people to browse. The skills and tasks are code, and they need opposite things." },
  { title: "Name folders and jobs for what they hold", body: "A folder called \"claude\" is a lie the moment you use a second tool." },
  { title: "If you'll edit it later, make it a variable", body: "Values buried in a paragraph mean rewriting prose every time a time or folder changes." },
  { title: "If you have many scheduled tasks, build a calendar", body: "Claude limits you in rolling 5-hour windows, so six jobs at 7am spend your morning while you sleep." },
  { title: "Give related jobs the same report shape", body: "Fifteen jobs reporting fifteen ways is fifteen puzzles before coffee." },
  { title: "Tell Claude to delete what it removed", body: "A note saying \"we no longer use option 3\" still puts option 3 in front of it. His reached for a deleted option twice in one month." }
];

const CODE = [
  { title: "Every line in your CLAUDE.md gets billed forever", body: "It is sent at the start of every conversation. One audit prompt cut his by more than 50%." },
  { title: "A rule in CLAUDE.md is a suggestion, a hook is a guarantee", body: "When the context fills up, Claude quietly stops following rules. A hook runs every time." },
  { title: "Learn just enough git. Four commands", body: "It turns \"undo what Claude just did to 30 files\" into one exact step." },
  { title: "Delete half your MCP servers", body: "His were 181.1k tokens across 298 tools, none in use. If a service has a CLI, use the CLI." },
  { title: "Your best model should judge, not type", body: "Three Sonnet subagents draft in parallel. Your strongest model reviews and never writes." },
  { title: "You are running one Claude. Run twelve", body: "Split a job by file ownership and the agents work at the same time instead of queueing." }
];

function render(el, rules, offset) {
  rules.forEach((r, i) => {
    const card = document.createElement("article");
    card.className = "card";
    const num = document.createElement("div");
    num.className = "count";
    num.textContent = "Rule " + (offset + i + 1);
    const h = document.createElement("h3");
    h.textContent = r.title;
    const p = document.createElement("p");
    p.textContent = r.body;
    card.append(num, h, p);
    el.appendChild(card);
  });
}

render(document.getElementById("general"), GENERAL, 0);
render(document.getElementById("code"), CODE, 6);
