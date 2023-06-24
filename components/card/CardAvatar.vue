<template>
  <img
    :src="imageUrl" :alt="card"
    class="inline-block aspect-ratio-20/20"
  />
</template>

<script lang="ts" setup>
import { characterAvatarImages } from "~/data";
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard;
}>();

const imageUrl = computed(() => characterAvatarImages[props.card]);
</script>
