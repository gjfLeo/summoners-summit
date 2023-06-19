<template>
  <div class="grid mt items-center justify-center gap-4">
    <template v-for="game in data" :key="game.id">
      <div class="grid items-center items-center gap-0" style="grid-template-columns: 8rem 4rem 8rem;">
        <div class="text-center text-xs grid-col-1/4">{{ game.tournamentName }}</div>
        <div class="text-center text-xs grid-col-1/4">{{ game.gameName }}</div>

        <div class="text-right">{{ game.playerA }}</div>
        <div />
        <div class="text-left">{{ game.playerB }}</div>

        <NuxtLink :to="`/deck/${game.deckA}`" class="flex items-center justify-end gap-1">
          <TeamElements :team="game.teamA" />
          <TeamAvatars :team="game.teamA" />
        </NuxtLink>
        <div class="text-center">VS</div>
        <NuxtLink :to="`/deck/${game.deckB}`" class="flex items-center justify-start gap-1">
          <TeamAvatars :team="game.teamB" />
          <TeamElements :team="game.teamB" />
        </NuxtLink>

        <div class="text-right text-sm">
          <span mr-2>{{ game.startWith === "A" ? "先手" : "后手" }}</span>
          <span v-if="game.winner === 'A'" text-orange-500>胜</span>
          <span v-else text-gray-500>负</span>
        </div>
        <div />
        <div class="text-left text-sm">
          <span v-if="game.winner === 'B'" text-orange-500>胜</span>
          <span v-else text-gray-500>负</span>
          <span ml-2>{{ game.startWith === "B" ? "先手" : "后手" }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { findDeck } from "~/data";
import type { Game } from "~/utils/types";

const props = defineProps<{
  list: Game[];
}>();

const data = computed(() => props.list
  .map((game) => {
    const deckA = findDeck(game.deckA)!;
    const deckB = findDeck(game.deckB)!;
    return {
      ...game,
      teamA: getCharacterCardsInDeck(deckA).join("-"),
      teamB: getCharacterCardsInDeck(deckB).join("-"),
    };
  }),
);
</script>
