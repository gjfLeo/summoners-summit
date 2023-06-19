<template>
  <n-data-table
    size="small"
    :columns="columns"
    :data="teamUsageData"
    max-height="60vh"
  />
</template>

<script lang="ts" setup>
import { divide, subtract } from "mathjs/number";
import type { DataTableColumn } from "naive-ui";
import { NuxtLink, TeamAvatars, TeamElements } from "#components";
import { teamList as allTeamList, findGamesByTeam, gameList } from "~/data";

useHead({
  title: "阵容数据 | 召唤之颠",
});

const teamList = [...allTeamList];

const teamUsageData = teamList.map((teamId) => {
  const teamGameList = findGamesByTeam(teamId);
  const pick = teamGameList.length;
  const win = teamGameList.filter(game => game.winner === "A").length;
  const grade = {
    pick,
    win,
    pickRate: divide(teamGameList.length, gameList.length),
    winRate: divide(teamGameList.filter(game => game.winner === "A").length, teamGameList.length),
    winDifferential: subtract(win, subtract(pick, win)),
  };
  return {
    key: teamId,
    team: teamId,
    ...grade,
  };
});

type RowType = typeof teamUsageData[number];

const columns: DataTableColumn<RowType>[] = [
  {
    title: "",
    key: "team",
    width: "9rem",
    fixed: "left",
    render: (row) => {
      return h(
        NuxtLink,
        {
          to: `/team/${row.team}`,
          class: "flex flex-wrap gap-2 justify-center",
        },
        () => [
          h(TeamElements, { team: row.team, class: "w-8 h-8" }),
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
    width: "6rem",
  },
  {
    title: "登场率",
    key: "pickRate",
    align: "center",
    render: row => toPercentageString(row.pickRate),
    sorter: "default",
    width: "6rem",
  },
  {
    title: "胜场数",
    key: "win",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
    width: "6rem",
  },
  {
    title: "胜率",
    key: "winRate",
    align: "center",
    render: row => toPercentageString(row.winRate),
    sorter: "default",
    width: "6rem",
  },
  {
    title: "净胜场",
    key: "winDifferential",
    align: "center",
    sorter: "default",
    width: "6rem",
  },
];
</script>
