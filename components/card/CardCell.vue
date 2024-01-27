<template>
  <div u-flex="~ items-center justify-center" class="md:hidden">
    <NTooltip>
      <template #default>
        <span>{{ cardName }}</span>
      </template>
      <template #trigger>
        <CardImage :card="card" class="m-block--2 h-12 border-rd-2px" />
      </template>
    </NTooltip>
  </div>
  <div u-flex="items-center gap-2" class="hidden md:flex">
    <CardImage :card="card" class="m-block--2 h-12 border-rd-2px" />
    <span>{{ cardName }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ALL_ACTION_CARDS_INFO, ALL_CHARACTER_CARDS_INFO, type ActionCard, type CharacterCard } from "~/utils/cards";

const props = defineProps<{
  card: CharacterCard | ActionCard;
}>();

const { locale } = useI18n();
const cardName = computed(() =>
  locale.value === "en"
    ? ALL_CHARACTER_CARDS_INFO[props.card as CharacterCard]?.nameEn || ALL_ACTION_CARDS_INFO[props.card as ActionCard]?.nameEn
    : props.card,
);
</script>
