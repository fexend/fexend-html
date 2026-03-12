# Contributing to Fexend

We welcome contributions! Please open a GitHub issue before starting work on a new component to avoid duplication.

## Setup

This project uses **Bun** (not npm/yarn/pnpm).

```bash
git clone https://github.com/<your-username>/fexend-html.git
cd fexend-html
bun install
bun run dev
```

`bun run dev` watches both CSS (`src/css/app.css` → `public/css/app.css`) and JS (`src/js/app.js` → `public/js/app.js`) in parallel.

## Branch & PR Workflow

1. Fork and clone the repo
2. Create a branch: `git checkout -b feature-<name>` or `fix-<name>`
3. Make changes, test light + dark mode
4. Push and open a PR targeting `main`

## Adding a New Component

```bash
# 1. Create the CSS
touch src/css/components/<name>.css

# 2. Import it in the barrel
echo '@import "./components/<name>.css";' >> src/css/components.css

# 3. Create the HTML showcase (copy boilerplate)
cp src/dashboard.html src/components/<name>.html
```

## Adding a New Form Element

```bash
# 1. Create the CSS (opt-in classes only — no bare element selectors)
touch src/css/forms/<name>.css

# 2. Import it
echo '@import "./forms/<name>.css";' >> src/css/forms.css

# 3. Create the showcase
cp src/dashboard.html src/elements/<name>.html
```

## Design Standards

- **Opt-in CSS classes only** — never style bare `input`, `select`, `textarea`, `label` elements
- **Dark mode required** — always pair `bg-white dark:bg-slate-800`; never light-only
- **No raw hex colors** — use `@theme` tokens (`text-primary`, `bg-success`, etc.)
- **Semantic tokens** — see the color table in `AGENTS.md`
- **Icons** — Tabler Icons inline SVG only (`w-5 h-5`, `stroke="currentColor"`)

## Tailwind v4 Patterns

- Config lives in `src/css/app.css` via `@theme {}` — no `tailwind.config.js`
- New design tokens go in the `@theme {}` block, not in arbitrary values
- Use `@apply` sparingly; prefer utility classes in HTML
- Dark mode is class-based (`.dark` on `<html>`) — use `dark:` prefix

## Code Style

- **Formatter:** Prettier — run `bun run format` before committing
- **Indentation:** 4 spaces for HTML/CSS/JS
- **Alpine.js:** Keep `x-data` minimal; use `@click` shorthand
- **No inline `<style>` blocks** unless it's for loading screen FOUC prevention
- **No comments** unless logic is non-obvious
