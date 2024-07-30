<template>
  <NTooltip
    trigger="hover"
  >
    <template #trigger>
      <NuxtLinkLocale :to="video" target="_blank" no-prefetch u-flex="~ items-center">
        <CommonIconButton v-bind="iconProps" />
      </NuxtLinkLocale>
    </template>
    <span>{{ t('main.tournament.watchReplay') }}</span>
  </NTooltip>
</template>

<script lang="ts" setup>
const props = defineProps<{
  video: string;
}>();

const iconProps = computed(() => {
  if (props.video.includes("bilibili")) {
    // return { icon: "i-mingcute:bilibili-line" };
    return { iconDataUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE4LjIyMyAzLjA4NmExLjI1IDEuMjUgMCAwIDEgMCAxLjc2OEwxNy4wOCA1Ljk5NmgxLjE3QTMuNzUgMy43NSAwIDAgMSAyMiA5Ljc0N3Y3LjVhMy43NSAzLjc1IDAgMCAxLTMuNzUgMy43NUg1Ljc1QTMuNzUgMy43NSAwIDAgMSAyIDE3LjI0N3YtNy41YTMuNzUgMy43NSAwIDAgMSAzLjc1LTMuNzVoMS4xNjZMNS43NzUgNC44NTVhMS4yNSAxLjI1IDAgMCAxIDEuNzY3LTEuNzY4bDIuNjUyIDIuNjUycS4xMTkuMTE5LjE5OC4yNTdoMy4yMTNxLjA4LS4xNC4xOTktLjI1OGwyLjY1MS0yLjY1MmExLjI1IDEuMjUgMCAwIDEgMS43NjggMG0uMDI3IDUuNDJINS43NWExLjI1IDEuMjUgMCAwIDAtMS4yNDcgMS4xNTdsLS4wMDMuMDk0djcuNWMwIC42NTkuNTEgMS4xOTggMS4xNTcgMS4yNDZsLjA5My4wMDRoMTIuNWExLjI1IDEuMjUgMCAwIDAgMS4yNDctMS4xNTdsLjAwMy0uMDkzdi03LjVjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1bS0xMCAyLjVjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2MS4yNWExLjI1IDEuMjUgMCAxIDEtMi41IDB2LTEuMjVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVtNy41IDBjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2MS4yNWExLjI1IDEuMjUgMCAxIDEtMi41IDB2LTEuMjVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjUiLz48L3N2Zz4=" };
  }
  if (props.video.includes("youtube")) {
    return { icon: "i-mingcute:youtube-line" };
  }
  return { icon: "i-mingcute:video-line" };
});

const { t } = useLocales();
</script>
