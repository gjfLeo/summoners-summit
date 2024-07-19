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
    "nuxt-module-eslint-config",
    "@nuxtjs/i18n",
  ],

  runtimeConfig: {
    public: {
      updateTime: dayjs().add(new Date().getTimezoneOffset() + 480, "minutes").format("YYYY-MM-DD HH:mm:ss"),
    },
  },

  components: [
    { path: "~/components" },
    { path: "~/components/main", pathPrefix: false },
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    // payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    "@unocss/reset/tailwind.css",
  ],

  colorMode: {
    classSuffix: "",
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ["/"],
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
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "theme-color", media: "(prefers-color-scheme: light)", content: "white" },
        { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#222222" },
      ],
    },
    layoutTransition: { name: "layout-transition", mode: "out-in" },
    pageTransition: { name: "layout-transition", mode: "out-in" },
  },

  // pwa,

  devtools: {
    enabled: false,
  },

  eslintConfig: {
    setup: false,
  },

  i18n: {
    locales: [
      { code: "zh", iso: "zh", name: "简体中文" },
      { code: "en", iso: "en", name: "English" },
    ],
    defaultLocale: "zh",
    customBlocks: {
      defaultSFCLang: "yaml",
    },
  },

  compatibilityDate: "2024-07-03",
});
