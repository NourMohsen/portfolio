---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

Scope: index.html, the whole one-page portfolio. Visitor mode: Persuade (hire / contact), with the apps section in Experience mode.
Audience: recruiters and clients on a phone, deciding in under a minute. Action: contact (email/WhatsApp) or download the CV. Proof: the apps, shown as running screens.
Constraints: mobile-first; all content comes from data.js; sample content stays labelled.

## Direction contract

THESIS: The portfolio *is* a running Flutter app. It refuses the category default (a split hero of headline beside a laptop mockup, then a grid of equal project cards) and instead puts a live hot-reload demo on stage.

OWN-WORLD: An ink ground (#0B0E14) with one committed cobalt stage field (#2D4BFF) under a fine pixel grid. The device frames are drawn in code. Sky (#5CC8FF) is the working accent for links and focus; a red corner ribbon modelled on Flutter's debug banner says HIRE ME. Display type is Bricolage Grotesque. Body is Hanken Grotesk, replacing Geist after the detector flagged Geist as an overused font. JetBrains Mono is used only for code (editor, YAML, console, kbd). Phones use a Material 3-style bottom navigation bar.

STORY: The visitor sees a real Dart snippet driving a real phone screen and taps a value, and the app hot-reloads. They believe Nour ships polished apps, scroll through the apps one device at a time, and then email, message or download the CV.

FIRST VIEWPORT: A large headline across the top left, with the subhead and two actions under it ("See the apps" in sky as the primary, "Download CV" as a ghost button). The cobalt stage starts mid-viewport. The phone (about 300px wide on desktop) straddles the ink/cobalt edge on the right. The code editor sits on the stage at lower left, with a console line under it. On mobile, the stack runs headline, actions, phone, then code.

FORM: Dark device stage. The user picked it in the structured question round, and a user-pinned direction beats the roll, so concept-seed was not run. seed: none (user-pinned; no roll). Rule cited, impeccable reference/new-work.md §3: "a user- or brief-pinned direction beats the roll, always", and "A session that reaches directions or comps without concept-seed having run (a direction the user or brief pinned) reads the mode's file instead". mode-persuade.md was read.

Signature interaction: hot reload. Tapping a highlighted token, or pressing r, changes the code, and a scan sweep re-renders the phone while the console logs the reload time. The same sweep swaps the sticky phone between apps in the apps section.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
