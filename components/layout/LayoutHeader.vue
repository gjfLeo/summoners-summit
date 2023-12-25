<template>
  <NLayout style="min-height: 100vh; min-height: 100dvh;">
    <NLayoutHeader
      bordered
      class="grid items-center p-inline-4"
      style="grid-template-columns: 1fr minmax(auto, 72rem) 1fr;"
      :style="{ height: LAYOUT_HEADER_HEIGHT }"
    >
      <div class="h-full flex items-center gap-2">
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
      <div class="flex items-center">
        <NaiveMenuLink class="justify-center hidden! md:flex!" :routes="routes" mode="horizontal" />
      </div>
      <div class="h-full flex items-center justify-end gap-2">
        <GameVersionSelector />
        <NButton
          circle quaternary :focusable="false"
          @click="changeColorMode"
        >
          <template #icon>
            <div class="i-carbon:moon dark:i-carbon:sun" />
          </template>
        </NButton>
      </div>
    </NLayoutHeader>
    <NLayout
      position="absolute"
      :native-scrollbar="false"
      :style="{ top: LAYOUT_HEADER_HEIGHT }"
    >
      <slot />
    </NLayout>
  </NLayout>

  <NaiveDrawerLink
    v-model:show="sideMenuVisible"
    :routes="routes"
    :width="240"
  />
</template>

<script lang="ts" setup>
import { LAYOUT_HEADER_HEIGHT } from "@/configs/layout";

useChartConfigurations();

const sideMenuVisible = ref(false);

const { changeColorMode } = useColorMode();
const { routes } = useMenuRoutes();

useRouteLoadingBar();
</script>
