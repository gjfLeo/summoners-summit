<template>
  <NaiveConfig
    :theme-config="themeConfig"
    :locale="naiveLocale" :date-locale="dateZhCN"
    inline-theme-disabled
  >
    <NLoadingBarProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <LayoutHeader>
            <LayoutContent />
            <LayoutFooter />
          </LayoutHeader>
        </NMessageProvider>
      </NNotificationProvider>
    </NLoadingBarProvider>
  </NaiveConfig>
</template>

<script lang="ts" setup>
import { dateZhCN, enUS, zhCN } from "naive-ui";
import themeConfig from "@/configs/theme";

const { locale } = useI18n();

zhCN.DataTable.clear = "清除";

const naiveLocale = computed(() => {
  switch (locale.value) {
    case "en":
      return enUS;
    default:
      return zhCN;
  }
});
</script>

<style>
:root {
  font-size: 14px;
}

html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  /* @apply font-sans text-base; */
}
</style>
