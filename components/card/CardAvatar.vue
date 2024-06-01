<script lang="ts" setup>
import type { CardId, Locales } from "~/types/data";

const props = defineProps<{
  card?: CardId;
}>();

const { characterCardById } = useSharedData();
const { locale } = useI18n<unknown, Locales>();

const cardInfo = computed(() => {
  return props.card ? characterCardById.value[props.card] : undefined;
});

const src = computed(() => {
  const cardInfoValue = unref(cardInfo);
  if (!cardInfoValue) {
    return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMmYyZjJGRiI+PC9yZWN0PgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI2cHgiIGZpbGw9IiMzMzMzMzMiPiA8L3RleHQ+ICAgCjwvc3ZnPg==";
  }
  return getImageUrl(`${cardInfoValue.name.en} TCG Avatar Icon.png`);
});
</script>

<template>
  <NImage
    class="aspect-[1/1] w-8 rounded-full"
    :src="src"
    :alt="cardInfo?.name[locale]"
    :title="cardInfo?.name[locale]"
    preview-disabled
  />
</template>
