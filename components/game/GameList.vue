<template>
  <div
    un-grid="~ justify-center gap-4 cols-[repeat(auto-fill,20rem)]"
  >
    <template v-for="game in games" :key="`${game.id}-${game.winner}`">
      <GameListItem :game="game" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { GameDetail } from "~/types";

defineProps<{
  games: GameDetail[];
}>();
</script>
