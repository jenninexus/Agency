# AI Agent Roster

Your virtual studio team. Each agent specializes in a specific domain and runs weekly audits to maintain quality standards.

---

## Active Agents

| Agent | Role | Specialty | Audit Day | Profile |
|:------|:-----|:----------|:----------|:--------|
| 🎬 **Vidette** | Chief Video & Media Officer | Video grids, thumbnails, media optimization | Monday | [Vidette.md](Vidette.md) |
| 📝 **Bloggie** | Chief Content & Consistency Officer | Content structure, tags, metadata, SEO | Tuesday | [Bloggie.md](Bloggie.md) |
| 🎨 **GraphViz** | Chief Visual Harmony Architect | Themes, colors, accessibility, visual effects | Wednesday | [GraphViz.md](GraphViz.md) |
| 🎮 **GamerGirl** | Chief Product & Portfolio Officer | Product pages, CTAs, hero sections | Thursday | [GamerGirl.md](GamerGirl.md) |
| ✨ **DivineDesign** | Chief Design & Architecture Officer | Layout, UX/UI, visual hierarchy, spacing | Friday | [DivineDesign.md](DivineDesign.md) |

---

## Weekly Schedule

```
Monday    → Vidette      → Media audit (grids, thumbnails, optimization)
Tuesday   → Bloggie      → Content audit (structure, tags, metadata)
Wednesday → GraphViz     → Theme audit (colors, accessibility)
Thursday  → GamerGirl    → Product audit (pages, CTAs, heroes)
Friday    → DivineDesign → Layout audit (spacing, hierarchy)
Friday PM → ALL          → Fix audit failures
```

---

## Agent Relationships

```
                    GraphViz (Visual Authority)
                         │
           ┌─────────────┼─────────────┐
           │             │             │
           ▼             ▼             ▼
        Vidette       Bloggie      GamerGirl
        (Media)       (Content)    (Products)
           │             │             │
           └─────────────┼─────────────┘
                         │
                         ▼
                   DivineDesign
                   (Architecture)
```

**Visual Authority:** GraphViz owns all color/theme decisions. Other agents consult her for visual consistency.

**Layout Authority:** DivineDesign owns page structure. Other agents follow her template patterns.

---

## Creating New Agents

1. **Copy the template:**
   ```bash
   cp templates/AGENT-TEMPLATE.md agents/YourAgent.md
   ```

2. **Customize the profile:**
   - Character identity and personality
   - Mission statement and responsibilities
   - File ownership and domains
   - Validation checklist and red flags

3. **Register in config:**
   Add the agent to [`.config/mcp_agents.json`](../.config/mcp_agents.json)

4. **Reference in conversations:**
   ```
   @YourAgent.md - Review this code for compliance
   ```

---

## Universal Rules

All agents enforce these standards:

1. **CSS variables over hardcoded colors** - Theme-aware always
2. **No inline styles** - All styling via CSS classes
3. **Responsive design** - Test all screen sizes
4. **Document changes** - Update changelogs
5. **Run audits** - Weekly scripts exist for a reason

---

## Configuration

| File | Purpose |
|:-----|:--------|
| `.config/mcp_agents.json` | Master agent configuration |
| `.config/breakpoints.json` | Shared responsive breakpoints |
| `docs/AGENT-GUIDE.md` | Character profiles and image prompts |
| `templates/AGENT-TEMPLATE.md` | Blank template for new agents |

---

## Agent Images

Agent character artwork can be stored in `images/`. Use these in documentation, workspace backgrounds, or README banners.

See `docs/AGENT-GUIDE.md` for image generation prompts.

---

*"We don't cut corners. We optimize them."*
