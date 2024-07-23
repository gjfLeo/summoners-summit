<template>
  <NImage
    class="aspect-[7/12]"
    :src="src"
    :alt="cardInfo.name[locale]"
    :title="cardInfo.name[locale]"
    preview-disabled
  />
</template>

<script lang="ts" setup>
import type { CardId, CardInfo } from "~/types/data";

const props = defineProps<{
  card: CardId;
}>();

const { characterCardById, actionCardById, getCardImage } = useSharedData();
const { locale } = useLocales();

const cardInfo = computed<CardInfo>(() => {
  return characterCardById.value[props.card] ?? actionCardById.value[props.card];
});

const src = computed(() => props.card ? getCardImage(props.card) : undefined);
</script>
