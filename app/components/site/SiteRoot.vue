<template>
  <!-- <VitePwaManifest /> -->
  <NaiveConfig
    :locale="naiveLocale" :date-locale="dateZhCN"
  >
    <NLoadingBarProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <NuxtLoadingIndicator color="#18A058" />
          <slot />
        </NMessageProvider>
      </NNotificationProvider>
    </NLoadingBarProvider>
  </NaiveConfig>
</template>

<script setup lang="ts">
import { dateZhCN, enUS, zhCN } from "naive-ui";

const { locale } = useLocales();
const naiveLocale = computed(() => {
  return locale.value === "zh" ? zhCN : enUS;
});

initECharts();
</script>
