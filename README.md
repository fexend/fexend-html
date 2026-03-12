# Fexend

A static HTML dashboard UI component library built with **Tailwind CSS v4** and **Alpine.js v3**. Copy components directly into your project — no build step required on the consumer side.

## Stack

| Tool | Version | Role |
|---|---|---|
| Tailwind CSS | v4 | CSS-first config via `@theme {}` |
| Alpine.js | v3 | All interactivity, inline in HTML |
| Bun | latest | Package manager + build runner |
| Tabler Icons | latest | Inline SVG icons |
| Select2 | 4.x | Enhanced select dropdowns |
| Flatpickr | 4.x | Date/time picker |
| DataTables | 2.x | Interactive data tables |

## Getting Started

```bash
git clone https://github.com/zera-app/fexend-html.git
cd fexend-html
bun install
bun run dev
```

> **Bun only** — do not use npm, yarn, or pnpm.

| Command | Description |
|---|---|
| `bun run dev` | Watch + compile CSS and JS |
| `bun run build` | One-time production build (minified) |
| `bun run format` | Format all HTML/CSS/JS with Prettier |
| `bun run thumbnails` | Generate page screenshot thumbnails |

Compiled output goes to `public/css/app.css` and `public/js/app.js`. Do not edit these directly.

## Components (25)

| Component | File |
|---|---|
| Accordion | `src/components/accordion.html` |
| Alert | `src/components/alert.html` |
| Avatar | `src/components/avatar.html` |
| Badge | `src/components/badge.html` |
| Breadcrumb | `src/components/breadcrumb.html` |
| Button | `src/components/button.html` |
| Card | `src/components/card.html` |
| Collapse | `src/components/collapse.html` |
| Command Palette | `src/components/command-palette.html` |
| Data Filter | `src/components/data-filter.html` |
| Divider | `src/components/divider.html` |
| Drawer | `src/components/drawer.html` |
| Dropdown | `src/components/dropdown.html` |
| File Upload | `src/components/file-upload.html` |
| Menu List | `src/components/menu-list.html` |
| Modal | `src/components/modal.html` |
| Pagination | `src/components/pagination.html` |
| Popover | `src/components/popover.html` |
| Stat Card | `src/components/stat-card.html` |
| Stepper | `src/components/stepper.html` |
| Tab | `src/components/tab.html` |
| Table | `src/components/table.html` |
| Timeline | `src/components/timeline.html` |
| Toast | `src/components/toast.html` |
| Tooltip | `src/components/tooltip.html` |

## Form Elements (9)

| Element | File |
|---|---|
| Input | `src/elements/input.html` |
| Checkbox | `src/elements/checkbox.html` |
| Radio | `src/elements/radio.html` |
| Switch | `src/elements/switch.html` |
| Select2 | `src/elements/select2.html` |
| Flatpickr | `src/elements/flatpickr.html` |
| DataTable | `src/elements/datatable.html` |
| File Upload | `src/elements/file-upload.html` |
| WYSIWYG | `src/elements/wysiwyg.html` |

## Pages

| Page | File |
|---|---|
| Login | `src/pages/login.html` |
| Register | `src/pages/register.html` |
| Forgot Password | `src/pages/forgot-password.html` |
| Reset Password | `src/pages/reset-password.html` |
| Verify Email | `src/pages/verify-email.html` |
| Inbox | `src/pages/inbox.html` |
| Calendar | `src/pages/calendar.html` |
| Kanban | `src/pages/kanban.html` |
| Invoice | `src/pages/invoice.html` |
| Users | `src/pages/users.html` |
| 404 / 500 / Maintenance | `src/pages/errors/` |

## Project Structure

```
src/
├── css/
│   ├── app.css               # Tailwind entry + @theme color tokens
│   ├── components/           # UI component CSS (one file per component)
│   ├── forms/                # Form element CSS (opt-in classes only)
│   ├── libs/                 # Third-party library theming
│   ├── layouts/              # Navbar, sidebar, layout wrappers
│   └── utilities/            # Base element styles (headings, links, etc.)
├── js/
│   └── app.js                # Alpine.js entry point (bundled → public/js/app.js)
├── index.html                # Gallery home (Components · Elements · Pages)
├── dashboard.html            # Layout boilerplate (copy for new pages)
├── components/               # Full page showcases for each component
├── elements/                 # Form element showcase pages
├── pages/                    # Auth + app pages
├── dashboard/                # Dashboard variants
├── layouts/                  # Layout variants
└── settings/                 # Settings pages
public/
├── css/app.css               # Compiled output — do not edit
└── js/app.js                 # Compiled output — do not edit
```

## Design Conventions

- **Colors** — use `@theme` tokens (`text-primary`, `bg-success`, `border-danger`) — never raw hex
- **Dark mode** — class-based (`.dark` on `<html>`), always include `dark:` variants
- **Forms** — opt-in classes only: `.input`, `.label`, `.select`, `.checkbox`, `.radio`, `.switch` — never style bare HTML elements
- **Icons** — Tabler Icons inline SVG, `w-5 h-5`, `stroke="currentColor"`
- **Interactivity** — Alpine.js inline in HTML; no separate JS logic files

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, component creation standards, and PR guidelines.
