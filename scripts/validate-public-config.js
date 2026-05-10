#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const failures = [];

function readJson(rel) {
  const full = path.join(root, rel);
  try {
    return JSON.parse(fs.readFileSync(full, "utf8"));
  } catch (error) {
    failures.push(`${rel}: invalid JSON (${error.message})`);
    return null;
  }
}

function readText(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

const publicFiles = [
  "mcp.example.json",
  ".vscode/mcp.example.json",
  "README.md",
  "docs/WORKFLOW.md",
  "docs/PUBLIC-LOCAL-SPLIT.md"
];

const forbiddenPatterns = [
  /C:\\Users\\/i,
  /C:\\Github\\/i,
  /C:\\mcp\\/i,
  /api[_-]?key/i,
  /secret/i,
  /ssh_host/i,
  /64\.23\./
];

for (const rel of publicFiles) {
  if (!fs.existsSync(path.join(root, rel))) {
    failures.push(`${rel}: missing`);
    continue;
  }
  const text = readText(rel);
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(text)) {
      failures.push(`${rel}: contains forbidden public-template pattern ${pattern}`);
    }
  }
}

const registry = readJson("mcp.example.json");
const vscode = readJson(".vscode/mcp.example.json");

if (vscode) {
  if (!vscode.servers || !vscode.servers.agency) {
    failures.push(".vscode/mcp.example.json: missing servers.agency");
  }
  for (const key of ["agents", "schedule", "studio"]) {
    if (Object.prototype.hasOwnProperty.call(vscode, key)) {
      failures.push(`.vscode/mcp.example.json: should not contain ${key}; keep agent registry in mcp.example.json`);
    }
  }
}

if (registry) {
  if (!registry.agents || typeof registry.agents !== "object") {
    failures.push("mcp.example.json: missing agents object");
  }
  if (registry.servers) {
    failures.push("mcp.example.json: use server for framework metadata; VS Code servers belong in .vscode/mcp.example.json");
  }
}

if (failures.length) {
  console.error("Public config validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Public config validation passed.");
