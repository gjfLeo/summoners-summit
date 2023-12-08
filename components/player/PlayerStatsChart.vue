<template>
  <div class="mt h-60 flex justify-center">
    <Chart
      id="stats-by-version"
      :options="chartOptions"
      :data="chartData"
      type="bar"
    />
  </div>
</template>

<script lang="ts" setup>
import { Chart } from "vue-chartjs";
import type { ChartData, ChartOptions } from "chart.js";
import { divide } from "mathjs/number";
import { breakpointsTailwind } from "@vueuse/core";
import type { ApiPlayerStatsByVersionData } from "~/utils/types";

const props = defineProps<{
  statsByVersion: ApiPlayerStatsByVersionData["statsByVersion"];
}>();

const statsByVersionList = computed(() => Object.entries(props.statsByVersion)
  .map(([gameVersion, stats]) => ({ gameVersion, ...stats }))
  .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion)));

const labels = computed(() => statsByVersionList.value.map(item => item.gameVersion));

const dataMatchWinRate = computed(() => statsByVersionList.value.map(item => divide(item.matchWin * 100, item.matchTotal)));
const dataGameWinRate = computed(() => statsByVersionList.value.map(item => divide(item.gameWin * 100, item.gameTotal)));
const dataMatchWin = computed(() => statsByVersionList.value.map(item => item.matchWin));
const dataMatchLose = computed(() => statsByVersionList.value.map(item => item.matchTotal - item.matchWin));

const chartData = computed<ChartData>(() => ({
  labels: labels.value,
  datasets: [
    {
      type: "line",
      label: "场次胜率",
      data: dataMatchWinRate.value,
      yAxisID: "yPercent",
      borderColor: "#368cf1c0",
      backgroundColor: "#368cf1",
      spanGaps: true,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
    },
    {
      type: "line",
      label: "对局胜率",
      data: dataGameWinRate.value,
      yAxisID: "yPercent",
      borderColor: "#f1a936c0",
      backgroundColor: "#f1a936",
      spanGaps: true,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
    },
    {
      type: "bar",
      label: "胜场数",
      data: dataMatchWin.value,
      backgroundColor: "#368cf180",
      yAxisID: "yCount",
      stack: "matchStack",
      categoryPercentage: 0.5,
    },
    {
      type: "bar",
      label: "负场数",
      data: dataMatchLose.value,
      backgroundColor: "#808080",
      yAxisID: "yCount",
      stack: "matchStack",
      categoryPercentage: 0.5,
    },
  ],
}));

const { sm, md } = useBreakpoints(breakpointsTailwind);

const chartOptions = computed<ChartOptions>(() => ({
  responsive: true,
  aspectRatio: md.value ? 3 : (sm.value ? 2 : 1),
  plugins: {
    tooltip: {
      callbacks: {
        label(ctx) {
          let label = ctx.dataset.label ?? "";
          if (label) {
            label += "：";
          }
          if (ctx.dataset.yAxisID === "yPercent") {
            label += Number(ctx.parsed.y).toFixed(2);
            label += "%";
          }
          else {
            label += ctx.parsed.y;
          }
          return label;
        },
      },
    //   callbacks: {
    //     footer: (tooltipItems) => {
    //       let sum = 0;
    //       tooltipItems.forEach((tooltipItem) => {
    //         sum += tooltipItem.parsed.y;
    //       });
    //       return `Sum: ${sum}`;
    //     },
    //   },
    },
    legend: {
      position: "bottom",
    },
  },
  interaction: {
    mode: "index",
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
    },
    yPercent: {
      min: 0,
      max: 100,
      ticks: {
        callback: s => `${s}%`,
        stepSize: 25,
      },
      position: "right",
      title: {
        display: true,
        text: "胜率",
      },
    },
  },
}));
</script>
