<template>
  <template v-if="id">
    <NuxtLinkLocale :to="`/player/${id}`">{{ nickname }}</NuxtLinkLocale>
  </template>
  <template v-else>
    {{ nickname || "未知选手" }}
  </template>
</template>

<script lang="ts" setup>
defineProps<{
  id?: string;
  nickname: string;
}>();
</script>
