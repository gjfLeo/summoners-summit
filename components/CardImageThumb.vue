<template>
  <!-- <img :src="imageUrl" alt="card" w-20 /> -->
  <div :style="{ 'background-image': `url(${imageUrl})` }" inline-block h-10 w-20 border-rd />
</template>

<script lang="ts" setup>
import { cardImages } from "~/data";
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard | ActionCard;
}>();

const imageUrl = computed(() => cardImages[props.card]);
</script>

  <style scoped>
  div {
    background-size: 101%;
    background-position-x: 50%;
    background-position-y: 30%;
  }
  </style>
