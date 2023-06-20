<template>
  <div class="mr-2 flex justify-center">
    <CardAvatar v-for="card in characters" :key="card" :card="card" class="mr--2" :style="{ height: `${size / 4}rem` }" />
  </div>
</template>

<script lang="ts" setup>
import type { CharacterCard } from "~/utils/types";

const props = withDefaults(
  defineProps<{
    team: string;
    size?: number;
  }>(),
  {
    size: 8,
  },
);

const characters = computed(() => props.team.split("-") as CharacterCard[]);
</script>
