<template>
  <NConfigProvider
    :locale="zhCN" :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
  >
    <NMessageProvider>
      <header class="absolute top-0 w-full" :style="{ height: headerHeight }">
        <PageHeader />
      </header>
      <NScrollbar class="absolute" :style="{ top: headerHeight, height: `calc(100vh - ${headerHeight})` }">
        <main class="m-inline-auto max-w-6xl p-4" :style="{ minHeight: `calc(100vh - 2rem - ${headerHeight} - ${footerHeight})` }">
          <NuxtPage />
        </main>
        <footer class="w-full" :style="{ height: footerHeight }">
          <PageFooter />
        </footer>
      </NScrollbar>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import type { GlobalThemeOverrides } from "naive-ui";
import { NConfigProvider, NMessageProvider, NScrollbar, dateZhCN, zhCN } from "naive-ui";

useHead({ title: "召唤之巅" });

zhCN.DataTable.clear = "清除";

const headerHeight = "4rem";
const footerHeight = "4rem";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: "\"LXGW Neo XiHei\", \"Microsoft YaHei\", sans-serif",
    fontFamilyMono: "\"Liger Iosevka\", \"LXGW Neo XiHei\", monospace",
  },
};
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
