<template>
  <template v-if="id">
    <NuxtLinkLocale :to="`/player/${id}`">{{ nickname }}</NuxtLinkLocale>
  </template>
  <template v-else>
    {{ nickname || $t('gameInfo.unknownPlayer') }}
  </template>
</template>

<script lang="ts" setup>
defineProps<{
  id?: string;
  nickname: string;
}>();
</script>
