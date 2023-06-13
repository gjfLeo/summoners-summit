<template>
  <img :src="imageUrl" alt="card" />
</template>

<script lang="ts" setup>
import { cardImages } from "~/data";
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard | ActionCard;
}>();

const imageUrl = computed(() => cardImages[props.card]);
</script>
