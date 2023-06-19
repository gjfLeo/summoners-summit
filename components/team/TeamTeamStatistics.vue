<template>
  <n-data-table
    :columns="columns"
    :data="data"
    size="small"
    max-height="50vh"
    class="m-inline-auto max-w-3xl"
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableColumn } from "naive-ui";
import { NuxtLink, TeamAvatars, TeamElements } from "#components";
import { findDeck } from "~/data";
import type { Game } from "~/utils/types";

const props = defineProps<{
  games: Game[];
}>();

const data = computed(() => {
  const map = props.games.reduce<Record<string, { total: number; win: number }>>(
    (map, game) => {
      const opponentTeam = getTeamId(findDeck(game.deckB)!);
      const data = map[opponentTeam] ?? { total: 0, win: 0 };
      data.total++;
      data.win += game.winner === "A" ? 1 : 0;
      map[opponentTeam] = data;
      return map;
    },
    {},
  );
  return Object.entries(map)
    .map(([opponentTeam, data]) => {
      return {
        key: opponentTeam,
        opponentTeam,
        ...data,
        winRate: divide(data.win, data.total),
        winDifferential: data.win - (data.total - data.win),
      };
    });
});

type RowType = typeof data.value[number];

const columns: DataTableColumn<RowType>[] = [
  {
    key: "opponentTeam",
    render: row => h(
      NuxtLink,
      {
        to: `/team/${row.opponentTeam}`,
        class: "flex flex-wrap gap-2 justify-center",
      },
      () => [
        h(TeamElements, { team: row.opponentTeam, class: "w-8 h-8" }),
        h(TeamAvatars, { team: row.opponentTeam }),
      ],
    ),
    width: "9rem",
    fixed: "left",
  },
  {
    key: "total",
    title: "总场数",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    key: "win",
    title: "胜场数",
    width: "6rem",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    key: "winRate",
    title: "胜率",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
  {
    key: "winDifferential",
    title: "净胜场",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
];

// const fields = [
//   { key: "total", label: "总场数" },
//   { key: "win", label: "胜场数" },
//   { key: "winRate", label: "胜率" },
//   { key: "winDifferential", label: "净胜场数" },
// ] as const;

// const statistics = computed<Statistics[]>(() => {
//   const map = props.games.reduce<Record<string, Pick<Statistics, "total" | "win">>>(
//     (map, game) => {
//       const opponentTeam = getTeamId(findDeck(game.deckB)!);
//       const data = map[opponentTeam] ?? { total: 0, win: 0 };
//       data.total++;
//       if (game.winner === "A") {
//         data.win++;
//       }
//       map[opponentTeam] = data;
//       return map;
//     },
//     {},
//   );
//   return Object.entries(map)
//     .map<Statistics>(([opponentTeam, data]) => {
//       return {
//         opponentTeam,
//         opponentCharacters: opponentTeam.split("-") as CharacterCard[],
//         ...data,
//         winRate: percentage(data.win, data.total),
//         winDifferential: data.win - (data.total - data.win),
//       };
//     });
// });

// const orderBy = ref<typeof fields[number]["key"]>("win");

// const statisticsOrdered = computed(() => {
//   return statistics.value.sort((a, b) => number(b[orderBy.value]) - number(a[orderBy.value]));
// });
</script>
