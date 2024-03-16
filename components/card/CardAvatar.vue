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
import { getCharacterCardInfo } from "~/utils/cards";
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
const cardName = computed(() => {
  const cardInfo = getCharacterCardInfo(props.card);
  return locale.value === "en" ? cardInfo.nameEn : props.card;
});
</script>
