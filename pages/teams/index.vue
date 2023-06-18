<template>
  <n-data-table
    size="small"
    :columns="columns" :data="teamGradeData"
    style="height: calc(100vh - 6rem);" flex-height
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableColumn } from "naive-ui";
import { NuxtLink, TeamAvatars, TeamElements } from "#components";
import { teamList as allTeamList, findGamesByTeam, gameList } from "~/data";

useHead({
  title: "阵容数据 | 召唤之颠",
});

const teamList = [...allTeamList];

const teamGradeData = teamList.map((teamId) => {
  const teamGameList = findGamesByTeam(teamId);
  const grade = {
    pick: teamGameList.length,
    win: teamGameList.filter(game => game.winner === "A").length,
    pickRate: divide(teamGameList.length, gameList.length),
    winRate: divide(teamGameList.filter(game => game.winner === "A").length, teamGameList.length),
  };
  return {
    key: teamId,
    team: teamId,
    ...grade,
  };
});

type RowType = typeof teamGradeData[number];

const columns: DataTableColumn<RowType>[] = [
  {
    title: "",
    key: "team",
    render: (row) => {
      return h(
        NuxtLink,
        {
          to: `/team/${row.team}`,
          class: "flex gap-2",
        },
        () => [
          h(TeamElements, { team: row.team, class: "h-8" }),
          h(TeamAvatars, { team: row.team }),
        ],
      );
    },
  },
  {
    title: "登场数",
    key: "pick",
    align: "center",
    sorter: "default",
  },
  {
    title: "登场率",
    key: "pickRate",
    align: "center",
    render: row => toPercentageString(row.pickRate),
    sorter: "default",
  },
  {
    title: "胜场数",
    key: "win",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: "胜率",
    key: "winRate",
    align: "center",
    render: row => toPercentageString(row.winRate),
    sorter: "default",
  },
];
</script>
