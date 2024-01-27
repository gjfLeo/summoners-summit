<template>
  <NTooltip
    trigger="hover"
  >
    <template #trigger>
      <NuxtLinkLocale :to="video" target="_blank" no-prefetch u-flex="~ items-center">
        <NIcon class="text-size-120%"><div class="i-carbon:video" /></NIcon>
      </NuxtLinkLocale>
    </template>
    <span>{{ $t('actions.watchVideo') }}</span>
  </NTooltip>
</template>

<script lang="ts" setup>
defineProps<{
  video: string;
}>();
</script>
