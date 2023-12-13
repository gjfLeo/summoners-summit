<template>
  <NScrollbar x-scrollable>
    <div class="min-w-800px flex justify-center">
      <Chart
        id="team-stats-by-version"
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
import { darkTheme, lightTheme } from "naive-ui";
import type { ApiTeamStatsByVersionData } from "~/utils/types";

const props = defineProps<{
  statsByVersion: ApiTeamStatsByVersionData["statsByVersion"];
}>();

const labels = computed(() => props.statsByVersion.map(item => item.gameVersion));

const dataBan = computed(() => props.statsByVersion.map(item => item.ban));
const dataPick = computed(() => props.statsByVersion.map(item => item.pick));
const dataWin = computed(() => props.statsByVersion.map(item => item.win));
const dataWinRate = computed(() => props.statsByVersion.map(item => divide(item.win, item.pick)));

const isDark = useDark();
const theme = computed(() => isDark.value ? darkTheme : lightTheme);

const data = computed<ChartData>(() => ({
  labels: labels.value,
  datasets: [
    {
      type: "line",
      label: "胜率",
      data: dataWinRate.value,
      yAxisID: "yPercent",
      borderColor: theme.value.common.warningColorHover,
      backgroundColor: theme.value.common.warningColor,
      segment: {
        borderDash: ctx => ctx.p0.skip || ctx.p1.skip ? [4, 4] : undefined,
        borderWidth: ctx => ctx.p0.skip || ctx.p1.skip ? 2 : undefined,
      },
      datalabels: {
        formatter: v => Math.round(v * 100),
        anchor: "center",
        align: "end",
      },
    },
    {
      type: "bar",
      label: "出场数",
      data: dataPick.value,
      yAxisID: "yCount",
      backgroundColor: theme.value.common.infoColor,
      datalabels: {
        anchor: "start",
        align: "end",
        formatter: v => v > 0 ? v : "",
      },
    },
    {
      type: "bar",
      label: "胜场数",
      data: dataWin.value,
      yAxisID: "yCount",
      backgroundColor: theme.value.common.successColor,
      datalabels: {
        anchor: "start",
        align: "end",
        formatter: v => v > 0 ? v : "",
      },
    },
    {
      type: "bar",
      label: "禁用数",
      data: dataBan.value,
      yAxisID: "yCount",
      backgroundColor: theme.value.common.errorColor,
      datalabels: {
        anchor: "start",
        align: "end",
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
      title: {
        display: true,
        text: "场数",
      },
      min: 0,
      ticks: {
        stepSize: 10,
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
