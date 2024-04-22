<script setup lang="ts">
import { dateZhCN, zhCN } from "naive-ui";
import { themeOverridesShared } from "@/config/theme";
</script>

<template>
  <VitePwaManifest />
  <NaiveConfig
    :locale="zhCN" :date-locale="dateZhCN"
    :theme-config="{
      shared: themeOverridesShared,
    }"
  >
    <NLoadingBarProvider>
      <NMessageProvider>
        <LayoutLoadingBar />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NMessageProvider>
    </NLoadingBarProvider>
  </NaiveConfig>
</template>

<style>
.layout-transition-enter-active,
.layout-transition-leave-active {
  /* position: absolute;
  width: 100%; */
  transition: all 0.3s;
}
.layout-transition-enter-from,
.layout-transition-leave-to {
  opacity: 0;
}
</style>
