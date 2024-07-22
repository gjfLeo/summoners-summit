<template>
  <div>
    <NText :depth="3" class="text-sm">{{ t('main.cards.characterBarChart.summary', [numMatches, numGames]) }}</NText>
    <div ref="chartDom" class="mt h-[calc(100vh-16rem)] min-h-30rem" @click="handleChartClick" />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import * as echarts from "echarts/core";
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { DataZoomComponent, GridComponent, LegendComponent, TooltipComponent } from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import type { ComposeOption } from "echarts/core";
import type { BarSeriesOption } from "echarts/charts";
import type { DataZoomComponentOption, GridComponentOption, LegendComponentOption, TooltipComponentOption } from "echarts/components";
import type { CardId } from "~/types";

use([
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
const { t, currentLocalized } = useLocales();
const { characterCardStats, numGames, numMatches } = await useApiGetCharacterCardStats({ gameVersion: gameVersion.value });
const { characterCardById } = await useAsyncSharedData();
const themeVars = useThemeVars();

const chartOption = computed<EChartsOption>(() => {
  // t('main.cards.characterBarChart.numGamesWin') t('main.cards.characterBarChart.numGamesLose') t('main.cards.characterBarChart.numBanned')
  const localizedSeriesName = (name: string) => t(`main.cards.characterBarChart.${name}`);

  return {
    legend: {
      top: 0,
      left: "center",
      formatter: name => localizedSeriesName(name),
      data: ["numGamesWin", "numGamesLose", "numBanned"],
      textStyle: {
        color: themeVars.value.textColor2,
      },
    },
    grid: {
      top: remToPx(3),
      left: remToPx(1),
      right: remToPx(1),
      bottom: 0,
      containLabel: true,
    },
    dataZoom: [
      {
        type: "inside",
        id: "insideY",
        yAxisIndex: 0,
        filterMode: "empty",
        start: 0,
        maxValueSpan: 7,
        minValueSpan: 7,
        zoomLock: true,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
      {
        type: "slider",
        id: "sliderY",
        yAxisIndex: 0,
        showDetail: false,
        handleSize: 0,
        brushSelect: false,
      },
    ],
    yAxis: {
      type: "category",
      inverse: true,
      data: characterCardStats.value.map(card => card.cardId),
      axisLabel: {
        interval: 0,
        formatter: (value) => {
          return `{${value}| }`;
        },
        color: themeVars.value.textColor2,
        margin: remToPx(0.5),
        rich: {
          ...Object.fromEntries(
            characterCardStats.value.map((item) => {
              const card = characterCardById.value[item.cardId];
              const image = getImageUrl(`${card.name.en} TCG Avatar Icon.png`);
              return [item.cardId, {
                height: remToPx(2),
                width: remToPx(2),
                backgroundColor: {
                  image,
                },
              }];
            }),
          ),
        },
      },
    },
    xAxis: {
      type: "value",
      position: "top",
      axisLabel: {
        color: themeVars.value.textColor2,
      },
      splitLine: {
        lineStyle: {
          color: themeVars.value.borderColor,
        },
      },
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
        barWidth: remToPx(1.5),
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
        barWidth: remToPx(1.5),
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
        barWidth: remToPx(0.75),
        barGap: 0.25,
        color: themeVars.value.errorColor,
      },
    ],
    tooltip: {
      triggerOn: "click",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: themeVars.value.cardColor,
      borderColor: themeVars.value.borderColor,
      textStyle: {
        color: themeVars.value.textColor2,
      },
      trigger: "axis",
      formatter: (params) => {
        if (!Array.isArray(params)) {
          throw new TypeError("tooltip formatter params is not an array");
        }
        const cardId = params[0].name;
        const card = characterCardById.value[cardId];
        const avatarUrl = getImageUrl(`${card.name.en} TCG Avatar Icon.png`);
        const numGames = Number(params[0].value) + Number(params[1].value);

        return `
          <div class="grid grid-cols-[auto_auto_1fr] items-center gap-2 select-none">
            <div class="grid-col-span-3 flex items-center gap-2">
              <img src="${avatarUrl}" class="aspect-[1/1] h-8" />
              <span>${currentLocalized(card.name)}</span>
            </div>
            ${
              params.map((param) => {
                const value = param.seriesName !== "numBanned"
                ? `${param.value} (${toPercentageString(divide(Number(param.value), numGames))})`
                : param.value;
                return `
                  <div class="w-3 h-3 rounded-full" style="background-color: ${param.color}"></div>
                  <div>${localizedSeriesName(param.seriesName!)}</div>
                  <div class="ml-4 font-bold">${value}</div>
                `;
              }).join("\n")
            }
            <div class="grid-col-span-3">
              <span class="text-sm text-primary underline-dashed cursor-pointer" data-role="go-to-team" data-card-id="${cardId}">相关阵容</span>
            </div>
          </div>
        `;
      },
      enterable: true,
      position: (point) => {
        return [point[0] + remToPx(1), point[1] + remToPx(1)];
      },

    },
  } satisfies EChartsOption;
});

const chartDom = ref<HTMLDivElement>();
const chartInstance = shallowRef<echarts.ECharts>();

onMounted(() => {
  chartInstance.value = echarts.init(chartDom.value);
  chartInstance.value.setOption(chartOption.value);
});
watch(chartOption, () => {
  if (chartInstance.value) {
    chartInstance.value.setOption(chartOption.value);
  }
}, { deep: true });

const elementSize = useElementSize(chartDom);
watch([elementSize.width, elementSize.height], () => {
  if (chartInstance.value) {
    chartInstance.value.resize();
  }
});

function handleChartClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.dataset.role === "go-to-team") {
    const cardId = target.dataset.cardId as CardId;
    return navigateTo({
      name: "teams-gameVersion___zh",
      state: {
        includeCharacters: [cardId],
      },
    });
  }
}
</script>
