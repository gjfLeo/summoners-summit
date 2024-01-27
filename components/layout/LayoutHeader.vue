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
        <NuxtLinkLocale v-if="localePath($route.path, 'chs') !== '/'" to="/" no-prefetch>
          <NButton circle quaternary :focusable="false">
            <template #icon>
              <div class="i-carbon:home" />
            </template>
          </NButton>
        </NuxtLinkLocale>
      </div>
      <div class="flex items-center">
        <NaiveMenuLink class="justify-center hidden! md:flex!" :routes="routes" mode="horizontal" />
      </div>
      <div class="h-full flex items-center justify-end gap-2">
        <GameVersionSelector />
        <NButton circle quaternary :focusable="false" @click="changeColorMode">
          <template #icon>
            <div class="i-carbon:moon dark:i-carbon:sun" />
          </template>
        </NButton>
        <NPopselect :value="locale" :options="localeOptions" @update:value="setLocale">
          <NButton circle quaternary :focusable="false">
            <template #icon>
              <div class="i-carbon:language" />
            </template>
          </NButton>
        </NPopselect>
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

// 将 Netlify 部署的页面重定向至 Github Pages
if (import.meta.client && location.host.includes(".netlify.app")) {
  location.href = `https://gjfleo.github.io/summoners-summit${location.pathname}`;
}

useChartConfigurations();

const sideMenuVisible = ref(false);

const { changeColorMode } = useColorMode();
const { routes } = useMenuRoutes();

useRouteLoadingBar();

const localePath = useLocalePath();

const { locale, locales, setLocale } = useI18n();
const localeOptions = computed(() => {
  return locales.value
    .map(locale => (
      typeof locale === "string"
        ? { label: locale, value: locale }
        : { label: locale.name, value: locale.code }
    ));
});
</script>
