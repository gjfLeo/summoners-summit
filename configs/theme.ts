import type { ThemeConfig } from "@bg-dev/nuxt-naiveui";

const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: "\"LXGW Neo XiHei\", \"Microsoft YaHei\", sans-serif",
      fontFamilyMono: "\"Liger Iosevka\", \"Ubuntu Mono\", \"LXGW Neo XiHei\", \"Microsoft YaHei\", monospace",
    },
  },
  // 禁用 nuxt-naiveui 默认的移动端主题
  mobile: {
    defaults: false,
  },
  mobileOrTablet: {
    defaults: false,
  },
};

export default themeConfig;
