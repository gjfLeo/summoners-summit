<template>
  <div class="h-16rem">
    <VChart :option="option" autoresize @mouseover="handleMouseover" @mouseout="handleMouseout" />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { ECElementEvent } from "echarts/core";

const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;

const { t } = useLocales();

const { statsByVersion } = await useApiGetTeamStatsByVersion({ teamId });

const data = computed(() => {
  return statsByVersion.value.map(item => ({
    ...item,
    numGamesLose: item.numGames - item.numGamesWin,
    winRate: divide(item.numGamesWin, item.numGames),
  }));
});
const themeVars = useThemeVars();

// const showLineLabel = ref(false);

const option = computed<ECOption>(() => {
  return {
    legend: {
      top: 0,
      left: "center",
      formatter: name => t(`main.team.statsByVersion.${name}`),
      data: ["numGamesWin", "numGamesLose", "numBanned", "winRate"],
    },
    grid: {
      top: remToPx(3),
      left: remToPx(0),
      right: remToPx(0),
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data.value.map(item => item.gameVersion),
      min: "dataMin",
    },
    yAxis: [
      {
        name: t("main.team.statsByVersion.axisNumGames"),
        type: "value",
        position: "left",
      },
      {
        name: t("main.team.statsByVersion.axisWinRate"),
        type: "value",
        position: "right",
        min: 0,
        max: 1,
        axisLabel: {
          formatter: (value: number) => toPercentageValue(value).toString(),
        },
        minInterval: 1,
      },
    ],
    series: [
      {
        name: "numGamesWin",
        type: "bar",
        stack: "numGames",
        data: data.value.map(item => item.numGamesWin),
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
        animationDuration: 800,
        animationDelay: i => i * 1000 / 8,
      },
      {
        name: "numGamesLose",
        type: "bar",
        data: data.value.map(item => item.numGamesLose),
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
        animationDelay: i => i * 1000 / 8 + 500,
        animationDuration: 500,
      },
      {
        name: "numBanned",
        type: "bar",
        data: data.value.map(item => item.numBanned),
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
        animationDelay: i => i * 1000 / 8,
      },
      {
        name: "winRate",
        type: "line",
        yAxisIndex: 1,
        data: data.value.map(item => item.winRate),
        connectNulls: true,
        triggerLineEvent: true,
        label: {
          show: true,
          // show: showLineLabel.value,
          position: "top",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? toPercentageString(value) : "";
          },
        },
        emphasis: { focus: "series" },
      },
    ],
  } satisfies ECOption;
});

function handleMouseover(params: ECElementEvent) {
  // console.log(params);
  if (params.componentType === "series") {
    if (params.seriesName === "winRate") {
      // setTimeout(() => showLineLabel.value = true, 500);
    }
  }
}
function handleMouseout(params: ECElementEvent) {
  // console.log(params);
  if (params.componentType === "series") {
    if (params.seriesName === "winRate") {
      // setTimeout(() => showLineLabel.value = false, 500);
    }
  }
}
</script>
