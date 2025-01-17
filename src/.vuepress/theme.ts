import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://manual.likeyou168.cn", // 修改为新的主机名

  // author: {
  //   name: "Mr.Hu",
  //   url: "https://", // 保持作者信息不变
  // },

  logo: "/image/faicon.png", // 修改为新的 logo 地址

  repo: "likeyou8888/doc", // 保持 repo 信息不变

  docsDir: "src", // 保持 docsDir 不变

  locales: {
    "/": {
      // navbar
      navbar: enNavbar, // 使用已有的英文导航配置

      // sidebar
      sidebar: enSidebar, // 使用已有的英文侧边栏配置

      footer: "默认页脚", // 页脚改为 "默认页脚"
      displayFooter: false, // 隐藏页脚显示

      metaLocales: {
        editLink: "Edit this page on GitHub", // GitHub 编辑链接
      },
    },

    "/zh/": {
      // navbar
      navbar: zhNavbar, // 使用已有的中文导航配置

      // sidebar
      sidebar: zhSidebar, // 使用已有的中文侧边栏配置

      footer: "默认页脚", // 中文页脚内容
      displayFooter: false, // 显示页脚

      metaLocales: {
        editLink: "在 GitHub 上编辑此页", // 中文的 GitHub 编辑链接
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234", // 密码提示
        password: "1234", // 密码
      },
      "/zh/demo/encrypt.html": {
        hint: "Password: 1234", // 密码提示
        password: "1234", // 密码
      },
    },
  },

  plugins: {
    // // 评论插件，使用 Giscus
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    components: {
      components: [
        "Badge", 
        "VPCard",
        "ArtPlayer",
        "PDF",
        "Share",
      ],
    },

    icon: {
      prefix: "fa6-solid:", // 使用 FontAwesome 6 图标
    },

    backToTop: {
      threshold: 500,
    },
    
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 此功能被开启用于演示，你应仅当使用时保留。
    markdownTab: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
});
