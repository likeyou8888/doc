import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "文档",
    icon: "book",
    prefix: "guide/",
    children: [
      {
        text: "EX系列",
        icon: "lightbulb",
        children: [
          { text: "EX2050", icon: "ellipsis", link: "/zh/EX2050/" },
          { text: "EX2070", icon: "ellipsis", link: "/zh/EX2070/" },
          { text: "EX2150", icon: "ellipsis", link: "/zh/EX2150/" },
          { text: "EX2170", icon: "ellipsis", link: "/zh/EX2170/" },
          { text: "EX401", icon: "ellipsis", link: "/zh/EX401/" },
        ],
      },
      {
        text: "VEX系列",
        icon: "lightbulb",
        children: [
          { text: "VEX105/15W", icon: "ellipsis", link: "/zh/vex15/" },
          { text: "VEX105/40W", icon: "ellipsis", link: "/zh/vex40/" },
          { text: "VEX2150", icon: "ellipsis", link: "/zh/vex2150/" },
        ],
      },
      {
        text: "MX系列",
        icon: "lightbulb",
        children: [{ text: "MX202", icon: "ellipsis", link: "/zh/MX202/" }],
      },
      {
        text: "WE系列",
        icon: "lightbulb",
        children: [
          { text: "WE2.0", icon: "ellipsis", link: "/zh/we20/" },
          { text: "WE2.1", icon: "ellipsis", link: "/zh/we21/" },
        ],
      },
    ],
  },
  {
    text: "商城",
    icon: "/image/icon.svg",
    link: "https://mall.likeyou168.cn",
  },
  {
    text: "社区",
    icon: "/image/icon.svg",
    link: "https://forum.likeyou168.cn",
  },
]);
