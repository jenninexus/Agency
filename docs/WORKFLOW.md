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
cp mcp.example.json mcp.json
cp .vscode/mcp.example.json .vscode/mcp.json
# edit mcp.json — update studio name, agents, file paths
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

> **Rule:** Never push changes from inside the submodule path. Always push public/framework changes from the canonical clone, then bump the pointer in the parent. Project-specific changes belong in `projects/<project-name>/`, which is gitignored.

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
| `mcp.json` | Your populated local agent registry (copy from `mcp.example.json`) |
| `.vscode/mcp.json` | Your local MCP host config (copy from `.vscode/mcp.example.json`) |
| `projects/<project-name>/` | Project-specific agent overrides and private pointers |

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

These are tracked public profiles. Keep them generic enough for the public framework. Use `templates/AGENT-TEMPLATE.md` as a starting point.

Project-specific agents that don't belong in the shared framework live in `projects/<project-name>/` or in the consuming project repo and can be referenced from local `mcp.json` or `.foam/agents-paths.json`.

---

## MCP Server — AI Tool Integration

`scripts/mcp-server.js` exposes agent data as MCP tools. Zero npm dependencies — pure Node 18+ stdlib.

### Setup

```bash
cp mcp.example.json mcp.json
cp .vscode/mcp.example.json .vscode/mcp.json
# edit mcp.json — update studio name, agents, file paths
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

**Claude Code / Cursor / Zed / Cline** — `.vscode/mcp.json` is the local server entry. The agent registry is local `mcp.json`.

**GitHub Copilot** — `.github/copilot-instructions.md` is auto-loaded by Copilot. No server needed — agent context is injected as markdown.

**Other MCP hosts** — add the server entry to your client's MCP config. Keep the agent registry in local `mcp.json` at the agency repo root:
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
