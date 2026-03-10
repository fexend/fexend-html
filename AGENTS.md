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
│   ├── index.html                # Root dashboard page with full layout boilerplate
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
├── skills/                       # AI skills for project-specific guidance
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

| Token | Light | Dark |
|---|---|---|
| `primary` / `primary-dark` | `#615fff` | `#7c86ff` |
| `secondary` / `secondary-dark` | `#9333ea` | `#c27aff` |
| `success` / `success-dark` | `#00c950` | `#05df72` |
| `danger` / `danger-dark` | `#fb2c36` | `#ff6467` |
| `warning` / `warning-dark` | `#f59e08` | `#ffb900` |
| `info` / `info-dark` | `#00b8db` | `#00d3f2` |
| `foreground` / `foreground-dark` | `#ffffff` | `#0f172a` |
| `background` / `background-dark` | `#f1f5f9` | `#020617` |

**Dark mode:** Class-based (`.dark` on `<html>`), persisted via `localStorage` key `darkMode`, with system preference fallback. Use `dark:` Tailwind prefix throughout.

**Alpine.js:** Bundled from npm via `src/js/app.js` (Bun builds to `public/js/app.js`). All interactivity is inline Alpine.js in HTML — no logic in the JS source file.

**Icons:** Tabler Icons as inline SVG with `w-5 h-5` or `w-6 h-6`, `stroke="currentColor"`.

**Loading screen:** Every page includes `#loading-screen` with three animated dots, removed after page load.

---

## Rewrite Plan

### Goals

1. **Migrate from npm → Bun** for faster installs and cleaner scripts
2. **Restructure components** for better organization and discoverability
3. **Add missing components** from the TODO list and community requests
4. **Improve dark mode** consistency across all components
5. **Standardize page boilerplate** with a shared layout pattern
6. **Add breadcrumbs** to all component/element pages
7. **Add WYSIWYG editor** integration (TinyMCE or Trix)
8. **Improve accessibility** — ARIA roles, keyboard navigation, focus states
9. **Add more chart types** using ApexCharts

### Phase 1 — Foundation (Bun + Build) ✅

- [x] Replace `package.json` npm scripts with Bun equivalents
- [x] Verify `bun run dev` and `bun run build` work correctly (builds CSS + JS in parallel via `concurrently`)
- [x] Update all documentation to reference `bun` instead of `npm`
- [x] Bundle Alpine.js via `src/js/app.js` → `public/js/app.js`
- [x] Restructure CSS into `layouts/` and `utilities/` subdirectories

### Phase 2 — Component Audit & CSS Migration ✅

- [x] Migrate all UI component CSS to `src/css/components/` (accordion, alert, badge, breadcrumb, button, card, collapse, divider, drawer, dropdown, menu-list, modal, pagination, popover, tab, table)
- [x] Migrate all form CSS to `src/css/forms/` (label, input, checkbox, radio, switch) — **opt-in classes only, no bare element selectors**
- [x] Migrate all third-party library CSS to `src/css/libs/` (select2, flatpickr, datatable)
- [x] Populate `src/css/components.css`, `src/css/forms.css`, `src/css/libs.css` barrel imports
- [ ] Audit all existing components for dark mode consistency
- [ ] Fix any broken Alpine.js patterns
- [ ] Ensure all components use semantic color tokens (not raw hex)
- [ ] Add accessibility attributes (ARIA roles, labels) to interactive components

### Phase 3 — New Components

Priority order:

| Component | Status | Notes |
|---|---|---|
| Breadcrumb | [ ] in progress | Required on all pages |
| WYSIWYG Input | [ ] planned | TinyMCE or Trix |
| Stepper / Wizard | [ ] planned | Multi-step form flow |
| Timeline | [ ] planned | Activity feed |
| Stat Cards | [ ] planned | Dashboard KPI widgets |
| File Upload | [ ] planned | Drag & drop zone |
| Avatar Group | [ ] planned | Stacked user avatars |
| Command Palette | [ ] planned | Alpine.js search overlay |
| Toast / Notification | [ ] planned | Auto-dismiss alerts |
| Data Filters | [ ] planned | Filter bar for tables |

### Phase 4 — HTML Pages

Create a full page for every component in `src/components/` and `src/elements/`, using `src/index.html` as the boilerplate base. Update all asset paths from old `/dist/` to `/public/`.

| Page | Status |
|---|---|
| `src/components/accordion.html` | [ ] planned |
| `src/components/alert.html` | [ ] planned |
| `src/components/badge.html` | [ ] planned |
| `src/components/button.html` | [ ] planned |
| `src/components/card.html` | [ ] planned |
| `src/components/modal.html` | [ ] planned |
| `src/components/tab.html` | [ ] planned |
| `src/components/table.html` | [ ] planned |
| `src/components/drawer.html` | [ ] planned |
| `src/components/dropdown.html` | [ ] planned |
| `src/components/pagination.html` | [ ] planned |
| `src/elements/input.html` | [ ] planned |
| `src/elements/checkbox.html` | [ ] planned |
| `src/elements/radio.html` | [ ] planned |
| `src/elements/switch.html` | [ ] planned |
| `src/elements/select2.html` | [ ] planned |
| `src/elements/flatpickr.html` | [ ] planned |
| `src/elements/datatable.html` | [ ] planned |

### Phase 5 — New Pages & Layouts

- [ ] Inbox / Messages page
- [ ] Calendar page
- [ ] Kanban board
- [ ] Invoice / billing page
- [ ] User management table page
- [ ] Error pages (404, 500, maintenance)

### Phase 6 — DX & Documentation

- [ ] Add `index.html` component gallery at root
- [ ] Generate component thumbnails for the gallery
- [ ] Document every component with usage examples
- [ ] Add contributing guide for new component standards

---

## Adding a New UI Component

1. Create `src/css/components/<name>.css` using `@apply` + theme tokens
2. Import it in `src/css/components.css`
3. Create `src/components/<name>.html` — copy `src/index.html` as boilerplate base
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
