# GEMINI.md

> **Primary guidance is in [AGENTS.md](../AGENTS.md).** Read that first. This file contains Gemini CLI-specific additions only.

---

## Project: Fexend HTML Dashboard

A static HTML component library. Stack: **Tailwind CSS v4** + **Alpine.js v3** + **Bun**.

### Mandatory Rules

| Rule | Detail |
|---|---|
| Package manager | **Bun only** — `bun install`, `bun run dev`, `bun add <pkg>` |
| Colors | Use `@theme` tokens only — no raw hex values |
| Dark mode | Always include `dark:` variants for every color/bg class |
| Interactivity | Alpine.js bundled via `src/js/app.js` → `public/js/app.js`; all interactivity inline in HTML |
| Icons | Tabler Icons inline SVG only — no emoji, no icon fonts |
| Indentation | 4 spaces (HTML, CSS, JS) |
| Form elements | Use `.input`, `.label`, `.select`, `.textarea`, `.checkbox`, `.radio`, `.switch` — **never style bare HTML elements** |

### Theme Color Tokens

Always use these, never raw hex:

```
primary, secondary, success, danger, warning, info
foreground, background
(append -dark for dark mode variants)
```

Example: `bg-primary`, `dark:bg-primary-dark`, `text-foreground`, `dark:text-foreground-dark`

### Tailwind v4 Config Location

Config lives in **CSS**, not JS:

```css
/* src/css/app.css */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #615fff;
  /* ... */
}
```

### Component Pattern

```css
/* src/css/components/<name>.css */
.my-component {
  @apply bg-foreground dark:bg-foreground-dark rounded-lg p-4;
}
.my-component-primary {
  @apply bg-primary text-white;
}
```

### Form Pattern

```css
/* src/css/forms/<name>.css — opt-in classes only */
.my-input {
  @apply block w-full px-4 py-2 border border-slate-300 dark:border-slate-600;
}
```

```html
<!-- Use opt-in classes, never bare element selectors -->
<label class="label">Email</label>
<input type="email" class="input input-sm input-error">
<input type="checkbox" class="checkbox checkbox-primary">
<input type="checkbox" class="switch switch-success">
```

### Development

```bash
bun run dev     # Watch Tailwind CSS
bun run build   # One-time build
```

### Rewrite Plan

This project is being actively rewritten. Before starting any task, check `AGENTS.md` for:
- Current rewrite phase and progress
- New components to be added
- Component standards and patterns

### Key Directories

| Path | Purpose |
|---|---|
| `src/css/app.css` | Tailwind entry + color tokens |
| `src/css/components/` | UI component CSS (button, card, modal, etc.) |
| `src/css/components.css` | Component import barrel |
| `src/css/forms/` | Form element CSS (label, input, checkbox, radio, switch) |
| `src/css/forms.css` | Forms import barrel |
| `src/css/libs/` | Third-party library theming (select2, flatpickr, datatable) |
| `src/css/libs.css` | Libs import barrel |
| `src/css/layouts/` | Layout CSS (navbar, sidebar, layout, loading) |
| `src/css/utilities/` | Base/utility CSS (a, heading, list, p) |
| `src/js/app.js` | Alpine.js entry point |
| `src/index.html` | Page boilerplate template |
| `src/components/` | Full page HTML showcases |
| `src/elements/` | Standalone element demos |
| `src/pages/` | Auth pages |
| `src/layouts/` | Dashboard layout variants |
| `public/css/app.css` | Compiled CSS output — do not edit |
| `public/js/app.js` | Compiled JS output — do not edit |
