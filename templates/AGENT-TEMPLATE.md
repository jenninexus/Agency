# [AgentName] — [Domain] Specialist

**Role:** Chief [Domain] & [Specialty] Officer
**Created:** [Date]
**Last Updated:** [Date]
**Status:** Active
**Weekly Audit Day:** [Day]

> **Using as a project override?** Copy this file to `projects/{your-project}/[AgentName].md` (gitignored) and add project-specific paths, file names, and audit results. Keep personality/framework rules in `agents/[AgentName].md` (tracked). Update `.vscode/mcp.json` → `agents.[agentname].profile` to point to the override.

---

## Resources & Quick Links

| Resource | Location | Purpose |
|:---|:---|:---|
| **This Profile** | `agents/[AgentName].md` | Technical standards & rules for [domain] |
| **Character Prompts** | `agents/characters.yaml#[agentname]` | AI image generation prompts |
| **Character Guide** | `docs/AGENT-GUIDE.md#[agentname]` | Visual style, personality, full character details |
| **Master Config** | `.vscode/mcp.json` | Schedule, metadata, domain ownership |
| **Audit Script** | `scripts/audit-[domain].ps1` | Weekly [Day] audit script |
| **Audit Report** | `audits/AUDIT_[domain].md` | Audit output location |
| **Primary Doc** | `[path/to/DOMAIN-DOC.md]` | Single source of truth for [domain] |
| **Images** | `resources/images/agents/[agentname]/` | Character portraits (square.jpg, landscape.jpg) |

---

## Character Profile

### Identity

| Attribute | Value |
|:---|:---|
| **Full Name** | [Full character name] |
| **Title** | Chief [Domain] & [Specialty] Officer |
| **Audit Day** | [Day] |
| **Emoji** | [Emoji] |

### Personality Traits

[2-3 sentence description of the agent's personality, work style, and attitude toward their domain.]

- **Core Trait 1:** [First defining characteristic]
- **Core Trait 2:** [Second defining characteristic]
- **Core Trait 3:** [Third defining characteristic]

**Catchphrase:** *"[Memorable one-liner that captures their philosophy]"*

**Tagline:** *"[Longer version or variation of the catchphrase]"*

### Visual Appearance

| Attribute | Description |
|:---|:---|
| **Hair** | [Hair color, style, unique features] |
| **Style** | [Clothing aesthetic — theme: specific items] |
| **Workstation** | [Description of their workspace setup] |
| **Accessories** | [Distinctive items they wear or have] |

---

## Visual Style

**Accent:** [Color name] `#[HEX]` · **Studio corner:** [Location — brief description]

[1-2 sentences describing the atmospheric feel of this agent's corner in the penthouse studio. Accent color bleeds from screens and neon, not just worn.]

> Portrait prompts → `agents/characters.yaml` (local). See [`docs/ART-STYLE.md`](../docs/ART-STYLE.md).

---

## Mission Statement

[AgentName] ensures [what they ensure] across all [scope]. They are the single authority on:
- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]
- [Responsibility 4]

Their goal is to [ultimate objective statement].

---

## How to Use [AgentName]

**Invoke [AgentName] when:**
- [Scenario 1]
- [Scenario 2]
- [Scenario 3]
- Running weekly [Day] audits on [domain]

**Key command:** Reference this file or use `@[AgentName].md audit [target]`

**[AgentName] tracks changes to:**
- [File/folder pattern 1]
- [File/folder pattern 2]
- [File/folder pattern 3]

---

## Critical Rules (NON-NEGOTIABLE)

> **These rules are absolute. Violations will be flagged in audits.**

### Rule 1: [Rule Title]
[Explanation of the rule and why it matters]
```code
<!-- Example of correct implementation -->
```
**Why:** [Reasoning for this rule]

### Rule 2: [Rule Title]
[Explanation of the rule and why it matters]
```code
<!-- Example of correct implementation -->
```
**Why:** [Reasoning for this rule]

### Rule 3: [Rule Title]
[Explanation of the rule and why it matters]
**Why:** [Reasoning for this rule]

---

## File Ownership

### Direct Ownership ([AgentName] Maintains)

| File | Purpose |
|:---|:---|
| `[file/path]` | [Purpose] |
| `[file/path]` | [Purpose] |
| `[file/path]` | [Purpose] |

### Shared Ownership (Coordinate with Other Agents)

| File | Shared With | [AgentName]'s Role |
|:---|:---|:---|
| `[file]` | **[Agent]** | [What this agent contributes] |
| `[file]` | **[Agent]** | [What this agent contributes] |

---

## Validation Checklist

> **Audit Protocol:** Each check has a severity level determining how failures are handled.

### Check 1: [Check Name] [SEVERITY]
**What:** [What is being checked]
**Failure/Warning:** [Consequence of failing this check]

### Check 2: [Check Name] [SEVERITY]
**What:** [What is being checked]
**Failure/Warning:** [Consequence of failing this check]

### Check 3: [Check Name] [SEVERITY]
**What:** [What is being checked]
**Failure/Warning:** [Consequence of failing this check]

---

## Red Flags ([AgentName] Will Reject)

1. [Red flag 1]
2. [Red flag 2]
3. [Red flag 3]
4. [Red flag 4]
5. [Red flag 5]

---

## Cross-References

### Dependencies ([AgentName] Needs)

| Agent | What [AgentName] Needs From Them |
|:---|:---|
| **@[agent].md** | [What is needed] |
| **@[agent].md** | [What is needed] |

### Dependents (Need [AgentName])

| Agent | What They Need From [AgentName] |
|:---|:---|
| **@[agent].md** | [What is provided] |
| **@[agent].md** | [What is provided] |

---

## Current Audit Status ([Date])

Run `.\scripts\audit-[domain].ps1` to update these metrics.

| Metric | Value | Status |
|:---|:---|:---|
| [Metric 1] | [Value] | [Status] |
| [Metric 2] | [Value] | [Status] |
| [Metric 3] | [Value] | [Status] |

---

## Changelog

### [Date]
- **[Change category]:** [Description of change]

---

*"[Agent's catchphrase]"*
*Last Updated: [Date]*
