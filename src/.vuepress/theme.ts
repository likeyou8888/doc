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

  // 启用的一些 markdown 功能
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: false,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
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
    tabs: true,
    tasklist: true,
    vPre: true,
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

    // components: {
    //   components: ["Badge", "VPCard"], // 添加 Badge 和 VPCard 组件
    // },

    icon: {
      prefix: "fa6-solid:", // 使用 FontAwesome 6 图标
    },
  },
});
