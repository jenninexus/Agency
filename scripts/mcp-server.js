#!/usr/bin/env node
/**
 * AI Agent Agency — MCP Server
 *
 * Exposes agent data as MCP tools + resources.
 * Compatible with: Claude Code, Cursor, Zed, Cline, GitHub Copilot (MCP ext),
 * or any IDE supporting the Model Context Protocol.
 *
 * Tools:    agency_list_agents, agency_get_agent, agency_get_agent_for_file,
 *           agency_get_schedule, agency_get_rules
 * Resources: agency://agents/<id>  — full agent .md profile content
 *            agency://config       — active mcp.json registry
 *
 * Setup:
 *   cp mcp.example.json mcp.json                    # local agent registry
 *   cp .vscode/mcp.example.json .vscode/mcp.json    # local MCP host entry
 *   node scripts/mcp-server.js                      # or: npm run mcp
 *
 * Submodule path (agency at storage/agency inside your project):
 *   Update .vscode/mcp.json args to: "${workspaceFolder}/storage/agency/scripts/mcp-server.js"
 *
 * Spec: https://modelcontextprotocol.io
 */

'use strict';

const fs       = require('fs');
const path     = require('path');
const readline = require('readline');

// ── Paths ─────────────────────────────────────────────────────────────────────
const ROOT         = path.join(__dirname, '..');
const CONFIG_PATH  = path.join(ROOT, 'mcp.json');
const EXAMPLE_PATH = path.join(ROOT, 'mcp.example.json');
const AGENTS_DIR   = path.join(ROOT, 'agents');
const PROJECTS_DIR = path.join(ROOT, 'projects');

// Optional project context: --project <name> arg or AGENCY_PROJECT env var.
// When set, agent profile reads prefer projects/<project>/<Name>.md over agents/<Name>.md.
const PROJECT_ARG = process.argv.indexOf('--project');
const ACTIVE_PROJECT = (PROJECT_ARG !== -1 ? process.argv[PROJECT_ARG + 1] : null)
  || process.env.AGENCY_PROJECT
  || null;

function loadConfig() {
  const p = fs.existsSync(CONFIG_PATH) ? CONFIG_PATH : EXAMPLE_PATH;
  // Strip // comments if a local registry uses JSONC-style notes.
  const raw = fs.readFileSync(p, 'utf8').replace(/\/\/[^\n]*/g, '');
  return JSON.parse(raw);
}

// ── Tools ─────────────────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: 'agency_list_agents',
    description: 'List all AI agents: roles, audit days, specialties, taglines.',
    inputSchema: { type: 'object', properties: {}, required: [] }
  },
  {
    name: 'agency_get_agent',
    description: 'Full profile for one agent: red flags, domains, coordination rules. Use agency_list_agents to find IDs.',
    inputSchema: {
      type: 'object',
      properties: {
        agent_id: { type: 'string', description: 'Agent ID (lowercase). e.g. "graphviz", "vidette"' }
      },
      required: ['agent_id']
    }
  },
  {
    name: 'agency_get_agent_for_file',
    description: 'Given a file path, return which agent(s) own it and their red flags to check before editing.',
    inputSchema: {
      type: 'object',
      properties: {
        file_path: { type: 'string', description: 'Relative or absolute file path. e.g. "src/css/theme.css"' }
      },
      required: ['file_path']
    }
  },
  {
    name: 'agency_get_schedule',
    description: 'Weekly audit schedule: which agent runs on which day and their focus area.',
    inputSchema: { type: 'object', properties: {}, required: [] }
  },
  {
    name: 'agency_get_rules',
    description: 'Universal rules all agents enforce: coding standards, color rules, commit format, conflict resolution.',
    inputSchema: { type: 'object', properties: {}, required: [] }
  },
  {
    name: 'agency_list_project_agents',
    description: 'List agents with local project overrides in projects/<project>/. Shows which agents have been customized for this project vs using only the origin template.',
    inputSchema: {
      type: 'object',
      properties: {
        project: { type: 'string', description: 'Project name (e.g. "jenninexus", "martiangames"). Defaults to AGENCY_PROJECT env var or --project arg.' }
      },
      required: []
    }
  }
];

// ── Tool handlers ─────────────────────────────────────────────────────────────
function handleTool(name, args) {
  const cfg    = loadConfig();
  const agents = cfg.agents || {};

  switch (name) {
    case 'agency_list_agents': {
      const list = Object.entries(agents).map(([id, a]) => ({
        id,
        name:      a.name,
        title:     a.title,
        emoji:     a.emoji || '',
        audit_day: a.audit_day,
        specialty: a.specialty || [],
        tagline:   a.tagline || '',
        profile:   `agency://agents/${id}`
      }));
      return { studio: cfg.studio || {}, agents: list, total: list.length };
    }

    case 'agency_get_agent': {
      const id    = (args.agent_id || '').toLowerCase().trim();
      const agent = agents[id];
      if (!agent) {
        const available = Object.keys(agents).join(', ');
        return { error: `Agent "${id}" not found.`, available };
      }
      return { id, ...agent, resource: `agency://agents/${id}` };
    }

    case 'agency_get_agent_for_file': {
      const filePath = (args.file_path || '').toLowerCase();
      const fileName = path.basename(filePath);
      const owners   = [];

      for (const [id, agent] of Object.entries(agents)) {
        const patterns = Object.values(agent.domains || {}).flat();
        for (const pattern of patterns) {
          const p = pattern.toLowerCase().replace(/\*/g, '');
          if (filePath.includes(p) || fileName === p || (p.length > 2 && fileName.includes(p))) {
            owners.push({
              agent_id:      id,
              agent_name:    agent.name,
              title:         agent.title,
              matched:       pattern,
              red_flags:     agent.red_flags || [],
              coordinates:   agent.coordinates_with || [],
              profile:       `agency://agents/${id}`
            });
            break;
          }
        }
      }

      return owners.length
        ? { file_path: filePath, owners }
        : { file_path: filePath, owners: [], note: 'No agent owns this file type. Apply universal_rules.' };
    }

    case 'agency_get_schedule': {
      const schedule = cfg.schedule || {};
      const weekly = schedule.weekly || schedule;
      // Schedule format (2026-05-09): each day is an array of audit entries
      // (JSON forbids duplicate keys, so multi-agent days must be arrays).
      // Skip the _format meta key. Single-agent days are also 1-element arrays
      // for structural consistency. Legacy single-object format also handled.
      const entries = [];
      for (const [day, info] of Object.entries(weekly)) {
        if (day.startsWith('_')) continue; // skip _format / _meta
        if (Array.isArray(info)) {
          for (const audit of info) entries.push({ day, ...audit });
        } else if (info && typeof info === 'object') {
          // Legacy single-object format
          entries.push({ day, ...info });
        }
      }
      return { schedule: entries };
    }

    case 'agency_get_rules': {
      const sync = cfg.synchronization || {};
      return {
        universal_rules:    cfg.universal_rules || [],
        color_rules:        cfg.color_rules || {},
        commit_format:      (sync.cross_references || {}).markers || {},
        conflict_resolution: sync.conflict_resolution || {}
      };
    }

    case 'agency_list_project_agents': {
      const project = (args.project || ACTIVE_PROJECT || '').trim();
      if (!project) {
        const dirs = fs.existsSync(PROJECTS_DIR)
          ? fs.readdirSync(PROJECTS_DIR).filter(d => {
              const full = path.join(PROJECTS_DIR, d);
              return fs.statSync(full).isDirectory();
            })
          : [];
        return { note: 'No project specified. Use --project <name> or AGENCY_PROJECT env var.', available_projects: dirs };
      }

      const projectDir = path.join(PROJECTS_DIR, project);
      if (!fs.existsSync(projectDir)) {
        return { error: `Project dir not found: projects/${project}`, project };
      }

      const mds = fs.readdirSync(projectDir)
        .filter(f => f.endsWith('.md') && f !== 'README.md');

      const cfg    = loadConfig();
      const agents = cfg.agents || {};

      const overrides = mds.map(file => {
        const agentName = path.basename(file, '.md');
        const id = agentName.toLowerCase();
        const hasOrigin = !!agents[id];
        return {
          agent_id:     id,
          agent_name:   agentName,
          override_file: `projects/${project}/${file}`,
          has_origin_template: hasOrigin,
          origin_file:  hasOrigin ? (agents[id].profile || `agents/${agentName}.md`) : null
        };
      });

      return { project, override_count: overrides.length, agents: overrides };
    }

    default:
      return { error: `Unknown tool: ${name}` };
  }
}

// ── Resource handlers ─────────────────────────────────────────────────────────
function listResources() {
  const cfg     = loadConfig();
  const agents  = cfg.agents || {};
  const resources = [];

  // One resource per agent — the .md profile
  for (const [id, agent] of Object.entries(agents)) {
    resources.push({
      uri:      `agency://agents/${id}`,
      name:     `${agent.emoji || ''} ${agent.name} — Agent Profile`.trim(),
      mimeType: 'text/markdown',
      description: agent.title
    });
  }

  // The active config itself
  resources.push({
    uri:      'agency://config',
    name:     'Active Agent Registry (mcp.json)',
    mimeType: 'application/json',
    description: 'Full agent configuration — schedules, rules, domains, red flags.'
  });

  return resources;
}

function readResource(uri) {
  // agency://agents/<id>
  const agentMatch = uri.match(/^agency:\/\/agents\/(.+)$/);
  if (agentMatch) {
    const id    = agentMatch[1].toLowerCase();
    const cfg   = loadConfig();
    const agent = (cfg.agents || {})[id];
    if (!agent) throw new Error(`No agent "${id}" in config.`);

    // Prefer project override profile if ACTIVE_PROJECT is set
    if (ACTIVE_PROJECT) {
      const overridePath = path.join(PROJECTS_DIR, ACTIVE_PROJECT, `${agent.name}.md`);
      if (fs.existsSync(overridePath)) {
        return { mimeType: 'text/markdown', text: fs.readFileSync(overridePath, 'utf8') };
      }
    }

    // Try to read the .md profile file
    const profilePath = agent.profile
      ? path.join(ROOT, agent.profile)
      : path.join(AGENTS_DIR, `${agent.name}.md`);

    if (fs.existsSync(profilePath)) {
      return { mimeType: 'text/markdown', text: fs.readFileSync(profilePath, 'utf8') };
    }

    // Fallback: synthesize a profile from config data
    const lines = [
      `# ${agent.name} — ${agent.title}`,
      '',
      `**Audit Day:** ${agent.audit_day || 'N/A'}`,
      `**Philosophy:** ${agent.philosophy || ''}`,
      `**Tagline:** ${agent.tagline || ''}`,
      '',
      '## Specialty',
      ...(agent.specialty || []).map(s => `- ${s}`),
      '',
      '## Red Flags',
      ...(agent.red_flags || []).map(r => `- ${r}`),
      '',
      '## Coordinates With',
      ...(agent.coordinates_with || []).map(c => `- ${c}`),
    ];
    return { mimeType: 'text/markdown', text: lines.join('\n') };
  }

  // agency://config
  if (uri === 'agency://config') {
    const p = fs.existsSync(CONFIG_PATH) ? CONFIG_PATH : EXAMPLE_PATH;
    return { mimeType: 'application/json', text: fs.readFileSync(p, 'utf8') };
  }

  throw new Error(`Unknown resource URI: ${uri}`);
}

// ── MCP JSON-RPC stdio transport ──────────────────────────────────────────────
const rl = readline.createInterface({ input: process.stdin });

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + '\n');
}

rl.on('line', (line) => {
  line = line.trim();
  if (!line) return;

  let msg;
  try { msg = JSON.parse(line); } catch { return; }

  const { id, method, params } = msg;

  switch (method) {
    case 'initialize':
      return send({
        jsonrpc: '2.0', id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools:     {},
            resources: { subscribe: false, listChanged: false }
          },
          serverInfo: { name: 'agency', version: '1.2.0' }
        }
      });

    case 'notifications/initialized':
      return; // no response

    case 'tools/list':
      return send({ jsonrpc: '2.0', id, result: { tools: TOOLS } });

    case 'tools/call': {
      const { name, arguments: args = {} } = params || {};
      try {
        const result = handleTool(name, args);
        send({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] } });
      } catch (e) {
        send({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: JSON.stringify({ error: e.message }) }], isError: true } });
      }
      return;
    }

    case 'resources/list':
      return send({ jsonrpc: '2.0', id, result: { resources: listResources() } });

    case 'resources/read': {
      const uri = (params || {}).uri || '';
      try {
        const { mimeType, text } = readResource(uri);
        send({ jsonrpc: '2.0', id, result: { contents: [{ uri, mimeType, text }] } });
      } catch (e) {
        send({ jsonrpc: '2.0', id, error: { code: -32602, message: e.message } });
      }
      return;
    }

    default:
      send({ jsonrpc: '2.0', id, error: { code: -32601, message: `Method not found: ${method}` } });
  }
});

rl.on('close', () => process.exit(0));

const projectNote = ACTIVE_PROJECT ? ` — project: ${ACTIVE_PROJECT}` : '';
process.stderr.write(`[agency-mcp] v1.2.0 started — tools: 6, resources: dynamic${projectNote}\n`);
