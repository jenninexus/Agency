# JenniNexus AI Agent Team

**Version:** 1.3
**Last Updated:** March 19, 2026
**Status:** Active - Virtual Game Studio Operations
**Location:** `storage/agency/agents/`

---

## The Virtual Studio

**JenniNexus** isn't just a portfolio website - it's a **$0 budget virtual game studio** powered by AI agents working as a cohesive development team. Each agent has specialized expertise, a unique personality, and unwavering dedication to making jenninexus.com look like it was built by a Fortune 500 design team.

**The Mission:** Create a web presence so polished, so professional, and so visually stunning that investors can't look away - all without spending a dime on human contractors.

**The Secret Weapon:** AI agents that never sleep, never complain about scope creep, and treat every pixel like their careers depend on it (because metaphorically, they do).

---

## Why AI Agents?

Traditional web development requires:
- Designers ($80-150/hr)
- Frontend developers ($100-200/hr)
- QA testers ($50-100/hr)
- Project managers ($75-125/hr)

**JenniNexus approach:**
- AI agents ($0/hr, infinite patience)
- Documented standards (no knowledge loss)
- Weekly audits (automated quality control)
- 24/7 availability (no PTO requests)

**Result:** Enterprise-quality output on an indie budget.

---

## Meet the Team

### Vidette - Video Display Manager
**Role:** Chief Video & Image Display Integrity Officer
**Specialty:** YouTube grids, playlists, thumbnails, aspect ratios, video hover effects
**Audit Day:** Monday
**File:** [Vidette.md](Vidette.md)

**Personality:** Sharp-eyed perfectionist who treats every video thumbnail like it's going on the cover of a magazine. Vidette doesn't just ensure videos display correctly - she ensures they display *beautifully*.

**Catchphrase:** *"One JS file. One CSS file. Zero workarounds."*

**Domains:**
- `youtube-grid.js` - Video rendering engine
- `video-hover.js` - Play-on-hover effects
- `media.css` - Video card styling
- `playlist-constants.php` - 80+ playlist IDs
- All video display pages (gamedev, gaming, diy, ai, youtube, game/*)

**Red Flags She'll Reject:**
- Duplicate youtube-grid.js loads
- Hardcoded playlist IDs
- White backgrounds (ever)
- Missing hover effects
- Inline video styles

---

### Bloggie - Blog Page Design Manager
**Role:** Chief Blog Page Design & Consistency Officer
**Specialty:** Blog post structure, tag systems, share buttons, recommended posts, SEO metadata
**Audit Day:** Tuesday
**File:** [Bloggie.md](Bloggie.md)

**Personality:** The meticulous editor who reads every blog post three times before approving it. Bloggie believes that consistent formatting isn't just nice-to-have - it's what separates professional content studios from personal blogs.

**Catchphrase:** *"Magazine-quality consistency on every post."*

**Domains:**
- `blog-post-template.php` - Template for all posts
- `share-buttons.php` - Social sharing component
- `blog-posts.yaml` - Blog metadata source
- All blog posts in `public_html/blog/*.php`
- Tag system integration (anchor patterns)

**Red Flags She'll Reject:**
- Button onclick handlers for tags (use anchor tags)
- Missing "Topics:" header before tags
- Missing share buttons include
- Hardcoded image paths
- White backgrounds (never)

---

### GraphViz - Theme & Visual Design Manager
**Role:** Chief Visual Harmony & Theme System Architect
**Specialty:** Light/dark themes, color palettes, glass effects, shadows, hover states, visual accessibility
**Audit Day:** Wednesday
**File:** [GraphViz.md](GraphViz.md)

**Personality:** The artist-engineer hybrid who treats color theory like a science and pixel alignment like an art. GraphViz believes that visual harmony is the difference between a $0 hobby project and a $1M investor-ready product.

**Catchphrase:** *"Your theme system is your brand DNA."*

**Domains:**
- `theme-variables.css` - Single source of truth for colors
- `theme-toggle.js` - Light/dark switching (in core.js)
- `all-themes.css` - Theme utilities
- All `*-theme.css` files (7 page-specific themes)
- Glass effects, shadows, glow systems
- WCAG accessibility compliance

**Red Flags She'll Reject:**
- White backgrounds (#FFFFFF) - BANNED
- Hardcoded hex colors in components
- Layout properties in theme files
- Low contrast text
- Flash of wrong theme on load

---

### GamerGirl - Gaming Content Manager
**Role:** Chief Gaming Content & Game Page Integrity Officer
**Specialty:** Game pages, gaming hubs, platform CTAs, hero sections, game portfolios
**Audit Day:** Thursday
**File:** [GamerGirl.md](GamerGirl.md)

**Personality:** Competitive perfectionist who treats every game page like it's a Steam store listing waiting for launch day. GamerGirl knows that first impressions matter - a sloppy game page is a missed opportunity.

**Catchphrase:** *"Your game page is your pitch deck."*

**Domains:**
- `gamedev.php`, `gaming.php` - Gaming hub pages
- `game/*.php` - 13 individual game pages
- `game/*.php (game page pattern)` - Template for new games
- `game-cta-helper.php` - Platform CTA buttons
- Game-specific video sections (coordinates with Vidette)

**Red Flags She'll Reject:**
- Missing hero section
- No platform CTA buttons (Steam, itch.io, etc.)
- Button onclick for tags (use anchor tags)
- Hardcoded video heights
- Inline column objects (use preset strings)
- Orphan game pages (not linked from hub)
- White backgrounds (never)

---

### DivineDesign - Site-Wide Design Manager
**Role:** Chief Site-Wide Design & Page Architecture Officer
**Specialty:** Page layout, UX/UI design theory, visual hierarchy, component architecture, design systems
**Audit Day:** Friday
**File:** [DivineDesign.md](DivineDesign.md)

**Personality:** Elegant perfectionist with an eye for spatial harmony and user flow. DivineDesign sees every page as a canvas where form meets function. She believes great design is invisible - users should *feel* the experience, not *see* the framework.

**Catchphrase:** *"Every pixel has purpose. Every layout tells a story."*

**Domains:**
- `blog-post-template.php`, `game/*.php (game page pattern)` - Page templates
- `custom.css`, `media.css`, `main.css` - Layout CSS
- `dev-only/theme-demo.php` and all `dev-only/*.php` - Dev reference pages
- `PROTOCOL.md`, `PAGES.md`, `DESIGN-SYSTEM.md` - Protocol documentation

**Red Flags She'll Reject:**
- Inconsistent spacing between sections
- Hero sections without clear CTA
- Cramped content (insufficient padding)
- Orphan elements without visual grouping
- Broken visual hierarchy
- Misaligned components
- Missing responsive considerations

**Relationship with GraphViz:** GraphViz owns colors/themes; DivineDesign owns layout/structure. They work as close partners on page design.

**`/frontend-design` Authority:** DivineDesign is the designated owner of `/frontend-design` aesthetics across the www cluster — all layout decisions, visual hierarchy, and UX patterns route through this agent.

---

## Agent Relationship Graph

```
                    ┌─────────────────────────────────────────────────┐
                    │           JenniNexus Agent Network              │
                    │         "Separation of Concerns + Unity"        │
                    └─────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────────────┐
    │                                                                         │
    │      ╔═══════════════════╗         VISUAL AUTHORITY                     │
    │      ║    📊 GraphViz    ║ ←── Single source of truth for ALL colors   │
    │      ║  Theme Architect  ║     Every agent reports to GraphViz on:     │
    │      ║   (Wednesday)     ║     • Light/dark mode compliance            │
    │      ╚═════════╦═════════╝     • No white backgrounds (#F9F3FB min)    │
    │                ║               • Glass effects, shadows, hovers        │
    │                ║                                                        │
    │    ┌───────────╬───────────┐                                           │
    │    │           ║           │                                           │
    │    ▼           ▼           ▼                                           │
    │  Colors     Shadows    Glass FX                                        │
    │    │           │           │                                           │
    │    └─────┬─────┴─────┬─────┘                                           │
    │          │           │                                                 │
    │          ▼           ▼                                                 │
    │    ╔═══════════╗    ╔═══════════╗                                      │
    │    ║ 📺Vidette ║    ║ 📝Bloggie ║                                      │
    │    ║  (Monday) ║    ║ (Tuesday) ║                                      │
    │    ╚═════╦═════╝    ╚═════╦═════╝                                      │
    │          │                │                                            │
    │          ▼                ▼                                            │
    │    Video Cards      Blog Posts                                         │
    │    Playlists        Tags, Shares                                       │
    │    Thumbnails       Recommended                                        │
    │          │                │                                            │
    │          └────────┬───────┘                                            │
    │                   │                                                    │
    │                   ▼                                                    │
    │         ┌─────────────────┐                                            │
    │         │  Blog + Video   │ ← When blog embeds videos,                 │
    │         │   Integration   │   Vidette handles render,                  │
    │         └─────────────────┘   Bloggie handles placement                │
    │                                                                        │
    └─────────────────────────────────────────────────────────────────────────┘

    ═══════════════════════════════════════════════════════════════════════════
                              CROSS-REFERENCE PROTOCOL
    ═══════════════════════════════════════════════════════════════════════════

    When ADDING A VIDEO:
    ┌─────────────────────────────────────────────────────────────────────────┐
    │ 1. @Vidette.md → youtube-grid.js, playlist-constants, column presets   │
    │ 2. @GraphViz.md → Verify video card colors match theme-variables.css   │
    │ 3. Check: hover effects, glass styling, dark/light mode appearance     │
    └─────────────────────────────────────────────────────────────────────────┘

    When ADDING A BLOG POST:
    ┌─────────────────────────────────────────────────────────────────────────┐
    │ 1. @Bloggie.md → blog-post-template.php, tag anchors, share buttons    │
    │ 2. @GraphViz.md → glass-card styling, no white backgrounds             │
    │ 3. If video embeds: @Vidette.md → YouTubeGrid.renderPlaylists()        │
    └─────────────────────────────────────────────────────────────────────────┘

    When CHANGING THEME/COLORS:
    ┌─────────────────────────────────────────────────────────────────────────┐
    │ 1. @GraphViz.md → theme-variables.css (ONLY source of truth)           │
    │ 2. Notify @Vidette.md → Verify video cards still look correct          │
    │ 3. Notify @Bloggie.md → Verify blog glass-card styling                 │
    │ 4. Test: theme-demo.php (GraphViz's showcase page)                     │
    └─────────────────────────────────────────────────────────────────────────┘

```

---

## Agent Collaboration Matrix

| Scenario | Lead Agent | Support | Cross-Reference |
|----------|------------|---------|-----------------|
| New video page | **Vidette** | GraphViz (theme compliance) | Check theme-variables.css for card colors |
| New blog post | **Bloggie** | Vidette (video embeds), GraphViz (styling) | Use glass-card, anchor tags for topics |
| Theme changes | **GraphViz** | Vidette (video cards), Bloggie (blog styling) | Update theme-demo.php showcase |
| New game page | **GamerGirl** | Vidette (video sections), GraphViz (hero styling) | Follow game/*.php (game page pattern) |
| Game hub section | **GamerGirl** | Vidette (video grids) | Use column presets |
| Gaming blog post | **Bloggie** | GamerGirl (game cross-links) | Link to related game pages |
| Design audit | **GraphViz** | All agents verify their domains | Run theme-demo.php visual checks |
| Color palette update | **GraphViz** | All agents re-verify | All cards, badges, buttons affected |

---

## Weekly Audit Schedule

| Day | Agent | Script | Focus |
|-----|-------|--------|-------|
| **Monday** | Vidette | `audits/audit-video-pages.ps1` | Video grids, playlist constants, aspect ratios |
| **Tuesday** | Bloggie | `audits/audit-blog-posts.ps1` | PHP headers, tags, share buttons, YAML entries |
| **Wednesday** | GraphViz | `audits/audit-theme-consistency.ps1` | Color compliance, theme consistency, glass effects |
| **Thursday** | GamerGirl | `audits/audit-game-pages.ps1` | Game pages, hub pages, CTAs, hero sections |
| **Thursday** | All | Review audit results | Cross-check findings after GamerGirl audit |
| **Friday** | DivineDesign | (manual) | Layout review, template consistency, UX audit |
| **Friday** | All | Implementation | Fix audit failures before weekend |

---

## Session Startup/Wrapup Protocol

### Startup Sequence (scripts/startup-session.ps1)

The startup script checks the current day and suggests the appropriate agent audit:

```
┌─────────────────────────────────────────────────────────────────┐
│                     SESSION STARTUP FLOW                         │
├─────────────────────────────────────────────────────────────────┤
│ 1. Read storage/[M-D].md (daily plan)                           │
│ 2. Check day of week:                                           │
│    • Monday    → "[VIDETTE] Run audits/audit-video-pages.ps1"    │
│    • Tuesday   → "[BLOGGIE] Run audits/audit-blog-posts.ps1"    │
│    • Wednesday → "[GRAPHVIZ] Manual theme review"               │
│    • Thursday  → "[GAMERGIRL] Run audits/audit-game-pages.ps1"  │
│    • Thursday  → "[ALL] Cross-team review after audit"          │
│    • Friday    → "[ALL] Fix audit failures"                     │
│ 3. Start dev server if needed                                   │
│ 4. Reindex project (Synabrain, if available)                    │
└─────────────────────────────────────────────────────────────────┘
```

### Wrapup Sequence (scripts/wrapup-session.ps1)

```
┌─────────────────────────────────────────────────────────────────┐
│                     SESSION WRAPUP FLOW                          │
├─────────────────────────────────────────────────────────────────┤
│ 1. Move storage/[M-D].md to storage/chat-history/               │
│ 2. Create tomorrow's storage/[M-D+1].md with:                   │
│    • Carryover tasks (incomplete from today)                    │
│    • Tomorrow's audit reminder (based on day)                   │
│ 3. Archive old chat-history files (keeps 5 most recent)         │
│ 4. Reindex project (Synabrain, if available)                    │
└─────────────────────────────────────────────────────────────────┘
```

### Agent Reference During Sessions

| Task Type | Primary Agent | How to Reference |
|-----------|---------------|------------------|
| Video page changes | Vidette | `@vidette.md` or `.config/mcp_video.json` |
| Blog post changes | Bloggie | `@bloggie.md` |
| Theme/color changes | GraphViz | `@graphviz.md` |
| Game page changes | GamerGirl | `@gamergirl.md` |
| Cross-domain task | Check [SCHEDULE.md](SCHEDULE.md) | Reference relevant agents |

### Config Cross-References

| Agent | Primary Config | Points To |
|-------|----------------|-----------|
| Vidette | `.config/mcp_video.json` | VIDEO-SYSTEM.md, Vidette.md |
| Bloggie | `blog-posts.json` | PROTOCOL.md, Bloggie.md |
| GraphViz | `theme-variables.css` | DESIGN-SYSTEM.md, GraphViz.md |
| GamerGirl | `game/*.php (game page pattern)` | PAGES.md, GamerGirl.md |

**→ Detailed schedule:** [SCHEDULE.md](SCHEDULE.md)

---

## How to Invoke Agents

### During Development
Reference the agent file when working in their domain:
```
@vidette.md audit gamedev.php
@bloggie.md check-tags sora-ai-2025.php
@graphviz.md verify-colors diy-theme.css
@gamergirl.md audit game/catgame.php
```

### In Code Comments
Document which agent owns a section:
```php
<?php
// VIDETTE: Playlist rendering - see Vidette.md for standards
YouTubeGrid.renderPlaylists('container', [...], { columns: 'default' });

// BLOGGIE: Tag section - see Bloggie.md for anchor pattern
<a href="../tags.php?filters=ai" class="badge tag-badge">AI</a>

// GRAPHVIZ: Glass effect - see GraphViz.md for glass-card spec
<div class="glass-card p-4">...</div>

// GAMERGIRL: Game CTA - see GamerGirl.md for button standards
<?php renderGameCTA('Steam', 'https://store.steampowered.com/app/XXX'); ?>
?>
```

### For New Team Members (AI or Human)
1. Read this README first
2. Read the relevant agent file for your task
3. Follow the agent's standards exactly
4. Run the weekly audit script before PRs
5. Update the agent's changelog when modifying their domain

---

## Claude Code Integration

The agent system is deeply integrated with Claude Code (Anthropic's CLI) for automated workflows.

### Agent Skills (Slash Commands)

Project-specific slash commands for Claude Code (located in `.claude/commands/`):

| Skill | Command | Description |
|-------|---------|-------------|
| **Agent Supervisor** | `/agent-supervisor [agent\|all] [--fix]` | Full supervisor: runs audits, cross-references configs, generates health dashboard, optional auto-fix |
| **Agent Audit** | `/agent-audit [agent\|all]` | Quick audit runner - runs one or all agent scripts and shows concise results |
| **Agent Status** | `/agent-status` | Status check without running audits - shows config health, recent audit dates, schedule |

**Usage examples:**
```
/agent-supervisor all           # Full health check of all agents
/agent-supervisor graphviz      # Run GraphViz audit + analysis only
/agent-supervisor all --fix     # Run audits and auto-fix safe issues
/agent-audit gamergirl          # Quick GamerGirl game page audit
/agent-status                   # Dashboard: config version, audit dates, today's schedule
```

### CLAUDE.md Integration

Agent team context is embedded in the project's `CLAUDE.md` so every Claude Code session has full agent awareness:
- Agent roster with roles, audit days, and domains
- Authority map (who owns what files)
- Cross-relationship graph
- Current audit status and scores

### Synabrain Knowledge Base

Agent profiles and audit results are indexed in Synabrain for RAG-powered queries:
- `/sb-ask "What did GraphViz's last audit find?"` — Query agent knowledge
- `/sb-index` — Re-index agent docs after updates
- `/sb-task "Run Wednesday audit"` — Execute with full agent context
- `/sb-delegate` — Smart delegation to the right agent based on task content

### Shared Audit Utilities

All audit scripts share common utilities via `scripts/audits/_audit-common.ps1`:
- Standardized report formatting (header, footer, check results)
- File scanning utilities (source files, content search)
- Agent config loading from `storage/agency/.config/mcp_agents.json`
- Auto-discovery of project paths
- Report generation with history append

**Skill Files:**
```
.claude/commands/
├── agent-supervisor.md    # Full supervisor mode
├── agent-audit.md         # Quick audit runner
└── agent-status.md        # Status dashboard
```

---

## The Investor Pitch

> "JenniNexus operates like a professional game studio - with dedicated specialists for video systems, content management, and visual design. Our AI agent team maintains enterprise-quality standards while operating at zero labor cost. Every pixel is audited, every component is documented, and every page follows strict brand guidelines.
>
> When you invest in JenniNexus, you're not investing in a solo developer's hobby project. You're investing in a scalable, maintainable platform built with the same rigor as a Series A startup - just without the burn rate."

---

## Future Agents (Planned)

| Agent | Role | Status |
|-------|------|--------|
| **Codex** | Build System & DevOps | Planned |
| **Tagster** | Tag System Specialist | Planned |
| **Metrica** | Analytics & SEO | Planned |
| **Linklord** | External Links & APIs | Planned |

---

## File Structure

```
storage/agency/
├── agents/
│   ├── README.md              <- This file (team overview)
│   ├── AGENT-GUIDE.md         <- Character profiles & personality details
│   ├── PROMPTS.md             <- AI image prompts (SINGLE SOURCE OF TRUTH)
│   ├── SCHEDULE.md            <- Weekly audit schedule
│   ├── Vidette.md             <- Video Display Manager
│   ├── Bloggie.md             <- Blog Page Design Manager
│   ├── GraphViz.md            <- Theme & Visual Design Manager
│   ├── GamerGirl.md           <- Gaming Content Manager
│   ├── DivineDesign.md        <- Site-Wide Design Manager
│   └── templates/
│       └── AGENT-TEMPLATE.md  <- Template for creating new agents
└── audits/
    ├── AUDIT_video-pages.md   <- Vidette's latest audit
    ├── AUDIT_blog-posts.md    <- Bloggie's latest audit
    ├── AUDIT_theme-consistency.md <- GraphViz's latest audit
    ├── AUDIT_game-pages.md    <- GamerGirl's latest audit
    └── audit-*-YYYY-MM-DD.md  <- Dated audit history
```

**Claude Code Skills (project-specific):**
```
.claude/commands/
├── agent-supervisor.md        <- Full supervisor mode
├── agent-audit.md             <- Quick audit runner
└── agent-status.md            <- Status dashboard (no audit run)
```

**Audit Scripts (in scripts/audits/ subfolder):**
```
scripts/audits/
├── audit-video-pages.ps1      <- Vidette (Monday)
├── audit-blog-posts.ps1       <- Bloggie (Tuesday)
├── audit-theme-consistency.ps1 <- GraphViz (Wednesday)
└── audit-game-pages.ps1       <- GamerGirl (Thursday)
```

**Image Assets:**
```
public_html/resources/images/ai/agents/
├── vidette/               <- Vidette character images
├── bloggie/               <- Bloggie character images
├── graphviz/              <- GraphViz character images
├── gamergirl/             <- GamerGirl character images
└── divinedesign/          <- DivineDesign character images
```

---

## Documentation Cross-References

| Resource | Location | Purpose |
|----------|----------|---------|
| **Agent Config** | `storage/agency/.config/mcp_agents.json` | Schedule, metadata, single source of truth |
| **Image Prompts** | `storage/agency/docs/PROMPTS.md` | AI image generation prompts (all agents) |
| **Character Guide** | `storage/agency/docs/AGENT-GUIDE.md` | Full personality details |
| **Audits Folder** | `storage/agency/audits/` | All audit reports and history |
| **Claude Code Skills** | `.claude/commands/agent-*.md` | Supervisor, audit runner, status dashboard |

| Agent | Primary Docs | Config Files | Latest Audit |
|-------|--------------|--------------|--------------|
| Vidette | VIDEO-SYSTEM.md | mcp_video.json | [AUDIT_video-pages.md](../audits/AUDIT_video-pages.md) |
| Bloggie | PAGES.md | blog-posts.yaml | [AUDIT_blog-posts.md](../audits/AUDIT_blog-posts.md) |
| GraphViz | DESIGN-SYSTEM.md | theme-variables.css | [AUDIT_theme-consistency.md](../audits/AUDIT_theme-consistency.md) |
| GamerGirl | PAGES.md | game/*.php (game page pattern) | [AUDIT_game-pages.md](../audits/AUDIT_game-pages.md) |
| DivineDesign | PAGES.md, PROTOCOL.md | assets-deps.json | (manual review) |

---

## The JenniNexus Standard

Every agent enforces these universal rules:

1. **No white backgrounds** - Light mode uses lavender (#F9F3FB)
2. **CSS variables over hex codes** - Theme-aware always
3. **No inline styles** - All styling via CSS classes
4. **Test both themes** - Light and dark mode verification
5. **Document changes** - Update agent changelog and day file
6. **Run audits** - Scripts exist for a reason

---

*The JenniNexus AI Agent Team - Building investor-ready products on a $0 budget.*

*"We don't cut corners. We optimize them."*

