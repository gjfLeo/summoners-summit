<template>
  <NaiveConfig
    :theme-config="themeConfig"
    :locale="zhCN" :date-locale="dateZhCN"
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
import { dateZhCN, zhCN } from "naive-ui";
import themeConfig from "@/configs/theme";

useHead({ title: "召唤之巅" });

zhCN.DataTable.clear = "清除";
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
