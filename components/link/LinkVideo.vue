<template>
  <NTooltip
    trigger="hover"
  >
    <template #trigger>
      <NuxtLink :to="video" target="_blank" no-prefetch flex="~ items-center">
        <NIcon class="text-size-120%"><div class="i-carbon:video" /></NIcon>
      </NuxtLink>
    </template>
    <span>观看录像</span>
  </NTooltip>
</template>

<script lang="ts" setup>
import { NIcon, NTooltip } from "naive-ui";

defineProps<{
  video: string;
}>();
</script>
