<template>
  <div class="flex justify-center" :style="{ marginRight: `${-gap / 4}rem` }">
    <CardAvatar
      v-for="card in characters" :key="card"
      :card="card"
      class="border border-light-900 rd-50%"
      :style="{ 'height': `${size / 4}rem`, 'margin-right': `${gap / 4}rem` }"
    />
  </div>
</template>

<script lang="ts" setup>
import type { CharacterCard } from "~/utils/types";

const props = withDefaults(
  defineProps<{
    team: string;
    size?: number;
    gap?: number;
  }>(),
  {
    size: 8,
    gap: -2,
  },
);

const characters = computed(() => props.team.split("-") as CharacterCard[]);
</script>
