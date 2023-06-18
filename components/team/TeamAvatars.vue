<template>
  <div class="flex gap-1">
    <CardAvatar v-for="card in characters" :key="card" :card="card" class="w-8" />
  </div>
</template>

<script lang="ts" setup>
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: string;
}>();

const characters = computed(() => props.team.split("-") as CharacterCard[]);
</script>
