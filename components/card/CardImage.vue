<script lang="ts" setup>
const props = defineProps<{
  card: CardInfo;
}>();

const { t, locale } = useI18n<unknown, Locales>();

const wikiaFilename = computed(() => {
  switch (props.card.type) {
    case "character":
      return `${props.card.name.en} Character Card.png`;
    case "action":
      return `${props.card.name.en} ${props.card.actionType.charAt(0).toUpperCase()}${props.card.actionType.slice(1)} Card.png`;
    default:
      throw createError(t("invalidCardType"));
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
    :alt="card.name[locale]"
    :title="card.name[locale]"
    preview-disabled
  />
</template>

<i18n lang="yaml">
zh:
  invalidCardType: 无效的卡牌类型
en:
  invalidCardType: Invalid card type
</i18n>
