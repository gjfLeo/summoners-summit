<template>
  <div class="mr-2 flex justify-center">
    <CardAvatar v-for="card in characters" :key="card" :card="card" class="mr--2 h-8 w-8" />
  </div>
</template>

<script lang="ts" setup>
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: string;
}>();

const characters = computed(() => props.team.split("-") as CharacterCard[]);
</script>
