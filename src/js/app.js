import Alpine from "alpinejs";
import Collapse from "@alpinejs/collapse";
import $ from "jquery";
import DataTable from "datatables.net";
import "select2";
import flatpickr from "flatpickr";

window.Alpine = Alpine;
window.$ = window.jQuery = $;
window.DataTable = DataTable;
window.flatpickr = flatpickr;

Alpine.plugin(Collapse);

Alpine.data("fexendSidebar", () => ({
    items: [
        {
            label: "Dashboard",
            link: "/src/index.html",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M10 12h4v4h-4z"/></svg>`,
            activeLinks: [
                "/src/index.html",
                "/src/dashboard/index.html",
                "/src/dashboard/dashboard.html",
                "/src/dashboard/dashboard2.html",
                "/src/dashboard/dashboard3.html",
            ],
            subMenus: [
                { name: "Dashboard 1", link: "/src/dashboard/dashboard.html" },
                { name: "Dashboard 2", link: "/src/dashboard/dashboard2.html" },
                { name: "Dashboard 3", link: "/src/dashboard/dashboard3.html" },
            ],
        },
        {
            label: "Elements",
            link: "/src/elements/index.html",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"/><path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"/><path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"/><path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"/><path d="M17 12h.01"/><path d="M13 12h.01"/></svg>`,
            activeLinks: [
                "/src/elements/index.html",
                "/src/elements/input.html",
                "/src/elements/checkbox.html",
                "/src/elements/radio.html",
                "/src/elements/switch.html",
                "/src/elements/select2.html",
                "/src/elements/flatpickr.html",
                "/src/elements/datatable.html",
                "/src/elements/wysiwyg.html",
            ],
            subMenus: [
                { name: "Input", link: "/src/elements/input.html" },
                { name: "Checkbox", link: "/src/elements/checkbox.html" },
                { name: "Radio", link: "/src/elements/radio.html" },
                { name: "Switch", link: "/src/elements/switch.html" },
                { name: "Select2", link: "/src/elements/select2.html" },
                { name: "Flatpickr", link: "/src/elements/flatpickr.html" },
                { name: "DataTable", link: "/src/elements/datatable.html" },
                { name: "WYSIWYG", link: "/src/elements/wysiwyg.html" },
            ],
        },
        {
            label: "Components",
            link: "/src/components/index.html",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12l3 3l3 -3l-3 -3z"/><path d="M15 12l3 3l3 -3l-3 -3z"/><path d="M9 6l3 3l3 -3l-3 -3z"/><path d="M9 18l3 3l3 -3l-3 -3z"/></svg>`,
            activeLinks: [
                "/src/components/index.html",
                "/src/components/accordion.html",
                "/src/components/alert.html",
                "/src/components/avatar.html",
                "/src/components/badge.html",
                "/src/components/breadcrumb.html",
                "/src/components/button.html",
                "/src/components/card.html",
                "/src/components/collapse.html",
                "/src/components/command-palette.html",
                "/src/components/data-filter.html",
                "/src/components/divider.html",
                "/src/components/drawer.html",
                "/src/components/dropdown.html",
                "/src/components/file-upload.html",
                "/src/components/menu-list.html",
                "/src/components/modal.html",
                "/src/components/pagination.html",
                "/src/components/popover.html",
                "/src/components/stat-card.html",
                "/src/components/stepper.html",
                "/src/components/tab.html",
                "/src/components/table.html",
                "/src/components/timeline.html",
                "/src/components/toast.html",
                "/src/components/tooltip.html",
            ],
            subMenus: [
                { name: "Accordion", link: "/src/components/accordion.html" },
                { name: "Alert", link: "/src/components/alert.html" },
                { name: "Avatar", link: "/src/components/avatar.html" },
                { name: "Badge", link: "/src/components/badge.html" },
                { name: "Breadcrumb", link: "/src/components/breadcrumb.html" },
                { name: "Button", link: "/src/components/button.html" },
                { name: "Card", link: "/src/components/card.html" },
                { name: "Collapse", link: "/src/components/collapse.html" },
                { name: "Command Palette", link: "/src/components/command-palette.html" },
                { name: "Data Filter", link: "/src/components/data-filter.html" },
                { name: "Divider", link: "/src/components/divider.html" },
                { name: "Drawer", link: "/src/components/drawer.html" },
                { name: "Dropdown", link: "/src/components/dropdown.html" },
                { name: "File Upload", link: "/src/components/file-upload.html" },
                { name: "Menu List", link: "/src/components/menu-list.html" },
                { name: "Modal", link: "/src/components/modal.html" },
                { name: "Pagination", link: "/src/components/pagination.html" },
                { name: "Popover", link: "/src/components/popover.html" },
                { name: "Stat Card", link: "/src/components/stat-card.html" },
                { name: "Stepper", link: "/src/components/stepper.html" },
                { name: "Tab", link: "/src/components/tab.html" },
                { name: "Table", link: "/src/components/table.html" },
                { name: "Timeline", link: "/src/components/timeline.html" },
                { name: "Toast", link: "/src/components/toast.html" },
                { name: "Tooltip", link: "/src/components/tooltip.html" },
            ],
        },
        {
            label: "Pages",
            link: "/src/pages/index.html",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>`,
            activeLinks: [
                "/src/pages/index.html",
                "/src/pages/login.html",
                "/src/pages/register.html",
                "/src/pages/forgot-password.html",
                "/src/pages/reset-password.html",
                "/src/pages/verify-email.html",
            ],
            subMenus: [
                { name: "Login", link: "/src/pages/login.html" },
                { name: "Register", link: "/src/pages/register.html" },
                { name: "Forgot Password", link: "/src/pages/forgot-password.html" },
                { name: "Reset Password", link: "/src/pages/reset-password.html" },
                { name: "Verify Email", link: "/src/pages/verify-email.html" },
            ],
        },
        {
            label: "Settings",
            link: "/src/settings/index.html",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>`,
            activeLinks: ["/src/settings/index.html"],
            subMenus: [],
        },
    ],
    get currentPath() {
        return window.location.pathname;
    },
    isActive(item) {
        const path = this.currentPath;
        return item.activeLinks && item.activeLinks.some((link) => path === link || path.endsWith(link));
    },
    isSubActive(sub) {
        const path = this.currentPath;
        return path === sub.link || path.endsWith(sub.link);
    },
    get activeGroup() {
        return this.items.find((item) => this.isActive(item)) || this.items[0];
    },
    get activeSubMenus() {
        return this.activeGroup.subMenus;
    },
}));

Alpine.start();
