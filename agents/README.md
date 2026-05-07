# Agent Profiles

This directory contains the **showcase agent profiles** — the JenniNexus team, published as a working example of the framework. Each `.md` file is a specialist persona with defined file ownership, enforced rules, and a weekly audit protocol.

These agents demonstrate what a mature team looks like. Build your own by starting from [`../templates/AGENT-TEMPLATE.md`](../templates/AGENT-TEMPLATE.md) and configuring them in `.vscode/mcp.json`.

---

## Showcase Roster

| Agent | Audit Day | Domain | Accent |
|-------|-----------|--------|--------|
| [**Vidette**](Vidette.md) | Monday | Video grids, playlists, YouTube RSS, aspect ratios | Cyan `#66c0f4` |
| [**Bloggie**](Bloggie.md) | Tuesday | Blog structure, tags, share buttons, editorial quality | Gold `#FFB020` |
| [**GraphViz**](GraphViz.md) | Wednesday | Color palettes, themes, glass effects, WCAG | Purple `#A563D1` |
| [**GamerGirl**](GamerGirl.md) | Thursday | Game pages, platform CTAs, Steam hero sections | Pink `#FF2E88` |
| [**DivineDesign**](DivineDesign.md) | Friday | Layout, UX/UI, visual hierarchy, templates | Teal `#00D4AA` |
| [**Metrica**](Metrica.md) | Saturday | GA4, PageSpeed, GSC, JSON-LD, og:image, sitemap | Neon Green `#39ff14` |
| [**Vixel**](Vixel.md) | Sunday | VR game site, Unity integration, devlog pipeline | Orange `#FF6B4A` |

> **Friday PM:** Implementation day — all agents collaborate to fix flagged issues.

---

## Agent Profile Structure

Each `.md` file follows a consistent pattern:

```
# AgentName — Domain Agent

Role / Created / Status / Audit Day

## SSOT — Where AgentName Lives
  Table: file paths and purposes this agent owns

## Character Profile
  Name, title, personality, catchphrase, visual appearance

## How to Use AgentName
  When to invoke, what files they own

## Red Flags
  Patterns that trigger rejection

## Weekly Audit Checklist
  Step-by-step audit tasks

## Changelog
```

See [`../examples/StyleGuard.md`](../examples/StyleGuard.md) for a fully annotated example, and [`../examples/AgentRoster.md`](../examples/AgentRoster.md) for an example of a complete team roster doc.

---

## Shared Art Style

All agents share a base aesthetic — see [`../docs/ART-STYLE.md`](../docs/ART-STYLE.md) for the full guide. The shared setting is a luxury cyberpunk penthouse loft, futuristic rainy Seattle at night, with each agent's corner lit by their personal accent color.

Agent portrait generation prompts live in `characters.yaml` (gitignored — local only). See `ART-STYLE.md` for the documented style conventions and variant naming.

---

## Configuration SSOT

Agent metadata, schedules, and rules live in `.vscode/mcp.json` (copy from `.vscode/mcp.example.json`). The MCP server reads from this file — see [`../scripts/mcp-server.js`](../scripts/mcp-server.js).

```
// .vscode/mcp.json → agents: { vidette, bloggie, graphviz, gamergirl, divinedesign, metrica, vixel }
```

---

## Invocation

Reference agent files directly in AI conversations:

```
@GraphViz.md audit src/assets/css/ for theme compliance
@Bloggie.md review this blog post structure
@GamerGirl.md check this game page against the template
@Vixel.md audit the VR devlog pipeline
```

---

## Commit Convention

```
[AGENTNAME] description of change
```

Examples:
```
[GRAPHVIZ] Replace hardcoded #fff with --color-surface token
[VIDETTE] Fix column preset for gaming hub wide layout
[METRICA] Add VideoGame JSON-LD to all game pages
```
