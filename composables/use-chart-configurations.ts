import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  BarController, BarElement, CategoryScale,
  Chart as ChartJS, Colors, Legend, LineController, LineElement, LinearScale, PointElement,
  Title, Tooltip,
} from "chart.js";
import Color from "color";

export default function useChartConfigurations() {
  const theme = useThemeVars();

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
  ChartJS.defaults.layout.padding = { top: 24 };
  ChartJS.defaults.interaction.mode = "index";

  ChartJS.defaults.font.family = theme.value.fontFamily;

  ChartJS.defaults.datasets.bar.maxBarThickness = 60;
  ChartJS.defaults.datasets.line.spanGaps = true;
  ChartJS.defaults.datasets.line.borderWidth = 2;

  ChartJS.defaults.plugins.legend.position = "right";
  ChartJS.defaults.plugins.datalabels.textStrokeWidth = 3;
  ChartJS.defaults.plugins.datalabels.offset = 0;

  watch(theme, (theme) => {
    ChartJS.defaults.color = theme.textColor3;
    ChartJS.defaults.plugins.datalabels!.color = theme.textColor2;
    ChartJS.defaults.plugins.datalabels!.textStrokeColor = Color(theme.baseColor).alpha(0.75).hexa().toString();
  }, { immediate: true });
}
