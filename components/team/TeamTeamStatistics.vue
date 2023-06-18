<template>
  <div class="grid items-center justify-start justify-items-center grid-cols-5-auto col-gap-2 row-gap-1">
    <div />
    <button v-for="field in fields" :key="field.key" @click="orderBy = field.key">
      {{ field.label }}
    </button>

    <TransitionGroup>
      <template v-for="row in statisticsOrdered" :key="row.opponentTeam">
        <NuxtLink :to="`/team/${row.opponentTeam}`" flex gap-1>
          <CardAvatar v-for="card in row.opponentCharacters" :key="card" :card="card" w-8 />
        </NuxtLink>
        <div>{{ row.total }}</div>
        <div>{{ row.win }}</div>
        <div>{{ row.winRate }}%</div>
        <div>{{ row.winDifferential }}</div>
      </template>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { number } from "mathjs/number";
import { findDeck } from "~/data";
import type { CharacterCard, Game } from "~/utils/types";

const props = defineProps<{
  games: Game[];
}>();

interface Statistics {
  opponentTeam: string;
  opponentCharacters: CharacterCard[];
  total: number;
  win: number;
  winRate: string;
  winDifferential: number;
}

const fields = [
  { key: "total", label: "总场数" },
  { key: "win", label: "胜场数" },
  { key: "winRate", label: "胜率" },
  { key: "winDifferential", label: "净胜场数" },
] as const;

const statistics = computed<Statistics[]>(() => {
  const map = props.games.reduce<Record<string, Pick<Statistics, "total" | "win">>>(
    (map, game) => {
      const opponentTeam = getTeamId(findDeck(game.deckB)!);
      const data = map[opponentTeam] ?? { total: 0, win: 0 };
      data.total++;
      if (game.winner === "A") {
        data.win++;
      }
      map[opponentTeam] = data;
      return map;
    },
    {},
  );
  return Object.entries(map)
    .map<Statistics>(([opponentTeam, data]) => {
      return {
        opponentTeam,
        opponentCharacters: opponentTeam.split("-") as CharacterCard[],
        ...data,
        winRate: percentage(data.win, data.total),
        winDifferential: data.win - (data.total - data.win),
      };
    });
});

const orderBy = ref<typeof fields[number]["key"]>("win");

const statisticsOrdered = computed(() => {
  return statistics.value.sort((a, b) => number(b[orderBy.value]) - number(a[orderBy.value]));
});
</script>
