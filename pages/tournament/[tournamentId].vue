<template>
  <n-h1>{{ tournament.name }}</n-h1>
  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <n-h2>{{ stage.name }}</n-h2>

    <template v-for="(match, matchIndex) in stage.matches" :key="matchIndex">
      <n-h3 class="flex gap-2">
        {{ match.name ?? `第${matchIndex + 1}场` }}
        <div class="text-lg" :class="{ 'text-orange-500': match.winner === 'A' }">{{ match.playerA }}</div>
        <div class="text-lg">VS</div>
        <div class="text-lg" :class="{ 'text-orange-500': match.winner === 'B' }">{{ match.playerB }}</div>
      </n-h3>

      <div class="flex flex-wrap gap-12">
        <template v-for="(game, gameIndex) in match.games" :key="gameIndex">
          <GameRecord :game="normalizedGame(stageIndex, matchIndex, gameIndex)" />
        </template>
      </div>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { tournaments } from "~/data";
import type { Game } from "~/utils/types";

definePageMeta({
  validate: (route) => {
    const tid = route.params.tournamentId as keyof typeof tournaments;
    const tournament = tournaments[tid];
    if (!tournament) return false;
    return true;
  },
});

const route = useRoute();
const tournamentId = computed(() => route.params.tournamentId as keyof typeof tournaments);
const tournament = computed(() => tournaments[tournamentId.value]);

function normalizedGame(stageIndex: number, matchIndex: number, gameIndex: number): Game {
  const stage = tournament.value.stages[stageIndex];
  const match = stage.matches[matchIndex];
  const game = match.games[gameIndex];
  const matchName = match.name ?? `第${matchIndex + 1}场`;

  return {
    id: `${tournamentId.value.slice(1)}${stageIndex.toString().padStart(2, "0")}${matchIndex.toString().padStart(2, "0")}${gameIndex.toString().padStart(2, "0")}`,
    tournamentName: tournament.value.name,
    gameName: `${stage.name}${matchName}第${gameIndex + 1}局`,
    date: stage.date,
    rules: stage.rules,
    playerA: match.playerA,
    playerB: match.playerB,
    ...game,
  };
}
</script>
