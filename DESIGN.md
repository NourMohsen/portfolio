---
name: Nour, Flutter Developer
description: A one-page portfolio that runs like a Flutter app, with a live hot-reload demo on a cobalt device stage.
colors:
  ink: "#0B0E14"
  ink-raised: "#121723"
  ink-high: "#1A2131"
  line: "#252E41"
  line-soft: "#1B2232"
  text: "#E9EDF5"
  muted: "#9CA8BD"
  faint: "#6F7B91"
  cobalt: "#2D4BFF"
  cobalt-deep: "#2238D6"
  on-cobalt: "#FFFFFF"
  on-cobalt-muted: "rgba(255, 255, 255, .86)"
  sky: "#5CC8FF"
  sky-hover: "#86D7FF"
  sky-ink: "#04263A"
  sky-soft: "rgba(92, 200, 255, .14)"
  ribbon: "#D93A3A"
  code-text: "#C9D3E6"
  code-class: "#8FB4FF"
  code-key: "#5CC8FF"
  device-black: "#04060A"
  app-surface-light: "#FBF9FF"
  app-surface-dark: "#121318"
  app-seed-default: "#3D5AFE"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 3.9vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.012em"
    fontVariation: "\"opsz\" 96"
  display-contact:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 5vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "\"opsz\" 96"
  headline:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.4rem + 2.6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "\"opsz\" 72"
  headline-app:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.6rem + 3vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "\"opsz\" 96"
  title:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 600
    lineHeight: 1.3
  body-lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + .3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
  label-nav:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
  code:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Code, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.85
  app-body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "4cqw"
    fontWeight: 400
    lineHeight: 1.35
  app-title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "8.6cqw"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
rounded:
  key: "5px"
  sm: "8px"
  md: "14px"
  lg: "22px"
  pill: "999px"
  app-card: "4cqw"
  app-panel: "5cqw"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1240px"
  dot-grid: "22px"
  section: "clamp(88px, 11vw, 150px)"
  section-head: "clamp(40px, 6vw, 72px)"
  stage-gap: "48px"
  topbar: "68px"
  topbar-phone: "60px"
  bottomnav: "72px"
  app-pad: "5.5cqw"
  app-pad-compact: "4.5cqw"
components:
  button-primary:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.3em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.sky-hover}"
    textColor: "{colors.sky-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.3em"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.ink-raised}"
  button-light:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.3em"
    height: "48px"
  button-outline-sm:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0 .95em"
    height: "40px"
  button-outline-sm-hover:
    textColor: "{colors.sky}"
  editor:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.code-text}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "18px 20px 6px"
    width: "560px"
  editor-token:
    backgroundColor: "{colors.sky-soft}"
    textColor: "{colors.sky}"
    rounded: "{rounded.key}"
    padding: "0 .35em"
  phone-frame:
    backgroundColor: "{colors.device-black}"
    width: "clamp(250px, 24vw, 310px)"
  debug-ribbon:
    backgroundColor: "{colors.ribbon}"
    textColor: "#FFFFFF"
    width: "42cqw"
  top-nav-link-active:
    backgroundColor: "{colors.ink-high}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  bottom-nav:
    backgroundColor: "#10141D"
    textColor: "{colors.muted}"
    typography: "{typography.label-nav}"
    height: "72px"
  bottom-nav-item-active:
    backgroundColor: "{colors.sky-soft}"
    textColor: "{colors.sky}"
    rounded: "{rounded.pill}"
    width: "56px"
    height: "30px"
  timeline-row:
    textColor: "{colors.text}"
    typography: "{typography.title}"
    padding: "22px 0"
  stack-chip:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.code-text}"
    rounded: "{rounded.sm}"
    padding: "8px 11px"
---

# Design System: Nour, Flutter Developer

## Overview

**Creative North Star: "The Hot-Reload Stage"**

The page is a dark device stage. An ink ground carries the reading; one saturated cobalt field, printed with a fine white dot grid, is the stage where devices stand. Phones are drawn in code, not photographed, and the apps inside them are live HTML sized in container units, so a seed colour, a brightness flag or a density setting in the editor genuinely re-themes the screen. Everything that proves craft happens on cobalt; everything that explains it happens on ink.

The personality is a working developer's desk rather than a showroom: Bricolage Grotesque headlines with real optical sizing, calm Hanken Grotesk body copy, and JetBrains Mono strictly where code lives. Density is generous on desktop (sections breathe at 88 to 150px) and collapses to a single column with an app-style bottom bar on phones. Motion is a single idea, the hot-reload sweep, and it is spent only where something actually reloads.

The vocabulary is borrowed from Flutter itself, not from portfolio templates: the red corner debug ribbon, the Material 3 navigation pill, the `pubspec.yaml` as a skills list, the console reporting a reload time.

**Key Characteristics:**
- Ink ground, one cobalt dot-grid stage, sky as the only working accent.
- Device frames and in-phone apps are code, themed by a single `--seed` colour.
- Display type with optical sizing; mono only for code.
- One motion grammar: the hot-reload sweep plus settle.
- Pill-shaped controls everywhere outside the phone; Material 3 shapes inside it.

## Colors

A near-black blue ink, one loud electric cobalt, and a pale sky accent, with a single warm red reserved for the debug ribbon.

### Primary
- **Electric Cobalt** (cobalt): the stage. Fills the hero stage, the sticky apps stage, the mobile per-app phone plate, the portrait frame and the whole contact section, always with the 22px dot grid. It is a surface, never a text or button colour on ink.
- **Deep Cobalt** (cobalt-deep): text colour on the white "copied" email chip inside the cobalt contact section. Nothing else.

### Secondary
- **Pale Sky** (sky): the working accent on ink. Primary button fill, links in the timeline (organisation names), focus outlines, selection, editor tokens, console prompt, YAML keys, highlight ticks, active bottom-nav pill. Its hover lift is **Sky Hover** (sky-hover), used only on the primary button.
- **Sky Ink** (sky-ink): the dark text that sits on sky fills (buttons, selection, skip link); 8.3:1 against sky.
- **Sky Wash** (sky-soft): the 14% sky tint behind editor tokens and the active bottom-nav pill.

### Tertiary
- **Debug Red** (ribbon): only the HIRE ME corner ribbon on the hero phone, modelled on Flutter's debug banner. White text on it measures 4.55:1.

### Neutral
- **Ink** (ink): page ground, editor body, top bar once scrolled.
- **Raised Ink** (ink-raised): the About band, ghost-button hover, stack chips, kbd keys.
- **High Ink** (ink-high): the active top-nav pill.
- **Line** (line) and **Soft Line** (line-soft): borders on ghost buttons and timeline/principle rules (line); section dividers, editor bar and console rules, bottom-nav top edge (line-soft).
- **Text** (text), **Muted** (muted), **Faint** (faint): primary copy; secondary copy and inactive nav (8:1 on ink); footer only (4.52:1 on ink, the floor; do not use it smaller or on raised ink).
- **Code palette**: code-text for plain code, code-class for Dart class names, code-key (same value as sky) for YAML keys.
- **Device Black** (device-black): the phone bezel.
- **In-phone surfaces**: app-surface-light and app-surface-dark are the Material-style app backgrounds; app-seed-default is the editor's initial `colorSchemeSeed`. All other in-phone colours are derived from `--seed` with `color-mix(in oklab, ...)`: surface container 7%, primary container 20% (34% in dark), on-primary-container 75% toward black (25% toward white in dark).

### Named Rules
**The One Stage Rule.** Cobalt is a field, not an accent. It appears as a dot-gridded surface that holds a device, a portrait or the contact call, and never as a button, link or text colour on ink.

**The Sky Works Rule.** On ink, sky is the only interactive colour. If something is clickable, focusable or "live", it is sky or sits on sky.

**The Ribbon Is Singular Rule.** Debug red appears once per page, on the hero phone's corner, and hides when the owner is not available for work.

## Typography

**Display Font:** Bricolage Grotesque (with Hanken Grotesk, system-ui)
**Body Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Cascadia Code, Consolas)

**Character:** Bricolage brings a slightly quirky, high-contrast grotesque voice at large optical sizes; Hanken keeps the reading quiet and technical. Mono is a material of the code world, not a style.

### Hierarchy
- **Display** (700, clamp 2.5 to 4.6rem, line-height 1, opsz 96): the hero headline only, capped at 17ch. The contact call uses the larger **display-contact** variant (to 5.4rem, 0.98, -0.035em, 14ch).
- **Headline** (700, clamp 2.1 to 3.6rem, 1.02, -0.03em, opsz 72): section titles. App names in the apps list use **headline-app** (to 4.4rem, -0.035em), turning white when their case is active.
- **Title** (Hanken 600, 1.12rem, 1.3): timeline entry titles; sub-headings ("Experience") use Hanken 600 1.05rem in muted.
- **Body** (Hanken 400, 1.0625rem, 1.6; 1rem under 760px): running copy at 46 to 62ch. Lead paragraphs use **body-lead** in muted.
- **Label** (Hanken 600, 1rem, line-height 1): buttons; nav links are 500 at .95rem; bottom-nav labels 500 at .72rem.
- **Code** (JetBrains Mono 400, .875rem, 1.85; .74rem on phones, .69rem under 380px): editor, YAML file, console, kbd.
- **In-phone** (Hanken, container units): body 4cqw/1.35, screen title 700 8.6cqw/1.05, stat numerals 700 10cqw. Numerals that tick use tabular figures.

### Named Rules
**The Mono Means Code Rule.** JetBrains Mono appears only on things a developer would type or read in a terminal: the editor, YAML, console, kbd. Never for labels, metadata or decoration.

**The Optical Size Rule.** Every Bricolage heading sets `font-variation-settings: "opsz"` (96 for display and app names, 72 for section titles) and tightens tracking as size grows.

## Layout

A centred 1240px container with a fluid gutter (clamp 16 to 40px). Sections pad clamp(88px, 11vw, 150px) vertically and separate with a 1px soft-line rule or a change to raised ink, never with cards.

The hero is a two-part composition: copy on ink, then a full-bleed cobalt stage whose inner grid is `1fr auto` with a 48px gap. The phone is pulled up 560px (380px between 760 and 1023px) so it straddles the ink/cobalt edge; on phones it reorders above the editor and overlaps the stage top by 110px.

The apps section pairs a sticky cobalt stage (300 to 380px column, holding the sticky phone vertically centred under the top bar) with a scrolling list of cases at 82vh each. About splits 5fr/7fr, Toolkit 4fr/7fr with a sticky side head, Journey two equal timeline columns.

Breakpoints:
- **1024px** (max-width 1023px): About and Toolkit go single column, the sticky side head becomes static, the apps sticky column narrows to 260 to 320px.
- **760px** (max-width 759px): top nav hides and the fixed bottom navigation appears (body pads 72px plus safe area), top bar shrinks to 60px, everything stacks to one column, the sticky apps stage is replaced by a cobalt phone plate inside each case, and paired buttons stretch to fill rows.

The fixed top bar is 68px, transparent at rest and solid ink with a soft-line bottom edge once scrolled. Anchor scrolling clears it via `scroll-padding-top`.

### Named Rules
**The Dot-Grid Material Rule.** Every cobalt surface carries the same grid: a 1px white dot at 16% opacity on a 22px square repeat. No cobalt without the grid, no grid on ink.

## Elevation & Depth

Flat surfaces, deep devices. Ink sections have no shadows at all; depth there comes from tonal steps (ink, raised ink, high ink) and 1px lines. Shadows exist only to lift objects off the cobalt stage, so the phone and editor read as physical things standing on it.

### Shadow Vocabulary
- **Device drop** (`0 50px 80px -30px rgba(0,0,0,.75), 0 18px 30px -18px rgba(0,0,0,.6)` plus inset bezel rings): every phone frame.
- **Editor drop** (`0 24px 48px -24px rgba(0,0,0,.55)`): the code editor on the stage.
- **Ribbon lift** (`0 2px 6px rgba(0,0,0,.35)`): the debug ribbon over the screen.
- **In-app FAB** (`0 1.2cqw 3cqw -1cqw rgba(0,0,0,.35)`): the floating action button inside the hero app.

### Named Rules
**The Objects-Only Shadow Rule.** A shadow means "this is a device or window standing on the stage". Sections, rows, chips and buttons stay flat.

## Shapes

Two shape languages, divided by the phone glass. Outside the phone, controls are full pills (999px) and containers use three soft radii: 8px for chips and small marks, 14px for editors, 22px for cobalt plates and the portrait. Inside the phone, shapes follow Material 3 in container units: 4cqw list items and tiles, 5cqw panels, 6cqw search and input fields, round avatars and checkboxes, and a pill indicator in the nav bar.

The phone is proportional throughout: a 9:19.5 aspect, an outer radius of 16% of its width, a screen radius of 13%, a bezel padding of 3.2% and a punch-hole camera at 4%, so one `--w` value scales the whole device. A 3px side button sits on the right edge.

Editor tokens are 5px-radius chips with a dashed sky border that turns solid on hover, the visual signal for "tap to change".

## Components

### Buttons
Rounded, confident pills; the only shape a page-level action takes.
- **Shape:** full pill (999px), 48px tall (40px for the small and outline variants), icon gap .55em, label 600 weight.
- **Primary:** sky fill with sky-ink text. Used once per view for the main action ("See the apps").
- **Ghost:** transparent with a 1.5px line border and text colour; hover raises to raised ink with a muted border. Used for "Download CV" in the hero and top bar.
- **Light:** white with ink text, only on cobalt (the contact links); hover tints to #E7ECFF.
- **Outline small:** raised ink with a line border; hover turns border and text sky. Used for per-app store and source links.
- **States:** colour transitions at .2s; press nudges down 1px and scales to .98 with the ease-out curve; focus shows the global 2px sky outline at 3px offset (white on cobalt).

### Chips
- **Stack chips:** raised ink, soft-line border, code-text colour, 8px radius, 500 .85rem; the tech stack under each app.
- **Sample tag:** a dashed pill in warm orange marking placeholder content (a product requirement: sample content stays labelled). Its orange is a functional status colour outside the palette, not an accent.

### Cards / Containers
There are no content cards. Containers are the cobalt plates (22px radius, dot grid, no border, no shadow) and the editor window.

### Code Editor (signature)
A window on the stage: ink body, 14px radius, editor drop shadow, a bar with three neutral dots and the file name in mono muted, code at .875rem/1.85, and a console footer separated by a soft line. Live values are sky tokens with a dashed border and an optional colour swatch; tapping one (or pressing r) cycles the value, flashes the token for .6s and fires the hot-reload sweep on the phone, while the console logs "Reloaded 1 of N libraries in Xms" with the time in green. The same window, widened, renders `pubspec.yaml` as the toolkit with sky keys and hanging indents.

### Phone Frame (signature)
A code-drawn device: device-black body, inset 1.5px and 4px bezel rings, proportional radii, side button, punch-hole camera. Sizes: hero clamp(250px, 24vw, 310px) (min(70vw, 280px) on phones), sticky clamp(260px, 25vw, 310px), inline min(64vw, 260px). The screen is a size container, so every in-phone app is styled in `cqw`.

### In-Phone App
A Material 3-style screen driven by one `--seed` colour and `data-brightness` / `data-density` attributes: status bar, header with date and avatar, progress track, tappable task rows with round checks, focus panel, FAB and a three-item navigation bar with a pill indicator. Mock screens for each app reuse the same vocabulary (search field, chips, tile grid, stat panel with bars, chat bubbles, scene image).

### Debug Ribbon
White 700 text at 3cqw with .1em tracking on debug red, rotated 45 degrees across the hero phone's top-right corner, reading HIRE ME.

### Timeline
A ruled list, not cards: each row is a 7.5rem period column (muted, tabular figures) beside title (title style), organisation in sky and description in muted, separated by 1px line rules top and bottom. Collapses to one column under 760px.

### Navigation
- **Top bar (760px and up):** monogram mark (38px cobalt square, 11px radius, display 800 initial) with name and role, then pill links in muted that lift to raised ink on hover and high ink when active, then a small ghost CV button.
- **Bottom navigation (under 760px):** a fixed five-item Material 3-style bar on #10141D with a soft-line top edge and safe-area padding. Each item is a 56px-tall target with a 56x30 pill holding a 22px stroked icon over a .72rem label. Active: text colour label, sky icon on a sky-wash pill, background eased in .25s.

### Motion: the Hot-Reload Sweep
One motion idea. A sky gradient band (38% of the screen tall) translates from above the screen to below it in .55s on `cubic-bezier(.16, 1, .3, 1)`, while the screen content settles from a 3px blur, 1.6 saturation and .55 opacity to sharp. It runs in exactly two places: the hero phone on every hot reload, and the sticky apps phone each time a new app case reaches mid-viewport. Under `prefers-reduced-motion` all animation and transition durations collapse to .01ms.

## Do's and Don'ts

### Do:
- **Do** put every device, portrait or closing call on a cobalt plate with the 22px dot grid (1px white dot at 16%).
- **Do** use sky for every interactive or live element on ink, with sky-ink text on sky fills.
- **Do** draw devices in code with the proportional phone frame, and style anything inside the screen in container units from a single `--seed`.
- **Do** keep page-level actions as 999px pills: sky primary, ghost secondary, light on cobalt, outline-small for per-item links.
- **Do** set optical size on every Bricolage heading (opsz 96 for display, 72 for section titles).
- **Do** reuse the hot-reload sweep (.55s, ease-out, with the settle blur) whenever a phone's content is swapped, and nowhere else.
- **Do** switch to the bottom navigation and a single column below 760px, and pad the body by the bar height plus the safe area.

### Don't:
- **Don't** use cobalt as a button, link or text colour on ink; it is a stage surface.
- **Don't** set labels, metadata or headings in JetBrains Mono; mono is for code only.
- **Don't** add shadows to sections, rows, chips or buttons; shadows belong to devices and the editor window standing on the stage.
- **Don't** use debug red anywhere but the single hero ribbon.
- **Don't** wrap content in cards; separate with 1px lines and tonal steps of ink.
- **Don't** add a second motion idea; new animation should be the sweep or nothing.
