<template>
  <template v-if="nickname">
    <NuxtLink :to="`/player/${id}`">{{ nickname }}</NuxtLink>
  </template>
  <template v-else>
    未知选手
  </template>
</template>

<script lang="ts" setup>
defineProps<{
  id: string;
  nickname: string;
}>();
</script>
