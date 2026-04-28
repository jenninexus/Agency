# Agency Repo — Edit, MCP & Sync Workflow

## Structure

This repo (`agency`) can be used in two ways:

| Mode | Description |
|------|-------------|
| **Standalone** | Clone directly and use as-is — edit agent files, run audits, use MCP tools |
| **Submodule** | Embed inside a parent project repo; parent pins a specific commit |

If used as a submodule, always edit in the **canonical agency clone**, then bump the pointer in the parent repo. Never edit inside the submodule path directly.

---

## Standalone Usage

Clone and configure:

```bash
git clone https://github.com/jenninexus/agency.git
cd agency
cp .config/mcp_agents.example.json .config/mcp_agents.json
# edit mcp_agents.json with your project's agents
```

Edit agent files, run audits, update scripts — commit and push normally.

---

## Submodule Workflow

If your project embeds this repo as a submodule (e.g. at `storage/agency`), follow this 3-step cycle after any edit.

### 1. Edit in your canonical agency clone

```bash
cd /path/to/agency
# edit agent files, README, scripts, etc.
git add <files>
git commit -m "feat: ..."
git push
```

### 2. Pull the new commit into the submodule

```bash
cd /path/to/your-project/storage/agency
git pull origin main
```

### 3. Bump the submodule pointer in the parent repo

```bash
cd /path/to/your-project
git add storage/agency
git commit -m "chore: bump agency submodule to <short-sha>"
git push
```

That's it — three commands after any edit.

> **Rule:** Never push changes from inside the submodule path. Always push from the canonical clone, then bump the pointer in the parent.

---

## Adding Agency as a Submodule

To embed agency into an existing project repo:

```bash
cd /path/to/your-project
git submodule add https://github.com/jenninexus/agency.git storage/agency
git commit -m "chore: add agency submodule"
git push
```

On a fresh clone of the parent project, initialize the submodule:

```bash
git clone --recurse-submodules https://github.com/your-org/your-project.git
# or, if already cloned:
git submodule update --init --recursive
```

---

## Local-Only Files (gitignored)

These files live in the agency repo root but are **never committed**:

| File | Purpose |
|------|---------|
| `agents.html` | Local agent roster dashboard — open in browser or via Live Server |
| `.foam/agents-paths.json` | Config for agents.html (image/doc paths) |
| `.foam/` (entire dir) | Local Foam knowledge graph config |
| `.config/mcp_agents.json` | Your populated agent config (copy from `.example`) |

`agents.html` has an embedded fallback config and works as a bare `file://` URL. For full local image paths and custom agent data, populate `.foam/agents-paths.json` and open via VS Code Live Server.

---

## Agent Profile Location

Agent `.md` files are committed under `agents/`:

```
agents/
├── Bloggie.md
├── DivineDesign.md
├── GamerGirl.md
├── GraphViz.md
├── Metrica.md
└── Vidette.md
```

These are the tracked SSOT profiles. Customize them for your project, or add your own. Use `templates/AGENT-TEMPLATE.md` as a starting point.

Project-specific agents that don't belong in the shared framework live in their own project repos and can be referenced in `.foam/agents-paths.json` by absolute path.

---

## MCP Server — AI Tool Integration

`scripts/mcp-server.js` exposes agent data as MCP tools. Zero npm dependencies — pure Node 18+ stdlib.

### Setup

```bash
cp .config/mcp_agents.example.json .config/mcp_agents.json
# edit mcp_agents.json with your project's agents
```

### Start

```bash
node scripts/mcp-server.js   # or: npm run mcp
```

### Tools exposed

| Tool | What it returns |
|------|----------------|
| `agency_list_agents` | All agents with roles + audit days |
| `agency_get_agent` | Full profile for one agent |
| `agency_get_schedule` | Weekly audit schedule |
| `agency_get_rules` | Universal rules + commit format |
| `agency_get_agent_for_file` | Owner + red flags for a given file path |

### IDE config

**Claude Code / Cursor / Zed / Cline** — `.vscode/mcp.json` is pre-configured. The server starts automatically when you open the workspace.

**GitHub Copilot** — `.github/copilot-instructions.md` is auto-loaded by Copilot. No server needed — agent context is injected as markdown.

**Other MCP hosts** — add to your client's MCP config:
```json
{
  "servers": {
    "agency": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/agency/scripts/mcp-server.js"]
    }
  }
}
```

---

## Quick Reference

```bash
# Full edit + sync cycle (submodule users)
cd /path/to/agency
git add agents/MyAgent.md && git commit -m "docs: update MyAgent checklist"
git push

cd /path/to/your-project/storage/agency && git pull origin main
cd /path/to/your-project && git add storage/agency
git commit -m "chore: bump agency submodule" && git push
```
