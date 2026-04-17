# Changelog — lucasburda.com

All notable changes to this portfolio are documented here.
Update this file with every meaningful change before pushing.

---

## How to update this file

1. Add a new `## [date]` section at the top (below this header)
2. Group changes under `### Added`, `### Changed`, or `### Fixed`
3. Commit the changelog in the same commit as the change

---

## [2026-04-16] — Side scroll lock

### Fixed
- Canvas now uses `document.documentElement.clientWidth/clientHeight` instead of `window.innerWidth/innerHeight` — matches CSS `width: 100%` and excludes scrollbar width
- `html` and `body` both get `overflow-x: hidden; width: 100%` to fully lock horizontal scroll
- Added `max-width: 100%` to `#star-canvas` as a safety net

---

## [2026-04-16] — Portfolio card hover animation

### Added
- Hovering the `lucasburda.com` project card now scales the logo 8% and brightens it to full white via `filter: brightness(1.4)`
- Transition on `transform` and `opacity` and `filter` for smooth effect

---

## [2026-04-16] — Footer + overflow fixes

### Fixed
- Footer background changed from `var(--bg-card)` (#111) to `transparent` — removes the seam/gap at the bottom of the page
- Removed `overflow-y: scroll` from html (was forcing a permanent scrollbar and causing width mismatch)

---

## [2026-04-16] — Star field overhaul + Backpic removed from hero

### Changed
- Hero background: removed `Backpic.jpg` — now fully transparent so star field shows through
- About section photo: changed from `Bestpfp.webp` to `Backpic.jpg` at 380×240 landscape dimensions
- Star field: count doubled to 320, drift speed tripled (0.35px/frame), opacity twinkle doubled, mixed star sizes (small/medium/large tiers)
- Canvas `fillStyle = '#080808'` replaces `clearRect` so canvas is opaque black (was transparent, causing bg bleed)
- `body { min-height: 100vh }` and `html { min-height: 100% }` added to cover overscroll zones

---

## [2026-04-16] — Text caret fix (blinking cursor on click)

### Fixed
- Global `user-select: none; -webkit-user-select: none` on all elements via `*, *::before, *::after`
- Re-enabled `user-select: text` only on `.contact-method a`, `.contact-form input`, `.contact-form textarea`
- `cursor: default` added to `.hero-title`, `.hero-subtitle`, `.hero-description`, `.section-title`, `.stat h3`, `.stat p`
- `user-select: none` added to all `h1–h4`, hero elements, section titles, stat text, project labels, skill headings, promo banner

---

## [2026-04-16] — JetBrains Mono font + logo with text + personal copy

### Added
- JetBrains Mono loaded via Google Fonts as primary font (Space Grotesk remains fallback)
- All three HTML files updated with the new font link

### Changed
- Nav logo swapped from `LB-Logo4-03.webp` (mark only) to `LB-Logo2-04.webp` (mark + LUCASBURDA.COM text baked in)
- Removed separate "Lucas Burda" text node next to logo — image carries the full brand
- Nav logo CSS: `height: 44px; max-width: 180px; flex-shrink: 0; display: block`
- Portfolio project card thumbnail now shows the greyscale logo instead of a globe icon
- Hero description rewritten to mention competitive LD debate background
- About bio rewritten: LD debater + developer + security researcher, debate-to-code mindset angle
- Flexcel overview on project page rewritten to be personal ("I compete in LD, I use this tool")
- Hero background position pushed to `center 10%` to show more of subject

---

## [2026-04-16] — Flexcel stats removed + portfolio project card added

### Changed
- Removed "8,000+ downloads" and "30,000+ hrs" stats from `flexcel.html` hero and project meta — those numbers belong to the original app, not the fork
- Flexcel project card description on index updated to reflect the port work, not usage stats
- Removed Flexcel sentence from about bio
- About section photo swapped from `Bestpfp.webp` to `Backpic.jpg` (landscape, 380×240)
- Hero background position adjusted to `center 25%`

### Added
- `lucasburda.com` project card added to the projects grid — replaces the [REDACTED] placeholder
- GitHub link: `github.com/StrawHatAres61/StrawHatAres61.github.io`

---

## [2026-04-16] — Content + asset updates (post-screenshot review)

### Changed
- Hero profile photo: `PFP.webp` → `Bestpfp.webp`
- Flexcel card thumbnail: updated to `Flex.png`
- Nav logo added: `LB-Logo4-03.webp` with `filter: grayscale(1) invert(1)`
- Instagram link updated to `instagram.com/lucasburdadotcom`
- About bio and all project descriptions rewritten
- Removed "8,000+ downloads" stat from about section

---

## [2026-04-16] — Full redesign (Phase 1–4)

### Added
- Complete rewrite of `styles.css` — greyscale palette (#080808 bg, #f0f0f0 text, no blue/purple)
- CSS custom properties: `--bg`, `--bg-card`, `--bg-hover`, `--border`, `--border-hover`, `--text`, `--text-muted`, `--accent`, `--white`, `--nav-height`
- Star field canvas animation (`script.js`) — 160 drifting stars, opacity twinkle, RAF loop, visibility-aware pause
- Typing effect in hero subtitle cycling "Web Developer" / "Penetration Tester"
- Projects dropdown nav with hover (desktop) and click (mobile) support
- Mobile hamburger menu
- `[data-anim]` IntersectionObserver scroll animation system (`fade`, `stagger`, `pop`)
- `project.css` — shared layout for dedicated project pages
- `projects/hackerbodega.html` — dedicated HackerBodega project page
- `projects/flexcel.html` — dedicated Flexcel project page
- Prev/next project navigation bar on project pages
- Owen's Linktree promo banner

### Changed
- Consolidated from 3 separate `DOMContentLoaded` listeners to 1
- Removed all JS hover/style injection — replaced with CSS transitions
- Removed Tailwind CDN link
- Removed all `!important` overrides (~40 of them)
- Removed `brandPulse` purple glow animation
- Project grid updated to 4 cards: HackerBodega, Flexcel, [REDACTED], Coming Soon
- About stats updated: 2+ yrs, 3 projects, 2 clients

---

## Pre-redesign history (summary)

| Date | Description |
|------|-------------|
| Early 2026 | DeepSite-generated MVP with blue/purple Tailwind theme |
| Early 2026 | Lighthouse optimization passes |
| Early 2026 | CNAME and GitHub Pages setup for lucasburda.com |
| Early 2026 | Owen promo banner added |
| Early 2026 | Logo and branding assets added |
