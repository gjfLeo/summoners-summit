<template>
  <NLayout>
    <SiteHeader
      :routes="routes"
      style="height: var(--g-header-height);"
    />
    <NLayout
      id="content-layout"
      style="height: calc(100dvh - var(--g-header-height));"
      :native-scrollbar="false"
    >
      <NLayout
        has-sider
        style="min-height: calc(100dvh - var(--g-header-height) - var(--g-footer-height));"
        content-class="justify-center"
      >
        <NLayoutContent
          class="z-2 max-w-1024px"
          content-style="padding: 1rem"
        >
          <slot />
        </NLayoutContent>
        <aside id="layout-right-sider" class="p-4 empty:hidden lg:w-16rem" />
      </NLayout>
      <SiteFooter
        style="height: var(--g-footer-height);"
      />
    </NLayout>
  </NLayout>
</template>

<script lang="ts" setup>
import type { SiteRoute } from "~/composables/use-site-menu";

defineProps<{
  routes: SiteRoute[];
}>();
</script>

<style scoped>
:deep(.side-scroll) .n-scrollbar-rail {
  display: none;
}
</style>

<style>
:root {
  --g-header-height: 3rem;
  --g-footer-height: 3rem;
}
body {
  overflow: hidden;
}
</style>
