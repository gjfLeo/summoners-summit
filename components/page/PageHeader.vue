<template>
  <div class="h-full flex items-center justify-center">
    <div class="h-full w-full p-inline" grid="~ items-center" style="grid-template-columns: 1fr minmax(auto, 72rem) 1fr;">
      <div class="h-full flex items-center justify-start gap-2">
        <NButton
          class="md:hidden"
          circle quaternary :focusable="false"
          @click="sideMenuVisible = !sideMenuVisible"
        >
          <template #icon>
            <div class="i-carbon:menu" />
          </template>
        </NButton>
        <NButton
          v-if="$route.path !== '/'"
          circle quaternary :focusable="false"
          @click="$router.push('/')"
        >
          <template #icon>
            <div class="i-carbon:home" />
          </template>
        </NButton>
      </div>

      <div class="h-full flex items-center justify-center">
        <ClientOnly>
          <NMenu class="hidden! md:inline-flex!" :value="activeKey" mode="horizontal" :options="menuOptions" />
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
          @click="changeColorMode"
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
import type { MenuOption, SelectGroupOption, SelectOption } from "naive-ui";
import { NuxtLink } from "#components";
import { getAllGameVersionsReversed, getGameVersionPath } from "~/utils/game-version";
import type { GameVersionOptional } from "~/utils/types";

const route = useRoute();

const isDark = useDark();
const { colorModePreference } = useNaiveColorMode();

function changeColorMode() {
  isDark.value = !isDark.value;
  colorModePreference.set(isDark.value ? "dark" : "light");
}

useChartConfigurations();

const { isAdminMode } = useAdminMode();

const sideMenuVisible = ref(false);

const { gameVersion, gameVersionPath } = useGameVersion();

// 版本选项
const gameVersionOptions: (SelectOption | SelectGroupOption)[] = [
  { label: "全版本", value: "" },
  ...getAllGameVersionsReversed().map<SelectOption>(v => ({ label: v, value: v })),
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

const menuOptions = computed<MenuOption[]>(() => {
  const options: MenuOption[] = [
    ...menuList.map((menu) => {
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

    ...isAdminMode.value
      ? [{
          key: "tools",
          label: "工具",
          children: [
            {
              key: "tools-data-builder",
              label: () => h(
                NuxtLink,
                {
                  class: "flex, items-center",
                  to: "/tools/data-builder",
                  onClick: () => sideMenuVisible.value = false,
                },
                () => "录入工具",
              ),
            },
            {
              key: "tools-card-image-check",
              label: () => h(
                NuxtLink,
                {
                  class: "flex, items-center",
                  to: "/tools/card-image-check",
                  onClick: () => sideMenuVisible.value = false,
                },
                () => "图片检查",
              ),
            },
          ],
        }]
      : [],
  ];
  return options;
});

function changeGameVersion(gameVersion: GameVersionOptional) {
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
