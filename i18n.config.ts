import en from "./locales/_en";
import zh from "./locales/_zh";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: { zh, en },
}));
