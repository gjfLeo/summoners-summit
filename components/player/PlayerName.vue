<template>
  <n-text>{{ playerName }}</n-text>
</template>

<script lang="ts" setup>
import { playerById } from "~/data";

const props = defineProps<{
  player: string | number;
}>();

const playerName = computed(() => playerById[props.player]?.nickname ?? props.player);
</script>
