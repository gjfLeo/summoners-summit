<template>
  <NTooltip
    trigger="hover"
  >
    <template #trigger>
      <NuxtLinkLocale :to="video" target="_blank" no-prefetch u-flex="~ items-center">
        <CommonIconButton icon="i-mingcute:video-line" />
      </NuxtLinkLocale>
    </template>
    <span>{{ t('main.tournament.watchReplay') }}</span>
  </NTooltip>
</template>

<script lang="ts" setup>
defineProps<{
  video: string;
}>();

const { t } = useLocales();
</script>
