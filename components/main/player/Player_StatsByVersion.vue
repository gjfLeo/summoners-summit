<template>
  <div class="h-16rem">
    <VChart :option="option" autoresize />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { ApiGetPlayerStatsByVersionItem } from "~/types";

const props = defineProps<{
  statsByVersion: ApiGetPlayerStatsByVersionItem[];
}>();

const { statsByVersion } = toRefs(props);

const { t } = useLocales();

const data = computed(() => {
  return statsByVersion.value.map(item => ({
    ...item,
    numGamesLose: item.numGames - item.numGamesWin,
    gameWinRate: divide(item.numGamesWin, item.numGames),
    matchWinRate: divide(item.numMatchesWin, item.numMatches),
  }));
});
const themeVars = useThemeVars();

const option = computed<ECOption>(() => {
  return {
    legend: {
      top: 0,
      left: "center",
      formatter: name => t(`main.player.statsByVersion.${name}`),
      data: ["numGamesWin", "numGamesLose", "gameWinRate", "matchWinRate"],
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
        name: t("main.player.statsByVersion.axisNumGames"),
        type: "value",
        position: "left",
      },
      {
        name: t("main.player.statsByVersion.axisWinRate"),
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
        name: "gameWinRate",
        type: "line",
        yAxisIndex: 1,
        data: data.value.map(item => item.gameWinRate),
        connectNulls: true,
        triggerLineEvent: true,
        label: {
          show: true,
          position: "top",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? toPercentageString(value) : "";
          },
        },
        emphasis: { focus: "series" },
      },
      {
        name: "matchWinRate",
        type: "line",
        yAxisIndex: 1,
        data: data.value.map(item => item.matchWinRate),
        connectNulls: true,
        triggerLineEvent: true,
        label: {
          show: true,
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
</script>
