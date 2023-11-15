<template>
  <div class="flex flex-wrap items-center justify-center gap-1">
    <span>{{ title }}</span>
    <NTooltip>
      <template #trigger>
        <NIcon class="text-lg"><div class="i-carbon:information" /></NIcon>
      </template>
      <template #default>
        <span>{{ description }}</span>
      </template>
    </NTooltip>
  </div>
</template>

<script lang="ts" setup>
import { NIcon, NTooltip } from "naive-ui";

defineProps<{
  title: string;
  description: string;
}>();
</script>
