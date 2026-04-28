# Agent Weekly Schedule

**Version:** 1.2
**Last Updated:** April 27, 2026
**Status:** Active

> **SINGLE SOURCE OF TRUTH:** `.config/mcp_agents.json`
> This document provides human-readable details. The canonical schedule data is in the JSON config.

---

## Weekly Audit Schedule

| Day | Agent | Audit Script | Output | Focus Areas |
|-----|-------|--------------|--------|-------------|
| **Monday** | Vidette | `audit-video-pages.ps1` | `AUDIT_video-pages.md` | Video grids, playlists, aspect ratios, youtube-grid.js loads |
| **Tuesday** | Bloggie | `audit-blog-posts.ps1` | `AUDIT_blog-posts.md` | PHP headers, tags, share buttons, YAML entries |
| **Wednesday** | GraphViz | `audit-theme-consistency.ps1` | `AUDIT_theme-consistency.md` | Theme vars, no white backgrounds, glass effects, WCAG |
| **Thursday** | GamerGirl | `audit-game-pages.ps1` | `AUDIT_game-pages.md` | Game pages, hub pages (gamedev/gaming), CTAs, hero sections |
| **Friday** | DivineDesign | `audit-layout-consistency.ps1` | `AUDIT_layout-consistency.md` | Hero structure, section spacing, responsive grids, glass panels |

---

## Detailed Daily Protocol

### Monday - Vidette (Video Display)

**Script:**
```powershell
pwsh -ExecutionPolicy Bypass -File scripts/audits/audit-video-pages.ps1
```

**Checks:**
- [ ] No duplicate youtube-grid.js loads
- [ ] All script tags have `$assetSuffix`
- [ ] Container IDs match JS render calls
- [ ] Playlist constants used (not hardcoded IDs)
- [ ] Column presets used (not inline objects)
- [ ] Aspect ratios correct (16:9 default)
- [ ] Hover effects working

**Files Audited:**
- `gamedev.php`, `gaming.php`, `diy.php`, `ai.php`, `youtube.php`
- `music.php`, `live.php`, `patreon.php`
- All `game/*.php` pages

---

### Tuesday - Bloggie (Blog Posts)

**Script:**
```powershell
pwsh -ExecutionPolicy Bypass -File scripts/audits/audit-blog-posts.ps1
```

**Checks:**
- [ ] PHP header variables present (`$activePage`, `$pageTitle`, `$pageUrl`, `$pageImage`)
- [ ] RES_ROOT defined defensively
- [ ] Required includes in order (head, header, share-buttons, footer)
- [ ] Tag anchor pattern correct (`../tags.php?filters=`)
- [ ] Share buttons via include (not inline)
- [ ] Recommended posts section (3 posts)
- [ ] YAML entry exists in blog-posts.yaml

**Files Audited:**
- All `blog/*.php` files (excluding template)

---

### Wednesday - GraphViz (Theme & Visual Design)

**Manual Review Protocol:**

**1. CSS Variable Audit**
```powershell
# Search for hardcoded white backgrounds
Select-String -Path "src/assets/css/*.css" -Pattern "#[Ff]{6}|background:\s*white" | Select-Object Path, LineNumber, Line
```

**2. Theme Toggle Test**
- [ ] Visit each major page
- [ ] Toggle between light/dark mode
- [ ] Verify no flash of wrong theme
- [ ] Check glass effects in both modes
- [ ] Verify text contrast is readable

**3. Color Consistency Check**
- [ ] Hero sections use correct theme gradients
- [ ] Cards use glass effects (not solid colors)
- [ ] Buttons have proper hover states
- [ ] Social buttons use brand colors

**Files Reviewed:**
- `theme-variables.css` - Single source of truth
- `all-themes.css` - Theme utilities
- All `*-theme.css` files (7 page-specific themes)
- `theme-toggle.js` - Toggle functionality

---

### Thursday - GamerGirl (Game Pages) + Cross-Team Review

**Script:**
```powershell
pwsh -ExecutionPolicy Bypass -File scripts/audits/audit-game-pages.ps1
```

**Checks:**
- [ ] Hero section with title and tagline
- [ ] Platform CTA buttons (Steam, itch.io, GameJolt)
- [ ] Tag badges use anchor pattern (`/tags.php?filters=`)
- [ ] Video sections use `video-grid-init.php`
- [ ] Column presets used (not inline objects)
- [ ] Images load with proper fallbacks
- [ ] No white backgrounds

**Files Audited:**
- `gamedev.php`, `gaming.php` (hub pages)
- All `game/*.php` pages (13 individual game pages)

**Cross-Team Review Protocol:**
1. GamerGirl runs audit first (game-specific)
2. Each agent reviews their audit output
3. Identify cross-domain issues (e.g., video card colors affect GraphViz)
4. Prioritize fixes by severity:
   - **CRITICAL:** Broken functionality, accessibility failures
   - **HIGH:** Visual inconsistencies, missing features
   - **MEDIUM:** Minor styling issues, optimization opportunities
   - **LOW:** Documentation updates, code cleanup

**Meeting Agenda:**
- GamerGirl: Game page & hub status
- Vidette: Video system status
- Bloggie: Blog compliance status
- GraphViz: Theme consistency status
- All: Cross-cutting concerns

---

### Friday - DivineDesign (Layout Consistency) + Implementation

**Script:**
```powershell
pwsh -ExecutionPolicy Bypass -File scripts/audits/audit-layout-consistency.ps1
```

**Checks:**
- [ ] Required includes (head.php, header.php, footer.php)
- [ ] Hero section structure (named class + H1)
- [ ] hero-title class only on headings (not `<p>`, `<div>`, `<nav>` — parallax `data-parallax-speed` exempted)
- [ ] Section spacing (py-4/py-5 on all `<section>` tags)
- [ ] Responsive grid (min 2 columns on tablet md+)
- [ ] Glass panel usage (glass-card/glass-holo on content panels)
- [ ] Inline style threshold (<30 lines OK, 30-80 warn, 80+ excessive)
- [ ] No white backgrounds (same as GraphViz rule)
- [ ] Container hierarchy (rows inside containers)
- [ ] CSS source: cross-file duplicate class definitions

**Files Audited:** All pages across page/, blog/, game/, ai/, vip/ directories + index.php

**Adding New Rules:** When new layout conventions are established via /frontend-design or team decisions, add checks to `audit-layout-consistency.ps1`. The script auto-discovers all content pages.

**Post-Audit Protocol:**
1. Fix CRITICAL and HIGH issues from all 5 agents' audits
2. Re-run affected audit scripts after fixes
3. Update day file with completed tasks
4. Prepare for weekend (no deployments)

---

## Startup Script Integration

The weekly schedule is integrated into `scripts/startup-session.ps1`:

```powershell
# Step 6: Day-specific audits
$dayOfWeek = (Get-Date).DayOfWeek

switch ($dayOfWeek) {
    'Monday' {
        Write-Host "  [VIDETTE] Monday video audit day"
        Write-Host "  Run: pwsh -File scripts/audits/audit-video-pages.ps1"
    }
    'Tuesday' {
        Write-Host "  [BLOGGIE] Tuesday blog audit day"
        Write-Host "  Run: pwsh -File scripts/audits/audit-blog-posts.ps1"
    }
    'Wednesday' {
        Write-Host "  [GRAPHVIZ] Wednesday theme audit day"
        Write-Host "  Run: pwsh -File scripts/audits/audit-theme-consistency.ps1"
    }
    'Thursday' {
        Write-Host "  [GAMERGIRL] Thursday game pages audit day"
        Write-Host "  Run: pwsh -File scripts/audits/audit-game-pages.ps1"
        Write-Host "  [ALL] Cross-team review after audit"
    }
    'Friday' {
        Write-Host "  [DIVINEDESIGN] Friday layout audit day"
        Write-Host "  Run: pwsh -File scripts/audits/audit-layout-consistency.ps1"
    }
}
```

Or run all audits in one sweep (e.g., pre-deploy):
```powershell
pwsh -File scripts/run-scheduled-audit.ps1 -All
```

---

## Audit Output Locations

| Agent | Output File | Format |
|-------|-------------|--------|
| Vidette | `storage/agency/audits/AUDIT_video-pages.md` | Markdown with per-page breakdown |
| Bloggie | `storage/agency/audits/AUDIT_blog-posts.md` | Markdown with pass/warn/fail status |
| GraphViz | `storage/agency/audits/AUDIT_theme-consistency.md` | Markdown with color/theme analysis |
| GamerGirl | `storage/agency/audits/AUDIT_game-pages.md` | Markdown with game page checklist |
| DivineDesign | `storage/agency/audits/AUDIT_layout-consistency.md` | Markdown with layout/structure analysis |

---

## Audit Result Handoff Protocol

This section defines how agents read, share, and act on each other's audit results.

### Audit Result Timeline

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         WEEKLY AUDIT FLOW                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   MONDAY (Vidette)                                                           │
│   └─ Runs audit-video-pages.ps1                                              │
│      └─ Writes: storage/agency/audits/AUDIT_video-pages.md                          │
│         └─ Includes game pages with video: gaming.php, game/*.php            │
│                                                                              │
│   TUESDAY (Bloggie)                                                          │
│   └─ READS: AUDIT_video-pages.md (for blog posts with videos)                │
│   └─ Runs audit-blog-posts.ps1                                               │
│      └─ Writes: storage/agency/audits/AUDIT_blog-posts.md                           │
│         └─ Tags video issues for Vidette                                     │
│                                                                              │
│   WEDNESDAY (GraphViz)                                                       │
│   └─ READS: AUDIT_video-pages.md + AUDIT_blog-posts.md                       │
│   └─ Manual theme review                                                     │
│      └─ Writes: storage/agency/audits/AUDIT_theme-consistency.md             │
│         └─ Tags styling issues for relevant agents                           │
│                                                                              │
│   THURSDAY (GamerGirl + ALL)                                                 │
│   └─ READS: ALL previous audit outputs                                       │
│   └─ Runs audit-game-pages.ps1                                               │
│      └─ Writes: storage/agency/audits/AUDIT_game-pages.md                           │
│         └─ Includes "Cross-Agent Findings" section                           │
│   └─ ALL agents review and discuss findings                                  │
│                                                                              │
│   FRIDAY (DivineDesign + Implementation)                                     │
│   └─ READS: ALL previous audit outputs                                       │
│   └─ Runs audit-layout-consistency.ps1                                       │
│      └─ Writes: storage/agency/audits/AUDIT_layout-consistency.md            │
│         └─ Hero structure, spacing, responsive grids, glass panels           │
│   └─ Fix issues by priority (CRITICAL → HIGH → MEDIUM)                       │
│   └─ Re-run affected audits after fixes                                      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Cross-Agent Findings Format

Every audit report MUST include a "Cross-Agent Findings" section at the end:

```markdown
## Cross-Agent Findings

### For Vidette (Video Display)
- [gaming.php:245] RSS feed using wrong aspect ratio
- [tankoff.php:180] Video cards missing hover-lift class

### For GraphViz (Theme)
- [blueballs.php:67] Hero section using hardcoded #3b82f6 instead of CSS var
- [botborgs.php:34] Glass panel has white background in light mode

### For Bloggie (Blog Posts)
- [gaming.php:450] Blog post cards not using glass-card class

### For GamerGirl (Game Pages)
- (From Vidette's Monday audit)
- [game/catgame.php] Missing video-grid-init.php include
```

### Agent Reading Responsibilities

| Agent | Must Read Before Audit | Look For |
|-------|------------------------|----------|
| **Vidette** (Mon) | Previous week's AUDIT_game-pages.md + AUDIT_layout-consistency.md | Game page video issues, layout findings |
| **Bloggie** (Tue) | AUDIT_video-pages.md | Blog posts with video issues |
| **GraphViz** (Wed) | Both Monday & Tuesday audits | Styling inconsistencies |
| **GamerGirl** (Thu) | All three prior audits | Game page issues from all domains |
| **DivineDesign** (Fri) | ALL four prior audits | Layout, spacing, hero, grid issues across all pages |

### Shared Pages (Multiple Agents Care)

These pages are audited by multiple agents:

| Page | Vidette | Bloggie | GraphViz | GamerGirl |
|------|---------|---------|----------|-----------|
| `gamedev.php` | ✅ Video grids | - | ✅ Theme | ✅ Hub page |
| `gaming.php` | ✅ Video grids, RSS | - | ✅ Theme | ✅ Hub page |
| `game/*.php` (13 pages) | ✅ Video sections | - | ✅ Theme | ✅ All checks |
| `blog/*.php` with videos | ✅ Video embeds | ✅ Blog structure | ✅ Theme | - |

### Thursday Cross-Team Review Agenda

1. **Read audit outputs** (5 min each)
   - `storage/agency/audits/AUDIT_video-pages.md` - Vidette's Monday findings
   - `storage/agency/audits/AUDIT_blog-posts.md` - Bloggie's Tuesday findings
   - Day file notes - GraphViz's Wednesday notes
   - `storage/agency/audits/AUDIT_game-pages.md` - GamerGirl's Thursday findings

2. **Identify cross-cutting issues** (10 min)
   - Issues that affect multiple agents
   - Shared pages with conflicting findings
   - Dependency chains (fix A before B)

3. **Assign Friday fixes** (5 min)
   - CRITICAL: Broken functionality → Fix immediately
   - HIGH: Visual bugs → Fix Friday
   - MEDIUM: Inconsistencies → Fix next week
   - LOW: Cleanup → Backlog

4. **Update day file** with assignments

---

## Emergency Protocol

If a critical issue is found outside the scheduled audit day:

1. **Document immediately** in the day file (`storage/[M-D].md`)
2. **Tag the responsible agent** in the issue description
3. **Fix before next scheduled audit** if possible
4. **Update the agent's changelog** with the fix

---

## Schedule Exceptions

| Exception | Action |
|-----------|--------|
| Holiday Monday | Move Vidette audit to Tuesday morning |
| Deployment Day | Run ALL audits before deployment |
| Major Release | Full audit cycle regardless of day |
| Emergency Fix | Document and audit affected area immediately |

---

## Agent Collaboration Protocol

When working on tasks that cross agent boundaries, follow this protocol:

### Quick Reference: Who to Consult

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CROSS-REFERENCE QUICK GUIDE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Task                          Primary Agent    Must Consult               │
│   ──────────────────────────    ─────────────    ─────────────              │
│   Add video page                Vidette          GraphViz (colors)          │
│   Add blog post                 Bloggie          GraphViz (glass styling)   │
│   Add blog with videos          Bloggie          GraphViz + Vidette         │
│   Change color palette          GraphViz         Vidette + Bloggie          │
│   Add new glass effect          GraphViz         Update theme-demo.php      │
│   Add hover animation           GraphViz         Vidette (video cards)      │
│   Tag system changes            PROTOCOL.md    Bloggie + Vidette          │
│   Add game page                 GamerGirl        Vidette + GraphViz         │
│   Add game hub section          GamerGirl        Vidette (video grids)      │
│   Gaming blog post              Bloggie          GamerGirl (cross-link)     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Collaboration Workflow

1. **Before starting work:** Check which agent owns the domain
2. **Read the agent file:** Follow their documented standards
3. **Consult related agents:** If task crosses boundaries
4. **Test visual changes:** Load `theme-demo.php` (GraphViz's showcase)
5. **Update changelogs:** In relevant agent files

### Cross-Agent Scenarios

| Scenario | Lead | Support | Verification |
|----------|------|---------|--------------|
| New game page | GamerGirl | Vidette, GraphViz | Hero section, videos, theme compliance |
| Game hub section | GamerGirl | Vidette | Video grid renders with presets |
| Blog with video embed | Bloggie | Vidette | Column preset used |
| Gaming blog post | Bloggie | GamerGirl | Cross-links to game pages |
| Theme color update | GraphViz | All | Full site visual audit |
| New tag category | PROTOCOL.md | Bloggie, Vidette, GamerGirl | Filtering works |

### Weekly Cross-Check (Thursday)

On Thursday review day, verify cross-agent consistency:

- [ ] Video cards use GraphViz's CSS variables
- [ ] Blog glass-card matches theme-demo.php examples
- [ ] All hover effects consistent across domains
- [ ] No white backgrounds anywhere (GraphViz's rule)
- [ ] Tag badges styled consistently (blog + video pages)

---

## Contact

**Schedule maintained by:** JenniNexus AI Agent Team
**Questions?** Check individual agent files:
- [Vidette.md](../agents/Vidette.md) - Video system
- [Bloggie.md](../agents/Bloggie.md) - Blog system
- [GraphViz.md](../agents/GraphViz.md) - Theme system
- [GamerGirl.md](../agents/GamerGirl.md) - Game pages & hubs
- [DivineDesign.md](../agents/DivineDesign.md) - Layout & UX
- [README.md](../README.md) - Full relationship graph

---

*"Consistency is credibility. Audits are how we maintain it."*
*"Separation of concerns + Unity of vision."*

