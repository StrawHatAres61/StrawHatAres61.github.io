# lucasburda.com

Personal portfolio for Lucas Burda — competitive LD debater, web developer, and security researcher based in Spokane, WA.

Live at **[lucasburda.com](https://lucasburda.com)**

---

## Stack

- Vanilla HTML5, CSS3, JavaScript — no frameworks, no build step
- JetBrains Mono (primary) + Space Grotesk (fallback) via Google Fonts
- Font Awesome 6 for icons
- Deployed via GitHub Pages with a custom domain

---

## Structure

```
/
├── index.html              # Main landing page
├── styles.css              # Global styles (greyscale theme, all components)
├── script.js               # Star field, typing effect, nav, animations, form
├── project.css             # Shared layout for project detail pages
├── CHANGELOG.md            # Full change history
├── projects/
│   ├── hackerbodega.html   # HackerBodega project page
│   └── flexcel.html        # Flexcel Linux fork project page
└── assets/
    └── images/             # All image assets
```

---

## Features

- **Star field canvas** — 320 animated stars, mixed sizes, opacity twinkle, RAF loop with visibility-aware pause
- **Typing effect** — cycles "Web Developer" / "Penetration Tester" in the hero subtitle
- **Fixed nav** — persistent header with active section highlighting and Projects dropdown
- **Multi-page architecture** — dedicated project pages with prev/next navigation
- **Scroll animations** — IntersectionObserver `[data-anim]` system (fade, stagger, pop)
- **Hover animations** — project cards, stat cards, photos, contact methods, form fields all have transitions
- **Contact form** — opens mail client with pre-filled subject/body via `mailto:`
- **No side scroll** — `overflow-x: hidden` + `width: 100%` on html/body, canvas uses `clientWidth`

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#080808` | Page background |
| `--bg-card` | `#111111` | Cards, sections |
| `--bg-hover` | `#1a1a1a` | Hover states |
| `--border` | `#222222` | Borders, dividers |
| `--border-hover` | `#444444` | Hovered borders |
| `--text` | `#f0f0f0` | Primary text |
| `--text-muted` | `#888888` | Secondary text |
| `--accent` | `#d4d4d4` | Highlights, active states |
| `--white` | `#ffffff` | Headings |


## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for full history.

---

Built by Lucas Burda
