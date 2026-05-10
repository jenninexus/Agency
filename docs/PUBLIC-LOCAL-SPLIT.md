# Public vs Local Split

This repository is public and project-agnostic. Treat tracked files as framework material that another developer can clone without inheriting your machine paths, private MCP servers, client projects, credentials, audit output, or personal agent lore.

## Track Public Files

Commit these when they are generic and reusable:

- `mcp.example.json` - sanitized agent registry template.
- `.vscode/mcp.example.json` - minimal VS Code MCP server entry.
- `agents/*.md` - public-safe showcase or framework agents.
- `templates/*.md` - reusable agent/profile templates.
- `docs/*.md` - framework documentation.
- `scripts/*` - generic audit helpers and MCP server code.
- `projects/README.md` - explains the local override pattern.

## Keep Local Files Untracked

Never commit these from your personal machine or a consuming project:

- `mcp.json`
- `.vscode/mcp.json`
- `.config/`
- `.env`, `.env.local`, `.env.*.local`
- `projects/<project-name>/`
- `agents/characters.yaml`
- `generations/`
- `audits/*.md`
- `agents.html`

## Project Override Rule

If an agent profile names real project pages, local paths, private audit scripts, private service names, or project-specific visual lore, it belongs in:

```text
projects/<project-name>/
```

That directory is gitignored. Public origin agents in `agents/` should describe reusable responsibilities and audit patterns, not one project's private implementation.

## Submodule Rule

When this repo is embedded as a submodule, the submodule path is a consumer checkout. Do not do normal development there.

Use this flow:

```bash
cd /path/to/canonical/agency
# edit public framework files
git add <files>
git commit -m "docs: update agency workflow"
git push

cd /path/to/parent-project
git submodule update --remote storage/agency
git add storage/agency
git commit -m "chore: bump agency submodule"
```

If a future agent sees dirty files inside `storage/agency`, it should stop and classify them:

- Public framework change: move/copy the change to the canonical agency clone, commit there, then bump the submodule.
- Project-local change: move it to `projects/<project-name>/` or the consuming project's own `storage/agency` documentation.
- Generated output: leave ignored or delete only when explicitly asked.

## MCP Rule

Use examples for sharing and local files for real integration:

```text
mcp.example.json          tracked, public registry template
mcp.json                  ignored, local/private populated registry
.vscode/mcp.example.json  tracked, server stub only
.vscode/mcp.json          ignored, local MCP host config
```

Do not put personal MCP server names, absolute local paths, SSH hosts, API keys, or project-private agent schedules in tracked public files.
