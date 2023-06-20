<template>
  <div class="grid mt items-center justify-center justify-items-center row-gap-4 lg:grid-cols-3 md:grid-cols-2">
    <template v-for="game in list" :key="game.id">
      <GameRecord :game="game" show-name />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Game } from "~/utils/types";

defineProps<{
  list: Game[];
}>();
</script>
