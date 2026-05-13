# Agency Projects

This directory is intentionally mostly empty in the public repo.

Project-specific agent directories live here **locally only** — they are gitignored (`projects/*/`). Only this README and per-project public-safe pointer files are tracked.

See [`docs/PUBLIC-LOCAL-SPLIT.md`](../docs/PUBLIC-LOCAL-SPLIT.md) for the full design rationale.

---

## The Two-Layer Pattern

Every project using this framework has two layers:

| Layer | Location | Tracked? | Contains |
|-------|----------|----------|----------|
| **Origin template** | `agents/AgentName.md` | ✅ GitHub | Generic framework: personality, rules, responsibilities, red flags |
| **Project pointer** | `projects/{project}/AgentName.md` | ✅ GitHub | Public-safe: registers which agents the project uses, points to override |
| **Project override** | `{project}/storage/agency/agents/AgentName.md` | ❌ gitignored | Full working profile: real paths, audit history, deploy config, credentials |

**Critical rule:** Never push project-specific details (server IPs, API keys, real file paths, audit history) to `agents/*.md` or `projects/*/AgentName.md`. The origin files must remain generic and public-safe.

---

## Directory Structure

```
projects/
├── README.md                    ← this file (tracked)
│
├── jenninexus/                  ← gitignored — local only
│   ├── README.md                ← project registration (tracked via exception)
│   ├── landscape.webp           ← canonical agent portraits for site display
│   ├── square.webp
│   └── gen-ai/                  ← raw generation output (local only)
│
├── martiangames/                ← gitignored — local only
│   ├── MissionControl.md        ← public-safe project pointer (tracked)
│   ├── GlassViz.md
│   ├── OrbitalPipe.md
│   ├── missioncontrol-landscape.webp
│   ├── missioncontrol-square.webp
│   └── gen-ai/                  ← raw generation output (local only)
│
├── jerry-vr/                    ← gitignored — local only
│   ├── Vixel.md                 ← public-safe project pointer (tracked)
│   ├── vixel-landscape.webp     ← once favorite selected from gen-ai/
│   ├── vixel-square.webp
│   └── gen-ai/                  ← raw generation output (local only)
│
└── neophi/                      ← gitignored — local only
    ├── Cypher.md                ← public-safe project pointer (tracked)
    ├── cypher-16x9-01.webp
    ├── cypher-1x1-02.webp
    └── gen-ai/                  ← raw generation output (local only)
```

---

## Per-Project Guide

### jenninexus — jenninexus.com

**Agency model:** Git submodule at `jenninexus/storage/agency/` → `C:\Github\agency`

**Agents used:**

| Agent | Origin Template | Project Override | Live Display |
|-------|----------------|------------------|--------------|
| Bloggie | `agents/Bloggie.md` | `storage/agency/projects/jenninexus/Bloggie.md` | — |
| DivineDesign | `agents/DivineDesign.md` | `storage/agency/projects/jenninexus/DivineDesign.md` | — |
| GamerGirl | `agents/GamerGirl.md` | `storage/agency/projects/jenninexus/GamerGirl.md` | — |
| GraphViz | `agents/GraphViz.md` | `storage/agency/projects/jenninexus/GraphViz.md` | — |
| Metrica | `agents/Metrica.md` | `storage/agency/projects/jenninexus/Metrica.md` | — |
| Vidette | `agents/Vidette.md` | `storage/agency/projects/jenninexus/Vidette.md` | — |
| Vixel | `agents/Vixel.md` | `storage/agency/projects/jenninexus/Vixel.md` | `agency.php` via `agent_img()` |
| Cypher (neophi) | — | — | `agency.php` via `agency_img('neophi', ...)` |
| MissionControl (mg) | — | — | `agency.php` via `agency_img('mg', ...)` |
| GlassViz (mg) | — | — | `agency.php` via `agency_img('mg', ...)` |
| OrbitalPipe (mg) | — | — | `agency.php` via `agency_img('mg', ...)` |

**Live agency page:** `public_html/page/agency.php` — displays all 11 agents

**Image paths on server:**
- JN-native agents: `public_html/resources/images/agency/agents/jenninexus/{name}.webp`
- Cross-project (neophi, mg): `public_html/resources/images/agency/agents/{project}/{filename}`
- Served via `agent_img($name)` and `agency_img($project, $filename)` helpers in `agency.php`

**MCP setup:**
- `.vscode/mcp.json` (gitignored, live) — contains `jenni_agency` server entry pointing to `storage/agency/`
- `.vscode/mcp.example.json` — tracked template, copy to `mcp.json` on each PC
- MCP tools available in Claude Code session: `agency_list_agents`, `agency_get_agent`, `agency_get_agent_for_file`, `agency_get_schedule`, `agency_get_rules`

**Submodule protocol:**
```bash
# Update submodule to latest agency origin
cd C:\Users\Owner\Projects\www\jenninexus
git submodule update --remote storage/agency
git add storage/agency
git commit -m "chore: bump agency submodule"
```

**SSOT pointers:**
- Deps: `jenninexus/.config/deps_jenninexus.json`
- Protocol: `jenninexus/storage/docs/PROTOCOL.md`
- Roadmap: `jenninexus/storage/docs/ROADMAP.md`
- Dev log: `jenninexus/dev-log-sego.yaml`
- Build + deploy: `scripts/build-and-deploy.ps1 -Force`

---

### martiangames — martiangames.com

**Agency model:** Standalone local clone at `mg/storage/agency/` (not a submodule — manually synced)

**Agents used:**

| Agent | Origin Template | Project Override | Live Display |
|-------|----------------|------------------|--------------|
| MissionControl | `agents/DivineDesign.md` | `mg/storage/agency/agents/MissionControl.md` | `atlas.php` + JN `agency.php` |
| GlassViz | `agents/GraphViz.md` | `mg/storage/agency/agents/GlassViz.md` | JN `agency.php` |
| OrbitalPipe | `agents/GraphViz.md` | `mg/storage/agency/agents/OrbitalPipe.md` | JN `agency.php` |

**Live agency display:** MG agents appear on JN `agency.php` as cross-project entries via `agency_img('mg', ...)`

**Canonical portrait root:** `projects/martiangames/` (in this repo, local)
- `missioncontrol-landscape.webp` / `missioncontrol-square.webp` (no dash)
- `graph-viz-landscape.webp` / `graph-viz-square.webp`
- `orbital-pipe-landscape.webp` / `orbital-pipe-square.webp`

**Deployed portrait path:** `mg/html/resources/images/agents/{name}-{aspect}.webp` (SCP-deployed, not git-tracked)

**MCP setup:**
- `.vscode/mcp.json` in mg workspace (gitignored) — `mg_agency` server entry
- Copy from `.vscode/mcp.example.json` on each PC

**SSOT pointers:**
- Deps: `mg/.config/deps_mg.json`
- Protocol: `mg/storage/docs/PROTOCOL.md`
- Roadmap: `mg/storage/docs/ROADMAP.md`
- Dev log: `mg/dev-log-sego.yaml`
- Games SSOT: `mg/.config/games.yaml`
- Build + deploy: `scripts/build-all.ps1` then `scripts/deploy-mg.ps1 -Force`

**Atlas page:** MissionControl agent card lives on `mg/html/page/atlas.php` — uses `/images/atlas/mission-control-*.webp`

---

### jerry-vr — jerry-vr.com

**Agency model:** Local-only agency clone at `jerry-vr/storage/` (intentionally not a submodule)

**Agents used:**

| Agent | Origin Template | Project Override | Live Display |
|-------|----------------|------------------|--------------|
| Vixel | `agents/Vixel.md` | `jerry-vr/storage/agency/agents/Vixel.md` | (internal only) |

Single-agent model. Vixel owns all of jerry-vr.com.

**Canonical portrait root:** `projects/jerry-vr/` (in this repo, local)
- `vixel-1x1.png` — placeholder; awaiting user selection from `gen-ai/` (4 square variants, 4 landscape variants)
- Once selected: rename to `vixel-square.webp` and `vixel-landscape.webp`

**MCP setup:**
- `.vscode/mcp.json` in jerry-vr workspace (gitignored) — `jerry_agency` server entry
- `.vscode/mcp.example.json` — tracked template

**SSOT pointers:**
- Deps: `jerry-vr/.config/deps_jerry.json`
- Protocol: `jerry-vr/storage/docs/PROTOCOL.md`
- Roadmap: `jerry-vr/storage/docs/ROADMAP.md`
- Dev log: `jerry-vr/dev-log-sego.yaml`
- Deploy: SCP only — never git pull on prod

---

### neophi — neophi.com

**Agency model:** Local-only agency reference (not a submodule)

**Agents used:**

| Agent | Origin Template | Project Override | Live Display |
|-------|----------------|------------------|--------------|
| Cypher | _(custom — no direct origin template)_ | `neophi/storage/agency/agents/Cypher.md` | JN `agency.php` via cross-project |

Cypher is a project-native agent with no public origin template — it's unique to neophi.

**Canonical portrait root:** `projects/neophi/` (in this repo, local)
- `cypher-1x1-02.webp` — canonical square
- `cypher-16x9-01.webp` — canonical landscape
- `gen-ai/` — raw variants for reference

**Deployed portrait path:** `neophi/public_html/resources/images/agency/agents/cypher/` (SCP-deployed)
Also mirrored to JN: `jenninexus/public_html/resources/images/agency/agents/neophi/` for cross-project display.

**SSOT pointers:**
- Deps: `neophi/.config/deps_neophi.json`
- Roadmap: `neophi/storage/docs/ROADMAP.md`
- Dev log: `neophi/dev-log-sego.yaml`
- Pending before deploy: 390px audit, Lighthouse 90+, GA4 setup, character carousel

---

## Gitignore Protocol

The `.gitignore` at repo root contains:

```gitignore
# Project-specific agent overrides — local only
projects/*/

# Keep pointer files tracked
!projects/README.md
```

This means:
- All files in `projects/*/` are ignored by default
- The top-level `projects/README.md` (this file) is tracked
- Per-project `.md` pointer files (e.g., `projects/martiangames/MissionControl.md`) are tracked via explicit git add (they survive the wildcard ignore because they're already in the index)
- `gen-ai/` subdirectories inside each project dir are also covered by the parent ignore rule — no additional rule needed

**To track a new project pointer file:**
```bash
git add -f projects/myproject/AgentName.md
```

---

## gen-ai Pipeline

Portrait generation output lives in `projects/{project}/gen-ai/`. Workflow:

1. Generate portraits using AI tools (xAI Grok, DALL-E, Midjourney)
2. Save raw output to `projects/{project}/gen-ai/` with descriptive filenames
3. Select favorite → copy/rename to `projects/{project}/` root as canonical
   - Square: `{agentname}-square.webp` (or `{agentname}-1x1-{version}.webp`)
   - Landscape: `{agentname}-landscape.webp` (or `{agentname}-16x9-{version}.webp`)
4. Deploy canonical images to the live site via SCP or build pipeline
5. Copy to `resources/images/agents/{agentname}.jpg` if adding to README showcase (80×80 square)

**Naming convention:** No dashes in agent name prefix (e.g., `missioncontrol-square.webp`, not `mission-control-square.webp`)

---

## Adding a New Project

```bash
# Create local project dir
mkdir projects/myproject

# Copy agent template and customize
cp templates/AGENT-TEMPLATE.md projects/myproject/MyAgent.md
# Edit: remove private details, add project pointer section, link to project override path

# Force-add the pointer file (survives gitignore)
git add -f projects/myproject/MyAgent.md
git commit -m "[AGENCY] Add myproject agent pointer"
```

The full working agent profile (with real paths, audit history, secrets) goes in the project's own `storage/agency/agents/` — gitignored by the consuming project's `.gitignore`.

---

## Submodule Update Checklist

When bumping the agency submodule in a consuming project:

- [ ] Edit complete in `C:\Github\agency` canonical clone
- [ ] Changes committed and pushed to GitHub
- [ ] `git submodule update --remote storage/agency` run in consuming project
- [ ] `git add storage/agency` staged in consuming project
- [ ] Commit with `chore: bump agency submodule` message
- [ ] Any new portrait images SCP-deployed to live server
- [ ] `agency.php` (or equivalent) updated if new agents or image filename changes
