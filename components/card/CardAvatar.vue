<script lang="ts" setup>
const props = defineProps<{
  card: CharacterCardInfo;
}>();

const wikiaFilename = computed(() => {
  return `${props.card.name.en} TCG Avatar Icon.png`;
});
const src = computed(() => {
  return getImageUrl(wikiaFilename.value);
});
</script>

<template>
  <NImage
    class="aspect-[1/1]"
    :src="src"
    lazy
    preview-disabled
  />
</template>
