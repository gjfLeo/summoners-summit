import { registerTheme } from "echarts/core";
import darkTheme from "~~/config/echarts/dark";
import lightTheme from "~~/config/echarts/light";
import { ROOT_FONT_SIZE_PX } from "~~/config/layout";

export function remToPx(rem: number) {
  return rem * ROOT_FONT_SIZE_PX;
}

export function initECharts() {
  registerTheme("n-light", lightTheme);
  registerTheme("n-dark", darkTheme);

  const { colorMode } = useNaiveColorMode();
  const eChartsTheme = computed(() =>
    colorMode.value === "dark"
      ? "n-dark"
      : "n-light",
  );
  provide(THEME_KEY, eChartsTheme);
}
