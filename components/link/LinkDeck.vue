<template>
  <NTooltip v-if="deckId">
    <template #trigger>
      <NuxtLink :to="`/deck/${deckId}`" no-prefetch><div class="icon opacity-75" /></NuxtLink>
    </template>
    <span>查看套牌</span>
  </NTooltip>
</template>

<script lang="ts" setup>
defineProps<{
  deckId: string;
}>();
</script>

<style scoped>
.icon {
  height: 1.2em;
  width: 1.2em;

  background-image: URL("https://static.wikia.nocookie.net/gensin-impact/images/6/63/Icon_Dialogue_TCG.png");
  background-size: 100%;
  background-repeat: no-repeat;

  transform: translateY(2px);
}
</style>
