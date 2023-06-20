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
      routes: ["/teams"],
      ignore: ["/hi"],
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        // { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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

  devtools: {
    enabled: true,
  },
});
