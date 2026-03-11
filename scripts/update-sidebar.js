/**
 * One-time script: replace sidebar in all HTML files with the new
 * fexendSidebar() pattern — icon bar = group nav links, expanded
 * sidebar = flat list of current group's pages.
 * Run: bun scripts/update-sidebar.js
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;

const NEW_SIDEBAR = `\t\t<!-- Sidebar -->
\t\t<aside x-data="fexendSidebar()">
\t\t\t<!-- Icon Sidebar — hidden on mobile, visible on md+ -->
\t\t\t<div class="sidebar-icon">
\t\t\t\t<div>
\t\t\t\t\t<div class="inline-flex h-16 w-16 items-center justify-center">
\t\t\t\t\t\t<a
\t\t\t\t\t\t\thref="/src/settings/index.html"
\t\t\t\t\t\t\tx-data="{ tooltip: false }"
\t\t\t\t\t\t\t@mouseover="tooltip = true"
\t\t\t\t\t\t\t@mouseleave="tooltip = false"
\t\t\t\t\t\t\tclass="sidebar-icon-button"
\t\t\t\t\t\t>
\t\t\t\t\t\t\t<svg
\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"
\t\t\t\t\t\t\t\twidth="24"
\t\t\t\t\t\t\t\theight="24"
\t\t\t\t\t\t\t\tviewBox="0 0 24 24"
\t\t\t\t\t\t\t\tfill="none"
\t\t\t\t\t\t\t\tstroke="currentColor"
\t\t\t\t\t\t\t\tstroke-width="2"
\t\t\t\t\t\t\t\tstroke-linecap="round"
\t\t\t\t\t\t\t\tstroke-linejoin="round"
\t\t\t\t\t\t\t\tclass="icon icon-tabler icons-tabler-outline icon-tabler-settings"
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t<path stroke="none" d="M0 0h24v24H0z" fill="none" />
\t\t\t\t\t\t\t\t<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
\t\t\t\t\t\t\t\t<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
\t\t\t\t\t\t\t</svg>
\t\t\t\t\t\t\t<span
\t\t\t\t\t\t\t\tx-show="tooltip"
\t\t\t\t\t\t\t\tx-transition
\t\t\t\t\t\t\t\tclass="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-max bg-slate-800 text-white rounded py-1 px-2 whitespace-nowrap z-[100] font-normal text-sm"
\t\t\t\t\t\t\t\t>Settings</span
\t\t\t\t\t\t\t>
\t\t\t\t\t\t</a>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="border-t border-slate-100 dark:border-slate-700">
\t\t\t\t\t\t<div class="px-2 pt-4">
\t\t\t\t\t\t\t<ul class="space-y-1">
\t\t\t\t\t\t\t\t<template x-for="item in items" :key="item.label">
\t\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t\t<a
\t\t\t\t\t\t\t\t\t\t\t:href="item.link"
\t\t\t\t\t\t\t\t\t\t\tx-data="{ tooltip: false }"
\t\t\t\t\t\t\t\t\t\t\t@mouseover="tooltip = true"
\t\t\t\t\t\t\t\t\t\t\t@mouseleave="tooltip = false"
\t\t\t\t\t\t\t\t\t\t\tclass="sidebar-icon-button"
\t\t\t\t\t\t\t\t\t\t\t:class="isActive(item) ? 'sidebar-icon-button-active' : ''"
\t\t\t\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t\t\t\t<span x-html="item.icon"></span>
\t\t\t\t\t\t\t\t\t\t\t<span
\t\t\t\t\t\t\t\t\t\t\t\tx-show="tooltip"
\t\t\t\t\t\t\t\t\t\t\t\tx-transition
\t\t\t\t\t\t\t\t\t\t\t\tclass="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-max bg-slate-800 text-white rounded py-1 px-2 whitespace-nowrap z-[100] font-normal text-sm"
\t\t\t\t\t\t\t\t\t\t\t\tx-text="item.label"
\t\t\t\t\t\t\t\t\t\t\t></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t</template>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t<div class="sidebar-footer">
\t\t\t\t\t<div class="relative" x-data="{ tooltip: false }">
\t\t\t\t\t\t<form action="#">
\t\t\t\t\t\t\t<button
\t\t\t\t\t\t\t\ttype="submit"
\t\t\t\t\t\t\t\tclass="sidebar-icon-button w-full justify-center"
\t\t\t\t\t\t\t\t@mouseover="tooltip = true"
\t\t\t\t\t\t\t\t@mouseleave="tooltip = false"
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t<svg
\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"
\t\t\t\t\t\t\t\t\tclass="size-5 opacity-75"
\t\t\t\t\t\t\t\t\tfill="none"
\t\t\t\t\t\t\t\t\tviewBox="0 0 24 24"
\t\t\t\t\t\t\t\t\tstroke="currentColor"
\t\t\t\t\t\t\t\t\tstroke-width="2"
\t\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t\t<path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
\t\t\t\t\t\t\t\t</svg>
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t<span
\t\t\t\t\t\t\t\tx-show="tooltip"
\t\t\t\t\t\t\t\tx-transition
\t\t\t\t\t\t\t\tclass="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-max bg-slate-800 text-white rounded py-1 px-2 whitespace-nowrap z-[100] font-normal text-sm"
\t\t\t\t\t\t\t\t>Logout</span
\t\t\t\t\t\t\t>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<!-- /Icon Sidebar -->

\t\t\t<!-- Expanded Sidebar -->
\t\t\t<div class="relative z-10">
\t\t\t\t<div
\t\t\t\t\tx-cloak
\t\t\t\t\tx-show="sidebarOpen"
\t\t\t\t\tx-transition:enter="transform transition duration-300 ease-in-out"
\t\t\t\t\tx-transition:enter-start="-translate-x-full"
\t\t\t\t\tx-transition:enter-end="translate-x-0"
\t\t\t\t\tx-transition:leave="transform transition duration-300 ease-in-out"
\t\t\t\t\tx-transition:leave-start="translate-x-0"
\t\t\t\t\tx-transition:leave-end="-translate-x-full"
\t\t\t\t\tclass="sidebar-layout"
\t\t\t\t>
\t\t\t\t\t<div class="px-4 py-6">
\t\t\t\t\t\t<p
\t\t\t\t\t\t\tclass="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
\t\t\t\t\t\t\tx-text="activeGroup.label"
\t\t\t\t\t\t></p>
\t\t\t\t\t\t<ul class="space-y-1">
\t\t\t\t\t\t\t<template x-for="sub in activeSubMenus" :key="sub.link">
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a
\t\t\t\t\t\t\t\t\t\t:href="sub.link"
\t\t\t\t\t\t\t\t\t\tclass="sidebar-link"
\t\t\t\t\t\t\t\t\t\t:class="isSubActive(sub) ? 'sidebar-link-active' : ''"
\t\t\t\t\t\t\t\t\t\tx-text="sub.name"
\t\t\t\t\t\t\t\t\t></a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t</template>
\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t<!-- Backdrop for mobile -->
\t\t\t\t<div
\t\t\t\t\tx-show="sidebarOpen"
\t\t\t\t\tx-transition:enter="transition-all ease-linear duration-300"
\t\t\t\t\tx-transition:enter-start="opacity-0 backdrop-blur-none"
\t\t\t\t\tx-transition:enter-end="opacity-100 backdrop-blur-sm"
\t\t\t\t\tx-transition:leave="transition-all ease-linear duration-300"
\t\t\t\t\tx-transition:leave-start="opacity-100 backdrop-blur-sm"
\t\t\t\t\tx-transition:leave-end="opacity-0 backdrop-blur-none"
\t\t\t\t\tclass="sidebar-backdrop"
\t\t\t\t\t@click="sidebarOpen = false"
\t\t\t\t></div>
\t\t\t</div>
\t\t\t<!-- /Expanded Sidebar -->
\t\t</aside>
\t\t<!-- /Sidebar -->`;

function getHtmlFiles() {
    const files = [];
    files.push(join(ROOT, 'src/index.html'));

    const dirs = ['src/components', 'src/elements', 'src/dashboard', 'src/settings'];
    for (const dir of dirs) {
        try {
            for (const f of readdirSync(join(ROOT, dir))) {
                if (f.endsWith('.html')) files.push(join(ROOT, dir, f));
            }
        } catch {}
    }
    return files;
}

let updated = 0;
let skipped = 0;

for (const filePath of getHtmlFiles()) {
    const content = readFileSync(filePath, 'utf8');
    const start = content.indexOf('\t\t<!-- Sidebar -->');
    const end = content.indexOf('\t\t<!-- /Sidebar -->');

    if (start === -1 || end === -1) {
        console.log(`SKIP: ${filePath}`);
        skipped++;
        continue;
    }

    const endFull = end + '\t\t<!-- /Sidebar -->'.length;
    writeFileSync(filePath, content.slice(0, start) + NEW_SIDEBAR + content.slice(endFull), 'utf8');
    console.log(`UPDATED: ${filePath}`);
    updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped.`);
