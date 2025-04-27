import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: [
        {
          text: "EX系列",
          icon: "star",
          collapsible: true,
          children: [
            { text: "EX2050", icon: "ellipsis", link: "/zh/EX2050/" },
            { text: "EX2070", icon: "ellipsis", link: "/zh/EX2070/" },
            { text: "EX2150", icon: "ellipsis", link: "/zh/EX2150/" },
            { text: "EX2170", icon: "ellipsis", link: "/zh/EX2170/" },
            { text: "EX401", icon: "ellipsis", link: "/zh/EX401/" },
            { text: "EX402", icon: "ellipsis", link: "/zh/EX402/" },
            { text: "EX201", icon: "ellipsis", link: "/zh/EX201/" },
          ],
        },
        {
          text: "VEX系列",
          icon: "star",
          collapsible: true,
          children: [
            { text: "VEX105/15W", icon: "ellipsis", link: "/zh/vex15/" },
            { text: "VEX105/40W", icon: "ellipsis", link: "/zh/vex40/" },
            { text: "VEX2150", icon: "ellipsis", link: "/zh/vex2150/" },
          ],
        },
        {
          text: "MX系列",
          icon: "star",
          collapsible: true,
          children: [{ text: "MX202", icon: "ellipsis", link: "/zh/MX202/" }],
        },
        {
          text: "WE系列",
          icon: "star",
          collapsible: true,
          children: [
            { text: "WE2.0", icon: "ellipsis", link: "/zh/we20/" },
            { text: "WE2.1", icon: "ellipsis", link: "/zh/we21/" },
          ],
        },
        {
          text: "DK系列",
          icon: "star",
          collapsible: true,
          children: [
            { text: "DK60", icon: "ellipsis", link: "/zh/DK60/" },

          ],
        },
      ],
    },
  ],
});
