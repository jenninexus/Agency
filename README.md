<div align="center">

![AI Agent Agency](agents/images/GraphViz.jpg)

# AI Agent Agency

### *Your Virtual Development Team in a High-Rise Penthouse Studio*

[![Framework](https://img.shields.io/badge/Framework-AI%20Agent%20Agency-9D4EDD?style=for-the-badge)](.)
[![License](https://img.shields.io/badge/License-MIT-00D4FF?style=for-the-badge)](LICENSE)
[![Agents](https://img.shields.io/badge/Agents-5%20Active-FF6B6B?style=for-the-badge)](.config/mcp_agents.json)

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

## Agent Roster

| Agent | Role | Audit Day | Domain |
|:------|:-----|:----------|:-------|
| **Vidette** | Chief Video & Image Display Integrity Officer | Monday | YouTube grids, playlists, aspect ratios, thumbnails |
| **Bloggie** | Chief Blog Page Design & Consistency Officer | Tuesday | Blog structure, tags, SEO, share buttons |
| **GraphViz** | Chief Visual Harmony & Theme System Architect | Wednesday | Color palettes, themes, glass effects, WCAG |
| **GamerGirl** | Chief Gaming Content & Game Page Integrity Officer | Thursday | Game pages, platform CTAs, hero sections |
| **DivineDesign** | Chief Site-Wide Design & Page Architecture Officer | Friday | Layout, UX/UI, visual hierarchy, spacing |

> **Friday PM:** Implementation day—all agents collaborate to fix flagged issues.

See individual agent files in [`agents/`](agents/) for complete profiles, validation checklists, and red flags.

---

## Quick Start

### 1. Clone & Configure

```bash
git clone https://github.com/YOUR_USERNAME/Agency.git
cd Agency
cp .config/mcp_agents.example.json .config/mcp_agents.json
```

### 2. Create Your First Agent

```bash
cp templates/AGENT-TEMPLATE.md agents/YourAgent.md
```

### 3. Reference in AI Conversations

```
@GraphViz.md - Review this CSS for theme compliance
@Bloggie.md - Check this blog post structure
@GamerGirl.md - Audit the game page layout
```

### 4. Open the Workspace

Open `ai-agent-agency.code-workspace` in VS Code for the full penthouse studio experience.

### 5. Enable Background Image (Optional)

The workspace includes settings for the `shalldie.background` extension to display agent artwork behind your code.

1. Install the recommended extension when prompted (or search `shalldie.background`)
2. Update the image URL in the workspace file:
   ```json
   "background.customImages": [
     "https://raw.githubusercontent.com/YOUR_USERNAME/Agency/main/agents/images/GraphViz.jpg"
   ]
   ```
   Or use a local absolute path: `file:///C:/Github/Agency/agents/images/GraphViz.jpg`
3. Reload VS Code - you may see a "corrupted" warning (this is normal, click "Don't show again")
4. Add more agent images to `agents/images/` for a slideshow - the extension cycles every 30 seconds

---

## Configuration

All agent metadata, schedules, and coordination rules live in a single source of truth:

| File | Purpose |
|:-----|:--------|
| [`.config/mcp_agents.json`](.config/mcp_agents.json) | Master configuration—agents, schedules, rules |
| [`.config/mcp_agents.example.json`](.config/mcp_agents.example.json) | Template for new projects |

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
Agency/
├── README.md                          # You are here
├── ai-agent-agency.code-workspace     # VS Code workspace config
│
├── .config/
│   ├── mcp_agents.json                # Your master configuration
│   └── mcp_agents.example.json        # Generic template
│
├── agents/                            # Agent profiles
│   ├── Vidette.md
│   ├── Bloggie.md
│   ├── GraphViz.md
│   ├── GamerGirl.md
│   ├── DivineDesign.md
│   └── images/
│       └── GraphViz.jpg               # Agent artwork
│
├── docs/                              # Extended documentation
│   ├── AGENT-GUIDE.md                 # Character creation guide
│   ├── SCHEDULE.md                    # Weekly audit cadence
│   └── OPTIMIZATION-IDEAS.md          # IDE integration strategies
│
├── templates/
│   └── AGENT-TEMPLATE.md              # Blank agent template
│
├── examples/
│   └── StyleGuard.md                  # Example working agent
│
├── scripts/                           # Audit automation scripts
│   └── .gitkeep
│
└── audits/                            # Generated audit reports
    └── .gitkeep
```

---

## Documentation

| Document | Description |
|:---------|:------------|
| [`docs/AGENT-GUIDE.md`](docs/AGENT-GUIDE.md) | Character creation guide with AI image prompts |
| [`docs/SCHEDULE.md`](docs/SCHEDULE.md) | Weekly audit schedule template |
| [`docs/OPTIMIZATION-IDEAS.md`](docs/OPTIMIZATION-IDEAS.md) | VS Code & Claude integration workflows |
| [`templates/AGENT-TEMPLATE.md`](templates/AGENT-TEMPLATE.md) | Full agent profile template |
| [`examples/StyleGuard.md`](examples/StyleGuard.md) | Working example agent |

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
When multiple agents collaborate, use the coordination matrix in `.config/mcp_agents.json` to identify dependencies.

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

### Claude Code / Cursor
```
Read @GraphViz.md and audit src/styles/ for theme compliance
Run the Wednesday audit checklist from @GraphViz.md
```

---

## Future Agents (Roadmap)

| Agent | Role | Status |
|:------|:-----|:-------|
| **Codex** | Build System & DevOps | Planned |
| **Tagster** | Tag System Specialist | Planned |
| **Metrica** | Analytics & SEO | Planned |
| **Linklord** | External Links & APIs | Planned |
| **Docster** | Documentation Manager | Planned |
| **Testrix** | Testing & QA | Planned |

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
