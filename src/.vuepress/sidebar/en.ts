import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: [
        {
          text: "EX series",
          icon: "star",
          collapsible: true,
          children: [
            { text: "EX2050", icon: "ellipsis", link: "/EX2050/" },
            { text: "EX2070", icon: "ellipsis", link: "/EX2070/" },
            { text: "EX2150", icon: "ellipsis", link: "/EX2150/" },
            { text: "EX2170", icon: "ellipsis", link: "/EX2170/" },
            { text: "EX401", icon: "ellipsis", link: "/EX401/" },
            { text: "EX402", icon: "ellipsis", link: "/EX402/" },
            { text: "EX201MAX", icon: "ellipsis", link: "/EX201MAX/" },
          ],
        },
        {
          text: "VEX series",
          icon: "star",
          collapsible: true,
          children: [
            { text: "VEX105/15W", icon: "ellipsis", link: "/vex15/" },
            { text: "VEX105/40W", icon: "ellipsis", link: "/vex40/" },
            { text: "VEX2150", icon: "ellipsis", link: "/vex2150/" },
          ],
        },
        {
          text: "MX series",
          icon: "star",
          collapsible: true,
          children: [{ text: "MX202", icon: "ellipsis", link: "/MX202/" }],
        },
        {
          text: "WE series",
          icon: "star",
          collapsible: true,
          children: [
            { text: "WE2.0", icon: "ellipsis", link: "/we20/" },
            { text: "WE2.1", icon: "ellipsis", link: "/we21/" },
          ],
        },
        {
          text: "DK series",
          icon: "star",
          collapsible: true,
          children: [
            { text: "DK60", icon: "ellipsis", link: "/DK60/" },
          ],
        },
      ],
    },
  ],
});
