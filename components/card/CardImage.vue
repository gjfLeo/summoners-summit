<template>
  <img
    :src="imageUrl" :alt="cardName"
    class="inline-block aspect-ratio-200/343"
  />
</template>

<script lang="ts" setup>
import { ALL_ACTION_CARDS_INFO, ALL_CHARACTER_CARDS_INFO } from "~/utils/cards";
import { cardImages } from "~/utils/images";
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  card: CharacterCard | ActionCard;
}>();

const imageUrl = computed(() => cardImages[props.card]);

const { locale } = useI18n();
const cardName = computed(() =>
  locale.value === "en"
    ? ALL_CHARACTER_CARDS_INFO[props.card as CharacterCard]?.nameEn || ALL_ACTION_CARDS_INFO[props.card as ActionCard]?.nameEn
    : props.card,
);
</script>
