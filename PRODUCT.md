# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mixed audience arriving equally as recruiters, peers/collaborators, and social followers. They land from social profiles, bios, and shared links (GitHub, LinkedIn, portfolio) and, in the moment of scanning a phone, need to orient to who Bassam is and get routed to one external destination fast (Portfolio, CV, VORTEX, Email, or a social profile).

## Product Purpose

Single canonical link hub at links.bassamalaraby.me. It exists so there's one short, shareable address that answers "who is this person and where do I go next?" Success means a first-time visitor on any phone reaches the right destination in a few taps, in their preferred theme, with no account or friction.

## Positioning

A single-purpose owned page, not a generic link-in-bio platform: the identity and current work (CS student building with Flask & Python, plus VORTEX as the flagship project) sit on the card itself, and every link is a deliberate recommendation rather than an ad-supported list. No ads, no account wall, no tracking — plain static files.

## Operating Context

Encountered in mobile browsers and in-app browsers from social profiles and shared links, often before a hiring decision or a collaboration message. One owner edits the link set by hand in `index.html` and deploys via GitHub Pages (`CNAME`, `https://links.bassamalaraby.me`). Visitor context (light/dark, reduced motion) is respected automatically.

## Capabilities and Constraints

- Links (curated, hand-edited in `index.html`): Portfolio (primary), Resume (CV), VORTEX — E-commerce Platform, Email, plus GitHub, LinkedIn, Facebook, Instagram socials.
- Identity card: avatar, name, one-line bio.
- Light/dark theme toggle persisted in `localStorage`, defaulting to OS preference.
- Static HTML/CSS/JS only: no backend, no build step, no CMS, no analytics.
- Mobile-first, one-column layout (380px max), big tap targets; `prefers-reduced-motion` disables transitions.
- The link set stays small and curated; adding links is not a user-facing feature and needs no admin.

## Brand Commitments

- Name: Bassam Tarek Al-Araby; bio line: "CS student building with Flask & Python."
- Navbar mark: `BASSAM.SYS`
- Assets: `assets/avatar.jpg`, `assets/og-image.jpg`, `assets/favicons/` (included as current identity; not user-mandated as must-preserve).

## Evidence on Hand

- Live destinations: `https://bassamalaraby.me` (portfolio), `https://bassamalaraby.me/assets/documents/bassam-tarek-alaraby-cv.pdf` (CV), `https://vortex-brand.vercel.app` (VORTEX), `mailto:bassamalarabii@gmail.com`, GitHub/LinkedIn/Facebook/Instagram profiles (URLs in `index.html`).
- Identity assets: `assets/avatar.jpg`, `assets/og-image.jpg`, favicon set in `assets/favicons/`.
- Absences future work must not fabricate: no testimonials, customers, benchmarks, or metrics exist — none are claimed.

## Product Principles

- Route, don't describe: orientation is one line; the page's job is destinations, not a profile biography.
- Curate ruthlessly: few hand-picked links, with the Portfolio as the single primary action.
- Works in the tap: mobile-first, readable in light or dark, reduced-motion safe, and links work even if JS fails.
- Owned and lightweight: no ads, accounts, tracking, or build step — the owner can change it in minutes.

## Accessibility & Inclusion

Required: mobile-first big tap targets, light/dark toggle that honors OS preference, and reduced-motion support. Links and the toggle already carry descriptive labels and `aria-label`/`rel="noopener"` as observed — no formal WCAG level was set.
