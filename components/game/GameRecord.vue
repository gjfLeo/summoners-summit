<template>
  <div class="grid items-center gap-0" style="grid-template-columns: 8rem 4rem 8rem;">
    <template v-if="showName">
      <div class="text-center text-xs grid-col-1/4">{{ game.tournamentName }}</div>
      <div class="flex justify-center gap-1 text-xs grid-col-1/4">
        <div>{{ game.stageName }}</div>
        <div>{{ game.partName }}</div>
        <div>{{ game.matchName }}{{ game.gameName }}</div>
      </div>
    </template>

    <div class="text-right">{{ game.playerA }}</div>
    <div />
    <div class="text-left">{{ game.playerB }}</div>

    <NuxtLink :to="`/deck/${game.deckA}`" class="flex items-center justify-end gap-1">
      <TeamElements :team="teamA" />
      <TeamAvatars :team="teamA" />
    </NuxtLink>
    <div class="text-center">VS</div>
    <NuxtLink :to="`/deck/${game.deckB}`" class="flex items-center justify-start gap-1">
      <TeamAvatars :team="teamB" />
      <TeamElements :team="teamB" />
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

<script lang="ts" setup>
import { findDeck } from "~/data";
import type { Game } from "~/utils/types";

const props = withDefaults(
  defineProps<{
    showName?: boolean;
    game: Game;
  }>(),
  {
    showName: false,
  },
);

const teamA = computed(() => getCharacterCardsInDeck(findDeck(props.game.deckA)!).join("-"));
const teamB = computed(() => getCharacterCardsInDeck(findDeck(props.game.deckB)!).join("-"));
</script>
