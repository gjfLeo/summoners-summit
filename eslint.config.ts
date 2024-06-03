import gjfleo from "@gjfleo/eslint-config";
import customSortKeys from "./eslint/rules/custom-sort-keys";
import { ALL_ACTION_CARDS } from "./utils/cards";

export default gjfleo(
  {
    files: ["server/data/tournaments/*/*.ts"],
    plugins: {
      custom: {
        rules: {
          "custom-sort-keys": customSortKeys,
        },
      },
    },
    rules: {
      "style/quote-props": "off",
      "custom/custom-sort-keys": ["warn", { orderedKeys: ALL_ACTION_CARDS }],
    },
  },
);
