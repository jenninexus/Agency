# Weekly Audit Schedule

**Version:** 2.0
**Last Updated:** January 2026
**Source of Truth:** `.config/mcp_agents.json`

> **Note:** Customize this schedule in `.config/mcp_agents.json` to match your project's agents and priorities.

---

## Weekly Audit & Review Cadence

The AI Agent Agency operates on a weekly schedule to ensure continuous quality control and cross-team synchronization. Each agent has a designated day to perform a full audit of their domain.

| Day | Agent | Focus Area |
|:----|:------|:-----------|
| **Monday** | Vidette | Video grids, playlists, aspect ratios, thumbnails |
| **Tuesday** | Bloggie | PHP headers, tags, share buttons, blog structure |
| **Wednesday** | GraphViz | Color compliance, theme consistency, WCAG |
| **Thursday** | GamerGirl | Game pages, platform CTAs, heroes (+ cross-team review) |
| **Friday AM** | DivineDesign | Layout review, template consistency, UX audit |
| **Friday PM** | All | Implementation day - fix all flagged issues |

---

## The Audit & Implementation Cycle

1. **Morning Audit (Mon-Fri):** The designated agent for the day runs their automated audit script. The script generates a report in the `audits/` directory, flagging any `FAIL`, `WARN`, or `INFO` items.

2. **Cross-Team Review (Thursday):** A special review is held to discuss any issues that have cross-agent implications, particularly overlapping domains.

3. **Implementation Day (Friday PM):** The afternoon is dedicated to fixing all issues flagged during the week's audits. The goal is to enter the weekend with a fully compliant system.

This cyclical process ensures that the project maintains a high standard of quality and that any regressions are caught and fixed within days.

---

## Agent Coordination Matrix

| Agent | Coordinates With |
|:------|:-----------------|
| Vidette | GraphViz, GamerGirl, Bloggie |
| Bloggie | GraphViz, Vidette, DivineDesign |
| GraphViz | Vidette, Bloggie, GamerGirl, DivineDesign |
| GamerGirl | Vidette, GraphViz, Bloggie |
| DivineDesign | GraphViz, Vidette, Bloggie, GamerGirl |

---

## Customizing Your Schedule

Edit `.config/mcp_agents.json` to:
- Assign different agents to different days
- Add new agents as your team grows
- Change focus areas for each audit day
- Update audit script paths

---

## VS Code Tasks

The workspace includes pre-configured tasks for each audit day. Access them via:
- **Ctrl+Shift+P** > "Tasks: Run Task"
- Or use the Terminal menu > "Run Task"

Available tasks:
- `Monday: Vidette Audit`
- `Tuesday: Bloggie Audit`
- `Wednesday: GraphViz Audit`
- `Thursday: GamerGirl Audit`
- `Friday: DivineDesign Audit`

---

## Quick Reference

```powershell
# Run a specific agent's audit
powershell -ExecutionPolicy Bypass -File scripts/audit-video-pages.ps1    # Vidette
powershell -ExecutionPolicy Bypass -File scripts/audit-blog-posts.ps1     # Bloggie
powershell -ExecutionPolicy Bypass -File scripts/audit-styles.ps1         # GraphViz
powershell -ExecutionPolicy Bypass -File scripts/audit-game-pages.ps1     # GamerGirl
powershell -ExecutionPolicy Bypass -File scripts/audit-layouts.ps1        # DivineDesign

# Or for bash/zsh
./scripts/audit-styles.sh
```

---

*Consistency comes from repetition. The schedule exists for a reason.*
