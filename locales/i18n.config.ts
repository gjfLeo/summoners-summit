import en from "./_en";
import zh from "./_zh";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: { zh, en },
}));
