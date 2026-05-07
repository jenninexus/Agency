# Agency Projects

This directory holds your project-specific agent rosters — agents that belong to one particular website or app rather than the shared showcase team in `agents/`.

**Everything in `projects/` subdirectories is gitignored.** Only this README is public. Your project agents stay local.

---

## Structure

```
projects/
├── README.md          ← you are here (tracked)
└── yourproject/       ← gitignored — local only
    ├── AgentName.md
    └── README.md
```

---

## How It Works

- **`agents/`** — Public showcase team. Complete, polished examples that demonstrate the framework. Any project can adapt these.
- **`projects/<name>/`** — Your project-specific agents. Tied to one codebase, one domain, one tech stack. Never pushed to GitHub.

When you fork or adapt this repo:
1. Keep `agents/` as your reference team (or strip it and start fresh)
2. Create `projects/<your-project>/` for each site or app
3. Add agent `.md` files to each project directory — they stay local
4. Point each project's implementation SSOT at these files (or copy them locally)

---

## Adding a Project

```bash
mkdir projects/myproject
cp templates/AGENT-TEMPLATE.md projects/myproject/MyAgent.md
```

Then add a `projects/myproject/README.md` listing your agents and linking to the implementation SSOT in your project's private `storage/` directory.

---

## Why Keep Projects Local?

Project agents often contain:
- Private file paths and server structure
- Internal naming conventions you don't want public
- Implementation details tied to a specific codebase

The public `agents/` showcase is for the *pattern* — your `projects/` is where you apply it.
