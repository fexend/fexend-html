# GitHub Copilot Instructions

> **Primary guidance is in [AGENTS.md](../AGENTS.md).** Read that first. This file contains Copilot-specific additions only.

---

## Project: Fexend HTML Dashboard

A static HTML component library using **Tailwind CSS v4**, **Alpine.js v3**, and **Bun**.

### Critical Rules

1. **Use Bun** — never npm/yarn/pnpm. Use `bun install`, `bun run dev`, `bun add <pkg>`
2. **No raw hex colors** — always use `@theme` tokens: `text-primary`, `bg-foreground`, `border-warning`
3. **Always pair dark mode** — every `bg-white` needs `dark:bg-slate-800`; every `text-slate-900` needs `dark:text-slate-100`
4. **Alpine.js bundled** — `src/js/app.js` is the entry point (compiled to `public/js/app.js`); all interactivity is inline `x-data`, `x-show`, `@click` in HTML
5. **Tabler Icons only** — inline SVG from tabler.io, `w-5 h-5`, `stroke="currentColor"`, no emoji icons
6. **4-space indentation** — HTML, CSS, and JS all use 4-space tabs
7. **No bare form element selectors** — use `.input`, `.label`, `.select`, `.textarea`, `.checkbox`, `.radio`, `.switch` classes

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

### Form Class Naming

```html
<div class="form-group">
  <label class="label label-required">Email</label>
  <div class="input-icon-left">
    <span class="input-icon"><!-- svg --></span>
    <input type="email" class="input" placeholder="you@example.com">
  </div>
  <span class="form-feedback-error">Required field</span>
</div>

<input type="checkbox" class="checkbox">
<input type="radio" class="radio">
<input type="checkbox" class="switch">

<div class="input-group">
  <span class="input-addon">https://</span>
  <input type="text" class="input">
</div>
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
src/css/components/<name>.css     ← UI component styles
src/css/components.css            ← Component import barrel
src/css/forms/<name>.css          ← Form element styles (opt-in classes)
src/css/forms.css                 ← Forms import barrel
src/css/libs/<name>.css           ← Third-party library theming
src/css/libs.css                  ← Libs import barrel
src/css/layouts/<name>.css        ← Layout styles (navbar, sidebar, etc.)
src/css/layouts.css               ← Layout import barrel
src/css/utilities/<name>.css      ← Utility/base styles
src/css/utilities.css             ← Utility import barrel
src/js/app.js                     ← Alpine.js entry (compiled → public/js/app.js)
src/dashboard.html                ← Page boilerplate (copy for new pages)
src/index.html                    ← Root gallery (Components · Form Elements · Pages)
src/components/<name>.html        ← Full page showcase
src/elements/<name>.html          ← Standalone element showcase
public/css/app.css                ← Compiled CSS output — DO NOT EDIT
public/js/app.js                  ← Compiled JS output — DO NOT EDIT
```

### Rewrite Status

This project is being rewritten. See `AGENTS.md` for the full rewrite plan and task checklist.
