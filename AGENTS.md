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
│   │   ├── components.css        # @import barrel for all component CSS
│   │   ├── utilities.css         # Custom utility classes
│   │   └── components/           # Per-component CSS files
│   ├── components/               # Full page showcases for each component
│   ├── elements/                 # Standalone element pages (buttons, forms, etc.)
│   ├── pages/                    # Auth pages (login, signup, forgot-password, etc.)
│   ├── layouts/                  # Dashboard layout variants
│   ├── dashboard/                # Dashboard page variants
│   └── settings/                 # Settings pages
├── public/                       # Static assets served as-is
│   ├── images/
│   └── fonts/
├── dist/
│   └── css/app.css               # Compiled CSS output — DO NOT EDIT DIRECTLY
├── skills/                       # AI skills for project-specific guidance
├── AGENTS.md                     # This file — shared by all AI agents
├── CLAUDE.md                     # Claude Code specific instructions (references AGENTS.md)
├── .github/copilot-instructions.md  # GitHub Copilot instructions (references AGENTS.md)
└── .gemini/GEMINI.md             # Gemini CLI instructions (references AGENTS.md)
```

### Key Patterns

**CSS class naming:** BEM-like with size/color/style variants:
- `.button`, `.button-sm`, `.button-primary`, `.button-primary-outline`, `.button-primary-soft`
- `.badge`, `.badge-success-soft`, `.badge-danger-outline`
- `.card`, `.card-hover`, `.card-table`, `.card-sm`, `.card-lg`

**Color system** (defined in `src/css/app.css` via `@theme {}`):

| Token | Light | Dark |
|---|---|---|
| `primary` / `primary-dark` | `#615fff` | `#7c86ff` |
| `secondary` / `secondary-dark` | `#9333ea` | `#c27aff` |
| `success` / `success-dark` | `#00c950` | `#05df72` |
| `danger` / `danger-dark` | `#fb2c36` | `#ff6467` |
| `warning` / `warning-dark` | `#f59e08` | `#ffb900` |
| `info` / `info-dark` | `#00b8db` | `#00d3f2` |

**Dark mode:** Class-based (`.dark` on `<html>`), persisted via `localStorage` key `darkMode`, with system preference fallback. Use `dark:` Tailwind prefix throughout.

**Alpine.js:** All interactivity is inline Alpine.js. No separate JS source files.

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

### Phase 1 — Foundation (Bun + Build)

- [ ] Replace `package.json` npm scripts with Bun equivalents
- [ ] Add `bunfig.toml` if needed
- [ ] Verify `bun run dev` and `bun run build` work correctly
- [ ] Update all documentation to reference `bun` instead of `npm`

### Phase 2 — Component Audit & Cleanup

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

### Phase 4 — New Pages & Layouts

- [ ] Inbox / Messages page
- [ ] Calendar page
- [ ] Kanban board
- [ ] Invoice / billing page
- [ ] User management table page
- [ ] Error pages (404, 500, maintenance)

### Phase 5 — DX & Documentation

- [ ] Add `index.html` component gallery at root
- [ ] Generate component thumbnails for the gallery
- [ ] Document every component with usage examples
- [ ] Add contributing guide for new component standards

---

## Adding a New Component

1. Create `src/css/components/<component-name>.css` using `@apply` + theme tokens
2. Import it in `src/css/components.css`
3. Create `src/components/<component-name>.html` with full boilerplate, navbar, sidebar, and multiple usage examples
4. Optionally create `src/elements/<component-name>.html` for a standalone showcase
5. Open a GitHub issue before starting to avoid duplicate work

---

## Code Style

- **Formatter:** Prettier (format on save)
- **Indentation:** 4 spaces for HTML/CSS/JS
- **Tailwind:** Use semantic tokens (`text-primary`, `bg-foreground`) — never raw hex
- **Dark mode:** Always pair `bg-white dark:bg-slate-800` — never light-only
- **Alpine.js:** Keep `x-data` minimal; use `x-on` shorthand (`@click`)
- **Icons:** Tabler Icons inline SVG only; no emoji icons

---

## Contributing

- Open a GitHub issue before starting new components
- Branch naming: `feature-<name>` or `fix-<name>`
- PR target: `main` branch
- Always test both light and dark mode before submitting
