<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";
import { LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT } from "~/config/layout";

defineProps<{
  admin?: boolean;
  routes: MenuLinkRoute[];
}>();

const themeVars = useThemeVars();
const adminColor = computed(() => `color-mix(in oklch, ${themeVars.value.primaryColor}, transparent 84%)`);
</script>

<template>
  <NLayout style="height: 100vh; height: 100dvh; overflow-y: hidden;">
    <LayoutHeader
      :routes="routes"
      :style="{ backgroundColor: admin ? adminColor : undefined }"
    />
    <NLayout
      :style="{ height: `calc(100vh - ${LAYOUT_HEADER_HEIGHT})` }"
      :native-scrollbar="false"
      class="layout-scroll-area"
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
