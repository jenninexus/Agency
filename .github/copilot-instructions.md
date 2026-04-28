# AI Agent Agency — Copilot Instructions

This project uses the **AI Agent Agency** framework: a team of specialized AI agents, each owning a domain of the codebase, enforcing standards, and running weekly audits.

> **This is a template.** Replace the example agent table, file ownership map, and red flags below with your own agents from `agents/*.md` and `.config/mcp_agents.json`.

---

## Agent Team

| Agent | Role | Audit Day | Domain |
|-------|------|-----------|--------|
| **StyleGuard** 🎨 | Chief Visual Harmony & Theme System Architect | Wednesday | CSS variables, themes, color palettes, WCAG |
| **LayoutArchitect** ✨ | Chief UX/UI Design & Page Architecture Officer | Friday | Page layout, component architecture, UX/spacing |
| **ContentEditor** 📝 | Chief Content Quality & Consistency Officer | Tuesday | Content structure, metadata, formatting |
| **AssetManager** 🎬 | Chief Media & Asset Integrity Officer | Monday | Images, videos, embeds, optimization |

> Read `agents/<AgentName>.md` before editing files in that agent's domain.

---

## Universal Rules

1. Use CSS variables over hardcoded values — never hardcode color hex
2. Test both light and dark themes before committing
3. Document changes in the relevant agent's changelog
4. Run audits on scheduled days (`scripts/audit-*.ps1`)
5. Coordinate with related agents before cross-domain changes

---

## File Ownership

| File Pattern | Agent |
|-------------|-------|
| `theme-variables.css`, `themes/*.css`, `theme-toggle.js` | StyleGuard |
| `layout.css`, `components/*.css`, `templates/` | LayoutArchitect |
| `content/*.md`, `posts/*.md` | ContentEditor |
| `assets/images/`, `assets/videos/`, `media-loader.js` | AssetManager |

---

## Red Flags

### StyleGuard
- Hardcoded hex colors (`#FFFFFF`, `background: white`)
- Missing CSS variable fallbacks
- Theme flash on page load
- Inline style attributes for colors

### LayoutArchitect
- Inconsistent spacing or missing responsive breakpoints
- Broken visual hierarchy
- Misaligned components

### ContentEditor
- Missing metadata (title, description, og:image)
- Broken internal links, missing alt text

### AssetManager
- Unoptimized images (>500KB)
- Missing responsive variants or lazy loading
- Hardcoded asset paths

---

## Commit Format

```
[AGENTNAME] description of change
```

Examples:
```
[STYLEGUARD] Replace hardcoded #fff with --color-bg-surface
[ASSETMANAGER] Convert hero.png to WebP, add width/height attrs
[CONTENTEDITOR] Add og:image to about page
```

---

## MCP Tools (Claude Code / Cursor / Cline / Zed)

`.vscode/mcp.json` is pre-configured. Start the server: `npm run mcp`

| Tool | Returns |
|------|---------|
| `agency_list_agents` | All agents with roles + audit days |
| `agency_get_agent` | Full profile for one agent |
| `agency_get_agent_for_file` | Owner + red flags for a file path |
| `agency_get_schedule` | Weekly audit schedule |
| `agency_get_rules` | Universal rules + commit format |

**Resources:** `agency://agents/<id>` · `agency://config`

---

## Setup

```bash
cp .config/mcp_agents.example.json .config/mcp_agents.json
cp .vscode/settings.example.json .vscode/settings.json
# Edit both files for your project
```

See `docs/WORKFLOW.md` for the full edit + submodule sync flow.
