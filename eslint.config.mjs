import gjfleo from "@gjfleo/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().prepend(
  gjfleo(
    {
      rules: {
        "no-cond-assign": ["error", "except-parens"],
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
      files: ["server/data/**/*.json"],
      rules: {
        "no-irregular-whitespace": "off",
      },
    },
  ),
);
