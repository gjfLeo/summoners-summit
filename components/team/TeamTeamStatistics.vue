<template>
  <n-data-table
    :columns="columns"
    :data="data"
    size="small"
    max-height="50vh"
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { type DataTableColumn, NText, NTooltip } from "naive-ui";
import { NuxtLink, TeamAvatars, TeamElements } from "#components";
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

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

const { teamId } = useTeam(props);
const { games } = useGameList({ teamId });

const data = computed(() => {
  const map = games.value.reduce<Record<string, TeamStatRaw>>(
    (map, game) => {
      const opponentTeam = getTeamId(game.playerBCharacters);
      const stat: TeamStatRaw = map[opponentTeam] ?? { total: 0, win: 0, starterTotal: 0, starterWin: 0 };
      stat.total++;
      stat.win += game.winner === "A" ? 1 : 0;
      stat.starterTotal += game.starter === "A" ? 1 : 0;
      stat.starterWin += (game.starter === "A" && game.winner === "A") ? 1 : 0;
      map[opponentTeam] = stat;
      return map;
    },
    {},
  );
  return Object.entries(map)
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
    render: row => h(NuxtLink, { to: `/team/${row.teamId}`, prefetch: false }, () => h(TeamAvatars, { team: row.teamId })),
  },
  {
    title: "场数",
    key: "total",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: 2,
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
  {
    key: "links",
    width: "3rem",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          NuxtLink,
          { to: `/team/${teamId.value}/vs/${row.teamId}`, prefetch: false },
          () => h(
            NText,
            { depth: 3 },
            () => h("div", { class: "i-carbon:view" }),
          ),
        ),
        default: () => h("span", "查看对局记录"),
      },
    ),
  },
];
</script>
