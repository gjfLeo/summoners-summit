<script lang="ts" setup>
import type { CharacterCardInfo, Locales } from "~/types/data";

const props = defineProps<{
  card: CharacterCardInfo;
}>();

const { locale } = useI18n<unknown, Locales>();

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
    :alt="card.name[locale]"
    :title="card.name[locale]"
    preview-disabled
  />
</template>
