import zh from "./locales/_zh";
import en from "./locales/_en";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: { zh, en },
}));
