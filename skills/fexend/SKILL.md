---
name: fexend
displayName: Fexend UI (Tailwind v4 + Alpine.js)
description: Fexend dashboard component patterns using Tailwind CSS v4 and Alpine.js. Use when creating or modifying HTML pages, components, elements, or styles in the Fexend project — including buttons, cards, forms, badges, dark mode, and Alpine.js interactivity.
version: 1.0.0
---

# Fexend UI — Tailwind CSS v4 + Alpine.js Guidelines

This skill covers conventions and patterns specific to the Fexend HTML dashboard library.

## Stack

- **Tailwind CSS v4** — CSS-first config via `@theme {}` in `src/css/app.css`
- **Alpine.js v3** — All interactivity is inline; no separate JS source files
- **Alpine Collapse plugin** — for accordion/collapsible components
- **Icons** — Tabler Icons as inline SVG
- **Font** — Lexend (Google Fonts, loaded via CDN)

---

## Tailwind v4 Setup

### Config is in CSS, not JS

```css
/* src/css/app.css */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #615fff;
  --color-primary-dark: #7c86ff;
  /* ... other tokens */
}
```

The `tailwind.config.js` file exists but theme customization lives in `@theme {}`.
Dark mode is **class-based** using `.dark` on `<html>`, **not** `media` strategy.

### Adding a new CSS component

1. Create `src/css/components/<name>.css`
2. Add `@import "./components/<name>.css";` in `src/css/components.css`
3. Use `@apply` with Tailwind utilities + theme tokens

---

## Theme Color Tokens

Always use semantic tokens, never raw hex values:

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

---

## Component Class Naming Convention

**Pattern:** `.{component}`, `.{component}-{color}`, `.{component}-{color}-{style}`, `.{component}-{size}`

```html
<!-- Button -->
<button class="button button-primary">Filled</button>
<button class="button button-primary-outline">Outline</button>
<button class="button button-primary-soft">Soft</button>
<button class="button button-sm button-primary">Small</button>
<button class="button button-lg button-danger">Large</button>
<button class="button button-primary button-rounded">Pill</button>
<button class="button button-primary button-block">Full Width</button>
<button class="button button-primary button-icon"><svg>...</svg></button>

<!-- Badge -->
<span class="badge badge-primary">Label</span>
<span class="badge badge-success-soft">Soft</span>
<span class="badge badge-danger-outline badge-outline">Outline</span>
<span class="badge badge-primary badge-rounded">Pill</span>

<!-- Card -->
<div class="card">Default card</div>
<div class="card card-primary">Colored card</div>
<div class="card card-hover">Hoverable card</div>
<div class="card card-sm">Small padding</div>
<div class="card card-lg">Large padding</div>
<div class="card loading">Skeleton state</div>

<!-- Card with header/footer -->
<div class="card">
  <div class="card-header">Title</div>
  <p>Body content</p>
  <div class="card-footer border-t border-slate-200 dark:border-slate-700">Footer</div>
</div>

<!-- Card table variant -->
<div class="card-table">
  <div class="card-header">Table Title</div>
  <!-- table goes here -->
</div>
```

Available colors for components: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `white`, `dark`
Available styles: (none = filled), `-outline`, `-soft`

---

## Form Elements

Form inputs are globally styled in `src/css/components/input.css`. Use these classes:

```html
<!-- Basic input -->
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" id="name" placeholder="Enter name" />
</div>

<!-- Input sizes -->
<input class="form-sm" type="text" />
<input class="form-lg" type="text" />
<input class="form-rounded" type="text" />

<!-- Validation states -->
<label class="form-error">Email</label>
<input class="form-error" type="email" />

<label class="form-valid">Username</label>
<input class="form-valid" type="text" />

<!-- Icon inside input -->
<div class="input-icon-left">
  <input type="text" placeholder="Search..." />
  <svg><!-- Tabler icon --></svg>
</div>

<div class="input-icon-right">
  <input type="password" />
  <svg><!-- eye icon --></svg>
</div>
```

---

## Dark Mode

**Class-based** — toggle `.dark` on `<html>`. Every component must include `dark:` variants.

```css
/* CSS pattern — always pair light + dark */
.my-component {
  @apply bg-foreground dark:bg-foreground-dark text-slate-900 dark:text-slate-100;
}
```

```html
<!-- HTML pattern -->
<div class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
  ...
</div>
```

---

## Page Boilerplate (Alpine.js)

Every page uses this standard body setup:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title | Fexend</title>
  <link rel="stylesheet" defer href="/dist/css/app.css" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />

  <!-- Alpine Plugins (must load before Alpine core) -->
  <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
  <!-- Alpine Core -->
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

  <!-- Dark mode init (prevents flash) -->
  <script>
    if (
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  </script>

  <!-- Loading screen styles (inline to avoid FOUC) -->
  <style>
    #loading-screen {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background-color: var(--color-background);
      display: flex; justify-content: center; align-items: center;
      z-index: 9999; transition: opacity 0.3s ease-out;
    }
    .dark #loading-screen { background-color: var(--color-background-dark); }
  </style>
</head>
<body
  x-data="{
    darkMode: localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    sidebarOpen: false,
    mobileMenuOpen: false,
    isMobile: window.innerWidth < 768,
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode);
      document.documentElement.classList.toggle('dark', this.darkMode);
    }
  }"
  x-init="
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) sidebarOpen = false;
      isMobile = window.innerWidth < 768;
      if (!isMobile) mobileMenuOpen = false;
    });
    setTimeout(() => {
      document.getElementById('loading-screen').style.opacity = '0';
      setTimeout(() => document.getElementById('loading-screen').remove(), 300);
    }, 200);
  "
>
  <!-- Loading screen -->
  <div id="loading-screen">
    <div class="flex space-x-2">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  </div>

  <!-- Navbar + Sidebar + main content here -->
</body>
</html>
```

---

## Alpine.js Patterns

### Toggle visibility

```html
<button @click="open = !open">Toggle</button>
<div x-show="open" x-collapse>Content</div>
```

### Dark mode toggle button

```html
<button @click="toggleDarkMode()">
  <svg x-show="!darkMode"><!-- sun icon --></svg>
  <svg x-show="darkMode"><!-- moon icon --></svg>
</button>
```

### Sidebar toggle

```html
<button @click="sidebarOpen = !sidebarOpen">Menu</button>
<aside x-show="sidebarOpen" x-transition>...</aside>
```

### Component-local state

```html
<div x-data="{ tab: 'overview' }">
  <button @click="tab = 'overview'" :class="tab === 'overview' ? 'tab-active' : ''">Overview</button>
  <button @click="tab = 'details'" :class="tab === 'details' ? 'tab-active' : ''">Details</button>
  <div x-show="tab === 'overview'">...</div>
  <div x-show="tab === 'details'">...</div>
</div>
```

---

## Icons (Tabler Icons)

Use inline SVG. Standard sizing: `w-5 h-5` or `w-6 h-6`. Stroke-based, so use `stroke-current`.

```html
<svg xmlns="http://www.w3.org/2000/svg"
     class="w-5 h-5"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <!-- path data from tabler.io -->
</svg>
```

---

## Responsive Layout Pattern

Mobile-first with Alpine.js breakpoint awareness:

```html
<!-- Hide on mobile, show on lg+ -->
<aside class="hidden lg:block" x-show="!isMobile || sidebarOpen">...</aside>

<!-- Mobile bottom menu trigger -->
<div class="mobile-menu lg:hidden">
  <button @click="mobileMenuOpen = !mobileMenuOpen">...</button>
</div>

<!-- Mobile popup panel -->
<div class="mobile-menu-popup" x-show="mobileMenuOpen" x-transition>...</div>
```

---

## Adding a New Component

1. `src/css/components/<name>.css` — styles using `@apply` + theme tokens
2. `src/css/components.css` — add `@import "./components/<name>.css";`
3. `src/components/<name>.html` — full page with multiple usage examples
4. Optionally `src/elements/<name>.html` — standalone element showcase

Open a GitHub issue first to avoid duplicate work with other contributors.
