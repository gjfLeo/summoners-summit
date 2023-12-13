<template>
  <img
    v-if="imageUrl"
    :src="imageUrl" :alt="card"
    class="inline-block aspect-ratio-20/20"
  />
  <NAvatar v-else round />
</template>

<script lang="ts" setup>
import { characterAvatarImages } from "~/utils/images";
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard;
}>();

const imageUrl = computed(() => characterAvatarImages[props.card]);
</script>
