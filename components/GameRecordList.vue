<template>
  <div grid mt items-center justify-start gap-4 grid-cols-3-auto>
    <template v-for="game in list" :key="game.id">
      <!-- 选手A -->
      <div class="flex flex-col items-end">
        <NuxtLink :to="`/deck/${game.deckA}`" class="flex items-center justify-end gap-1">
          <div>{{ game.playerA }}</div>
          <template v-for="character in getCharacterCardsInDeck(findDeck(game.deckA)!)" :key="character">
            <CardAvatar :card="character" w-8 />
          </template>
        </NuxtLink>
        <div mr-1 mt-1 text-sm>
          <span mr-2>{{ game.startWith === "A" ? "先手" : "后手" }}</span>
          <span v-if="game.winner === 'A'" text-orange-500>胜</span>
          <span v-else text-gray-500>负</span>
        </div>
      </div>
      <div>VS</div>
      <!-- 选手B -->
      <div class="flex flex-col items-start">
        <NuxtLink :to="`/deck/${game.deckB}`" class="flex items-center justify-start gap-1">
          <template v-for="character in getCharacterCardsInDeck(findDeck(game.deckB)!)" :key="character">
            <CardAvatar :card="character" w-8 />
          </template>
          <div>{{ game.playerB }}</div>
        </NuxtLink>
        <div ml-1 mt-1 text-sm>
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

defineProps<{
  list: Game[];
}>();
</script>
