#!/usr/bin/env node
/**
 * Generate thumbnail screenshots for all component/element/page showcases.
 * Usage: bun run thumbnails
 * Output: public/images/thumbnails/<name>.png
 */

import { chromium } from "@playwright/test";
import { mkdir } from "fs/promises";
import { readFileSync, statSync } from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORT = 3457;
const OUT_DIR = path.join(ROOT, "public/images/thumbnails");

const MIME = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".webmanifest": "application/manifest+json",
    ".json": "application/json",
};

const server = http.createServer((req, res) => {
    const urlPath = new URL(req.url, `http://localhost:${PORT}`).pathname;
    const filePath = path.join(ROOT, decodeURIComponent(urlPath));
    try {
        const stat = statSync(filePath);
        if (stat.isDirectory()) {
            res.writeHead(404);
            res.end("Not found");
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(readFileSync(filePath));
    } catch {
        res.writeHead(404);
        res.end("Not found");
    }
});

const PAGES = [
    // Components (25)
    { name: "accordion", url: "/src/components/accordion.html" },
    { name: "alert", url: "/src/components/alert.html" },
    { name: "avatar", url: "/src/components/avatar.html" },
    { name: "badge", url: "/src/components/badge.html" },
    { name: "breadcrumb", url: "/src/components/breadcrumb.html" },
    { name: "button", url: "/src/components/button.html" },
    { name: "card", url: "/src/components/card.html" },
    { name: "collapse", url: "/src/components/collapse.html" },
    { name: "command-palette", url: "/src/components/command-palette.html" },
    { name: "data-filter", url: "/src/components/data-filter.html" },
    { name: "divider", url: "/src/components/divider.html" },
    { name: "drawer", url: "/src/components/drawer.html" },
    { name: "dropdown", url: "/src/components/dropdown.html" },
    { name: "file-upload", url: "/src/components/file-upload.html" },
    { name: "menu-list", url: "/src/components/menu-list.html" },
    { name: "modal", url: "/src/components/modal.html" },
    { name: "pagination", url: "/src/components/pagination.html" },
    { name: "popover", url: "/src/components/popover.html" },
    { name: "stat-card", url: "/src/components/stat-card.html" },
    { name: "stepper", url: "/src/components/stepper.html" },
    { name: "tab", url: "/src/components/tab.html" },
    { name: "table", url: "/src/components/table.html" },
    { name: "timeline", url: "/src/components/timeline.html" },
    { name: "toast", url: "/src/components/toast.html" },
    { name: "tooltip", url: "/src/components/tooltip.html" },
    // Form Elements (9)
    { name: "el-checkbox", url: "/src/elements/checkbox.html" },
    { name: "el-datatable", url: "/src/elements/datatable.html" },
    { name: "el-file-upload", url: "/src/elements/file-upload.html" },
    { name: "el-flatpickr", url: "/src/elements/flatpickr.html" },
    { name: "el-input", url: "/src/elements/input.html" },
    { name: "el-radio", url: "/src/elements/radio.html" },
    { name: "el-select2", url: "/src/elements/select2.html" },
    { name: "el-switch", url: "/src/elements/switch.html" },
    { name: "el-wysiwyg", url: "/src/elements/wysiwyg.html" },
    // Pages
    { name: "page-login", url: "/src/pages/login.html" },
    { name: "page-register", url: "/src/pages/register.html" },
    { name: "page-forgot-password", url: "/src/pages/forgot-password.html" },
    { name: "page-reset-password", url: "/src/pages/reset-password.html" },
    { name: "page-verify-email", url: "/src/pages/verify-email.html" },
    { name: "page-inbox", url: "/src/pages/inbox.html" },
    { name: "page-calendar", url: "/src/pages/calendar.html" },
    { name: "page-kanban", url: "/src/pages/kanban.html" },
    { name: "page-invoice", url: "/src/pages/invoice.html" },
    { name: "page-users", url: "/src/pages/users.html" },
];

async function run() {
    await mkdir(OUT_DIR, { recursive: true });

    await new Promise((resolve) => server.listen(PORT, resolve));
    console.log(`Static server running at http://localhost:${PORT}`);

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 800, height: 500 });

    let success = 0;
    let failed = 0;

    for (const { name, url } of PAGES) {
        const fullUrl = `http://localhost:${PORT}${url}`;
        try {
            await page.goto(fullUrl, { waitUntil: "networkidle", timeout: 15000 });
            await page.waitForTimeout(500);
            const outPath = path.join(OUT_DIR, `${name}.png`);
            await page.screenshot({ path: outPath });
            console.log(`  ✓ ${name}`);
            success++;
        } catch (err) {
            console.error(`  ✗ ${name}: ${err.message}`);
            failed++;
        }
    }

    await browser.close();
    server.close();

    console.log(`\nDone! ${success} succeeded, ${failed} failed.`);
    console.log(`Thumbnails saved to: ${OUT_DIR}`);
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
