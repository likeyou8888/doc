import { defineUserConfig } from "vuepress";
// 导入搜索插件，使用 @vuepress/plugin-search 的最新导入路径
import { searchPlugin } from '@vuepress/plugin-search'
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
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
