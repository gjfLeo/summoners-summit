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
import { NScrollbar, darkTheme, lightTheme } from "naive-ui";
import type { ApiPlayerStatsByVersionData } from "~/utils/types";

const props = defineProps<{
  statsByVersion: ApiPlayerStatsByVersionData["statsByVersion"];
}>();

const labels = computed(() => props.statsByVersion.map(item => item.gameVersion));

const dataMatchWinRate = computed(() => props.statsByVersion.map(item => divide(item.matchWin, item.matchTotal)));
const dataGameWinRate = computed(() => props.statsByVersion.map(item => divide(item.gameWin, item.gameTotal)));
const dataMatchWin = computed(() => props.statsByVersion.map(item => item.matchWin));
const dataMatchLose = computed(() => props.statsByVersion.map(item => item.matchTotal - item.matchWin));

const isDark = useDark();
const theme = computed(() => isDark.value ? darkTheme : lightTheme);

const data = computed<ChartData>(() => ({
  labels: labels.value,
  datasets: [
    {
      type: "line",
      label: "场次胜率",
      data: dataMatchWinRate.value,
      yAxisID: "yPercent",
      borderColor: theme.value.common.infoColor,
      backgroundColor: theme.value.common.infoColorHover,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
      datalabels: {
        formatter: v => Math.round(v * 100),
        backgroundColor: context => context.dataset.backgroundColor,
        borderRadius: 3,
      },
    },
    {
      type: "line",
      label: "对局胜率",
      data: dataGameWinRate.value,
      yAxisID: "yPercent",
      borderColor: theme.value.common.warningColorHover,
      backgroundColor: theme.value.common.warningColor,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
      datalabels: {
        formatter: v => Math.round(v * 100),
        backgroundColor: context => context.dataset.backgroundColor,
        borderRadius: 3,
      },
    },
    {
      type: "bar",
      label: "胜场数",
      data: dataMatchWin.value,
      yAxisID: "yCount",
      backgroundColor: "#368cf180",
      stack: "matchStack",
      categoryPercentage: 0.5,
      datalabels: {
        align: "center",
        anchor: "center",
        formatter: v => v > 0 ? v : "",
      },
    },
    {
      type: "bar",
      label: "负场数",
      data: dataMatchLose.value,
      backgroundColor: "#808080",
      yAxisID: "yCount",
      stack: "matchStack",
      categoryPercentage: 0.5,
      datalabels: {
        align: "center",
        anchor: "center",
        formatter: v => v > 0 ? v : "",
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
            label += "：";
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
        text: "版本",
      },
    },
    yCount: {
      stacked: true,
      title: {
        display: true,
        text: "场数",
      },
      min: 0,
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
        text: "胜率(%)",
      },
    },
  },
}));
</script>
