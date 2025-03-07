import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs",
      description: "A docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "产品手册",
      description: "产品手册",
    },
  },

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
