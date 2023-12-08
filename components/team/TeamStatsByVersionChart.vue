<template>
  <div class="flex justify-center">
    <Chart
      id="team-stats-by-version"
      type="bar"
      :data="data"
      :options="options"
    />
  </div>
</template>

<script lang="ts" setup>
import { Chart } from "vue-chartjs";
import type { ChartData, ChartOptions } from "chart.js";
import { divide } from "mathjs/number";
import type { ApiTeamStatsByVersionData } from "~/utils/types";

const props = defineProps<{
  statsByVersion: ApiTeamStatsByVersionData["statsByVersion"];
}>();

const statsByVersionList = computed(() => Object.entries(props.statsByVersion)
  .map(([gameVersion, stats]) => ({ gameVersion, ...stats }))
  .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion)));

const labels = computed(() => statsByVersionList.value.map(item => item.gameVersion));

const dataBan = computed(() => statsByVersionList.value.map(item => item.ban));
const dataPick = computed(() => statsByVersionList.value.map(item => item.pick));
const dataWin = computed(() => statsByVersionList.value.map(item => item.win));
const dataWinRate = computed(() => statsByVersionList.value.map(item => divide(item.win, item.pick)));

const data = computed<ChartData>(() => ({
  labels: labels.value,
  datasets: [
    {
      type: "line",
      label: "胜率",
      data: dataWinRate.value,
      yAxisID: "yPercent",
      borderColor: "#f2aa37c0",
      backgroundColor: "#f2aa37",
      spanGaps: true,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
    },
    {
      type: "bar",
      label: "出场数",
      data: dataPick.value,
      yAxisID: "yCount",
      borderColor: "#378df2c0",
      backgroundColor: "#378df2",
    },
    {
      type: "bar",
      label: "胜场数",
      data: dataWin.value,
      yAxisID: "yCount",
      borderColor: "#30aa69c0",
      backgroundColor: "#30aa69",
    },
    {
      type: "bar",
      label: "禁用数",
      data: dataBan.value,
      yAxisID: "yCount",
      borderColor: "#d54562c0",
      backgroundColor: "#d54562",
    },
  ],
}));

const { aspectRatio, legendPosition } = useChartOptions();

const options = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  aspectRatio: unref(aspectRatio),
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
    legend: {
      position: unref(legendPosition),
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
      title: {
        display: true,
        text: "场数",
      },
    },
    yPercent: {
      min: 0,
      max: 1,
      ticks: {
        callback: s => `${Number(s) * 100}%`,
        stepSize: 0.25,
      },
      position: "right",
      title: {
        display: true,
        text: "胜率",
      },
      grid: {
        color: ctx => ctx.tick.value === 0.5 ? "#f2aa37" : undefined,
      },
    },
  },
}));
</script>
