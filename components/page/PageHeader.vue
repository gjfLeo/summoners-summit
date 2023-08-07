<template>
  <div class="h-full flex items-center justify-center">
    <div class="h-full w-full p-inline" grid="~ items-center" style="grid-template-columns: 1fr minmax(auto, 72rem) 1fr;">
      <div class="h-full flex items-center justify-start" />

      <div class="h-full flex items-center justify-center">
        <NMenu :value="activeKey" mode="horizontal" :options="menuOptions" />
      </div>

      <div class="h-full flex items-center justify-end">
        <ClientOnly>
          <template #default>
            <NSelect
              v-model:value="gameVersion"
              class="w-6.25rem"
              filterable
              placeholder="版本"
              :options="gameVersionOptions"
              @update:value="changeGameVersion"
            />
          </template>
          <template #fallback>
            <NSelect
              class="w-6.25rem"
              filterable
              placeholder="版本"
              disabled
              loading
            />
          </template>
        </ClientOnly>
        <NButton circle quaternary @click="isDark = !isDark">
          <template #icon>
            <div class="i-carbon:moon dark:i-carbon:sun" />
          </template>
        </NButton>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import type { MenuOption } from "naive-ui";
import { NButton, NMenu, NSelect, useLoadingBar } from "naive-ui";
import { NuxtLink } from "#components";

const route = useRoute();
const isDark = useDark();

const menuList = [
  { route: "/tournaments", name: "赛事" },
  { route: "/teams", name: "阵容" },
];

const activeKey = computed(() => {
  return menuList.find(item => route.path.startsWith(item.route))?.route;
});

const menuOptions: MenuOption[] = menuList.map((menu) => {
  return {
    key: menu.route,
    label: () => (<NuxtLink to={menu.route} class="flex items-center">{menu.name}</NuxtLink>),
  };
});

const { gameVersion, gameVersionOptions } = useGameVersion();

const loadingBar = useLoadingBar();
const { beforeEach, afterEach } = useRouter();
beforeEach(() => loadingBar.start());
afterEach(() => loadingBar.finish());
</script>
