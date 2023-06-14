<template>
  <img :src="imageUrl" alt="card" inline-block />
</template>

<script lang="ts" setup>
import { characterAvatarImages } from "~/data";
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard;
}>();

const imageUrl = computed(() => characterAvatarImages[props.card]);
</script>
