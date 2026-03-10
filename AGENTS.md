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
- [x] Audit all existing components for dark mode consistency
- [x] Fix any broken Alpine.js patterns
- [x] Ensure all components use semantic color tokens (not raw hex)
- [x] Add accessibility attributes (ARIA roles, labels) to interactive components

### Phase 3 — New Components ✅

Priority order:

| Component            | Status   | Notes                                                                         |
| -------------------- | -------- | ----------------------------------------------------------------------------- |
| Breadcrumb           | [x] done | `src/css/components/breadcrumb.css`                                           |
| WYSIWYG Input        | [x] done | `src/css/libs/wysiwyg.css` — toolbar, editor content, size variants           |
| Stepper / Wizard     | [x] done | `src/css/components/stepper.css` — horizontal/vertical, color variants        |
| Timeline             | [x] done | `src/css/components/timeline.css` — vertical/horizontal, color dots           |
| Stat Cards           | [x] done | `src/css/components/stat-card.css` — icon variants, trends, filled colors     |
| File Upload          | [x] done | `src/css/components/file-upload.css` — drag & drop, file list, progress       |
| Avatar Group         | [x] done | `src/css/components/avatar.css` — sizes, status, stacked groups               |
| Command Palette      | [x] done | `src/css/components/command-palette.css` — search overlay, keyboard shortcuts |
| Toast / Notification | [x] done | `src/css/components/toast.css` — auto-dismiss, color variants, animations     |
| Data Filters         | [x] done | `src/css/components/data-filter.css` — filter chips, search, actions          |

### Phase 4 — HTML Pages ✅

Create a full page for every component in `src/components/` and `src/elements/`, using `src/index.html` as the boilerplate base. Update all asset paths from old `/dist/` to `/public/`.

| Page                                  | Status   |
| ------------------------------------- | -------- |
| `src/components/accordion.html`       | [x] done |
| `src/components/alert.html`           | [x] done |
| `src/components/avatar.html`          | [x] done |
| `src/components/badge.html`           | [x] done |
| `src/components/breadcrumb.html`      | [x] done |
| `src/components/button.html`          | [x] done |
| `src/components/card.html`            | [x] done |
| `src/components/collapse.html`        | [x] done |
| `src/components/command-palette.html` | [x] done |
| `src/components/data-filter.html`     | [x] done |
| `src/components/divider.html`         | [x] done |
| `src/components/drawer.html`          | [x] done |
| `src/components/dropdown.html`        | [x] done |
| `src/components/file-upload.html`     | [x] done |
| `src/components/menu-list.html`       | [x] done |
| `src/components/modal.html`           | [x] done |
| `src/components/pagination.html`      | [x] done |
| `src/components/popover.html`         | [x] done |
| `src/components/stat-card.html`       | [x] done |
| `src/components/stepper.html`         | [x] done |
| `src/components/tab.html`             | [x] done |
| `src/components/table.html`           | [x] done |
| `src/components/timeline.html`        | [x] done |
| `src/components/toast.html`           | [x] done |
| `src/components/tooltip.html`         | [x] done |
| `src/elements/checkbox.html`          | [x] done |
| `src/elements/datatable.html`         | [x] done |
| `src/elements/flatpickr.html`         | [x] done |
| `src/elements/input.html`             | [x] done |
| `src/elements/radio.html`             | [x] done |
| `src/elements/select2.html`           | [x] done |
| `src/elements/switch.html`            | [x] done |
| `src/elements/wysiwyg.html`           | [x] done |

### Phase 4.1

- [x] Input Password (With Password Criteria) — show/hide toggle + live criteria checklist in `src/css/forms/input.css`, showcased in `src/elements/input.html`
- [x] Modal Delete/Confirm — `.modal-confirm` variants in `src/css/components/modal.css`, showcased in `src/components/modal.html`
- [x] Add Prettier — `prettier` devDependency, `.prettierrc`, `.prettierignore`, `bun run format` script
- [x] Sidebar JS config — `src/js/sidebar-config.js` (full nav data) + `fexendSidebar` Alpine component registered in `src/js/app.js`
- [x] Auth Pages — `src/pages/login.html`, `register.html`, `forgot-password.html`, `reset-password.html`, `verify-email.html`

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
