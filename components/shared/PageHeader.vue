<template>
  <div class="h-full w-full flex items-center justify-center">
    <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>
</template>

<script lang="tsx" setup>
import { type MenuOption } from "naive-ui";
import { NuxtLink } from "#components";

const route = useRoute();

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
    key: "home",
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
