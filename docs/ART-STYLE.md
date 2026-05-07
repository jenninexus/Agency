# Art Style Guide — AI Agent Agency

A visual cohesion guide for agent portraits and studio backgrounds. Use this when generating new agent images or onboarding agents into an existing team.

---

## Shared Studio Aesthetic

All agents work at the same location. This shared setting appears in every portrait.

| Element | Description |
|---------|-------------|
| **Setting** | Luxury cyberpunk penthouse loft, high-rise tower, futuristic rainy Seattle at night |
| **Windows** | Floor-to-ceiling rain-streaked glass on multiple sides, neon city glow visible below |
| **Architecture** | Polished dark concrete, hardwood floors, exposed industrial steel beams |
| **Render quality** | Hyperrealistic, cinematic depth of field, moody atmospheric haze |
| **Tone** | Each corner reflects the agent's personal accent color and domain equipment |

The goal is a consistent "penthouse studio" feel — each agent occupies their own corner with specialized gear, but it reads as one shared space.

---

## Per-Agent Visual Identity

| Agent | Accent Color | Personality | Workstation Flavor |
|-------|-------------|-------------|-------------------|
| **Vidette** | Cyan `#66c0f4` | Calm, analytical, collector | Streaming deck, multi-monitor video wall, playlist queues |
| **Bloggie** | Gold `#FFB020` | Warm, editorial, detail-obsessed | Amber desk lamp, editorial stacks, coffee, typewriter energy |
| **GraphViz** | Purple `#A563D1` | Precise, uncompromising, color-scientist | Dual color-calibrated monitors, holographic palette swatches |
| **GamerGirl** | Pink `#FF2E88` | Competitive, fast, loud | Gaming rig, RGB peripherals, Steam overlay, joystick chaos |
| **DivineDesign** | Teal `#00D4AA` | Architectural, spatial, perfectionist | Blueprint drafting setup, layout grids floating mid-air |
| **Metrica** | Neon Green `#39ff14` | Data-driven, relentless, auditor | Dashboard walls, GSC charts, PageSpeed gauges, antenna array |
| **Vixel** | Orange `#FF6B4A` | Lone wolf, horror-adjacent, builder | Brutalist concrete sub-corner, blood-red neon strips, Unity editor |

Each agent's neon accent lights the underside of shelves, bleeds from monitors, and catches in rain on the windows — the color should feel *atmospheric*, not decorative.

---

## Portrait Variants

Three ratios per agent for different use contexts:

| Variant | Ratio | Filename | Use |
|---------|-------|----------|-----|
| Square | 1:1 | `square.jpg` | Profile picture, agent card, README |
| Landscape | 16:9 | `landscape.jpg` | Gallery hero, banner |
| Portrait tall | 3:4 | `portrait_3x4.jpg` | Tall card format |

---

## Studio Background Variants

Separate from character portraits — these are workstation *scene* shots without the character in frame (for VS Code background extension use):

| Variant | Ratio | Filename | Use |
|---------|-------|----------|-----|
| Primary scene | 16:9 | `studio.jpg` | VS Code background, primary |
| Second angle | 16:9 | `studio_2.jpg` | Slideshow alternate |
| Tall scene | 9:16 | `studio_916.jpg` | Portrait/tall monitor |

---

## Repository Image Locations

```
resources/images/
  banner.jpg                    — README header (tracked in repo)
  agents/
    vidette.jpg                 — Square portrait for README/cards (tracked)
    bloggie.jpg
    graphviz.jpg
    gamergirl.jpg
    divinedesign.jpg
    metrica.jpg
    vixel.jpg
```

> Portrait source files (all variants + studio scenes) are generated locally and live in `storage/agency/generations/images/` — not tracked in the public repo. Only the square portraits in `resources/images/agents/` are intended to be committed.

---

## `characters.yaml` (Local Only)

The full generation prompt SSOT lives in `agents/characters.yaml` (gitignored). It contains:

- A `shared_style` block (the penthouse aesthetic above, in prompt form)
- Per-agent blocks with three ratio prompts each (`landscape`, `square`, `portrait_3x4`)
- Negative prompts for each agent

**Structure example:**

```yaml
shared_style: |
  Hyperrealistic 3D render. Luxury cyberpunk penthouse loft, futuristic rainy Seattle...

agents:
  bloggie:
    name: Bloggie
    accent_color: "#FFB020"
    landscape: |
      [full 16:9 portrait prompt]
    square: |
      [full 1:1 portrait prompt]
    portrait_3x4: |
      [full 3:4 portrait prompt]
```

Copy `agents/characters.yaml.example` (if provided) or model your own from the structure above.

---

## Prompt Principles

When writing new agent prompts:

1. **Lead with the shared setting** — always anchor in the penthouse before describing the agent
2. **Use the accent color atmospherically** — it should bleed from screens, neon strips, and ambient glow, not just be "worn"
3. **Specialize the equipment** — a content agent has editorial gear, a metrics agent has dashboards, a game agent has a rig
4. **Stay hyperrealistic** — avoid cartoon or illustrated styles; cinematic depth of field, 8K detail
5. **No pure white** — even the lightest surfaces in the penthouse use warm or cool tints

---

## StyleGuard Technique vs. Art Direction

The `StyleGuard` agent enforces **code-level** visual consistency (CSS variables, WCAG contrast, no hardcoded hex). This document covers **visual identity** — how agents *look* in generated imagery.

They are complementary:
- StyleGuard's accent color rules in CSS mirror each agent's portrait accent
- The "no white backgrounds" rule applies in both UI code and portrait renders
- Both share the same color palette vocabulary

See [`../examples/StyleGuard.md`](../examples/StyleGuard.md) for the code-enforcement side.
