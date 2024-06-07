<script lang="ts" setup>
import type { CardId, CardInfo } from "~/types/data";

const props = defineProps<{
  card: CardId;
}>();

const { characterCardById, actionCardById } = useSharedData();
const { t, locale } = useLocales();

const cardInfo = computed<CardInfo>(() => {
  return characterCardById.value[props.card] ?? actionCardById.value[props.card];
});

const wikiaFilename = computed(() => {
  switch (cardInfo.value.type) {
    case "character":
      return `${cardInfo.value.name.en} Character Card.png`;
    case "action":
      return `${cardInfo.value.name.en} ${cardInfo.value.actionType.charAt(0).toUpperCase()}${cardInfo.value.actionType.slice(1)} Card.png`;
    default:
      throw createError(t("main.card.invalidCardType"));
  }
});
const src = computed(() => {
  return getImageUrl(wikiaFilename.value);
});
</script>

<template>
  <NImage
    class="aspect-[7/12]"
    :src="src"
    :alt="cardInfo.name[locale]"
    :title="cardInfo.name[locale]"
    preview-disabled
  />
</template>
