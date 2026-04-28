#!/usr/bin/env node
/**
 * AI Agent Agency — MCP Server
 *
 * Exposes agent data from .config/mcp_agents.json as MCP tools.
 * Compatible with any MCP host: Claude Code, GitHub Copilot (MCP ext),
 * Cursor, Zed, Cline, or any IDE supporting the Model Context Protocol.
 *
 * Usage:
 *   node scripts/mcp-server.js
 *
 * Config: copy .config/mcp_agents.example.json → .config/mcp_agents.json
 * then populate with your project's agents.
 *
 * MCP spec: https://modelcontextprotocol.io
 */

const fs   = require('fs');
const path = require('path');
const readline = require('readline');

// ── Config loader ─────────────────────────────────────────────────────────────
const ROOT       = path.join(__dirname, '..');
const CONFIG_PATH = path.join(ROOT, '.config', 'mcp_agents.json');
const EXAMPLE_PATH = path.join(ROOT, '.config', 'mcp_agents.example.json');

function loadConfig() {
  const p = fs.existsSync(CONFIG_PATH) ? CONFIG_PATH : EXAMPLE_PATH;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

// ── Tool definitions ──────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: 'agency_list_agents',
    description: 'List all AI agents in the team with their roles, audit days, and specialties.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'agency_get_agent',
    description: 'Get the full profile for a specific agent including red flags, domains, and coordination rules.',
    inputSchema: {
      type: 'object',
      properties: {
        agent_id: {
          type: 'string',
          description: 'Agent ID (e.g. "styleguard", "layoutarchitect"). Use agency_list_agents to see all IDs.'
        }
      },
      required: ['agent_id']
    }
  },
  {
    name: 'agency_get_schedule',
    description: 'Get the weekly audit schedule — which agent runs on which day and what they focus on.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'agency_get_rules',
    description: 'Get universal rules that all agents enforce — coding standards, naming conventions, red flags.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'agency_get_agent_for_file',
    description: 'Given a file path, return which agent owns that file and any relevant red flags to check.',
    inputSchema: {
      type: 'object',
      properties: {
        file_path: {
          type: 'string',
          description: 'Relative file path to look up (e.g. "src/styles/theme.css", "assets/hero.png")'
        }
      },
      required: ['file_path']
    }
  }
];

// ── Tool handlers ─────────────────────────────────────────────────────────────
function handleTool(name, args) {
  const cfg = loadConfig();
  const agents = cfg.agents || {};

  if (name === 'agency_list_agents') {
    const rows = Object.entries(agents).map(([id, a]) => ({
      id,
      name: a.name,
      title: a.title,
      emoji: a.emoji || '',
      audit_day: a.audit_day,
      specialty: a.specialty || [],
      tagline: a.tagline || ''
    }));
    return { agents: rows, studio: cfg.studio || {}, total: rows.length };
  }

  if (name === 'agency_get_agent') {
    const id = (args.agent_id || '').toLowerCase();
    const agent = agents[id];
    if (!agent) {
      return { error: `Agent "${id}" not found. Available: ${Object.keys(agents).join(', ')}` };
    }
    return { id, ...agent };
  }

  if (name === 'agency_get_schedule') {
    const sched = (cfg.schedule || {}).weekly || {};
    const rows = Object.entries(sched).map(([day, info]) => ({ day, ...info }));
    return { schedule: rows };
  }

  if (name === 'agency_get_rules') {
    return {
      universal_rules: cfg.universal_rules || [],
      conflict_resolution: (cfg.synchronization || {}).conflict_resolution || {},
      commit_format: ((cfg.synchronization || {}).cross_references || {}).markers || {}
    };
  }

  if (name === 'agency_get_agent_for_file') {
    const filePath = (args.file_path || '').toLowerCase();
    const matches = [];

    for (const [id, agent] of Object.entries(agents)) {
      const domains = agent.domains || {};
      const allPatterns = Object.values(domains).flat();
      for (const pattern of allPatterns) {
        const p = pattern.toLowerCase().replace(/\*/g, '');
        if (filePath.includes(p) || p.includes(filePath.split('/').pop())) {
          matches.push({
            agent_id: id,
            agent_name: agent.name,
            title: agent.title,
            matched_domain: pattern,
            red_flags: agent.red_flags || [],
            profile: agent.profile
          });
          break;
        }
      }
    }

    if (!matches.length) {
      return { file_path: filePath, owners: [], note: 'No agent owns this file type. Consult universal rules.' };
    }
    return { file_path: filePath, owners: matches };
  }

  return { error: `Unknown tool: ${name}` };
}

// ── MCP JSON-RPC stdio transport ──────────────────────────────────────────────
const rl = readline.createInterface({ input: process.stdin });

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + '\n');
}

rl.on('line', (line) => {
  let msg;
  try { msg = JSON.parse(line); } catch { return; }

  const { id, method, params } = msg;

  // MCP initialize handshake
  if (method === 'initialize') {
    return send({
      jsonrpc: '2.0', id,
      result: {
        protocolVersion: '2024-11-05',
        capabilities: { tools: {} },
        serverInfo: { name: 'agency', version: '1.0.0' }
      }
    });
  }

  if (method === 'notifications/initialized') return; // no response needed

  if (method === 'tools/list') {
    return send({ jsonrpc: '2.0', id, result: { tools: TOOLS } });
  }

  if (method === 'tools/call') {
    const { name, arguments: args = {} } = params || {};
    let content;
    try {
      const result = handleTool(name, args);
      content = [{ type: 'text', text: JSON.stringify(result, null, 2) }];
    } catch (e) {
      content = [{ type: 'text', text: JSON.stringify({ error: e.message }) }];
    }
    return send({ jsonrpc: '2.0', id, result: { content } });
  }

  // Unknown method — return standard error
  send({ jsonrpc: '2.0', id, error: { code: -32601, message: 'Method not found' } });
});

rl.on('close', () => process.exit(0));
process.stderr.write('[agency-mcp] Server started. Reading from .config/mcp_agents.json\n');
