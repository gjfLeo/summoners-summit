// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@unocss/nuxt",
  ],

  css: [
    "@unocss/reset/tailwind-compat.css",
  ],

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
        // { "http-equiv": "Cache-Control", "content": "no-cache, no-store, must-revalidate" },
        // { "http-equiv": "Pragma", "content": "no-cache" },
        // { "http-equiv": "Expires", "content": "0" },
      ],
    },
  },

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
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  devtools: {
    enabled: false,
  },
});
