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

```html
<!-- src/components/<name>.html -->
<!-- Full page with navbar + sidebar + multiple usage examples -->
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
- Migration from npm → Bun
- Component standards and patterns

### Key Directories

| Path | Purpose |
|---|---|
| `src/css/app.css` | Tailwind entry + color tokens |
| `src/css/components/` | Per-component CSS |
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
