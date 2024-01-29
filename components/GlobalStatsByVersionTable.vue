<template>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableColumns } from "naive-ui";
import type { ApiGlobalStatsListByVersionData } from "~/utils/types";

const props = defineProps<{
  statsList: ApiGlobalStatsListByVersionData["statsList"];
}>();

const { t } = useI18n();

const data = computed(() => {
  const totalStats = {
    gameVersion: t("common.gameVersionAll"),
    total: 0,
    totalWithDeck: 0,
    totalWithStarter: 0,
    starterWin: 0,
  };
  props.statsList.forEach((stats) => {
    totalStats.total += stats.total;
    totalStats.totalWithDeck += stats.totalWithDeck;
    totalStats.totalWithStarter += stats.totalWithStarter;
    totalStats.starterWin += stats.starterWin;
  });
  return [totalStats, ...props.statsList].map(stats => ({
    key: stats.gameVersion,
    ...stats,
    starterWinRate: divide(stats.starterWin, stats.totalWithStarter),
    followerWinRate: divide(stats.totalWithStarter - stats.starterWin, stats.totalWithStarter),
  }));
});

const columns: DataTableColumns<typeof data["value"][number]> = [
  {
    key: "gameVersion",
    title: t("common.gameVersion"),
    align: "center",
  },
  {
    key: "total",
    title: t("stats.numGames"),
    align: "center",
  },
  {
    key: "totalWithDeck",
    title: t("stats.numGamesWithDeck"),
    align: "center",
  },
  {
    key: "starterWinRate",
    title: t("stats.starterWinRate"),
    render: row => toPercentageString(row.starterWinRate),
    align: "center",
  },
  {
    key: "followerWinRate",
    title: t("stats.followerWinRate"),
    render: row => toPercentageString(row.followerWinRate),
    align: "center",
  },
];
</script>
