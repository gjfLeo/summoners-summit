import gjfleo from "@gjfleo/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().prepend(
  gjfleo(
    {
      rules: {
      },
    },
    {
      files: ["locales/*.json"],
      rules: {
        "jsonc/sort-keys": "warn",
        "no-irregular-whitespace": "off",
      },
    },
    {
      ignores: ["server/data/**/*.json"],
    },
  ),
);
