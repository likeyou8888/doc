import { defineClientConfig } from "@vuepress/client";
import { setupDarkMode, setupSidebarItems } from "./composables/index.js";
import { setupRunningTimeFooter } from "./composables/setupRunningTimeFooter.js";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    setupSidebarItems();
    setupDarkMode();
    setupRunningTimeFooter();
  },
  rootComponents: [],
});