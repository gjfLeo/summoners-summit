<template>
  <n-data-table
    size="small"
    :columns="columns"
    :data="data"
    max-height="calc(100vh - 13rem)"
  />
</template>

<script lang="ts" setup>
import { type DataTableColumn, NTooltip } from "naive-ui";
import { NuxtLink, TeamAvatars, TeamElements } from "#components";

useHead({ title: "阵容 | 召唤之巅" });

const { games } = useGameList();
const { teamStatistics } = useTeamStatistics(games);

const data = computed(() => Object.values(teamStatistics.value).map(statistics => ({ key: statistics.teamId, ...statistics })));

function winRateRender(win: number, total: number, winRate: number) {
  return h(
    NTooltip,
    {
      trigger: "hover",
      placement: "right",
    },
    {
      trigger: () => h("span", toPercentageString(winRate)),
      default: () => h("span", `${win} / ${total}`),
    });
}

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "element",
    width: "3rem",
    align: "center",
    render: row => h(TeamElements, { team: row.teamId }),
  },
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: row => h(NuxtLink, { to: `/team/${row.teamId}` }, () => h(TeamAvatars, { team: row.teamId })),
  },
  {
    title: "场数",
    key: "total",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: 5,
    filter: (value, row) => row.total >= Number(value),
  },
  {
    title: "胜率",
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.win, row.total, row.winRate),
  },
  {
    title: "胜场数",
    key: "win",
    width: "6rem",
    align: "center",
    defaultSortOrder: "descend",
    sorter: "default",
  },
  {
    title: "净胜",
    key: "winDiff",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: "先手胜率",
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.starterWin, row.starterTotal, row.starterWinRate),
  },
  {
    title: "后手胜率",
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.followerWin, row.followerTotal, row.followerWinRate),
  },
];
</script>
