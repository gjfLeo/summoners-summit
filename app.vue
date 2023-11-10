<template>
  <NConfigProvider
    :locale="zhCN" :date-locale="dateZhCN"
    :theme="isDark ? darkTheme : undefined"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
  >
    <NLoadingBarProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <NLayout class="h-screen">
            <NLayoutHeader
              bordered position="absolute"
              class="top-0" :style="{ height: headerHeight }"
            >
              <PageHeader />
            </NLayoutHeader>
            <NLayoutContent
              position="absolute"
              :style="{ top: headerHeight, height: `calc(100vh - ${headerHeight})` }"
            >
              <NScrollbar class="h-full">
                <NLayout>
                  <NLayoutContent class="m-inline-auto max-w-6xl p-4" :style="{ minHeight: `calc(100vh - ${headerHeight} - ${footerHeight})` }">
                    <NuxtPage v-cloak />
                  </NLayoutContent>
                  <NLayoutFooter bordered class="w-full" :style="{ height: footerHeight }">
                    <PageFooter />
                  </NLayoutFooter>
                </NLayout>
              </NScrollbar>
            </NLayoutContent>
          </NLayout>
        </NMessageProvider>
      </NNotificationProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import type { GlobalThemeOverrides } from "naive-ui";
import { NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLoadingBarProvider, NMessageProvider, NNotificationProvider, NScrollbar, darkTheme, dateZhCN, zhCN } from "naive-ui";

useHead({ title: "召唤之巅" });

const isDark = useDark();

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
