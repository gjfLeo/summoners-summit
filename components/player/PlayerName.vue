<template>
  <template v-if="id">
    <NuxtLink :to="`/player/${id}`">{{ nickname }}</NuxtLink>
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
