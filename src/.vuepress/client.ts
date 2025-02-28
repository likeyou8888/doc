import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window !== "undefined") {
      router.afterEach((to) => {
        // 检查是否是英文页面
        if (!to.path.startsWith("/zh/")) {
          // 创建提示元素
          const guide = document.createElement("div");
          guide.className = "language-guide";
          guide.textContent = "点击这里切换到中文";
          document.body.appendChild(guide);

          // 显示提示
          setTimeout(() => {
            guide.classList.add("show");
          }, 1000);

          // 点击任意位置隐藏提示
          const hideGuide = () => {
            guide.classList.remove("show");
            setTimeout(() => {
              guide.remove();
            }, 300);
            document.removeEventListener("click", hideGuide);
          };

          document.addEventListener("click", hideGuide);
        }
      });
    }
  },
}));