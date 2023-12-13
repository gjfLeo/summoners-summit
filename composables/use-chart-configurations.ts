import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  BarController, BarElement, CategoryScale,
  Chart as ChartJS, Colors, Legend, LineController, LineElement, LinearScale, PointElement,
  Title, Tooltip,
} from "chart.js";

import { darkTheme, lightTheme } from "naive-ui";

export default function useChartConfigurations() {
  const isDark = useDark();

  ChartJS.register(
    Title, Tooltip, Colors, Legend,
    CategoryScale, LinearScale,
    BarElement, PointElement, LineElement,
    BarController, LineController,
    ChartDataLabels,
  );

  if (!ChartJS.defaults.plugins.datalabels) {
    ChartJS.defaults.plugins.datalabels = {};
  }

  ChartJS.defaults.responsive = true;
  ChartJS.defaults.aspectRatio = 4;
  ChartJS.defaults.interaction.mode = "index";
  ChartJS.defaults.datasets.line.spanGaps = true;
  ChartJS.defaults.datasets.line.borderWidth = 2;
  ChartJS.defaults.plugins.legend.position = "right";
  ChartJS.defaults.plugins.datalabels.textStrokeWidth = 4;

  watch(isDark, (isDark) => {
    const theme = isDark ? darkTheme : lightTheme;
    ChartJS.defaults.color = theme.common.textColor3;
    ChartJS.defaults.plugins.datalabels!.textStrokeColor = isDark ? "#00000080" : "#ffffff80";
  }, { immediate: true });
}
