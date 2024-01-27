import chs from "./locales/chs.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "chs",
  // fallbackLocale: "chs",
  messages: {
    chs,
    en,
  },
}));
