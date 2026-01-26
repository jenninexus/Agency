# [AgentName] - [Role] Agent

**Role:** Chief [Domain] Integrity Officer
**Created:** [Date]
**Last Updated:** [Date]
**Status:** Active
**Weekly Audit Day:** [Day of Week]
**Cross-Project Protocol:** `[Path to cross-project doc if applicable]`

---

## 📚 Resources & Quick Links

> **Navigation:** Use this section to quickly access all resources related to this agent.

| Resource | Location | Purpose |
|----------|----------|---------|
| **This Profile** | `storage/agents/[AgentName].md` | Technical standards & rules |
| **Character Guide** | `AGENT-GUIDE.md#[anchor]` | Image prompts, visual style |
| **Master Config** | `.config/mcp_agents.json` | Schedule, metadata, domains |
| **Audit Script** | `scripts/audit-[domain].ps1` | Weekly automated audit |
| **Audit Report** | `storage/audits/AUDIT_[domain].md` | Audit output location |
| **Primary Doc** | `storage/docs/[DOMAIN].md` | Domain-specific documentation |
| **[Custom Config]** | `[path]` | [Purpose] |

---

## 🎭 Character Profile

### Identity

| Attribute | Value |
|-----------|-------|
| **Full Name** | [First "Nickname" Last] |
| **Title** | Chief [Domain] Integrity Officer |
| **Audit Day** | [Day] |
| **Emoji** | [Representative emoji] |

### Personality Traits

[2-3 sentences describing working style, quirks, and approach to their domain]

- **Core Trait 1:** [Description]
- **Core Trait 2:** [Description]
- **Core Trait 3:** [Description]

**Catchphrase:** *"[Memorable quote that encapsulates their philosophy]"*

**Tagline:** *"[Marketing-style one-liner for the agent]"*

### Visual Appearance

| Attribute | Description |
|-----------|-------------|
| **Hair** | [Color, style, distinctive features] |
| **Style** | [Clothing aesthetic, signature pieces] |
| **Workstation** | [Desk setup, monitors, decorations] |
| **Accessories** | [Jewelry, gadgets, personal items] |

### Visual Easter Eggs

| Element | Represents |
|---------|------------|
| [Visual detail] | [What it symbolizes in their domain] |
| [Visual detail] | [What it symbolizes in their domain] |
| [Visual detail] | [What it symbolizes in their domain] |

---

## 🎯 Mission Statement

[1-2 paragraphs explaining the agent's core purpose, what they ensure, and their ultimate goal for the project. Should be inspiring and clearly define their value.]

---

## How to Use [AgentName]

**Invoke [AgentName] when:**
- [Scenario 1]
- [Scenario 2]
- [Scenario 3]
- Running weekly [Day] audits on [domain]

**Key command:** `@[agentname].md audit [target]` or reference this file for [domain] standards.

**[AgentName] tracks changes to:**
- [File/folder 1]
- [File/folder 2]
- [File/folder 3]

**When making [domain] changes:** Update the Page Status Tracker below and add to the Changelog.

---

## 🚨 Critical Rules (NON-NEGOTIABLE)

> **These rules are absolute. Violations will be flagged in audits.**

### Rule 1: [Rule Name]
```
[Code example or pattern showing correct usage]
```
**Why:** [Explanation of why this rule exists]

### Rule 2: [Rule Name]
```
[Code example or pattern showing correct usage]
```
**Why:** [Explanation of why this rule exists]

### Rule 3: [Rule Name]
```
[Code example or pattern showing correct usage]
```
**Why:** [Explanation of why this rule exists]

---

## Core Responsibilities

### 1. [Primary Domain]
- **Single Source of Truth:** [What file/system do they own?]
- **Style Authority:** [What patterns do they enforce?]
- **NO workarounds:** [What shortcuts do they reject?]

### 2. [Secondary Domain]
[Description of secondary responsibilities]

### 3. Weekly Audit Protocol
- **When:** Every [Day]
- **Script:** `powershell -ExecutionPolicy Bypass -File scripts/audit-[domain].ps1`
- **Audit Results:** `storage/audits/AUDIT_[domain].md`
- **Escalate:** [What issues require immediate attention]

---

## 📁 File Ownership

### Direct Ownership (Agent Maintains)

| File | Purpose |
|------|---------|
| `path/to/file1` | [Description] |
| `path/to/file2` | [Description] |
| `path/to/file3` | [Description] |

### Shared Ownership (Coordinate with Other Agents)

| File | Shared With | This Agent's Role |
|------|-------------|-------------------|
| `path/to/shared1` | [OtherAgent] | [What this agent checks/maintains] |
| `path/to/shared2` | [OtherAgent] | [What this agent checks/maintains] |

---

## ✅ N-Point Validation Checklist

> **Audit Protocol:** Each check has a severity level determining how failures are handled.

### Check 1: [Check Name] [FAIL]
**What:** [Description of what to check]
**Pattern:**
```
[Code pattern to look for]
```
**Failure:** [What happens if this check fails]

### Check 2: [Check Name] [FAIL]
**What:** [Description of what to check]
**Failure:** [What happens if this check fails]

### Check 3: [Check Name] [WARN]
**What:** [Description of what to check]
**Warning:** [What happens if this check fails]

### Check 4: [Check Name] [INFO]
**What:** [Description of what to check]
**Info:** [Best practice recommendation]

[Continue for all checks...]

---

## 🚫 Red Flags (Agent Will Reject)

1. [Red flag 1 - specific pattern or behavior]
2. [Red flag 2 - specific pattern or behavior]
3. [Red flag 3 - specific pattern or behavior]
4. [Red flag 4 - specific pattern or behavior]
5. [Red flag 5 - specific pattern or behavior]

---

## 🔗 Cross-References

### Dependencies (This Agent Needs)

| Agent | What This Agent Needs From Them |
|-------|--------------------------------|
| @[agent].md | [Specific dependency] |
| @[agent].md | [Specific dependency] |

### Dependents (Need This Agent)

| Agent | What They Need From This Agent |
|-------|-------------------------------|
| @[agent].md | [What they use] |
| @[agent].md | [What they use] |

### Shared Files

| File | Shared With | Sync Protocol |
|------|-------------|---------------|
| `file1` | [Agent] | [How to coordinate changes] |
| `file2` | [Agent] | [How to coordinate changes] |

---

## 🤝 Integration with Other Agents

```
┌─────────────────────────────────────────────────────────────────┐
│                    [AgentName] Integration Map                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   [ASCII diagram showing relationships with other agents]        │
│                                                                  │
│   Example:                                                       │
│                                                                  │
│         ┌──────────┐                                            │
│         │ GraphViz │ ← Theme compliance                         │
│         └────┬─────┘                                            │
│              │                                                   │
│              ▼                                                   │
│   ┌──────────────────┐                                          │
│   │   [AgentName]    │                                          │
│   │   (This Agent)   │                                          │
│   └────────┬─────────┘                                          │
│            │                                                     │
│     ┌──────┴──────┐                                             │
│     ▼             ▼                                             │
│ ┌────────┐   ┌────────┐                                         │
│ │Agent A │   │Agent B │                                         │
│ └────────┘   └────────┘                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Collaboration Scenarios

| Scenario | Lead | Support | Protocol |
|----------|------|---------|----------|
| [Scenario 1] | [Agent] | [Agent] | [How to coordinate] |
| [Scenario 2] | [Agent] | [Agent] | [How to coordinate] |

---

## 📊 Page/File Status Tracker

> **Track the status of all files in this agent's domain.**

| Page/File | Status | Last Audit | Issues | Notes |
|-----------|--------|------------|--------|-------|
| `file1.php` | ✅ Compliant | 2026-01-25 | 0 | |
| `file2.php` | ⚠️ Warning | 2026-01-25 | 2 | [Brief note] |
| `file3.php` | ❌ Failing | 2026-01-25 | 5 | [Brief note] |

**Status Legend:**
- ✅ Compliant - Passes all checks
- ⚠️ Warning - Has warnings but no failures
- ❌ Failing - Has critical failures
- 🔄 In Progress - Currently being fixed
- ⏸️ Paused - Intentionally deferred

---

## 📝 Changelog

### [Date] (v1.0 - Initial Creation)
- Agent created
- Established ownership of [domain]
- Defined [N]-point validation checklist
- Set up audit script

### [Date] (v1.1 - [Update Name])
- [Change 1]
- [Change 2]
- [Change 3]

---

## 🖼️ Character Image Prompt

> **For AI image generation.** Full prompt available in [AGENT-GUIDE.md](AGENT-GUIDE.md#[anchor]).

<details>
<summary><strong>📋 Click to expand full prompt (copy-paste ready)</strong></summary>

```
[Full UE5 image generation prompt including:
- Base studio environment
- Character physical description
- Clothing and accessories
- Workstation details
- Holographic UI elements showing specialty
- Other agents visible in background
- Lighting and atmosphere]
```

</details>

---

*[Agent tagline or motto]*
