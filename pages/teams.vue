<template>
  <n-data-table
    size="small"
    :columns="columns"
    :data="teamStats"
    max-height="calc(100vh - 11rem)"
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { type DataTableColumn, NTooltip } from "naive-ui";
import { NuxtLink, TeamAvatars, TeamElements } from "#components";
import { gameList } from "~/data";

useHead({ title: "阵容 | 召唤之颠" });

interface TeamStatRaw {
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
}
interface TeamStatResult extends TeamStatRaw {
  key: string;
  teamId: string;
  followerTotal: number;
  followerWin: number;
  winRate: number;
  starterWinRate: number;
  followerWinRate: number;
  winDiff: number;
}

const teamStats = computed<TeamStatResult[]>(() => {
  const teamStatsRaw: Record<string, TeamStatRaw> = {};
  gameList.forEach((game) => {
    function updateStat(teamId: string, team: "A" | "B") {
      const stat = teamStatsRaw[teamId] ?? { total: 0, win: 0, starterTotal: 0, starterWin: 0 };
      stat.total++;
      stat.win += game.winner === team ? 1 : 0;
      stat.starterTotal += game.starter === team ? 1 : 0;
      stat.starterWin += (game.starter === team && game.winner === team) ? 1 : 0;
      teamStatsRaw[teamId] = stat;
    }
    updateStat(getTeamId(game.playerACharacters), "A");
    updateStat(getTeamId(game.playerBCharacters), "B");
  });
  return Object.entries(teamStatsRaw)
    .map(([teamId, statRaw]) => {
      const followerTotal = statRaw.total - statRaw.starterTotal;
      const followerWin = statRaw.win - statRaw.starterWin;
      return {
        key: teamId,
        teamId,
        ...statRaw,
        followerTotal,
        followerWin,
        winRate: divide(statRaw.win, statRaw.total),
        starterWinRate: divide(statRaw.starterWin, statRaw.starterTotal),
        followerWinRate: divide(followerWin, followerTotal),
        winDiff: statRaw.win - (statRaw.total - statRaw.win),
      };
    });
});

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

const columns: DataTableColumn<TeamStatResult>[] = [
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
    defaultSortOrder: "descend",
    filterMultiple: false,
    filterOptions: [2, 3, 5].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: 3,
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
