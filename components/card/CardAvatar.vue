<template>
  <img
    v-if="imageUrl"
    :src="imageUrl" :alt="cardName"
    class="pointer-events-none inline-block aspect-ratio-20/20"
  />
  <NAvatar v-else round />
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { ALL_CHARACTER_CARDS_INFO } from "~/utils/cards";
import { characterAvatarImages } from "~/utils/images";
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard;
}>();

const runtimeConfig = useRuntimeConfig();
const updateTime = runtimeConfig.public.updateTime;
const timestamp = dayjs(updateTime).unix();

const imageUrl = computed(() => `${characterAvatarImages[props.card]}?t=${timestamp}`);

const { locale } = useI18n();
const cardName = computed(() => locale.value === "en" ? ALL_CHARACTER_CARDS_INFO[props.card].nameEn : props.card);
</script>
