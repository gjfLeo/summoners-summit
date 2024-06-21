<script lang="ts" setup>
import type { TournamentId, TournamentDetailBrief } from "~/types/data";

defineProps<{
  tournaments: TournamentDetailBrief[];
}>();

const emit = defineEmits<{
  (e: "item-click", v: TournamentId): void;
}>();
</script>

<template>
  <div un-grid="~ md:cols-2 gap-4">
    <div v-for="tournament in tournaments" :key="tournament.id">
      <TournamentListItem :tournament="tournament" @click="emit('item-click', tournament.id)" />
    </div>
  </div>
</template>
