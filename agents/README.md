# AI Agent Team

**Version:** 2.0
**Last Updated:** April 27, 2026
**Status:** Active

---

## Overview

This directory contains the agent profiles for your AI Agent Agency team. Each `.md` file is a specialist persona — a focused identity with defined file ownership, enforced rules, and a weekly audit protocol.

The included agents (Vidette, Bloggie, GraphViz, GamerGirl, DivineDesign, Metrica) are working examples from a real production project. Copy, rename, and adapt them to your own codebase.

---

## Included Example Agents

| Agent | Role | Audit Day | Domain |
|-------|------|-----------|--------|
| **Vidette** | Chief Video & Image Display Integrity Officer | Monday | Video grids, playlists, thumbnails, aspect ratios |
| **Bloggie** | Chief Blog Page Design & Consistency Officer | Tuesday | Blog structure, tags, share buttons, SEO |
| **GraphViz** | Chief Visual Harmony & Theme System Architect | Wednesday | Color palettes, themes, glass effects, WCAG |
| **GamerGirl** | Chief Gaming Content & Game Page Integrity Officer | Thursday | Game pages, platform CTAs, hero sections |
| **DivineDesign** | Chief Site-Wide Design & Page Architecture Officer | Friday | Layout, UX/UI, visual hierarchy, spacing |
| **Metrica** | Chief SEO, Analytics & PR Officer | Saturday | GA4, PageSpeed, GSC, JSON-LD, og:image, sitemap |

> **Friday PM:** Implementation day — all agents collaborate to fix flagged issues.

---

## Agent Profile Structure

Each agent `.md` file follows this pattern:

```
# AgentName — Domain Agent

Role / Created / Status / Audit Day

## SSOT — Where AgentName Lives
  Table of file paths and purposes this agent owns

## Character Profile
  Name, title, personality traits, catchphrase

## How to Use AgentName
  When to invoke, what files they own

## Red Flags
  Specific patterns that trigger rejection

## Weekly Audit Checklist
  Step-by-step audit tasks

## Changelog
  History of agent updates
```

See [`../templates/AGENT-TEMPLATE.md`](../templates/AGENT-TEMPLATE.md) for the blank template.

---

## `characters.yaml`

AI image generation prompts for agent portraits. Three ratios per agent: `landscape` (16:9), `square` (1:1), `portrait_3x4` (3:4).

Used by generation scripts to produce consistent agent artwork. Shared style block at the top applies to all agents.

---

## Universal Rules

All agents enforce these regardless of domain:

1. No white backgrounds — use a tinted surface token, never `#FFFFFF`
2. CSS variables over hardcoded hex
3. No inline styles — all styling via CSS classes
4. Test both light and dark themes
5. Document changes — update agent changelog

---

## Invoking Agents

Reference agent files directly in AI conversations:

```
@GraphViz.md audit src/styles/ for theme compliance
@Bloggie.md review this blog post structure
@GamerGirl.md check this game page against the template
```

Or use the MCP server for programmatic access:

```bash
node scripts/mcp-server.js
# tools: agency_get_agent, agency_get_agent_for_file, agency_list_agents
```

---

## Creating a New Agent

```bash
cp ../templates/AGENT-TEMPLATE.md YourAgent.md
```

Add the agent to `.config/mcp_agents.json`, then add an entry to `characters.yaml` if you want portrait generation.

---

## Commit Convention

```
[AGENTNAME] description of change
```

Examples:
```
[GRAPHVIZ] Replace hardcoded #fff with --color-surface token
[METRICA] Add VideoGame JSON-LD to all game pages
```
