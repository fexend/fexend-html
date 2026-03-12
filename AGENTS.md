# AGENTS.md

This file provides guidance to all AI agents (Claude, Gemini, Copilot) when working with code in this repository.

> **Status: REWRITE IN PROGRESS** — This project is being rewritten with a new structure. See [Rewrite Plan](#rewrite-plan) below.

---

## Project Overview

Fexend is a static HTML dashboard UI component library built with:

- **Tailwind CSS v4** — CSS-first config via `@theme {}` in `src/css/app.css`
- **Alpine.js v3** — All interactivity is inline; no separate JS source files
- **Tabler Icons** — Inline SVG icons
- **CDN Libraries** — ApexCharts, Flatpickr, Select2, DataTables loaded via CDN
- **Bun** — Package manager and task runner (replaces npm)

---

## Development Commands

```bash
bun install           # Install dependencies
bun run dev           # Watch and compile Tailwind CSS
bun run build         # One-time production build
```

> **Note:** This project uses **Bun** (not npm/yarn/pnpm). Always use `bun` commands.

---

## Architecture

### Directory Structure

```
fexend-html/
├── src/
│   ├── css/
│   │   ├── app.css               # Tailwind entry point + @theme tokens
│   │   ├── components.css        # @import barrel for UI component CSS
│   │   ├── forms.css             # @import barrel for form element CSS
│   │   ├── libs.css              # @import barrel for third-party library CSS
│   │   ├── layouts.css           # @import barrel for layout CSS
│   │   ├── utilities.css         # @import barrel for utility CSS
│   │   ├── components/           # Per-component CSS (button, card, modal, etc.)
│   │   ├── forms/                # Form element CSS (label, input, checkbox, radio, switch)
│   │   ├── libs/                 # Third-party library theming (select2, flatpickr, datatable)
│   │   ├── layouts/              # Layout CSS files (navbar, sidebar, layout, loading)
│   │   └── utilities/            # Utility CSS files (a, heading, list, p)
│   ├── js/
│   │   └── app.js                # Alpine.js entry point (bundled by Bun)
│   ├── index.html                # Root gallery page (Components · Form Elements · Pages)
│   ├── dashboard.html            # Full layout boilerplate (navbar + sidebar + loading screen)
│   ├── components/               # Full page showcases for each UI component
│   ├── elements/                 # Standalone element pages (buttons, forms, etc.)
│   ├── pages/                    # Auth pages (login, signup, forgot-password, etc.)
│   ├── layouts/                  # Dashboard layout variants
│   ├── dashboard/                # Dashboard page variants
│   └── settings/                 # Settings pages
├── public/                       # Compiled output + static assets — DO NOT EDIT CSS/JS DIRECTLY
│   ├── css/app.css               # Compiled Tailwind CSS output
│   ├── js/app.js                 # Compiled Alpine.js bundle
│   ├── images/
│   ├── fonts/
│   └── favicon*, site.webmanifest, *.png
├── .agents/
│   └── skills/                   # AI skills for project-specific guidance
├── AGENTS.md                     # This file — shared by all AI agents
├── CLAUDE.md                     # Claude Code specific instructions (references AGENTS.md)
├── .github/copilot-instructions.md  # GitHub Copilot instructions (references AGENTS.md)
└── .gemini/GEMINI.md             # Gemini CLI instructions (references AGENTS.md)
```

### Key Patterns

**UI component CSS class naming** — BEM-like with size/color/style variants:

- `.button`, `.button-sm`, `.button-primary`, `.button-primary-outline`, `.button-primary-soft`
- `.badge`, `.badge-success-soft`, `.badge-danger-outline`
- `.card`, `.card-hover`, `.card-table`, `.card-sm`, `.card-lg`

**Form element CSS class naming** — opt-in classes, never bare element selectors:

- `.label`, `.label-required`, `.label-error`, `.label-valid`
- `.input`, `.select`, `.textarea` — base field styles
- `.input-sm`, `.input-lg`, `.input-rounded`, `.input-error`, `.input-valid`, `.input-file`
- `.input-group`, `.input-addon` — grouped inputs with prefix/suffix
- `.input-icon-left`, `.input-icon-right`, `.input-icon` — icon wrappers
- `.form-group` — vertical field wrapper
- `.form-feedback`, `.form-feedback-error`, `.form-feedback-valid`
- `.checkbox`, `.checkbox-{color}` — styled native checkbox
- `.radio`, `.radio-{color}` — styled native radio
- `.switch`, `.switch-{color}` — toggle switch (checkbox with custom appearance)
- `.label-checkbox`, `.label-checkbox-divider`, `.label-checkbox-card`
- `.label-radio`, `.radio-card`, `.radio-button`, `.radio-button-{color}`

> **Rule:** Never style bare `input`, `select`, `textarea`, or `label` elements. Always use opt-in classes.

**Color system** (defined in `src/css/app.css` via `@theme {}`):

| Token                            | Light     | Dark      |
| -------------------------------- | --------- | --------- |
| `primary` / `primary-dark`       | `#615fff` | `#7c86ff` |
| `secondary` / `secondary-dark`   | `#9333ea` | `#c27aff` |
| `success` / `success-dark`       | `#00c950` | `#05df72` |
| `danger` / `danger-dark`         | `#fb2c36` | `#ff6467` |
| `warning` / `warning-dark`       | `#f59e08` | `#ffb900` |
| `info` / `info-dark`             | `#00b8db` | `#00d3f2` |
| `foreground` / `foreground-dark` | `#ffffff` | `#0f172a` |
| `background` / `background-dark` | `#f1f5f9` | `#020617` |

**Dark mode:** Class-based (`.dark` on `<html>`), persisted via `localStorage` key `darkMode`, with system preference fallback. Use `dark:` Tailwind prefix throughout.

**Alpine.js:** Bundled from npm via `src/js/app.js` (Bun builds to `public/js/app.js`). All interactivity is inline Alpine.js in HTML — no logic in the JS source file.

**Icons:** Tabler Icons as inline SVG with `w-5 h-5` or `w-6 h-6`, `stroke="currentColor"`.

**Loading screen:** Every page includes `#loading-screen` with three animated dots, removed after page load.

---

## Rewrite Plan

### Completed Phases

| Phase | Summary |
| ----- | ------- |
| **Phase 1** — Foundation ✅ | Migrated to Bun, restructured CSS into `layouts/` and `utilities/`, bundled Alpine.js |
| **Phase 2** — CSS Migration ✅ | All UI, form, and lib CSS migrated to their respective `src/css/` subfolders; dark mode audited |
| **Phase 3** — New Components ✅ | Added Breadcrumb, WYSIWYG, Stepper, Timeline, Stat Card, File Upload, Avatar, Command Palette, Toast, Data Filter |
| **Phase 4** — HTML Pages ✅ | Full showcase pages for all 25 components and 9 elements; sidebar JS config; auth pages; datatable/select2 styling; modal positions |
| **Phase 5** — New Pages ✅ | Inbox, Calendar, Kanban, Invoice, Users, Error pages (404/500/maintenance) |

### Phase 6 — DX & Documentation

- [x] Root gallery page — `src/index.html` (gallery), `src/dashboard.html` (boilerplate)
- [x] Thumbnail generator — `scripts/generate-thumbnails.js`, run `bun run thumbnails`
- [x] Contributing guide — `CONTRIBUTING.md` updated with Bun setup, component standards, design rules
- [ ] Document every component with inline usage examples

---

## Adding a New UI Component

1. Create `src/css/components/<name>.css` using `@apply` + theme tokens
2. Import it in `src/css/components.css`
3. Create `src/components/<name>.html` — copy `src/dashboard.html` as boilerplate base
4. Optionally create `src/elements/<name>.html` for a standalone showcase

## Adding a New Form Element

1. Create `src/css/forms/<name>.css` using opt-in classes only (no bare element selectors)
2. Import it in `src/css/forms.css`
3. Create `src/elements/<name>.html` as a showcase

## Adding a Third-Party Library Theme

1. Create `src/css/libs/<name>.css` — use the library's class names as selectors
2. Import it in `src/css/libs.css`
3. Create a showcase page in `src/elements/<name>.html`

---

## Code Style

- **Formatter:** Prettier (format on save)
- **Indentation:** 4 spaces for HTML/CSS/JS
- **Tailwind:** Use semantic tokens (`text-primary`, `bg-foreground`) — never raw hex
- **Dark mode:** Always pair `bg-white dark:bg-slate-800` — never light-only
- **Alpine.js:** Keep `x-data` minimal; use `x-on` shorthand (`@click`)
- **Icons:** Tabler Icons inline SVG only; no emoji icons
- **Forms:** Use `.input`, `.label`, `.select`, `.textarea`, `.checkbox`, `.radio`, `.switch` — never style bare HTML elements

---

## Contributing

- Open a GitHub issue before starting new components
- Branch naming: `feature-<name>` or `fix-<name>`
- PR target: `main` branch
- Always test both light and dark mode before submitting
