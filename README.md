<div align="center">

![AI Agent Agency](resources/images/banner.jpg)

# AI Agent Agency

### *Your Virtual Development Team in a High-Rise Penthouse Studio*

[![Framework](https://img.shields.io/badge/Framework-AI%20Agent%20Agency-9D4EDD?style=for-the-badge)](.)
[![License](https://img.shields.io/badge/License-MIT-00D4FF?style=for-the-badge)](LICENSE)
[![Agents](https://img.shields.io/badge/Agents-Template-FF6B6B?style=for-the-badge)](mcp.example.json)

**Enterprise-quality consistency. Zero labor cost. No white backgrounds.**

[Getting Started](#-quick-start) | [Agent Roster](#-agent-roster) | [Configuration](#-configuration) | [Documentation](#-documentation)

</div>

---

## What Is This?

The **AI Agent Agency** is a framework for organizing AI-assisted development around **specialized agent personas**. Instead of one general-purpose AI assistant, you build a team of specialists—each with defined roles, distinct personalities, file ownership, and automated audit protocols.

Think of it as staffing a virtual game studio where every agent has a desk in your penthouse suite, and they *never* approve white backgrounds.

### Why Agent Personas?

| Traditional AI Use | Agent Agency Approach |
|:-------------------|:---------------------|
| One assistant for everything | Specialized experts per domain |
| Context resets each conversation | Persistent protocols and standards |
| Ad-hoc quality checking | Automated weekly audits |
| Unclear responsibilities | Explicit file ownership |
| Inconsistent enforcement | Codified rules with red flags |

---

## The 5 Core Audit Areas

Before building a custom team, start with the five categories that catch 90% of recurring drift:

| # | Audit Area | What It Catches | Starter Agent |
|:--|:-----------|:----------------|:--------------|
| 1 | **Theme & Design Tokens** | Hardcoded hex, missing CSS vars, dark/light mode inconsistency, WCAG contrast | StyleGuard |
| 2 | **Layout & UX** | Broken breakpoints, spacing inconsistency, missing responsive rules, visual hierarchy drift | LayoutArchitect |
| 3 | **Content Quality** | Inconsistent formatting, missing metadata, broken structure, stale copy | ContentEditor |
| 4 | **Media & Assets** | Unoptimized images, wrong aspect ratios, missing lazy loading, broken embeds | AssetManager |
| 5 | **SEO & Performance** | Missing JSON-LD, bad og:image, PageSpeed regressions, uncrawled pages | MetricsGuard |

See `templates/AGENT-TEMPLATE.md` and `mcp.example.json` to build your own team around these areas.

---

## Showcase Team (JenniNexus Studio)

The `agents/` directory includes a fully-built example team from a real production studio. Use these as inspiration — their profiles, audit checklists, and red flags are what yours should look like.

> These are project-inspired showcase agents adapted into public examples. Excellent reference material but not meant to be used as-is. Start from `mcp.example.json` and `templates/AGENT-TEMPLATE.md` instead.

<table>
<tr>
<td align="center" width="130">
<img src="resources/images/agents/vidette.jpg" width="80" height="80" alt="Vidette" onerror="this.style.display='none'"/><br/>
<b><a href="agents/Vidette.md">Vidette</a></b><br/>
<sub>Video &amp; Image Display</sub><br/>
<sub>📅 Monday · 🎨 <code>#66c0f4</code></sub><br/>
<sub><i>"If it's not 16:9, it's not right."</i></sub>
</td>
<td align="center" width="130">
<img src="resources/images/agents/bloggie.jpg" width="80" height="80" alt="Bloggie" onerror="this.style.display='none'"/><br/>
<b><a href="agents/Bloggie.md">Bloggie</a></b><br/>
<sub>Blog &amp; Content Quality</sub><br/>
<sub>📅 Tuesday · 🎨 <code>#FFB020</code></sub><br/>
<sub><i>"Structure is kindness to your reader."</i></sub>
</td>
<td align="center" width="130">
<img src="resources/images/agents/graphviz.jpg" width="80" height="80" alt="GraphViz" onerror="this.style.display='none'"/><br/>
<b><a href="agents/GraphViz.md">GraphViz</a></b><br/>
<sub>Theme &amp; Visual Harmony</sub><br/>
<sub>📅 Wednesday · 🎨 <code>#A563D1</code></sub><br/>
<sub><i>"Investors don't fund white backgrounds."</i></sub>
</td>
<td align="center" width="130">
<img src="resources/images/agents/divinedesign.jpg" width="80" height="80" alt="DivineDesign" onerror="this.style.display='none'"/><br/>
<b><a href="agents/DivineDesign.md">DivineDesign</a></b><br/>
<sub>Layout &amp; Architecture</sub><br/>
<sub>📅 Friday · 🎨 <code>#00D4AA</code></sub><br/>
<sub><i>"Spacing is not decoration. It's structure."</i></sub>
</td>
</tr>
<tr>
<td align="center" width="130">
<img src="resources/images/agents/metrica.jpg" width="80" height="80" alt="Metrica" onerror="this.style.display='none'"/><br/>
<b><a href="agents/Metrica.md">Metrica</a></b><br/>
<sub>SEO, Analytics &amp; Performance</sub><br/>
<sub>📅 Saturday · 🎨 <code>#39ff14</code></sub><br/>
<sub><i>"If it's not indexed, it doesn't exist."</i></sub>
</td>
<td align="center" width="130">
<img src="resources/images/agents/vixel.jpg" width="80" height="80" alt="Vixel" onerror="this.style.display='none'"/><br/>
<b><a href="agents/Vixel.md">Vixel</a></b><br/>
<sub>VR/Game Project Site</sub><br/>
<sub>📅 Sunday · 🎨 <code>#FF6B4A</code></sub><br/>
<sub><i>"Pixels don't lie. Fix the mixin."</i></sub>
</td>
<td align="center" width="130">
<sub><br/><b>+ Your Agent</b><br/>Copy the template,<br/>define your domain</sub>
</td>
<td></td>
</tr>
</table>

> **Friday PM:** Implementation day — all agents collaborate to fix flagged issues.

> Portrait images go in `resources/images/agents/<name>.jpg` (80×80 square). See [`docs/ART-STYLE.md`](docs/ART-STYLE.md) for generation conventions.

See individual agent files in [`agents/`](agents/) for complete profiles, validation checklists, and red flags.

---

## Quick Start

### 1. Clone & Configure

```bash
git clone https://github.com/jenninexus/agency.git
cd agency
cp mcp.example.json mcp.json
cp .vscode/mcp.example.json .vscode/mcp.json
# Edit mcp.json — update studio name, agent domains, file paths.
# Keep mcp.json local; it is gitignored so personal MCP/project paths are not pushed.
```

### 2. Create Your First Agent

```bash
cp templates/AGENT-TEMPLATE.md agents/YourAgent.md
```

### 3. Reference in AI Conversations

```
@GraphViz.md - Review this CSS for theme compliance
@Bloggie.md - Check this blog post structure
@DivineDesign.md - Audit the page layout and UX
```

### 4. Open the Workspace

Copy the workspace template and open it in VS Code:

```bash
cp agency.example.code-workspace agency.code-workspace
```

Open `agency.code-workspace` for the full penthouse studio experience.

### 5. Enable Background Image (Optional)

The workspace includes settings for the `shalldie.background` extension to display agent artwork behind your code.

1. Install the recommended extension when prompted (or search `shalldie.background`)
2. Update the image URL in the workspace file:
   ```json
   "background.customImages": [
     "https://raw.githubusercontent.com/jenninexus/agency/main/resources/images/banner.jpg"
   ]
   ```
   Or use a local path: `file:///path/to/agency/resources/images/banner.jpg`
3. Reload VS Code - you may see a "corrupted" warning (this is normal, click "Don't show again")
4. Add more agent images to `resources/images/` for a slideshow - the extension cycles every 30 seconds

---

## Configuration

All agent metadata, schedules, and coordination rules live in a local registry copied from the public template:

| File | Purpose |
|:-----|:--------|
| [`mcp.example.json`](mcp.example.json) | Public sanitized agent registry template (tracked) |
| `mcp.json` | Local registry for your project (gitignored, copy from `mcp.example.json`) |
| [`.vscode/mcp.example.json`](.vscode/mcp.example.json) | VS Code MCP server entry template (tracked) |
| `.vscode/mcp.json` | Local VS Code MCP server entry (gitignored) |

### Public vs Local Configuration

- Track `mcp.example.json` only when the data is generic, sanitized, and useful to other projects.
- Keep `mcp.json` local for personal paths, private MCP servers, project names, audit outputs, and per-project rosters.
- Track `.vscode/mcp.example.json` as a minimal server stub only.
- Keep `.vscode/mcp.json` local because MCP hosts often need machine-specific paths or environment variables.
- Put project-specific agents and overrides in `projects/<project-name>/`; that directory is gitignored by default.

### Universal Rules (Non-Negotiable)

1. **No white backgrounds** — Light mode uses lavender `#F9F3FB`
2. **CSS variables over hex** — Theme-aware always
3. **No inline styles** — All styling via CSS classes
4. **Test both themes** — Light and dark mode verification
5. **Document changes** — Update agent changelog

### Color Rules

| Context | Allowed | Banned |
|:--------|:--------|:-------|
| Light Background | `#F9F3FB` | `#FFFFFF`, `#FAFAFA`, `#F8F9FA`, `#F7F7F7` |
| Dark Background | `#121218` | Pure black `#000000` |

---

## Project Structure

```
agency/
├── README.md                          # You are here
├── package.json                       # npm run mcp convenience script
├── mcp.example.json                   # Public agent registry template (copy to mcp.json)
├── mcp.json                           # Local populated registry (gitignored)
├── .env.example                       # Environment variable template
├── agency.example.code-workspace      # VS Code workspace (copy to agency.code-workspace)
│
├── .github/
│   └── copilot-instructions.md        # Auto-loaded by GitHub Copilot
│
├── .vscode/
│   ├── mcp.example.json               # VS Code MCP server entry only (copy to .vscode/mcp.json)
│   └── settings.example.json          # Workspace defaults template (copy to settings.json, gitignored)
│
├── agents/                            # Showcase agent profiles (public examples)
│   ├── characters.yaml                # AI image generation prompts (gitignored)
│   ├── Vidette.md                     # Video & Media specialist
│   ├── Bloggie.md                     # Blog & Content specialist
│   ├── GraphViz.md                    # Theme & Visual specialist
│   ├── DivineDesign.md                # Layout & Architecture specialist
│   ├── Metrica.md                     # SEO, Analytics & Performance specialist
│   └── Vixel.md                       # VR/Game site specialist (cross-project)
│
├── projects/                          # Project-specific agent rosters (local only)
│   └── README.md                      # How projects/ works — subdirs are gitignored
│
├── resources/                         # Agent media assets
│   ├── images/
│   │   ├── banner.jpg                 # README header banner
│   │   └── agents/                    # Square portraits for README cards (80×80)
│   │       └── <name>.jpg             # vidette.jpg, bloggie.jpg, etc.
│   └── video/
│       └── .gitkeep
│
├── docs/                              # Framework documentation
│   ├── ART-STYLE.md                   # Shared aesthetic + per-agent visual identity
│   ├── AGENT-GUIDE.md                 # Character creation & design guide
│   ├── SCHEDULE.md                    # Weekly audit cadence template
│   ├── WORKFLOW.md                    # Edit + MCP + submodule sync guide
│   └── OPTIMIZATION-IDEAS.md          # IDE/workflow integration strategies
│
├── templates/
│   └── AGENT-TEMPLATE.md              # Blank agent profile template
│
├── examples/
│   ├── StyleGuard.md                  # Full working example agent
│   └── AgentRoster.md                 # Example team roster doc (JenniNexus studio)
│
├── scripts/                           # Audit automation + MCP server
│   ├── mcp-server.js                  # MCP stdio server (zero deps, Node 18+)
│   ├── _audit-common.ps1              # Shared audit utilities
│   └── audit-template.ps1             # Audit script template
│
└── audits/                            # Generated audit reports (gitignored)
    └── .gitkeep
```

---

## Documentation

| Document | Description |
|:---------|:------------|
| [`docs/ART-STYLE.md`](docs/ART-STYLE.md) | Shared studio aesthetic, per-agent colors, portrait generation conventions |
| [`docs/AGENT-GUIDE.md`](docs/AGENT-GUIDE.md) | Character creation guide with visual design system |
| [`docs/SCHEDULE.md`](docs/SCHEDULE.md) | Weekly audit schedule and cross-agent coordination |
| [`docs/OPTIMIZATION-IDEAS.md`](docs/OPTIMIZATION-IDEAS.md) | VS Code, Claude Code & workflow integration strategies |
| [`templates/AGENT-TEMPLATE.md`](templates/AGENT-TEMPLATE.md) | Full agent profile template (200+ lines) |
| [`examples/StyleGuard.md`](examples/StyleGuard.md) | Full working example agent with checklists and red flags |
| [`examples/AgentRoster.md`](examples/AgentRoster.md) | Example team roster doc (JenniNexus 7-agent studio) |
| [`docs/PUBLIC-LOCAL-SPLIT.md`](docs/PUBLIC-LOCAL-SPLIT.md) | Two-layer pattern: public framework agents vs project-specific overrides in `projects/` |

### Portrait Generation

Agent portraits are generated via AI image APIs (xAI Grok Imagine, DALL-E, Midjourney). Place 80×80 square portraits at `resources/images/agents/<name>.jpg` to populate the showcase cards above.

See [`docs/ART-STYLE.md`](docs/ART-STYLE.md) for the shared aesthetic, per-agent accent colors, and prompt conventions. Full prompts live in `agents/characters.yaml` (local only — gitignored).

---

## Agent Communication Protocol

### Code Comments
```javascript
// @GRAPHVIZ: Theme compliance required - no white backgrounds
// @VIDETTE: Video grid requires 16:9 aspect ratio enforcement
// @GAMERGIRL: Game page needs hero section with platform CTAs
```

### Commit Messages
```bash
git commit -m "[GRAPHVIZ] Updated dark mode glass effects"
git commit -m "[BLOGGIE] Fixed tag system to use anchor tags"
```

### Cross-References
When multiple agents collaborate, use the coordination matrix in local `mcp.json` to identify dependencies.

---

## Advanced Integration

### VS Code Tasks
```json
{
  "label": "Run GraphViz Audit",
  "type": "shell",
  "command": "powershell -File scripts/audit-styles.ps1"
}
```

### GitHub Actions
```yaml
on:
  schedule:
    - cron: '0 9 * * 1'  # Monday 9am - Vidette's audit day
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./scripts/audit-video-pages.sh
```

### MCP Integration (Claude Code, Cursor, Zed, Cline)

Copy the public examples, then start the server:

```bash
cp mcp.example.json mcp.json
cp .vscode/mcp.example.json .vscode/mcp.json
```

```bash
node scripts/mcp-server.js   # or: npm run mcp
```

Tools available: `agency_list_agents`, `agency_get_agent`, `agency_get_agent_for_file`, `agency_get_schedule`, `agency_get_rules`.

### GitHub Copilot

`.github/copilot-instructions.md` is auto-loaded by Copilot — no server needed. Agent rules, file ownership, and red flags are injected as context.

### Claude Code Integration

**CLAUDE.md Integration:**
Add agent references to your project's `CLAUDE.md` for automatic context:

```markdown
## Agent Team
- 5 AI agents covering theme, layout, content, assets, and SEO
- Agent profiles: `agents/*.md`
- Agent registry: `mcp.json` (copy from `mcp.example.json`, gitignored)
- MCP server config: `.vscode/mcp.json` (copy from `.vscode/mcp.example.json`, gitignored)
- Audit scripts: `scripts/audit-*.ps1`
- Audit results: `audits/AUDIT_*.md`
```

**Claude Code Skills (Slash Commands):**
Create custom skills in `.claude/commands/` for agent operations:

```
.claude/commands/
├── agent-supervisor.md   # Full audit + health dashboard
├── agent-audit.md        # Quick-run specific agent audit
└── agent-status.md       # Status check without running audits
```

**Direct Agent Invocation:**
```
Read @GraphViz.md and audit src/styles/ for theme compliance
Run the Wednesday audit checklist from @GraphViz.md
@Vidette.md audit the video pages for duplicate script loads
```

**Environment Variables:**
Copy `.env.example` to `.env` and configure paths for your project:
```bash
cp .env.example .env
# Edit .env with your project paths
```

The audit scripts use these paths automatically via `_audit-common.ps1`.

---

## Using as a Submodule

This repo can be embedded in any project as a git submodule — giving you the full agent framework while keeping project-specific customizations local and gitignored.

### Initial Setup

```bash
# Add the submodule (once per consuming project)
git submodule add https://github.com/jenninexus/agency storage/agency
git submodule update --init --recursive
```

### Two-Layer Override Pattern

```
storage/agency/agents/GraphViz.md       ← public template (tracked, read-only)
storage/agency/projects/yourproject/    ← your local overrides (gitignored)
  GraphViz.md                           ← project-specific paths, secrets, scripts
  landscape.webp                        ← canonical agent portrait (landscape)
  square.webp                           ← canonical agent portrait (square)
  gen-ai/                               ← raw generation output (local only)
```

See [`projects/README.md`](projects/README.md) for full per-project setup and [`docs/PUBLIC-LOCAL-SPLIT.md`](docs/PUBLIC-LOCAL-SPLIT.md) for the design rationale.

### Updating the Submodule

Always edit in the **canonical clone** (`C:\Github\agency` or your fork), then propagate:

```bash
# 1. Edit in canonical clone
cd C:\Github\agency
git add <files> && git commit -m "[AGENT] description" && git push

# 2. Bump the pointer in each consuming project
cd path/to/consuming-project
git submodule update --remote storage/agency
git add storage/agency
git commit -m "chore: bump agency submodule"
```

Never edit files inside `storage/agency/` from within a consuming project — those changes won't propagate back to the submodule origin.

---

## Future Agents (Roadmap)

| Agent | Role | Status |
|:------|:-----|:-------|
| **Codex** | Build System & DevOps | Planned |
| **Tagster** | Tag System Specialist | Planned |
| **Linklord** | External Links & APIs | Planned |
| **Docster** | Documentation Manager | Planned |
| **Testrix** | Testing & QA | Planned |

> Project-specific agents (Cipher, GlassField, MissionControl, Orbiter) live in [`projects/`](projects/) — not in this showcase roster.

---

## Philosophy

> *"Investors don't fund white backgrounds."* — GraphViz

The AI Agent Agency isn't just organization—it's a mindset:

1. **Specialize** — Create experts, not generalists
2. **Automate** — Weekly audits catch drift before it compounds
3. **Document** — Explicit rules beat implicit assumptions
4. **Coordinate** — Clear ownership prevents conflicts
5. **Iterate** — Add agents as your project grows

---

## Contributing

This framework is designed to be adapted:

- Create and share new agent templates
- Add audit script examples
- Improve documentation
- Share your agent team configurations

---

<div align="center">

**MIT License** — Use freely, modify as needed.

*Built for developers who demand professional quality on any budget.*

---

**We don't cut corners. We optimize them.**

</div>
