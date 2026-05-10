# AI Agent Agency — Copilot Instructions

This project uses the **AI Agent Agency** framework: a team of specialized AI agents, each owning a domain of the codebase, enforcing standards, and running weekly audits.

> **This is a PUBLIC TEMPLATE.** Replace the example agents below with your own team defined in local `mcp.json` copied from `mcp.example.json`.

> **Boundary rule — DO NOT push project-specific content here.** This repo contains only generic, project-agnostic agent profiles. Project-specific customizations (page names, CSS filenames, audit findings, project-only agents, private MCP paths) belong in your consuming project's `projects/<project-name>/` directory (gitignored by the framework's `.gitignore`) or in local `mcp.json`. Agents that only exist in one project are NOT added to `agents/` here.

---

## Agent Team

| Agent | Role | Audit Day | Domain |
|-------|------|-----------|--------|
| **StyleGuard** 🎨 | Chief Visual Harmony & Theme System Architect | Wednesday | CSS variables, themes, color palettes, WCAG |
| **LayoutArchitect** ✨ | Chief UX/UI Design & Page Architecture Officer | Friday | Page layout, component architecture, UX/spacing |
| **ContentEditor** 📝 | Chief Content Quality & Consistency Officer | Tuesday | Content structure, metadata, formatting |
| **AssetManager** 🎬 | Chief Media & Asset Integrity Officer | Monday | Images, videos, embeds, optimization |
| **MetricsGuard** 📊 | Chief SEO, Analytics & Performance Officer | Saturday | JSON-LD, og:image, PageSpeed, crawl health |

> Read `agents/<AgentName>.md` before editing files in that agent's domain.

---

## Universal Rules

1. Use CSS variables over hardcoded hex — never hardcode colors
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
| `head.php`, `header.php`, `sitemap.xml`, `robots.txt` | MetricsGuard |

---

## Red Flags

### StyleGuard
- Hardcoded hex (`#FFFFFF`, `background: white`)
- Missing CSS variable fallbacks or theme flash on load
- Inline style attributes for colors

### LayoutArchitect
- Inconsistent spacing or missing responsive breakpoints
- Broken visual hierarchy or misaligned components

### ContentEditor
- Missing metadata (title, description, og:image)
- Broken internal links, missing alt text

### AssetManager
- Unoptimized images (>500KB), missing lazy loading
- Hardcoded asset paths or duplicate files

### MetricsGuard
- Missing JSON-LD on key page types
- og:image wrong dimensions (must be 1200x630)
- PageSpeed mobile below 70

---

## Commit Format

```
[AGENTNAME] description of change
```

Examples:
```
[STYLEGUARD] Replace hardcoded #fff with --color-bg-surface
[METRICSGUARD] Add VideoGame JSON-LD to all game pages
[ASSETMANAGER] Convert hero.png to WebP, add width/height attrs
```

---

## MCP Tools (Claude Code / Cursor / Cline / Zed)

Copy `mcp.example.json` to `mcp.json`, copy `.vscode/mcp.example.json` to `.vscode/mcp.json`, and start the server: `npm run mcp`

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
cp mcp.example.json mcp.json
cp .vscode/mcp.example.json .vscode/mcp.json
cp .vscode/settings.example.json .vscode/settings.json
# Edit mcp.json — update studio name, agent domains, file paths
npm run mcp
```

See `docs/WORKFLOW.md` for the full edit + submodule sync flow.
