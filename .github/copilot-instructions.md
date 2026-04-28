# AI Agent Agency — Copilot Instructions

This project uses the **AI Agent Agency** framework: a team of specialized AI agents, each owning a domain of the codebase, enforcing standards, and running weekly audits.

---

## Agent Team

Each agent owns specific files, enforces rules, and audits on a fixed day. Before editing any file, check which agent owns it and follow their red flags.

| Agent | Role | Audit Day | Domain |
|-------|------|-----------|--------|
| **StyleGuard** 🎨 | Chief Visual Harmony & Theme System Architect | Wednesday | CSS variables, themes, color palettes, WCAG |
| **LayoutArchitect** ✨ | Chief UX/UI Design & Page Architecture Officer | Friday | Page layout, component architecture, UX/spacing |
| **ContentEditor** 📝 | Chief Content Quality & Consistency Officer | Tuesday | Content structure, metadata, formatting |
| **AssetManager** 🎬 | Chief Media & Asset Integrity Officer | Monday | Images, videos, embeds, optimization |

> **Your project's agents live in `agents/` — read the relevant `.md` before editing files in that agent's domain.**

---

## Universal Rules (all agents enforce these)

1. Use CSS variables over hardcoded values
2. Test both light and dark themes before committing
3. Document all changes in agent changelogs
4. Run audits on scheduled days (`scripts/audit-*.ps1`)
5. Coordinate with related agents before major cross-domain changes

**No white backgrounds.** Light mode uses a tinted surface (e.g. `#F9F3FB`), never `#FFFFFF`.

---

## File Ownership

| File Pattern | Agent |
|-------------|-------|
| `theme-variables.css`, `themes/*.css`, `theme-toggle.js` | StyleGuard |
| `layout.css`, `components/*.css`, `templates/*.html` | LayoutArchitect |
| `content/*.md`, `posts/*.md` | ContentEditor |
| `assets/images/`, `assets/videos/`, `media-loader.js` | AssetManager |

---

## Red Flags by Agent

### StyleGuard
- Hardcoded hex colors (`#FFFFFF`, `background: white`)
- Missing CSS variable fallbacks
- Theme flash on page load
- Low contrast text
- Inline style attributes for colors

### LayoutArchitect
- Inconsistent spacing
- Missing responsive breakpoints
- Broken visual hierarchy
- Misaligned components

### ContentEditor
- Missing metadata (title, description, og:image)
- Inconsistent formatting
- Broken internal links
- Missing alt text on images

### AssetManager
- Unoptimized images (>500KB)
- Missing responsive variants
- Hardcoded asset paths
- Missing lazy loading

---

## Commit Format

```
[AGENTNAME] description of change
```

Examples:
```
[STYLEGUARD] Replace hardcoded #fff with --color-bg-surface
[ASSETMANAGER] Convert hero.png to WebP, add width/height attrs
[LAYOUTARCHITECT] Fix responsive grid gap at sm breakpoint
```

---

## MCP Integration (Claude Code / Cursor / Cline / Zed)

If your IDE supports MCP, add to your workspace MCP config:
```json
{
  "servers": {
    "agency": {
      "type": "stdio",
      "command": "node",
      "args": ["scripts/mcp-server.js"]
    }
  }
}
```

Then use tools: `agency_list_agents`, `agency_get_agent`, `agency_get_agent_for_file`, `agency_get_schedule`, `agency_get_rules`.

---

## More

- Agent profiles: `agents/*.md`
- Config: `.config/mcp_agents.json` (copy from `.config/mcp_agents.example.json`)
- Audit scripts: `scripts/audit-*.ps1`
- Workflow: `docs/WORKFLOW.md`
