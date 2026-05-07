# Agency Projects

This directory holds project-specific agent rosters — agents that belong to a particular website or app rather than serving as generic framework examples.

## Structure

```
projects/
├── jenninexus/     ← jenninexus.com — 7 agents (see agents/ for their profiles)
├── neophi/         ← neophi.club — 1 agent: Cipher
├── martiangames/   ← martiangames.com — 3 agents: GlassField, MissionControl, Orbiter
└── jerryvr/        ← jerry-vr.com — Vixel (also in agents/ as a cross-project example)
```

## How This Works

- **`agents/`** — Public showcase agents. Complete, polished examples that demonstrate the framework. Any project can adapt these.
- **`projects/<name>/`** — Project-specific agents. Tied to one codebase, one domain, one tech stack.

When you fork or adapt this repo:
1. Keep `agents/` as your reference team (or strip it and start fresh)
2. Create `projects/<your-project>/` for each site/app
3. Add agent `.md` files to each project directory
4. Point your project's `storage/agency/agents/` at these files (or copy them locally)

## Agent Roster by Project

| Project | Domain | Agents | Notes |
|---------|--------|--------|-------|
| jenninexus | jenninexus.com | 7 (see `agents/`) | PHP + Bootstrap + React islands |
| neophi | neophi.club | Cipher | PHP + Bootstrap, character universe |
| martiangames | martiangames.com | GlassField, MissionControl, Orbiter | PHP + Bootstrap, game studio |
| jerryvr | jerry-vr.com | Vixel | PHP + Bootstrap, Unity VR / horror |

## Adding a New Project

```
projects/
└── myproject/
    ├── AgentName.md   ← Copy from templates/AGENT-TEMPLATE.md
    └── README.md      ← Optional: project overview + agent list
```

The only rule: keep agent profiles public-safe (no credentials, no private paths, no personal data).
