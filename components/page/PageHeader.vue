<template>
  <div class="grid h-full items-center p-inline" style="grid-template-columns: 1fr minmax(auto, 72rem) 1fr;">
    <div />

    <div class="h-full flex items-center justify-center">
      <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" />
    </div>

    <div class="h-full flex items-center justify-end">
      <n-button circle quaternary @click="isDark = !isDark">
        <template #icon>
          <div class="dark:i-carbon:sun i-carbon:moon" />
        </template>
      </n-button>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { type MenuOption } from "naive-ui";
import { NuxtLink } from "#components";

const route = useRoute();
const isDark = useDark();

const activeKey = computed(() => {
  if (route.path === "/tournaments") {
    return "tournaments";
  }
  if (route.path === "/teams") {
    return "teams";
  }
  return undefined;
});

const menuOptions: MenuOption[] = [
  {
    key: "tournaments",
    label: () => (
      <NuxtLink to="/tournaments" class="flex items-center">
        <div class="i-mdi:tournament"></div>
        <div class="ml-1">赛事</div>
      </NuxtLink>
    ),
  },
  {
    key: "teams",
    label: () => (<NuxtLink to="/teams" class="flex items-center">
      <div class="i-carbon:events"></div>
      <div class="ml-1">阵容</div>
    </NuxtLink>),
  },
];
</script>
