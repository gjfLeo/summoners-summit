import type { Locales } from "~/types/data";

export function useLocales() {
  const i18n = useI18n<unknown, Locales>();

  function currentLocalized(data?: Partial<Record<Locales, string>>) {
    return data?.[i18n.locale.value] ?? data?.zh;
  }
  return {
    ...i18n,
    currentLocalized,
  };
}
