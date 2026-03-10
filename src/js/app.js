import Alpine from "alpinejs";
import $ from "jquery";
import DataTable from "datatables.net";
import "select2";
import flatpickr from "flatpickr";
import { sidebarItems } from "./sidebar-config.js";

window.Alpine = Alpine;
window.$ = window.jQuery = $;
window.DataTable = DataTable;
window.flatpickr = flatpickr;

/**
 * fexendSidebar — Alpine component that renders the full sidebar from sidebar-config.js.
 *
 * Usage in HTML:
 *   <aside x-data="fexendSidebar()">
 *     <!-- Icon sidebar -->
 *     <div class="sidebar-icon">
 *       <div class="border-t border-slate-100 dark:border-slate-700">
 *         <div class="px-2 pt-4">
 *           <ul class="space-y-1">
 *             <template x-for="item in items" :key="item.label">
 *               <li>
 *                 <a :href="item.link" class="sidebar-icon-button" :class="isActive(item) ? 'sidebar-icon-button-active' : ''"
 *                    x-data="{ tooltip: false }" @mouseover="tooltip = true" @mouseleave="tooltip = false">
 *                   <span x-html="item.icon"></span>
 *                   <span x-show="tooltip" x-transition class="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-max bg-slate-800 text-white rounded py-1 px-2 whitespace-nowrap z-[100] font-normal text-sm" x-text="item.label"></span>
 *                 </a>
 *               </li>
 *             </template>
 *           </ul>
 *         </div>
 *       </div>
 *     </div>
 *
 *     <!-- Expanded sidebar (controlled by sidebarOpen on parent body) -->
 *     <div class="relative z-10">
 *       <div x-cloak x-show="$store.layout.sidebarOpen" class="sidebar-layout" ...>
 *         <div class="px-4 py-6">
 *           <template x-for="item in items" :key="item.label">
 *             <div class="mb-2">
 *               <button x-show="item.subMenus.length > 0" @click="toggleGroup(item.label)"
 *                       class="sidebar-link w-full flex justify-between items-center"
 *                       :class="isActive(item) ? 'sidebar-link-active' : ''"
 *                       x-text="item.label"></button>
 *               <a x-show="item.subMenus.length === 0" :href="item.link"
 *                  class="sidebar-link" :class="isActive(item) ? 'sidebar-link-active' : ''"
 *                  x-text="item.label"></a>
 *               <ul x-show="openGroup === item.label" x-collapse class="pl-4 mt-1 space-y-1">
 *                 <template x-for="sub in item.subMenus" :key="sub.link">
 *                   <li><a :href="sub.link" class="sidebar-link text-sm" x-text="sub.name"></a></li>
 *                 </template>
 *               </ul>
 *             </div>
 *           </template>
 *         </div>
 *       </div>
 *     </div>
 *   </aside>
 */
Alpine.data('fexendSidebar', () => ({
    items: sidebarItems,
    openGroup: null,
    get currentPath() {
        return window.location.pathname;
    },
    isActive(item) {
        const path = this.currentPath;
        return (
            item.activeLinks &&
            item.activeLinks.some((link) => path === link || path.endsWith(link))
        );
    },
    isSubActive(sub) {
        const path = this.currentPath;
        return path === sub.link || path.endsWith(sub.link);
    },
    toggleGroup(label) {
        this.openGroup = this.openGroup === label ? null : label;
    },
    init() {
        // Auto-open the group containing the current page
        for (const item of this.items) {
            if (this.isActive(item) && item.subMenus.length > 0) {
                this.openGroup = item.label;
                break;
            }
        }
    },
}));

Alpine.start();
