<template>
  <NTooltip
    trigger="hover"
  >
    <template #trigger>
      <NuxtLink :to="video" target="_blank" no-prefetch>
        <NIcon><div class="i-carbon:video text-size-120%" /></NIcon>
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
