<template>
  <div class="p-8 text-center">
    首页还没做，点击上方导航栏跳转~
  </div>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableColumns } from "naive-ui";
import { NDataTable } from "naive-ui";

const { stats } = await useApiGlobalStats();

const data = Object.entries(stats).map(([gameVersion, stats]) => {
  return {
    key: gameVersion,
    gameVersion,
    ...stats,
  };
}).sort((v1, v2) => {
  if (v1.gameVersion === "") return -1;
  if (v2.gameVersion === "") return 1;
  return v2.gameVersion.localeCompare(v1.gameVersion);
});

const columns: DataTableColumns<typeof data[number]> = [
  {
    key: "gameVersion",
    title: "版本",
    render: row => gameVersionList.find(version => version.value === row.gameVersion)?.name,
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
    render: row => toPercentageString(divide(row.starterWin, row.total)),
    align: "center",
  },
  {
    key: "followerWinRate",
    title: "后手胜率",
    render: row => toPercentageString(divide(row.total - row.starterWin, row.total)),
    align: "center",
  },
];
</script>
