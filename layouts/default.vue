<template>
  <n-layout position="absolute">
    <n-layout-header
      :style="{ height: headerHeight }"
      bordered
    >
      <SharedPageHeader />
    </n-layout-header>
    <n-layout position="absolute" :style="{ top: headerHeight }" style="bottom: 0" :native-scrollbar="false">
      <!-- <n-layout-sider bordered content-style="padding: 1rem;">
        Sider
      </n-layout-sider> -->
      <n-layout content-style="padding: 1rem;" m-inline-auto max-w-6xl>
        <slot />
      </n-layout>
    </n-layout>
    <!-- <n-layout-footer
      bordered
      position="absolute"
      style="height: 64px; padding: 24px"
    >
      城府路
    </n-layout-footer> -->
  </n-layout>
</template>

<script lang="ts" setup>
const headerHeight = "4rem";
</script>
