# GitHub Copilot Instructions

> **Primary guidance is in [AGENTS.md](../AGENTS.md).** Read that first. This file contains Copilot-specific additions only.

---

## Project: Fexend HTML Dashboard

A static HTML component library using **Tailwind CSS v4**, **Alpine.js v3**, and **Bun**.

### Critical Rules

1. **Use Bun** — never npm/yarn/pnpm. Use `bun install`, `bun run dev`, `bun add <pkg>`
2. **No raw hex colors** — always use `@theme` tokens: `text-primary`, `bg-foreground`, `border-warning`
3. **Always pair dark mode** — every `bg-white` needs `dark:bg-slate-800`; every `text-slate-900` needs `dark:text-slate-100`
4. **Inline Alpine.js only** — no separate JS files; use `x-data`, `x-show`, `@click` inline
5. **Tabler Icons only** — inline SVG from tabler.io, `w-5 h-5`, `stroke="currentColor"`, no emoji icons
6. **4-space indentation** — HTML, CSS, and JS all use 4-space tabs

### Tailwind v4 Patterns

Configuration is in `src/css/app.css` via `@theme {}` — not in `tailwind.config.js`.

```css
/* Correct — use theme tokens */
.my-component {
  @apply bg-foreground dark:bg-foreground-dark text-slate-900 dark:text-slate-100;
}
```

### Component Class Naming

```
.{component}                    → base styles
.{component}-{color}            → filled variant (primary, success, danger...)
.{component}-{color}-outline    → outline variant
.{component}-{color}-soft       → soft/muted variant
.{component}-{size}             → sm, lg
.{component}-rounded            → pill/rounded
```

### Alpine.js Body Boilerplate

```html
<body
  x-data="{
    darkMode: localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    sidebarOpen: false,
    mobileMenuOpen: false,
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode);
      document.documentElement.classList.toggle('dark', this.darkMode);
    }
  }"
>
```

### File Structure

```
src/css/components/<name>.css     ← Component styles
src/css/components.css            ← Import barrel (add @import here)
src/components/<name>.html        ← Full page showcase
src/elements/<name>.html          ← Standalone element showcase
```

### Rewrite Status

This project is being rewritten. See `AGENTS.md` for the full rewrite plan and task checklist.
