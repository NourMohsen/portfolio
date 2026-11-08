# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: static HTML, CSS and vanilla JS, no build step, so the site deploys to GitHub Pages as plain files (the reference portfolio is also hosted on GitHub Pages). All editable content lives in `data.js`.

## Users

- **Primary:** recruiters, hiring managers and freelance clients who are judging whether to hire a Flutter developer. Most open the link from LinkedIn, a job platform or WhatsApp **on a phone**, and spend under a minute deciding.
- **Secondary:** other developers and tech leads who check code quality through GitHub links.

## Product Purpose

A personal portfolio for Nour, a Flutter mobile developer. It must show in seconds that Nour ships real, polished cross-platform apps, then make contacting them (or downloading the CV) effortless.

## Positioning

A mobile developer's portfolio should itself prove mobile craft. The site behaves like a Flutter app: it demonstrates hot reload live, shows apps inside real device frames and uses an app-style bottom navigation on phones.

## Operating Context

- Reference used for structure only: https://mennakhaled27144.github.io/My_Portfolio-/ (a Data Analyst portfolio by someone else; none of its content may be reused).
- Sections carried over from the reference: hero, about, skills, projects with screenshots, experience, education/training, contact, CV download.

## Capabilities and Constraints

- Must be mobile-first and fully usable at 360px width.
- Content is data-driven from `data.js` so Nour can replace everything without touching layout code.
- Owner confirmed by CV: Nour Omar.

## Evidence on Hand

Source of truth is `Nour Omar Cv.pdf` (copied to `assets/Nour_Omar_CV.pdf`). It covers:

- Nour Omar, Flutter developer, Cairo.
- Experience: Link Development (Apr 2025–now), SADEEMA (2024–25), Dubisign (2023–24).
- B.Sc. Computer Science, Mansoura University (2017–21).
- 7 published apps with Play/App Store links: NBE Platinum, Boubyan Concierge, Taseese, MedKing, Atmemly, Kateb, Darb w Tarh.

Still missing:

- Real app screenshots (the phones show drawn, labelled *illustrative* screens).
- A profile photo.
- The MedKing App Store link (the CV's link points to NBE Platinum by mistake).
- Which company and year each app belongs to.

Testimonials, download numbers and ratings are absent and must not be invented.

## Product Principles

1. Show, don't claim: every skill is demonstrated by an app, a screen or a link.
2. Phone first: most visitors arrive on a phone, so the phone experience is the primary one.
3. One tap to contact: email, WhatsApp, LinkedIn and the CV are always within reach.
4. Real content only: placeholders are labelled until real material replaces them.

## Accessibility & Inclusion

WCAG 2.1 AA contrast, full keyboard access to the interactive demo, and support for `prefers-reduced-motion`.
