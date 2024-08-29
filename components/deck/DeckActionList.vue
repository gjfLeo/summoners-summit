<template>
  <div un-grid="~ md:cols-15 sm:cols-10 cols-6 gap-2">
    <CardImage
      v-for="(card, index) in cards"
      :key="card + (cards[index - 1] === card ? '-2' : '')"
      :card="card"
    />
  </div>
</template>

<script lang="ts" setup>
import type { CardId } from "~/types";

defineProps<{
  cards: CardId[];
}>();
</script>
