# Agency Repo — Edit, MCP & Sync Workflow

## Structure

This repo (`jenninexus/agency`) is used in two ways:

| Location | Purpose |
|----------|---------|
| `C:\Github\agency` | **Canonical clone** — make all edits here |
| `C:\Users\Owner\Projects\www\jenninexus\storage\agency` | Git submodule inside the jenninexus.com repo |

The jenninexus.com repo pins a specific commit of this repo as a submodule. After pushing changes here, the submodule pointer in jenninexus.com must be updated separately.

---

## Edit Workflow

### 1. Edit in the canonical clone

```bash
cd C:/Github/agency
# edit agent files, README, scripts, etc.
git add <files>
git commit -m "feat: ..."
git push
```

### 2. Pull into the submodule

```bash
cd C:/Users/Owner/Projects/www/jenninexus/storage/agency
git pull origin main
```

### 3. Bump the submodule pointer in jenninexus.com

```bash
cd C:/Users/Owner/Projects/www/jenninexus
git add storage/agency
git commit -m "chore: bump agency submodule to <short-sha> (<description>)"
git push
```

That's it. Three commands after an edit.

---

## Local-Only Files (gitignored)

These files live in `C:\Github\agency` but are **never committed**:

| File | Purpose |
|------|---------|
| `agents.html` | Local agent roster dashboard — open via VS Code Live Server |
| `.foam/agents-paths.json` | SSOT config for agents.html (all image/doc paths) |
| `.foam/` (entire dir) | Local Foam knowledge graph config |

To update `agents.html` data, edit `.foam/agents-paths.json` — no commit needed.

---

## Agent Profile Location

Agent `.md` files are committed in this repo under `agents/`:

```
agents/
├── Bloggie.md
├── DivineDesign.md
├── GamerGirl.md
├── GraphViz.md
├── Metrica.md
└── Vidette.md
```

These are the **tracked SSOT profiles**. The jenninexus submodule and `agents-paths.json` both point here.

MG and Jerry VR agents (`GlassField.md`, `MissionControl.md`, `Orbiter.md`, `Vixel.md`) live in their own project repos and are referenced in `.foam/agents-paths.json` by absolute path — they are NOT in this repo.

---

## Quick Reference

```bash
# Full edit + sync cycle
cd C:/Github/agency
git add agents/Metrica.md && git commit -m "docs: update Metrica audit checklist"
git push

cd C:/Users/Owner/Projects/www/jenninexus/storage/agency && git pull origin main
cd C:/Users/Owner/Projects/www/jenninexus && git add storage/agency
git commit -m "chore: bump agency submodule" && git push
```

---

## MCP Server — AI Tool Integration

`scripts/mcp-server.js` exposes agent data as MCP tools. Zero npm dependencies — pure Node stdlib.

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

**Claude Code / Cursor / Zed / Cline** — `.vscode/mcp.json` is already configured. The server starts automatically when you open the workspace.

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

## `agents.html` — Live Server Required

`agents.html` uses `fetch('.foam/agents-paths.json')` to load config. This requires HTTP — it **will not work** opened as a bare `file://` URL.

Open it via VS Code Live Server (right-click → **Open with Live Server**) or any local HTTP server on port 5500+.
