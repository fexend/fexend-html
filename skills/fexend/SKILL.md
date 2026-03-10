---
name: fexend
displayName: Fexend UI (Tailwind v4 + Alpine.js)
description: Fexend dashboard component patterns using Tailwind CSS v4 and Alpine.js. Use when creating or modifying HTML pages, components, elements, or styles in the Fexend project — including buttons, cards, forms, badges, dark mode, and Alpine.js interactivity.
version: 2.0.0
---

# Fexend UI — Tailwind CSS v4 + Alpine.js Guidelines

This skill covers conventions and patterns specific to the Fexend HTML dashboard library.

## Stack

- **Tailwind CSS v4** — CSS-first config via `@theme {}` in `src/css/app.css`
- **Alpine.js v3** — All interactivity is inline; no separate JS source files
- **Alpine Collapse plugin** — for accordion/collapsible components (bundled)
- **jQuery + DataTables** — bundled via `src/js/app.js`
- **Select2** — bundled via `src/js/app.js`
- **Flatpickr** — bundled via `src/js/app.js`
- **Icons** — Tabler Icons as inline SVG
- **Font** — Lexend (Google Fonts, loaded via CDN)

---

## CSS — Separation of Concerns

CSS is organized into **four distinct layers**. Place every CSS file in the correct layer:

| Layer | Folder | Barrel | Purpose |
|---|---|---|---|
| **Components** | `src/css/components/` | `src/css/components.css` | UI components — modal, button, card, dropdown, etc. |
| **Forms** | `src/css/forms/` | `src/css/forms.css` | Form elements — label, input, checkbox, radio, switch |
| **Libs** | `src/css/libs/` | `src/css/libs.css` | Third-party library theming — select2, flatpickr, datatable |
| **Layouts** | `src/css/layouts/` | `src/css/layouts.css` | Page structure — navbar, sidebar, layout wrapper |
| **Utilities** | `src/css/utilities/` | `src/css/utilities.css` | Base element styles — headings, links, lists, paragraphs |

### Rules

- **UI components** (modal, button, card, badge, tab, table, alert, etc.) → `src/css/components/<name>.css`
- **Form elements** (input fields, labels, checkboxes, radios, toggles) → `src/css/forms/<name>.css`
- **Third-party library themes** (select2 dropdown, flatpickr calendar, datatable UI) → `src/css/libs/<name>.css`
- **Never mix** — do not put form styles in `components/`, library styles in `forms/`, etc.
- **Always import** the new file in its barrel (`components.css`, `forms.css`, or `libs.css`)
- **Never style bare HTML elements** in `components/` or `forms/` — always use opt-in classes

### Adding CSS — step by step

**New UI component:**
```bash
touch src/css/components/<name>.css
# Add: @import "./components/<name>.css"; in src/css/components.css
```

**New form element:**
```bash
touch src/css/forms/<name>.css
# Add: @import "./forms/<name>.css"; in src/css/forms.css
```

**New library theme:**
```bash
touch src/css/libs/<name>.css
# Add: @import "./libs/<name>.css"; in src/css/libs.css
```

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

Dark mode is **class-based** using `.dark` on `<html>`, **not** `media` strategy.

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

## UI Component Class Naming

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

Form elements use **opt-in classes** — bare `input`, `select`, `textarea`, and `label` elements are NOT globally styled. Always add the appropriate class.

### Basic Usage

```html
<!-- Label -->
<label class="label">Field name</label>
<label class="label label-required">Required field</label>  <!-- adds * -->
<label class="label label-error">Error state</label>
<label class="label label-valid">Valid state</label>

<!-- Input -->
<input type="text" class="input" placeholder="Enter text">
<input type="text" class="input input-sm" placeholder="Small">
<input type="text" class="input input-lg" placeholder="Large">
<input type="text" class="input input-rounded" placeholder="Pill shape">
<input type="text" class="input input-error" placeholder="Error state">
<input type="text" class="input input-valid" placeholder="Valid state">
<input type="text" class="input" disabled placeholder="Disabled">
<input type="file" class="input input-file">

<!-- Select -->
<select class="select">
  <option>Option 1</option>
</select>

<!-- Textarea -->
<textarea class="textarea" rows="4" placeholder="Enter text..."></textarea>

<!-- Feedback messages -->
<span class="form-feedback">Helper text</span>
<span class="form-feedback form-feedback-error">This field is required</span>
<span class="form-feedback form-feedback-valid">Looks good!</span>
```

### Form Group

```html
<div class="form-group">
  <label class="label label-required" for="email">Email</label>
  <input type="email" id="email" class="input input-error" placeholder="you@example.com">
  <span class="form-feedback form-feedback-error">Please enter a valid email</span>
</div>
```

### Input with Icons

```html
<!-- Icon left -->
<div class="input-icon-left">
  <span class="input-icon">
    <svg class="w-5 h-5"><!-- Tabler icon --></svg>
  </span>
  <input type="text" class="input" placeholder="Search...">
</div>

<!-- Icon right -->
<div class="input-icon-right">
  <input type="password" class="input" placeholder="Password">
  <span class="input-icon">
    <svg class="w-5 h-5"><!-- eye icon --></svg>
  </span>
</div>
```

### Input Group (addon)

```html
<div class="input-group">
  <span class="input-addon">https://</span>
  <input type="text" class="input" placeholder="yoursite.com">
</div>

<div class="input-group">
  <input type="text" class="input" placeholder="Amount">
  <span class="input-addon">USD</span>
</div>

<div class="input-group">
  <span class="input-addon">$</span>
  <input type="number" class="input">
  <span class="input-addon">.00</span>
</div>
```

### Checkbox

```html
<!-- Basic checkbox — use .checkbox class -->
<label class="label-checkbox">
  <input type="checkbox" class="checkbox">
  Accept terms
</label>

<!-- Color variants -->
<input type="checkbox" class="checkbox checkbox-success" checked>
<input type="checkbox" class="checkbox checkbox-danger" checked>
<input type="checkbox" class="checkbox checkbox-warning" checked>

<!-- Divider-style label -->
<div class="label-checkbox-divider">
  <input type="checkbox" class="checkbox">
  <div>
    <p>Enable notifications</p>
    <span>Receive updates via email</span>
  </div>
</div>

<!-- Card-style label -->
<label class="label-checkbox-card">
  <input type="checkbox" class="checkbox">
  <div>
    <p>Option label</p>
    <span>Description text</span>
  </div>
</label>

<!-- Card color variants (add alongside .label-checkbox-card) -->
<label class="label-checkbox-card label-checkbox-card-success">...</label>
<label class="label-checkbox-card label-checkbox-card-danger">...</label>
```

### Radio

```html
<!-- Basic radio -->
<label class="label-radio">
  <input type="radio" class="radio" name="group">
  Option A
</label>

<!-- Color variants -->
<input type="radio" class="radio radio-success" checked>
<input type="radio" class="radio radio-danger">

<!-- Card style -->
<label class="radio-card">
  <input type="radio" name="plan">
  <div>Plan name</div>
</label>

<!-- Button style -->
<label class="radio-button">
  <input type="radio" name="size">
  Small
</label>
<label class="radio-button radio-button-secondary">
  <input type="radio" name="size">
  Medium
</label>
```

### Switch (Toggle)

```html
<!-- Basic switch — checkbox with .switch class -->
<input type="checkbox" class="switch">
<input type="checkbox" class="switch" checked>

<!-- Color variants -->
<input type="checkbox" class="switch switch-success" checked>
<input type="checkbox" class="switch switch-danger" checked>
<input type="checkbox" class="switch switch-warning" checked>
<input type="checkbox" class="switch switch-info" checked>

<!-- With label -->
<label class="label-checkbox">
  <input type="checkbox" class="switch switch-success">
  Enable feature
</label>
```

---

## Third-Party Libraries

All libraries are bundled in `public/js/app.js` — no CDN scripts needed on pages.

### Select2

```html
<!-- Select2 applies its classes automatically when initialized -->
<select id="my-select" class="select2">
  <option>Option 1</option>
</select>

<script>
  $(document).ready(function () {
    $('#my-select').select2();
  });
</script>
```

### Flatpickr

```html
<input type="text" class="input" id="datepicker" placeholder="Pick a date">

<script>
  flatpickr('#datepicker', {
    dateFormat: 'Y-m-d',
  });
</script>
```

### DataTables

```html
<table id="my-table" class="w-full">
  <thead>...</thead>
  <tbody>...</tbody>
</table>

<script>
  $(document).ready(function () {
    $('#my-table').DataTable();
  });
</script>
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

Every page uses this standard setup (`src/index.html` is the reference):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title | Fexend</title>
  <link rel="stylesheet" href="/public/css/app.css" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />

  <!-- Dark mode init (prevents FOUC) -->
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

  <script src="/public/js/app.js"></script>
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

### Component-local state

```html
<div x-data="{ tab: 'overview' }">
  <button @click="tab = 'overview'" :class="tab === 'overview' ? 'active' : ''">Overview</button>
  <button @click="tab = 'details'" :class="tab === 'details' ? 'active' : ''">Details</button>
  <div x-show="tab === 'overview'">...</div>
  <div x-show="tab === 'details'">...</div>
</div>
```

---

## Icons (Tabler Icons)

Use inline SVG. Standard sizing: `w-5 h-5` or `w-6 h-6`. Stroke-based only.

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
