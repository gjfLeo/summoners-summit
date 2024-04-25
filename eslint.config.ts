import gjfleo from "@gjfleo/eslint-config";
import nuxt from "./.nuxt/eslint.config.mjs";

export default gjfleo(
  nuxt,
  {
    files: ["locales/*.json"],
    rules: {
      "jsonc/sort-keys": "warn",
    },
  },
);
