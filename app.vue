<template>
  <NaiveConfig
    :theme-config="themeConfig"
    :locale="zhCN" :date-locale="dateZhCN"
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
              id="page-content"
              position="absolute"
              :style="{ top: headerHeight, height: `calc(100vh - ${headerHeight})` }"
            >
              <NScrollbar class="h-full">
                <NLayout>
                  <NLayoutContent class="m-inline-auto max-w-6xl p-4" :style="{ minHeight: `calc(100vh - ${headerHeight} - ${footerHeight})` }">
                    <NuxtPage />
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
  </NaiveConfig>
</template>

<script lang="ts" setup>
import { dateZhCN, zhCN } from "naive-ui";
import type { ThemeConfig } from "@bg-dev/nuxt-naiveui";

useHead({ title: "召唤之巅" });

zhCN.DataTable.clear = "清除";

const headerHeight = "4rem";
const footerHeight = "4rem";

// const { colorModePreference } = useNaiveColorMode();
// colorModePreference.sync();

const themeConfig = computed<ThemeConfig>(() => ({
  shared: {
    common: {
      fontFamily: "\"LXGW Neo XiHei\", \"Microsoft YaHei\", sans-serif",
      fontFamilyMono: "\"Liger Iosevka\", \"Ubuntu Mono\", \"LXGW Neo XiHei\", \"Microsoft YaHei\", monospace",
    },
  },
  mobile: {
    defaults: false,
  },
  mobileOrTablet: {
    defaults: false,
  },
}));
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
