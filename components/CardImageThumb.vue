<template>
  <!-- <img :src="imageUrl" alt="card" w-20 /> -->
  <div :style="{ 'background-image': `url(${imageUrl})`, 'background-position-y': backgroundPositionY }" inline-block h-10 w-20 border-rd />
</template>

<script lang="ts" setup>
import { cardImages, cardThumbPositionY } from "~/data";
import type { ActionCard } from "~/utils/types";

const props = defineProps<{
  card: ActionCard;
}>();

const imageUrl = computed(() => cardImages[props.card]);
const backgroundPositionY = computed(() => `${cardThumbPositionY[props.card]}%`);
</script>

<style scoped>
  div {
    background-size: 110%;
    background-position-x: 50%;
    background-position-y: 30%;
  }
</style>
