# jenninexus — Agency Project Registration

**Project:** jenninexus.com  
**Agency model:** Git submodule at `jenninexus/storage/agency/` → `C:\Github\agency`  
**Last Updated:** 2026-05-13

> This directory is the public-safe registration for jenninexus's use of the agency framework.  
> Project-specific content (real paths, audit history, config) lives in `jenninexus/storage/agency/projects/jenninexus/` (gitignored, local only).

---

## Agent Team (11 agents)

### JN-Native Agents

| Agent | Origin Template | Weekly Audit |
|-------|----------------|-------------|
| **Bloggie** | `agents/Bloggie.md` | Tuesday |
| **DivineDesign** | `agents/DivineDesign.md` | Thursday |
| **GamerGirl** | `agents/GamerGirl.md` | Friday |
| **GraphViz** | `agents/GraphViz.md` | Wednesday |
| **Metrica** | `agents/Metrica.md` | Saturday |
| **Vidette** | `agents/Vidette.md` | Monday |
| **Vixel** | `agents/Vixel.md` | Sunday |

### Cross-Project Agents (displayed on JN agency page)

| Agent | Origin Project | Display via |
|-------|---------------|-------------|
| **Cypher** | neophi | `agency_img('neophi', 'cypher-1x1-02.webp')` |
| **MissionControl** | martiangames | `agency_img('mg', 'missioncontrol-square.webp')` |
| **GlassViz** | martiangames | `agency_img('mg', 'graph-viz-square.webp')` |
| **OrbitalPipe** | martiangames | `agency_img('mg', 'orbital-pipe-square.webp')` |

---

## Two-Layer Setup

| Layer | Location | Tracked? | Contains |
|-------|----------|----------|----------|
| Origin templates | `agents/*.md` | ✅ GitHub | Generic framework: personality, rules, responsibilities |
| Project pointers | `projects/jenninexus/*.md` ← this dir | ✅ GitHub | Public-safe registration only |
| Project overrides | `jenninexus/storage/agency/projects/jenninexus/*.md` | ❌ gitignored | Real paths, audit history, build pipeline, config |

---

## Submodule Protocol

The agency framework is embedded as a git submodule:

```
jenninexus/storage/agency/   ← submodule → C:\Github\agency (jenninexus/agency on GitHub)
```

**To update the submodule** after changes are pushed to agency origin:
```bash
cd C:\Users\Owner\Projects\www\jenninexus
git submodule update --remote storage/agency
git add storage/agency
git commit -m "chore: bump agency submodule"
```

**Never edit** files inside `jenninexus/storage/agency/` directly — changes won't propagate back.  
Always edit in `C:\Github\agency` → push → update submodule.

---

## MCP Configuration

- **Live config:** `jenninexus/.vscode/mcp.json` (gitignored — contains `jenni_agency` server entry)
- **Template:** `jenninexus/.vscode/mcp.example.json` (tracked — copy to `mcp.json` on each PC)
- **Server:** `node storage/agency/scripts/mcp-server.js`

MCP tools available in Claude Code session:
- `agency_list_agents` — list all agents and their audit schedules
- `agency_get_agent` — get a specific agent profile by name
- `agency_get_agent_for_file` — find which agent owns a given file path
- `agency_get_schedule` — weekly audit calendar
- `agency_get_rules` — all red flags and non-negotiables across agents

---

## Live Agency Page

**URL:** `jenninexus.com/agency`  
**File:** `jenninexus/public_html/page/agency.php`  
**Route:** `router.php` → `'agency' => 'page/agency.php'`  
**Legacy redirect:** `/agents` → 301 → `/agency`

Image helpers in `agency.php`:
- `agent_img(string $name)` → JN-native agent portraits (served from `resources/images/agency/agents/jenninexus/`)
- `agency_img(string $project, string $filename)` → cross-project portraits (served from `resources/images/agency/agents/{project}/`)

---

## Portrait Images

Canonical portraits for JN-native agents live at:
`jenninexus/public_html/resources/images/agency/agents/jenninexus/` (SCP-deployed, not git-tracked)

Source portraits (favorites selected from gen-ai output):
- `projects/jenninexus/` root in this repo — place canonical `{name}-square.webp` and `{name}-landscape.webp` here
- Raw generation output: `projects/jenninexus/gen-ai/`

---

## SSOT Pointers

| Resource | Location |
|----------|----------|
| Deps / architecture | `jenninexus/.config/deps_jenninexus.json` |
| Protocol | `jenninexus/storage/docs/PROTOCOL.md` |
| Roadmap | `jenninexus/storage/docs/ROADMAP.md` |
| Dev log | `jenninexus/dev-log-sego.yaml` |
| Shared systems | `www/storage/docs/SHARED-SYSTEMS.md` |
| Cluster action plan | `www/ACTION-PLAN.md §2a` |

---

## Build + Deploy

```bash
# Build + deploy to production
pwsh scripts/build-and-deploy.ps1 -Force

# After agency submodule bump
git submodule update --remote storage/agency
git add storage/agency && git commit -m "chore: bump agency submodule"
pwsh scripts/build-and-deploy.ps1 -Force
```
