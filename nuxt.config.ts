// import { pwa } from "./config/pwa";
import dayjs from "dayjs";

export default defineNuxtConfig({
  modules: [
    "@bg-dev/nuxt-naiveui",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    // "@vite-pwa/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "nuxt-echarts",
  ],

  runtimeConfig: {
    public: {
      updateTime: dayjs().add(new Date().getTimezoneOffset() + 480, "minutes").format("YYYY-MM-DD HH:mm:ss"),
    },
  },

  routeRules: {
    "/**": { prerender: true },
    "/admin/**": { ssr: false, prerender: false },
    "/en/admin/**": { ssr: false, prerender: false },
  },

  nitro: {
    // static: true,
    // esbuild: {
    //   options: {
    //     target: "esnext",
    //   },
    // },
    prerender: {
      crawlLinks: false,
      routes: ["/", "/tournaments"],
      ignore: ["/admin"],
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", type: "image/svg+xml", href: `${process.env.NUXT_APP_BASE_URL ?? "/"}favicon.svg` },
        { rel: "apple-touch-icon", href: `${process.env.NUXT_APP_BASE_URL ?? "/"}apple-touch-icon.png` },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "七圣召唤赛事资料" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "theme-color", media: "(prefers-color-scheme: light)", content: "white" },
        { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#222222" },
      ],
      // script: [
      //   "var sc_project=12936927; var sc_invisible=1; var sc_security=\"22ea8aae\";",
      //   { async: true, src: "https://www.statcounter.com/counter/counter.js" },
      // ],
    },
    // layoutTransition: { name: "layout-transition", mode: "out-in" },
    // pageTransition: { name: "layout-transition", mode: "out-in" },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    // payloadExtraction: false,
    renderJsonPayloads: false,
    typedPages: true,
  },

  components: [
    { path: "~/components" },
    { path: "~/components/main", pathPrefix: false },
  ],

  css: [
    "@unocss/reset/tailwind.css",
  ],

  // colorMode: {
  //   classSuffix: "",
  // },

  // pwa,

  devtools: {
    enabled: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "zh",
    locales: [
      { code: "zh", iso: "zh-CN", name: "简体中文", isCatchallLocale: true },
      { code: "en", iso: "en-US", name: "English" },
    ],
  },

  echarts: {
    renderer: "svg",
    charts: ["BarChart"],
    components: ["GridComponent", "TooltipComponent", "LegendComponent", "DataZoomComponent"],
  },

  compatibilityDate: "2024-07-03",

});
