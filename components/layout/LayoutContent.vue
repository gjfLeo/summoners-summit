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
      id="header"
      :routes="routes"
      :style="{ backgroundColor: admin ? adminColor : undefined }"
    />
    <NLayout
      id="main"
      :style="{ height: `calc(100vh - ${LAYOUT_HEADER_HEIGHT})` }"
      :native-scrollbar="false"
    >
      <NLayout
        id="main-content"
        content-class="p-4 m-inline-auto max-w-64rem overflow-hidden"
        :has-sider="false"
        :style="{ minHeight: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT})` }"
      >
        <slot />
      </NLayout>
      <LayoutFooter id="footer" />
    </NLayout>
  </NLayout>
</template>
