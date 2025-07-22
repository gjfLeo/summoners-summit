export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event, { body }) => {
    if (event.path === "/_docs/openapi.json") {
      const paths = (body as any).paths;
      delete paths[""];
      delete paths["/api"];
      delete paths["/_docs/scalar"];
      delete paths["/_docs/swagger"];
      for (const [key, value] of Object.entries(paths)) {
        if (key.startsWith("/__nuxt")) {
          delete paths[key];
        }
        if (!import.meta.dev) {
          if (key.startsWith("/api/v3")) {
            delete paths[key];
          }
          for (const method of Object.keys(value as any)) {
            if (method !== "get") {
              delete (value as any)[method];
            }
          }
        }
      }
    }
  });
});
