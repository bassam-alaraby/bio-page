---
name: BASSAM.SYS Router
description: A Flask route dispatch board that routes one visitor to one destination — amber marks the open route.
colors:
  ground: "#DFE3E6"
  ground-dark: "#121312"
  panel: "#F4F6F7"
  panel-dark: "#1A1C1B"
  ink: "#1A1A18"
  ink-dark: "#EDEDEA"
  ink-muted: "#5C5C62"
  ink-muted-dark: "#9A9AA0"
  hairline: "#B8C0C7"
  hairline-dark: "#2A2C2A"
  route-amber: "#92400E"
  route-amber-dark: "#FBBF24"
  route-amber-tint: "rgba(180, 83, 9, 0.12)"
  route-amber-tint-dark: "rgba(251, 191, 36, 0.14)"
  navbar-veil: "rgba(223, 227, 230, 0.92)"
  navbar-veil-dark: "rgba(18, 19, 18, 0.92)"
typography:
  name:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(1.15rem, 5vw, 1.35rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  route-label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  route-meta:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: "normal"
    letterSpacing: "0.04em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: "normal"
    letterSpacing: "0.1em"
  mark:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: "normal"
    letterSpacing: "0.02em"
rounded:
  none: "0"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  xxl: "32px"
components:
  route-row:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
    width: "100%"
  route-row-active:
    backgroundColor: "{colors.route-amber-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
    width: "100%"
  routes-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "100%"
  navbar:
    backgroundColor: "{colors.navbar-veil}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "60px"
    width: "100%"
  avatar:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "112px"
    width: "112px"
  social-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    height: "45px"
    width: "45px"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "44px"
    width: "44px"
---

# Design System: BASSAM.SYS Router

## Overview

**Creative North Star: "The Route Dispatch Board"**

The page is a printed HTTP route table on a machined aluminium panel, not a directory of equal buttons. A fixed status bar reads `BASSAM.SYS` / `SYS/OK` like an instrument panel; below it the identity sits as a small badge block, and then the destinations arrive as ruled log rows: method and path above the destination name on one left edge, status code and a chevron on the right. The visitor's job is dispatch: read one line of orientation, then take the route marked open.

The material is flat, matte and exact. Surfaces are two greys apart, separated by a single hairline and nothing else; every corner is square because a board has edges, not pillows. Mono type carries the machinery (mark, methods, paths, statuses), while Manrope carries the human part (name's subtitle voice is mono, the bio is Manrope) — the split is the product: system above, person inside.

Motion is quiet: only the chevron nudge on hover/focus and tint fades. The terminal log is static text — no cascade, no blink — and `prefers-reduced-motion` still kills every transition.

**Key Characteristics:**
- Left-aligned log rows: method/path/name stacked on one edge, 44px minimum height, hairline separators.
- One reserve colour: amber belongs to the single active route and to nothing else.
- Hairline row separators only; no card shadows, no rounded corners anywhere.
- Tabular numerals and a themed 10px scrollbar sustain the instrument-panel read.
- One yellow signal only: a 3px left bar on the open route; hover tints the row, not the text.

## Colors

Two aluminium greys, one near-black ink family, and a single amber that is spent entirely on the open route.

### Primary
- **Open Route Amber** (`colors.route-amber`): the only chromatic colour in the system. Used for the active route's 3px left bar and its near-transparent tint; hover arrows flip to amber on any row. Deliberately darker in light mode for contrast on white-grey panels and brighter in dark mode so it reads as a lit signal LED.

### Secondary
- **Open Route Amber Tint** (`colors.route-amber-tint` / `colors.route-amber-tint-dark`): a low-alpha amber wash — the row hover/active state and the active row's background. It is the same hue as the amber by construction, so hover and "open" feel like the same light, at different intensities.

### Neutral
- **Aluminium Ground** (`colors.ground` / `colors.ground-dark`): the page background and the scrollbar track. A cool blue-grey in light mode; near-black with a faint green cast in dark, so the amber reads warm against it.
- **Panel Aluminium** (`colors.panel` / `colors.panel-dark`): the route table and avatar ground — barely lighter than the ground, dividing by tone rather than by shadow.
- **Panel Ink** (`colors.ink` / `colors.ink-dark`): body text, route labels, the mark, focus outlines. Warm near-black in light, warm near-white in dark.
- **Muted Ink** (`colors.ink-muted` / `colors.ink-muted-dark`): the bio, inactive methods/paths/statuses, `SYS/OK`, social icons.
- **Hairline** (`colors.hairline` / `colors.hairline-dark`): every 1px border — panel edge, row separators, navbar underline, avatar ring, control borders. One value, used everywhere.
- **Navbar Veil** (`colors.navbar-veil` / `colors.navbar-veil-dark`): the 92%-opaque ground that lets content scroll under the fixed bar while keeping the bar's hairline legible.

### Named Rules

**The One Open Route Rule.** Amber is assigned to exactly one route at a time — the active route. Never tint a hover, a border, an icon, or a heading amber; hover uses the low-alpha amber tint at the same hue, or plain ink. If two things on screen are amber, the board has lied about where to go.

**The Hairline-Only Rule.** Separation is a 1px hairline in `hairline`, never a shadow or a gap-in-space. The panel edge, every row, and the navbar each get one.

## Typography

**Display Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular, Menlo, Consolas, monospace)
**Body Font:** Manrope (with -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)

**Character:** IBM Plex Mono is the terminal's voice — methods, paths, status codes, the `BASSAM.SYS` mark, the name — and Manrope is the person's voice, reserved for the bio and the route labels a human reads when choosing. Mono for the machine, humanist sans for the destination.

### Hierarchy
- **Name** (600, clamp(1.15rem, 5vw, 1.35rem), 1.2, -0.01em): the h1, mono and tight — it reads as the device's own label for its owner, not a marketing headline.
- **Route Label** (700, 0.98rem, 1.25): the destination name under method/path on the row's left edge; the largest human-readable text on the board. Wraps with `overflow-wrap: anywhere` so long names never break the row.
- **Body** (500, 0.95rem, 1.5): the one-line bio in muted ink. Keep it to one line; this is orientation, not biography.
- **Route Meta** (600, 0.7rem, letter-spacing 0.04em, mono): method, path, and status. Inactive ones are muted ink; the active route's method and status flip to amber.
- **Label** (600, 0.7rem, letter-spacing 0.1em, mono, uppercase in markup): the `SYS/OK` readout, always muted ink.
- **Mark** (600, 0.85rem, letter-spacing 0.02em, mono): `BASSAM.SYS` in the navbar; the `SYS` syllable is the constant, the dot is not styled as an accent.

### Named Rules

**The Tabular Route Rule.** Every numeric or status readout uses tabular figures (`font-variant-numeric: tabular-nums`) so `200 OPEN`, `201 MAIL`, and `200 FILE` align in the 62px status column. Status codes are set as data, never prose.

**The Two-Voice Rule.** Mono is for anything the router says; Manrope is for anything Bassam says. Do not set a label in mono or a status in Manrope to "balance" a layout.

## Layout

One centred column, `max-width: 380px`, aligned left inside the card and vertically centred in the viewport (`min-height: 100dvh`), offset below the fixed 60px navbar plus `env(safe-area-inset-top)` and 32px. The page steals horizontal padding from itself (20px; 16px below 360px) rather than shrinking the panel, so the route grid keeps its fixed columns down to the smallest phone.

Each route row is a two-column grid: a left stack (method, path, name, all flush at the panel's left edge) and a right cluster (status code, chevron) vertically centered. Rows are at least 44px tall; the name column absorbs slack so status and arrow never jiggle.

Vertical rhythm: avatar → name (12px above, 4px below) → bio → routes panel (20px above) → socials (28px above). The identity block (avatar, name, bio) is badge-like and left-aligned; the panel is the widest element and owns the bottom of the column.

Responsive steps: at ≤600px the avatar drops 112px → 96px; at ≤360px the navbar and page padding tighten to 16px and social tiles drop 45px → 36px. The single-column mobile-first grid never reflows — the board's columns are the invariant.

## Elevation & Depth

The system is **flat**: no box-shadows in the resting design, no blur, no layered cards. Depth is purely tonal — panel against ground, ink against panel — plus hairlines that draw the board edges. The only shadow in the vocabulary is the amber inset rule that the active route uses as a 3px bottom bar inside the panel, which reads as a status LED strip, not as material depth. State changes move in ink, not in space.

The navbar is the one translucent surface: a 92%-opaque veil with a hairline bottom edge, letting rows pass beneath it without the bar becoming an opaque slab.

### Shadow Vocabulary
- **Active Route Inset Rule** (`box-shadow: inset 0 -3px 0 var(--accent)`): only on `.route-active`. Marks the open route with a bottom bar in the same body, not a drop shadow.
- **Focus Ring** (`outline: 2px solid var(--text); outline-offset: -2px`): drawn inside the row so it never collides with the panel border or a neighbour's hairline.

### Named Rules

**The Flat-By-Default Rule.** Shadows do not express elevation. If a surface needs to feel closer, lighten its tone by one step (ground → panel); do not lift it. The active-route inset rule is the sole exception and belongs to state, not depth.

## Shapes

Every corner is square (`border-radius: 0`): avatar, route panel, route rows, social tiles, theme toggle, scrollbar thumb. Borders are always exactly 1px in `hairline`; the only thicker line is the 3px amber active-route rule. Form language is rectilinear and orthogonal: one stacked column, a five-column table, and a row of 1:1 square social tiles. No circles, no pills, no clipping or rounding hacks — the avatar is a square crop, the theme toggle is a square button with two superimposed square-ish glyphs cross-fading by 40° rotation.

## Components

The board is small enough to hold in one hand: one status bar, one identity badge, one route table, one social strip.

### Route Rows (signature component)
- **Shape:** full-width two-column grid row, square corners, 1px bottom hairline on every row except the last, `12px` padding, 44px minimum height.
- **Default:** transparent over the panel; method, path, status in muted ink; label in ink; chevron muted.
- **Active:** near-transparent tint, one 3px amber left bar, everything else in normal ink/muted colors. Exactly one active row per page — Portfolio, the open route.
- **Hover / Active (press):** background shifts to the amber tint; the chevron slides 4px in amber. Border and grid stay put, so the row never shifts under the finger.
- **Focus:** 2px ink outline inset 2px; never amber.
- **Chevron:** inline SVG, stroke 2px `currentColor`, 18px, right end, vertically centered; hover/focus slides it 4px and flips it to amber.
- **Pencil:** a 32px edit toggle sits at the table's top-right corner.


### Status Bar (Navigation)
- **Style:** fixed to the top, full width, 60px tall, navbar veil over a hairline bottom edge, safe-area padding at the top. Content constrained to 380px, `mark` on the left, `SYS/OK` pushed right, theme toggle at the far right.
- **Hover:** the mark drops to 0.8 opacity; the toggle lifts 1px and its border moves to ink. No amber.
- **Mobile:** identical — this bar is designed for the phone first and does not collapse.

### Theme Toggle
- **Shape:** 44px square, 1px hairline border, transparent ground, square corners.
- **Icons:** sun and moon overlapped absolutely, cross-fading on a 0.2s opacity + transform (scale 0.6 ↔ 1, ±40°) so the switch reads as a dial turning over. In dark mode the sun is visible; in light, the moon.
- **Focus/Hover:** ink border and a 1px lift; behaviour does not change with theme.

### Social Strip
- **Style:** four 45px square tiles (36px below 360px), 1px hairline border, transparent ground, muted-ink icons at 22px; 12px gaps; left-aligned under the panel.
- **Hover:** icon and border move to ink with a 1px lift; no tint, no amber. These are secondary routes, so they stay outside the board.

### Avatar
- **Shape:** 112px square (96px ≤600px), 1px hairline border, `object-fit: cover`, left-aligned — a stamped badge on the panel, not a portrait medallion.

## Do's and Don'ts

### Do:
- **Do** keep the left-edge stack (method/path/name flush) and the right cluster (status/chevron) — that alignment is the signature.
- **Do** reserve amber for the single active route — the one 3px left bar and its tint — and give every other state an ink-based treatment.
- **Do** use one hairline value (`hairline` / `hairline-dark`) for every border and separator, at exactly 1px.
- **Do** set route methods, paths, statuses, and the mark in IBM Plex Mono, and tabular numerals on the status column.
- **Do** keep motion to the chevron slide and tint fades, and leave the global `prefers-reduced-motion` kill-switch intact.
- **Do** keep the status column's phrases short and machine-shaped (`200 OPEN`, `200 FILE`, `200 APP`, `201 MAIL`) so they never wrap in 62px.

### Don't:
- **Don't** add a second accent colour, a gradient, or an amber outline for focus or hover.
- **Don't** round any corner, soften a border to a shadow, or add a resting box-shadow; depth is tone plus hairline.
- **Don't** put a second yellow signal on the row — the left bar is the whole state.
- **Don't** mark more than one route active, or tint the social tiles like routes; socials are a strip, not part of the board.
- **Don't** widen the column past 380px or switch to a centred, equal-button layout — the board is left-aligned and router-shaped.
