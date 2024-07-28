<template>
  <NImage
    class="aspect-[1/1] w-8 rounded-full"
    :src="src"
    :alt="currentLocalized(cardInfo?.name)"
    :title="currentLocalized(cardInfo?.name)"
    preview-disabled
  />
</template>

<script lang="ts" setup>
import type { CardId } from "~/types/data";

const props = defineProps<{
  card?: CardId;
}>();

const { characterCardById } = useSharedData();
const { currentLocalized } = useLocales();

const cardInfo = computed(() => props.card ? characterCardById.value[props.card] : undefined);
const src = computed(() => cardInfo.value?.avatar);
</script>
