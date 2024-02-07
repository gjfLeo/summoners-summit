<template>
  <NScrollbar x-scrollable>
    <div class="min-w-800px flex justify-center">
      <Chart
        id="stats-by-version"
        type="bar"
        :data="data"
        :options="options"
      />
    </div>
  </NScrollbar>
</template>

<script lang="ts" setup>
import { Chart } from "vue-chartjs";
import type { ChartData, ChartOptions } from "chart.js";
import { divide } from "mathjs/number";
import type { ApiPlayerStatsByVersionData } from "~/utils/types";

const props = defineProps<{
  statsByVersion: ApiPlayerStatsByVersionData["statsByVersion"];
}>();

const { t } = useI18n();

const labels = computed(() => props.statsByVersion.map(item => item.gameVersion));

const dataMatchWinRate = computed(() => props.statsByVersion.map(item => divide(item.matchWin, item.matchTotal)));
const dataGameWinRate = computed(() => props.statsByVersion.map(item => divide(item.gameWin, item.gameTotal)));
const dataMatchWin = computed(() => props.statsByVersion.map(item => item.matchWin));
const dataMatchLose = computed(() => props.statsByVersion.map(item => item.matchTotal - item.matchWin));

const countMax = computed(() => {
  const maxMatchTotal = props.statsByVersion.map(item => item.matchTotal).reduce((a, b) => Math.max(a, b), 0);
  return Math.ceil(maxMatchTotal / 4) * 4;
});

const theme = useThemeVars();

const data = computed<ChartData>(() => ({
  labels: labels.value,
  datasets: [
    {
      type: "line",
      label: t("player.matchWinRate"),
      data: dataMatchWinRate.value,
      yAxisID: "yPercent",
      borderColor: theme.value.infoColor,
      backgroundColor: theme.value.infoColorHover,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
      datalabels: {
        formatter: v => Math.round(v * 100),
        anchor: "center",
        align: "end",
        color: context => context.dataset.backgroundColor,
        textStrokeColor: theme.value.baseColor,
      },
    },
    {
      type: "line",
      label: t("player.gameWinRate"),
      data: dataGameWinRate.value,
      yAxisID: "yPercent",
      borderColor: theme.value.warningColorHover,
      backgroundColor: theme.value.warningColor,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
      datalabels: {
        formatter: v => Math.round(v * 100),
        anchor: "center",
        align: "end",
        color: context => context.dataset.backgroundColor,
        textStrokeColor: theme.value.baseColor,
      },
    },
    {
      type: "bar",
      label: t("player.chart.numMatchesWin"),
      data: dataMatchWin.value,
      yAxisID: "yCount",
      backgroundColor: "#368cf180",
      stack: "matchStack",
      datalabels: {
        anchor: "start",
        align: "end",
        formatter: (v, context) => {
          const lose = dataMatchLose.value[context.dataIndex];
          return (v + lose > 0) ? t("player.chart.matchCountLabel", [v, lose]) : "";
        },
      },
    },
    {
      type: "bar",
      label: t("player.chart.numMatchesLose"),
      data: dataMatchLose.value,
      backgroundColor: "#808080",
      yAxisID: "yCount",
      stack: "matchStack",
      datalabels: {
        display: false,
      },
    },
  ],
} as ChartData));

const options = computed<ChartOptions>(() => ({
  plugins: {
    tooltip: {
      callbacks: {
        label(ctx) {
          let label = ctx.dataset.label ?? "";
          if (label) {
            label += ": ";
          }
          if (ctx.dataset.yAxisID === "yPercent") {
            label += Number(ctx.parsed.y * 100).toFixed(2);
            label += "%";
          }
          else {
            label += ctx.parsed.y;
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: t("common.gameVersionShort"),
      },
    },
    yCount: {
      stacked: true,
      title: {
        display: true,
        text: t("player.chart.axisMatches"),
      },
      min: 0,
      max: countMax.value,
      ticks: {
        stepSize: 1,
      },
      grid: {
        display: false,
      },
    },
    yPercent: {
      min: 0,
      max: 1,
      ticks: {
        callback: s => Number(s) * 100,
        stepSize: 0.25,
      },
      position: "right",
      title: {
        display: true,
        text: t("player.chart.axisWinRate"),
      },
    },
  },
}));
</script>
