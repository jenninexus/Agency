# AI Agent Agency — Copilot Instructions

This project uses the **AI Agent Agency** framework: a team of specialized AI agents, each owning a domain of the codebase, enforcing standards, and running weekly audits.

> **Customize this file** for your project — update the agent table, file ownership, and red flags to match your `agents/*.md` profiles and `.config/mcp_agents.json`.

---

## Agent Team

Each agent owns specific files, enforces rules, and audits on a fixed day. Before editing any file, check which agent owns it and follow their red flags.

| Agent | Role | Audit Day | Domain |
|-------|------|-----------|--------|
| **Vidette** 🎬 | Chief Video & Image Display Integrity Officer | Monday | YouTube grids, playlists, aspect ratios, thumbnails |
| **Bloggie** 📝 | Chief Blog Page Design & Consistency Officer | Tuesday | Blog structure, tags, SEO, share buttons |
| **GraphViz** 🎨 | Chief Visual Harmony & Theme System Architect | Wednesday | Color palettes, themes, glass effects, WCAG |
| **GamerGirl** 🎮 | Chief Gaming Content & Game Page Integrity Officer | Thursday | Game pages, platform CTAs, hero sections |
| **DivineDesign** ✨ | Chief Site-Wide Design & Page Architecture Officer | Friday | Layout, UX/UI, visual hierarchy, spacing |
| **Metrica** 📊 | Chief SEO, Analytics & PR Officer | Saturday | GA4, PageSpeed, GSC, JSON-LD, og:image, sitemap |

> **Agent profiles live in `agents/` — read the relevant `.md` before editing files in that agent's domain.**

---

## Universal Rules (all agents enforce these)

1. **No white backgrounds** — light mode uses `#F9F3FB`, never `#FFFFFF`
2. **CSS variables over hex** — theme-aware always
3. **No inline styles** — all styling via CSS classes
4. **Test both themes** — light and dark mode before committing
5. **Document changes** — update agent changelog
6. **Run audits** — scripts in `scripts/audits/audit-*.ps1`

---

## File Ownership

| File Pattern | Agent |
|-------------|-------|
| `youtube-grid.js`, `video-hover.js`, `media.css`, `playlist-constants.php` | Vidette |
| `blog/*.php`, `blog-post-template.php`, `share-buttons.php`, `blog-posts.yaml` | Bloggie |
| `theme-variables.css`, `all-themes.css`, `*-theme.css`, `theme-toggle.js` | GraphViz |
| `gamedev.php`, `gaming.php`, `game/*.php` | GamerGirl |
| `custom.css`, `main.css`, `templates/*.php`, `dev-only/*.php` | DivineDesign |
| `head.php`, `sitemap.xml`, `robots.txt`, JSON-LD blocks | Metrica |

---

## Red Flags by Agent

### Vidette
- Duplicate `youtube-grid.js` loads
- Missing `$assetSuffix` on script tags
- Hardcoded playlist IDs (use constants)
- Inline column objects (use presets)
- Wrong aspect ratio (default 16:9)

### Bloggie
- Missing PHP header vars (`$activePage`, `$pageTitle`, `$pageUrl`, `$pageImage`)
- Wrong tag anchor pattern (must use `../tags.php?filters=`)
- Inline share buttons (use include)
- Missing recommended posts section
- Missing YAML entry in `blog-posts.yaml`

### GraphViz
- Hardcoded `#FFFFFF` or `background: white`
- Hex colors instead of CSS variables
- Inline style attributes for colors
- Missing dark mode test
- WCAG contrast failure

### GamerGirl
- Missing hero section (title + tagline)
- Missing platform CTA buttons (Steam, itch.io, GameJolt)
- Wrong tag badge pattern (must use `/tags.php?filters=`)
- Missing `video-grid-init.php` include
- Orphan game page (not linked from `gamedev.php`)

### DivineDesign
- Missing required includes (`head.php`, `header.php`, `footer.php`)
- Missing hero section (named class + H1)
- `hero-title` on non-heading element
- Missing `py-4`/`py-5` on `<section>` tags
- Row outside container

### Metrica
- Missing `og:image` or `og:title`
- Missing JSON-LD schema block
- GA4 not firing on page
- Missing canonical URL

---

## Commit Format

```
[AGENTNAME] description of change
```

Examples:
```
[GRAPHVIZ] Replace hardcoded #fff with --color-bg-surface
[VIDETTE] Fix duplicate youtube-grid.js load on gaming.php
[GAMERGIRL] Add hero section to tankoff.php
[METRICA] Add VideoGame JSON-LD schema to game pages
```

---

## MCP Integration (Claude Code / Cursor / Cline / Zed)

`.vscode/mcp.json` is pre-configured. Start the server:

```bash
node scripts/mcp-server.js   # or: npm run mcp
```

**Tools:** `agency_list_agents`, `agency_get_agent`, `agency_get_agent_for_file`, `agency_get_schedule`, `agency_get_rules`

**Resources:** `agency://agents/<id>` (agent .md profile), `agency://config` (active config)

---

## More

- Agent profiles: `agents/*.md`
- Config: `.config/mcp_agents.json` (copy from `.config/mcp_agents.example.json`)
- Workflow: `docs/WORKFLOW.md`
- Schedule: `docs/SCHEDULE.md`
