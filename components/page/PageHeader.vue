<template>
  <div class="h-full flex items-center justify-center">
    <div class="h-full w-full p-inline" grid="~ items-center" style="grid-template-columns: 1fr minmax(auto, 72rem) 1fr;">
      <div class="h-full flex items-center justify-start">
        <ClientOnly>
          <NButton
            v-if="isMobile"
            circle quaternary :focusable="false"
            @click="sideMenuVisible = !sideMenuVisible"
          >
            <template #icon>
              <div class="i-carbon:menu" />
            </template>
          </NButton>
        </ClientOnly>
      </div>

      <div class="h-full flex items-center justify-center">
        <ClientOnly>
          <NMenu v-if="!isMobile" :value="activeKey" mode="horizontal" :options="menuOptions" />
        </ClientOnly>
      </div>

      <div class="h-full flex items-center justify-end gap-2">
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
            <NSpin :size="20" />
          </template>
        </ClientOnly>
        <NButton
          circle quaternary :focusable="false"
          @click="isDark = !isDark"
        >
          <template #icon>
            <div class="i-carbon:moon dark:i-carbon:sun" />
          </template>
        </NButton>
      </div>
    </div>
  </div>
  <NDrawer
    v-model:show="sideMenuVisible"
    placement="left"
    to="#page-content"
    :width="200"
    :trap-focus="false"
  >
    <NMenu :value="activeKey" mode="vertical" :options="menuOptions" />
  </NDrawer>
</template>

<script lang="ts" setup>
import type { MenuOption, SelectOption } from "naive-ui";
import { NButton, NDrawer, NMenu, NSelect, NSpin, useLoadingBar } from "naive-ui";
import { breakpointsTailwind } from "@vueuse/core";
import { NuxtLink } from "#components";
import { ALL_GAME_VERSIONS, gameVersionSorterReversed, getGameVersionPath } from "~/utils/game-versions";
import type { GameVersion } from "~/utils/types";

const route = useRoute();
const isDark = useDark();

const isMobile = useBreakpoints(breakpointsTailwind).smaller("md");
const sideMenuVisible = ref(false);

const { gameVersion, gameVersionPath } = useGameVersion();

const gameVersionOptions: SelectOption[] = [
  { label: "全版本", value: "" },
  ...ALL_GAME_VERSIONS.sort(gameVersionSorterReversed(v => v)).map(v => ({ label: v, value: v })),
];

const menuList = [
  { route: "/tournaments", name: "赛事" },
  { route: "/teams", name: "阵容" },
  { route: "/players", name: "选手" },
  { route: "/cards", name: "卡牌" },
];

const activeKey = computed(() => {
  return menuList.find(item => route.path.startsWith(item.route))?.route;
});

const menuOptions = computed<MenuOption[]>(() =>
  menuList.map((menu) => {
    return {
      key: menu.route,
      label: () => h(
        NuxtLink,
        {
          class: "flex, items-center",
          to: `${menu.route}/${gameVersionPath.value}`,
          onClick: () => sideMenuVisible.value = false,
        },
        () => menu.name,
      ),
    };
  }),
);

function changeGameVersion(gameVersion: GameVersion | "") {
  if (typeof route.params.gameVersion === "string") {
    return navigateTo({
      name: route.name!,
      params: {
        ...route.params,
        gameVersion: getGameVersionPath(gameVersion),
      },
    });
  }
}

const loadingBar = useLoadingBar();
const { beforeEach, afterEach } = useRouter();
beforeEach(() => loadingBar.start());
afterEach(() => loadingBar.finish());
</script>
