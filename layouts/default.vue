<template>
  <n-layout position="absolute">
    <n-layout-header
      :style="{ height: headerHeight }"
      bordered
    >
      <PageHeader />
    </n-layout-header>
    <n-layout
      position="absolute"
      :style="{ top: headerHeight, bottom: 0 }"
      :native-scrollbar="false"
    >
      <n-layout
        content-style="padding: 1rem;"
        m-inline-auto max-w-6xl
        :style="{ 'min-height': `calc(100vh - ${headerHeight} - ${footerHeight} - 1px)` }"
      >
        <slot />
      </n-layout>
      <n-layout-footer
        bordered
        :style="{ height: footerHeight }"
      >
        <PageFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
const headerHeight = "4rem";
const footerHeight = "2rem";
</script>
