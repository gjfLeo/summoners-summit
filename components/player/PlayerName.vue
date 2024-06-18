<script lang="ts" setup>
defineProps<{
  id?: string;
  nickname: string;
}>();

const { t } = useLocales();
</script>

<template>
  <template v-if="id && false">
    <NuxtLinkLocale :to="`/player/${id}`" no-prefetch>{{ nickname }}</NuxtLinkLocale>
  </template>
  <template v-else>
    {{ nickname || t('main.player.unknownPlayer') }}
  </template>
</template>
