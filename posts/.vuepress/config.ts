import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "MrWen33's Blog",
      description: "MrWen33's personal blog",
    },
  },

  theme,

  shouldPrefetch: false,
});
