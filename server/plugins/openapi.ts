export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event, { body }) => {
    if (event.path === "/_docs/openapi.json") {
      const paths = (body as any).paths;
      delete paths[""];
      delete paths["/_docs/scalar"];
      delete paths["/_docs/swagger"];
      for (const key of Object.keys(paths)) {
        if (key.startsWith("/api/v3")) {
          delete paths[key];
        }
        if (key.startsWith("/__nuxt")) {
          delete paths[key];
        }
      }
    }
  });
});
