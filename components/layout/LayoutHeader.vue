<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";

defineProps<{
  routes: MenuLinkRoute[];
}>();

const { isMobileOrTablet } = useNaiveDevice();
</script>

<template>
  <NLayoutHeader
    bordered
    grid="~ cols-[1fr_auto_1fr]"
    class="p-inline-4 h-header"
  >
    <div />
    <NaiveMenuLink
      v-if="!isMobileOrTablet"
      :routes="routes"
      mode="horizontal"
      class="h-full items-center"
    />
    <div
      flex="~ items-center justify-end gap-4"
      class="h-full"
    >
      <LazyAdminDataCommit v-if="$route.meta.layout === 'admin'" />
      <LayoutHeaderAdminSwitch />
      <LayoutHeaderLanguageSwitch />
      <LayoutHeaderColorSwitch />
    </div>
  </NLayoutHeader>
</template>
