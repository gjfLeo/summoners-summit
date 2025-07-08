import { defineEventHandler } from "h3";
import { addDevServerHandler, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "well-known-json",
  },
  setup(options, nuxt) {
    addDevServerHandler({
      route: "/.well-known/appspecific/com.chrome.devtools.json",
      handler: defineEventHandler(() => {
        const response = {
          workspace: {
            root: nuxt.options.rootDir,
            uuid: "some-random-uuid",
          },
        };
        return response;
      }),
    });
  },
});
