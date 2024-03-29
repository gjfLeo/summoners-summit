<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";

const menu: MenuLinkRoute[] = [
  {
    label: "赛事",
    to: "/tournaments",
  },
  {
    label: "阵容",
    to: "/teams",
  },
  {
    label: "卡牌",
    to: "/cards",
  },
  {
    label: "选手",
    to: "/players",
  },
];
</script>

<template>
  <NaiveConfig>
    <NaiveLayoutNavbar
      :routes="menu"
      toggle-icon="carbon:menu"
    >
      <template #end>
        <NaiveColorModeSwitch />
      </template>
      <template #default>
        <NuxtPage />
      </template>
    </NaiveLayoutNavbar>
  </NaiveConfig>
</template>
