<template>
  <n-h1>{{ tournament.name }}</n-h1>
  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <n-h2>{{ stage.name }}</n-h2>

    <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
      <n-h3>{{ part.name }}</n-h3>

      <template v-for="(match, matchIndex) in part.matches" :key="matchIndex">
        <n-h4 class="flex gap-2">
          <div v-if="match.name">{{ match.name }}</div>
          <div class="text-base" :class="{ 'text-orange-500': match.winner === 'A' }">{{ match.playerA }}</div>
          <div class="text-base">VS</div>
          <div class="text-base" :class="{ 'text-orange-500': match.winner === 'B' }">{{ match.playerB }}</div>
        </n-h4>

        <div class="grid justify-items-center row-gap-4 lg:grid-cols-3 md:grid-cols-2">
          <template v-for="(game, gameIndex) in match.games" :key="gameIndex">
            <GameRecord :game="gameById[game.id]" />
          </template>
        </div>
      </template>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { gameById, tournamentById } from "~/data";

definePageMeta({
  validate: (route) => {
    const tid = route.params.tournamentId as keyof typeof tournamentById;
    const tournament = tournamentById[tid];
    if (!tournament) return false;
    return true;
  },
});

const route = useRoute();
const tournamentId = computed(() => route.params.tournamentId as keyof typeof tournamentById);
const tournament = computed(() => tournamentById[tournamentId.value]);
</script>
