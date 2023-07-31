<template>
  <NuxtLink :to="`/player/${player}`" no-prefetch>
    <n-text>{{ playerName }}</n-text>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { playerById } from "~/data";

const props = defineProps<{
  player: string | number;
}>();

const playerName = computed(() => playerById[props.player]?.nickname ?? props.player);
</script>
