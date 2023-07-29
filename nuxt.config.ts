import UnpluginComponents from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import dayjs from "dayjs";
import { pwa } from "./config/pwa";
import { appDescription } from "./constants/index";

export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      updateTime: dayjs().add(new Date().getTimezoneOffset() + 480, "minutes").format("YYYY-MM-DD HH:mm:ss"),
    },
  },

  devServer: {
    port: 4000,
  },

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
  ],

  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
    plugins: [
      // https://github.com/antfu/unplugin-vue-components
      UnpluginComponents({
        dirs: [],
        resolvers: [NaiveUiResolver()],
        dts: ".nuxt/unplugin-components.d.ts",
        types: [],
      }),
    ],
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  css: [
    "@unocss/reset/tailwind-compat.css",
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
      routes: [],
      ignore: [],
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        // { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: `${process.env.NUXT_APP_BASE_URL ?? "/"}favicon.svg` },
        { rel: "apple-touch-icon", href: `${process.env.NUXT_APP_BASE_URL ?? "/"}apple-touch-icon.svg` },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: appDescription },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { "http-equiv": "Cache-Control", "content": "no-cache, no-store, must-revalidate" },
        { "http-equiv": "Pragma", "content": "no-cache" },
        { "http-equiv": "Expires", "content": "0" },
      ],
    },
  },

  pwa,
  // pwa: process.env.NUXT_APP_BASE_URL ? undefined : pwa,

  devtools: {
    enabled: true,
  },
});
