<script setup lang="ts">
import { dateZhCN, enUS, zhCN } from "naive-ui";
import { themeOverridesShared } from "@/config/theme";

const { locale } = useLocales();
const naiveLocale = computed(() => {
  return locale.value === "zh" ? zhCN : enUS;
});
</script>

<template>
  <!-- <VitePwaManifest /> -->
  <NaiveConfig
    :locale="naiveLocale" :date-locale="dateZhCN"
    :theme-config="{
      shared: themeOverridesShared,
    }"
  >
    <NLoadingBarProvider>
      <NMessageProvider>
        <SiteLoadingBar />
        <slot />
      </NMessageProvider>
    </NLoadingBarProvider>
  </NaiveConfig>
</template>
