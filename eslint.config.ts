import gjfleo from "@gjfleo/eslint-config";
import nuxt from "./.nuxt/eslint.config.mjs";

export default gjfleo(
  nuxt,
  {
    rules: {
      "vue/no-multiple-template-root": "off",
    },
  },
);
