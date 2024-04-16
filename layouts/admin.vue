<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";

const menu: MenuLinkRoute[] = [
  {
    label: "赛事",
    to: "/admin/tournaments",
    children: [
      {
        label: "赛事列表",
        to: "/admin/tournaments",
      },
      {
        label: "赛事模板",
        to: "/admin/tournaments/templates",
      },
    ],
  },
  {
    label: "选手",
    to: "/admin/players",
    children: [
      {
        label: "选手列表",
        to: "/admin/players",
      },
      {
        label: "选手榜单",
        to: "/admin/players/ranks",
      },
    ],
  },
  {
    label: "其他",
    children: [
      {
        label: "卡牌",
        to: "/admin/misc/cards",
      },
    ],
  },
];
</script>

<template>
  <LayoutContent :routes="menu" admin>
    <NuxtPage />
  </LayoutContent>
</template>
