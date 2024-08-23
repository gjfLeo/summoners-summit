<template>
  <template v-if="id || link === false">
    <NuxtLinkLocale :to="`/player/${id}`" no-prefetch>{{ nickname }}</NuxtLinkLocale>
  </template>
  <template v-else>
    {{ nickname || t('main.player.unknownPlayer') }}
  </template>
</template>

<script lang="ts" setup>
defineProps<{
  id?: string;
  nickname: string;
  link?: boolean;
}>();

const { t } = useLocales();
</script>
