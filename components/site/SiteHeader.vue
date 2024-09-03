<template>
  <NLayoutHeader
    bordered
    class="p-inline-4"
    un-grid="~ cols-[1fr_auto_1fr] items-center"
    style="background-color: var(--g-header-color);"
  >
    <div un-flex="~ gap-4">
      <NuxtLinkLocale v-if="localePath($route.path, 'zh') !== '/'" to="/">
        <CommonIconButton icon="i-mingcute:home-3-line" />
      </NuxtLinkLocale>
      <CommonIconButton class="md:hidden" icon="i-mingcute:menu-line" @click="showMobileMenu = true" />
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
      <SiteHeaderGameVersionSelect v-if="$route.meta.layout !== 'admin'" />
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

<script lang="tsx" setup>
import { useSiteMenu } from "~/composables/use-site-menu";
import type { SiteRoute } from "~/composables/use-site-menu";

const props = defineProps<{
  routes: SiteRoute[];
}>();

const localePath = useLocalePath();
const { menuOptions, menuValue, renderLabel } = useSiteMenu(props.routes);

const showMobileMenu = ref(false);
</script>
