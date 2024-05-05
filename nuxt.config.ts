// import { pwa } from "./config/pwa";

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
      crawlLinks: false,
      routes: ["/"],
      ignore: ["/admin"],
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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

  features: {
    // For UnoCSS
    inlineStyles: false,
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
});
