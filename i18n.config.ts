import chs from "./locales/chs";
import en from "./locales/en";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "chs",
  fallbackLocale: "chs",
  messages: {
    chs,
    en,
  },
}));
