export enum Locale {
  ZH = "zh",
  EN = "en",
}

export type Localized<T> = Record<Locale, T>;
