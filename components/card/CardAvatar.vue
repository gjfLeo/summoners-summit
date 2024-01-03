<template>
  <img
    v-if="imageUrl"
    :src="imageUrl" :alt="card"
    class="pointer-events-none inline-block aspect-ratio-20/20"
  />
  <NAvatar v-else round />
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { characterAvatarImages } from "~/utils/images";
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard;
}>();

const runtimeConfig = useRuntimeConfig();
const updateTime = runtimeConfig.public.updateTime;
const timestamp = dayjs(updateTime).unix();

const imageUrl = computed(() => `${characterAvatarImages[props.card]}?t=${timestamp}`);
</script>
