# Agency Projects

This directory is intentionally empty in the public repo.

Project-specific agent directories live here **locally only** — they are gitignored (`projects/*/`). Only this README is tracked.

---

## The Pattern

Each project that uses the agency framework gets its own subdirectory here:

```
projects/
├── README.md              ← this file (tracked)
└── yourproject/           ← gitignored — local only
    ├── README.md          ← lists agents + links to implementation SSOT
    └── AgentName.md       ← public-safe agent profile (no credentials, no private paths)
```

The implementation SSOT (private paths, audit scripts, build pipeline) lives **inside the project itself**, not here:

```
yourproject/
└── storage/
    ├── agency/            ← agent profiles, audit outputs, generations
    │   ├── agents/        ← local agent .md files (project-specific)
    │   ├── agents.json    ← cluster/project agent registry
    │   └── audits/        ← audit output (gitignored)
    └── gen-ai/            ← AI image generation pipeline (gitignored)
        ├── agents/        ← generated agent portraits
        └── characters.yaml  ← generation prompts (private, gitignored)
```

---

## Submodule vs Standalone

**As a submodule** (`git submodule add https://github.com/jenninexus/agency.git storage/agency`):
- Public agent profiles pull automatically via `git submodule update --remote`
- Local project agents live in `projects/<name>/` (gitignored) alongside the submodule files
- Update workflow: edit in `C:\Github\agency` → push → `git submodule update --remote` in each project

**Standalone copy** (cloned directly into a project):
- No submodule overhead — just a reference copy you update manually
- Best for projects that heavily customize agent profiles

---

## gen-ai Pipeline

Agent portrait generation uses a separate companion toolkit. The pattern:

```
storage/gen-ai/
├── agents/           ← per-agent portrait outputs (landscape, square, portrait_3x4)
├── characters.yaml   ← prompt SSOT (gitignored — private)
└── protocol.yaml     ← model, aspect ratios, output conventions
```

Generate with: `pwsh scripts/generate-agent-portrait.ps1 -Agent <Name> -AspectRatio both`

Prompts live in `characters.yaml` alongside the public `agents/` profiles. Outputs go to `storage/gen-ai/agents/<name>/` before being copied to the project's public image path.

---

## Adding a Project

```bash
mkdir projects/myproject
cp templates/AGENT-TEMPLATE.md projects/myproject/MyAgent.md
```

The only public-safety rule: no credentials, no private paths, no personal data in anything you commit to the agency origin.
