<script lang="ts" setup>
import type { SiteRoute } from "~/composables/use-site-menu";

defineProps<{
  routes: SiteRoute[];
}>();
</script>

<template>
  <NLayout class="h-screen overflow-hidden">
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
        <NLayoutSider
          :width="128"
          class="<xl:hidden"
        >
          <NScrollbar
            class="side-scroll"
            style="
              position: fixed;
              top: var(--g-header-height);
              max-height: calc(100dvh - var(--g-header-height));
              width: 192px;
            "
          >
            <div id="right-sider" class="p-4" />
          </NScrollbar>
        </NLayoutSider>
      </NLayout>
      <SiteFooter
        style="height: var(--g-footer-height);"
      />
    </NLayout>
  </NLayout>
</template>

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
</style>
