<template>
  <n-data-table :columns="columns" :data="teamGradeData" style="height: calc(100vh - 6rem);" flex-height />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableColumn } from "naive-ui";
import { CharacterAvatar, NuxtLink } from "#components";
import { teamList as allTeamList, findGamesByTeam, gameList } from "~/data";
import type { CharacterCard } from "~/utils/types";

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
          class: "flex gap-1",
        },
        () => (row.team.split("-") as CharacterCard[])
          .map(card => h(CharacterAvatar, { card, class: "w-8" })),
      );
    },
  },
  {
    title: "登场数",
    key: "pick",
    sorter:
   "default",
  },
  {
    title: "登场率",
    key: "pickRate",
    sorter: "default",
    render: row => toPercentageString(row.pickRate),
  },
  {
    title: "胜场数",
    key: "win",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: "胜率",
    key: "winRate",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
];
</script>
