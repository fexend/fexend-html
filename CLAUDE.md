# CLAUDE.md

> **Primary guidance is in [AGENTS.md](./AGENTS.md).** Read that first. This file contains Claude Code-specific additions only.

---

## Claude Code Instructions

### Package Manager

Always use **Bun** — never npm, yarn, or pnpm:

```bash
bun install           # Install dependencies
bun run dev           # Watch + compile Tailwind CSS
bun run build         # One-time build
bun add <package>     # Add a dependency
bun remove <package>  # Remove a dependency
```

### Skills Available

This project has skills in `.agents/skills/` that Claude should apply automatically:

| Skill | When to Apply |
|---|---|
| `.agents/skills/fexend/` | Creating or modifying any HTML, CSS, or Alpine.js in this project |
| `.agents/skills/tailwind-patterns/` | Configuring Tailwind v4 or writing utility classes |
| `.agents/skills/tailwind-design-system/` | Building new components or updating the design system |
| `.agents/skills/frontend-design/` | Designing new page layouts or visual treatments |
| `.agents/skills/ui-ux-pro-max/` | UX reviews, accessibility audits, chart/palette selection |
| `.agents/skills/clean-code/` | Code review, refactoring, naming conventions |

### Working on the Rewrite

When working on rewrite tasks (see `AGENTS.md` Rewrite Plan):

1. Check `AGENTS.md` for current phase and status
2. Update the checkbox in `AGENTS.md` when a task is completed
3. Use `src/dashboard.html` as the page boilerplate reference (navbar + sidebar + loading screen)
4. Test dark mode manually for every change
5. Use `bun run dev` to watch for CSS changes during development

### Agent Behavior

- **Read `AGENTS.md` first** before any task in this project
- **Do not use npm** — always use `bun`
- **Do not add raw hex colors** — use `@theme` tokens
- **Do not create inline `<style>` blocks** unless it's for loading screen FOUC prevention
- **Always include dark mode variants** for new CSS classes
- **Prefer editing existing files** over creating new ones
- **Do not add comments** unless logic is non-obvious
- **Never style bare `input`, `select`, `textarea`, `label` elements** — use `.input`, `.label`, `.select`, `.textarea` opt-in classes

### Common Tasks

**Add a new UI component:**
```bash
# 1. Create the CSS
touch src/css/components/<name>.css
# 2. Import in components.css
echo '@import "./components/<name>.css";' >> src/css/components.css
# 3. Create the HTML showcase page
cp src/dashboard.html src/components/<name>.html
```

**Add a new form element:**
```bash
# 1. Create the CSS (use opt-in classes — no bare element selectors)
touch src/css/forms/<name>.css
# 2. Import in forms.css
echo '@import "./forms/<name>.css";' >> src/css/forms.css
# 3. Create the HTML showcase
cp src/dashboard.html src/elements/<name>.html
```

**Add a third-party library theme:**
```bash
# 1. Create the CSS
touch src/css/libs/<name>.css
# 2. Import in libs.css
echo '@import "./libs/<name>.css";' >> src/css/libs.css
```

**Compile CSS + JS:**
```bash
bun run dev    # watches both CSS (→ public/css/app.css) and JS (→ public/js/app.js)
```

**Check what exists:**
```bash
ls src/components/       # UI component HTML pages
ls src/elements/         # Form/element HTML pages
ls src/css/components/   # UI component CSS
ls src/css/forms/        # Form element CSS
ls src/css/libs/         # Library CSS
```

**New layout/utility CSS:**
```bash
# Layouts go in src/css/layouts/<name>.css — import in src/css/layouts.css
# Utilities go in src/css/utilities/<name>.css — import in src/css/utilities.css
```
