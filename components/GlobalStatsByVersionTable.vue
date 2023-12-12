<template>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableColumns } from "naive-ui";
import { NDataTable } from "naive-ui";
import type { ApiGlobalStatsListByVersionData } from "~/utils/types";

const props = defineProps<{
  statsList: ApiGlobalStatsListByVersionData["statsList"];
}>();

const data = computed(() => {
  const totalStats = {
    gameVersion: "全版本" as const,
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
    title: "版本",
    align: "center",
  },
  {
    key: "total",
    title: "已统计对局",
    align: "center",
  },
  {
    key: "totalWithDeck",
    title: "含牌组对局",
    align: "center",
  },
  {
    key: "starterWinRate",
    title: "先手胜率",
    render: row => toPercentageString(row.starterWinRate),
    align: "center",
  },
  {
    key: "followerWinRate",
    title: "后手胜率",
    render: row => toPercentageString(row.followerWinRate),
    align: "center",
  },
];
</script>
