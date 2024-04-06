<script lang="ts" setup>
const props = defineProps<{
  card: CardInfo;
}>();

const wikiaFilename = computed(() => {
  switch (props.card.type) {
    case "character":
      return `${props.card.name.en} Character Card.png`;
    case "action":
      return `${props.card.name.en} ${props.card.actionType.charAt(0).toUpperCase()}${props.card.actionType.slice(1)} Card.png`;
    default:
      throw createError("Invalid card type");
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
    lazy
    preview-disabled
  />
</template>
