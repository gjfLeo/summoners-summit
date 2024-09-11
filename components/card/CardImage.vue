<template>
  <div
    class="aspect-[7/12]"
  >
    <NTooltip placement="bottom" overlap :show-arrow="false">
      <template #trigger>
        <NImage
          :src="src"
          :alt="cardInfo.name[locale]"
          preview-disabled
        />
      </template>
      <template #default>
        <div class="text-sm">{{ cardInfo.name[locale] }}</div>
      </template>
    </NTooltip>
  </div>
</template>

<script lang="ts" setup>
import type { CardId, CardInfo } from "~/types/data";

const props = defineProps<{
  card: CardId;
}>();

const { characterCardById, actionCardById } = useSharedData();
const { locale } = useLocales();

const cardInfo = computed<CardInfo>(() => {
  return characterCardById.value[props.card] ?? actionCardById.value[props.card];
});

const src = computed(() => cardInfo.value.image);
</script>
