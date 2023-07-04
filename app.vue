<template>
  <VitePwaManifest />

  <n-config-provider
    :locale="zhCN" :date-locale="dateZhCN"
    :theme="isDark ? darkTheme : undefined"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
  >
    <n-global-style />
    <n-message-provider>
      <n-loading-bar-provider>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </n-loading-bar-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from "naive-ui";
import { appName } from "~/constants";
import themeOverrides from "~/config/naive-ui-theme-overrides.json";

useHead({
  title: appName,
});

zhCN.DataTable.clear = "清除";

const isDark = useDark();
</script>

<style>
:root {
  font-size: 14px;
}

html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  @apply font-sans text-base;
}

.v-move,
.v-enter-active,
.v-leave-active {
  @apply transition;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.v-leave-active {
  position: absolute;
}
</style>
