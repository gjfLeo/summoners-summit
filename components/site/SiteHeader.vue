<script lang="tsx" setup>
import { type SiteRoute, useSiteMenu } from "~/composables/use-site-menu";

const props = defineProps<{
  routes: SiteRoute[];
}>();

const { menuOptions, menuValue, renderLabel } = useSiteMenu(props.routes);

const showMobileMenu = ref(false);
</script>

<template>
  <NLayoutHeader
    bordered
    class="p-inline-4"
    un-grid="~ cols-[1fr_auto_1fr] items-center"
    style="background-color: var(--g-header-color);"
  >
    <div un-flex="~ gap-4">
      <CommonIconButton class="md:hidden" icon="i-carbon:menu" @click="showMobileMenu = true" />
    </div>
    <div>
      <NMenu
        mode="horizontal"
        :options="menuOptions"
        :value="menuValue"
        :render-label="renderLabel"
        class="<md:hidden!"
      />
    </div>
    <div un-flex="~ gap-4" class="justify-self-end">
      <LazyAdminDataCommit v-if="$route.meta.layout === 'admin'" />
      <SiteHeaderAdminSwitch />
      <SiteHeaderLanguageSwitch />
      <SiteHeaderColorSwitch />
    </div>

    <NDrawer v-model:show="showMobileMenu" placement="left">
      <NMenu
        :options="menuOptions"
        :value="menuValue"
        :render-label="renderLabel"
        @update:value="showMobileMenu = false"
      />
    </NDrawer>
  </NLayoutHeader>
</template>
