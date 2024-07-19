<template>
  <div>
    <div ref="chartDom" :style="{ height: '30rem' }" />
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts/core";
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { DataZoomComponent, DatasetComponent, GridComponent, LegendComponent, TooltipComponent } from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import type { ComposeOption } from "echarts/core";
import type { BarSeriesOption } from "echarts/charts";
import type { DataZoomComponentOption, DatasetComponentOption, GridComponentOption, LegendComponentOption, TooltipComponentOption } from "echarts/components";

use([
  // GridComponent,
  BarChart,
  SVGRenderer,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  TooltipComponent,
]);

type EChartsOption = ComposeOption<
  | BarSeriesOption
  | GridComponentOption
  | LegendComponentOption
  | DataZoomComponentOption
  | TooltipComponentOption
>;

const { gameVersion } = useGameVersion();
const { t } = useLocales();
const { characterCardStats } = await useApiGetCharacterCardStats({ gameVersion: gameVersion.value });
const { characterCardById } = await useAsyncSharedData();
const themeVars = useThemeVars();

const chartOption = computed<EChartsOption>(() => {
  return {
    legend: {
      // t('main.cards.characterBarChart.numGamesWin') t('main.cards.characterBarChart.numGamesLose') t('main.cards.characterBarChart.numBanned')
      formatter: name => t(`main.cards.characterBarChart.${name}`),
      data: ["numGamesWin", "numGamesLose", "numBanned"],
    },
    grid: {
      // left: "3%",
      // right: "4%",
      // bottom: "3%",
      containLabel: true,
    },
    dataZoom: [
      {
        type: "inside",
        id: "insideY",
        yAxisIndex: 0,
        filterMode: "empty",
        start: 0,
        maxValueSpan: 4,
        minValueSpan: 4,
        zoomLock: true,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: characterCardStats.value.map(card => card.cardId),
    },
    xAxis: {
      type: "value",
      position: "top",
    },
    series: [
      {
        name: "numGamesWin",
        type: "bar",
        data: characterCardStats.value.map(item => item.numGamesWin),
        stack: "numGames",
        label: {
          show: true,
          position: "inside",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? String(value) : "";
          },
        },
        emphasis: { focus: "series" },
        barWidth: 20,
        color: themeVars.value.primaryColor,
      },
      {
        name: "numGamesLose",
        type: "bar",
        data: characterCardStats.value.map(item => item.numGames - item.numGamesWin),
        stack: "numGames",
        label: {
          show: true,
          position: "inside",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? String(value) : "";
          },
        },
        emphasis: { focus: "series" },
        color: themeVars.value.placeholderColor,
      },
      {
        name: "numBanned",
        type: "bar",
        data: characterCardStats.value.map(item => item.numBanned),
        label: {
          show: true,
          position: "inside",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? String(value) : "";
          },
        },
        emphasis: { focus: "series" },
        barWidth: 10,
        barGap: 0.25,
        barCategoryGap: 20,
        color: themeVars.value.errorColor,
      },
    ],
  };
});

const chartDom = ref<HTMLDivElement>();
const chartInstance = shallowRef<echarts.ECharts>();

onMounted(() => {
  chartInstance.value = echarts.init(chartDom.value);
  chartInstance.value.setOption(chartOption.value);
});
</script>
