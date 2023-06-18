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
  if (route.path === "/") {
    return "home";
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
    <NuxtLink to="/" class="flex items-center">
      <div class="i-carbon:home"></div>
      <div class="ml-1">首页</div>
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
