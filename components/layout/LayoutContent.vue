<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";
import { LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT } from "~/config/layout";

defineProps<{
  routes: MenuLinkRoute[];
}>();
</script>

<template>
  <NLayout style="min-height: 100vh; min-width: 100dvh;">
    <LayoutHeader :routes="routes" />
    <NLayout
      :style="{ height: `calc(100vh - ${LAYOUT_HEADER_HEIGHT})` }"
      :native-scrollbar="false"
    >
      <NLayout
        content-class="p-4"
        :has-sider="false"
        :style="{ minHeight: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT})` }"
      >
        <slot />
      </NLayout>
      <LayoutFooter />
    </NLayout>
  </NLayout>
</template>
