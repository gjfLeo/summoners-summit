<template>
  <template v-if="id && link">
    <NuxtLinkLocale :to="`/player/${id}`" no-prefetch>{{ nickname }}</NuxtLinkLocale>
  </template>
  <template v-else>
    {{ nickname || t('main.player.unknownPlayer') }}
  </template>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    id?: string;
    nickname: string;
    link?: boolean;
  }>(),
  {
    link: true,
  },
);

const { t } = useLocales();
</script>
