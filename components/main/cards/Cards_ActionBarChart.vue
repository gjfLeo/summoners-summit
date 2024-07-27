<template>
  <div>
    <NText :depth="3" class="text-sm">{{ t('main.cards.actionBarChart.summary', [numGameDecks]) }}</NText>
    <VChart
      ref="chart"
      class="mt h-[calc(100vh-16rem)] min-h-30rem"
      :option="option" autoresize
    />
  </div>
</template>

<script lang="ts" setup>
import { divide, format } from "mathjs/number";
import type { VChart } from "#components";

type DataType = Awaited<ReturnType<typeof useApiGetActionCardStats>>;
const actionCardStats = inject<DataType["actionCardStats"]>("actionCardStats", computed(() => []));
const numGameDecks = inject<DataType["numGameDecks"]>("numGameDecks", computed(() => 0));

const { t } = useLocales();
const { getCardImage } = await useAsyncSharedData();
const themeVars = useThemeVars();
const chart = ref<ComponentPublicInstance>();
const { height: chartHeight } = useElementSize(chart);

const data = computed(() => {
  return actionCardStats.value
    .map(item => ({
      cardId: item.cardId,
      image: getCardImage(item.cardId),
      numUsages: item.numUsages,
      pickFrequency: divide(item.numUsages, item.numGameDecks),
    }))
    .sort(sorter("numUsages"))
    .reverse();
});

const option = computed<ECOption>(() => {
  return {
    grid: [
      {
        top: remToPx(3),
        left: remToPx(3),
        right: remToPx(0),
        bottom: chartHeight.value * 0.5,
        containLabel: false,
      },
      {
        top: chartHeight.value * 0.5 + remToPx(1 + 1.5 * (12 / 7)),
        left: remToPx(3),
        right: remToPx(0),
        bottom: remToPx(3),
        containLabel: false,
      },
    ],
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        filterMode: "filter",
        start: 0,
        maxValueSpan: 20,
        minValueSpan: 20,
        zoomLock: true,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
      {
        type: "slider",
        xAxisIndex: [0, 1],
        showDetail: false,
        handleSize: 0,
        brushSelect: false,
        height: remToPx(1),
        bottom: 0,
      },
    ],
    xAxis: [
      {
        gridIndex: 0,
        type: "category",
        data: data.value.map(card => card.cardId),
        axisLabel: {
          interval: 0,
          formatter: (value) => {
            return `{${value}| }`;
          },
          color: themeVars.value.textColor2,
          margin: remToPx(0.5),
          rich: {
            ...Object.fromEntries(
              data.value.map((item) => {
                return [item.cardId, {
                  height: remToPx(1.5 * (12 / 7)),
                  width: remToPx(1.5),
                  backgroundColor: {
                    image: item.image,
                  },
                }];
              }),
            ),
          },
        },
      },
      {
        gridIndex: 1,
        type: "category",
        data: data.value.map(card => card.cardId),
        position: "top",
        axisLabel: {
          show: false,
          interval: 0,
        },
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        type: "value",
        name: "总携带张数",
      },
      {
        gridIndex: 1,
        type: "value",
        name: "平均张数",
        scale: true,
        inverse: true,
      },
    ],
    series: [
      {
        name: "numUsages",
        type: "bar",
        data: data.value.map(item => item.numUsages),
        emphasis: {
          focus: "self",
          label: {
            show: true,
            position: "top",
          },
        },
        barWidth: remToPx(1.5),
      },
      {
        name: "pickFrequency",
        type: "bar",
        data: data.value.map(item => item.pickFrequency),
        emphasis: {
          focus: "self",
          label: {
            show: true,
            position: "bottom",
            formatter: (params) => {
              if (typeof params.value === "number") {
                return `${format(params.value, { precision: 4 })}`;
              }
              return "";
            },
          },
        },
        barWidth: remToPx(1.5),
        xAxisIndex: 1,
        yAxisIndex: 1,
      },
    ],
  } satisfies ECOption;
});
</script>
