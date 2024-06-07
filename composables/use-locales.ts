import type { Locales } from "~/types/data";

export function useLocales() {
  return useI18n<unknown, Locales>();
}
