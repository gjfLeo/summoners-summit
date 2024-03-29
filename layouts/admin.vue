<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";
import type { GlobalThemeOverrides } from "naive-ui";

const menu: MenuLinkRoute[] = [
  {
    label: "选手",
    to: "/admin/players",
  },
];

const light: GlobalThemeOverrides = {
  common: {
    primaryColor: "#86BF42FF",
    primaryColorHover: "#AADF69FF",
    primaryColorPressed: "#76AF32FF",
    primaryColorSuppl: "#98CF55FF",
    infoColor: "#4FAAF3FF",
    infoColorHover: "#79C0F9FF",
    infoColorPressed: "#3694DFFF",
    infoColorSuppl: "#64B5F6FF",
    successColor: "#86BF42FF",
    successColorHover: "#AADF69FF",
    successColorPressed: "#76AF32FF",
    successColorSuppl: "#98CF55FF",
    warningColor: "#FFC108FF",
    warningColorSuppl: "#FFC928FF",
    warningColorHover: "#FFD14AFF",
    warningColorPressed: "#D8A406FF",
    errorColor: "#F55F55FF",
    errorColorSuppl: "#F86F65FF",
    errorColorHover: "#FA7F76FF",
    errorColorPressed: "#D5473DFF",
    textColorBase: "#222222FF",
    textColor1: "#444444FF",
    textColor2: "#666666FF",
    textColor3: "#888888FF",
    bodyColor: "#F0F2F0FF",
    cardColor: "#FCFEFCFF",
    tableColor: "#F5F7F5FF",
    tableHeaderColor: "#FAFCFAFF",
    dividerColor: "#E6E8E6FF",
  },
  Table: {
    tdColor: "#F5F7F5FF",
  },
};
</script>

<template>
  <NaiveConfig :theme-config="{ light }">
    <NaiveLayoutNavbar :routes="menu" toggle-icon="carbon:menu">
      <template #end>
        <NaiveColorModeSwitch />
      </template>
      <template #default>
        <NuxtPage />
      </template>
    </NaiveLayoutNavbar>
  </NaiveConfig>
</template>
