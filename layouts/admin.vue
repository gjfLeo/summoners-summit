<script lang="ts" setup>
import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";
import { dateZhCN, zhCN } from "naive-ui";
import { adminThemeConfig } from "@/config/theme";

const menu: MenuLinkRoute[] = [
  {
    label: "选手",
    to: "/admin/players",
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

const { t, locale, locales, setLocale } = useI18n();
const localeOptions = computed(() => {
  return locales.value
    .map(locale => (
      typeof locale === "string"
        ? { label: locale, value: locale }
        : { label: locale.name, value: locale.code }
    ));
});
watch(
  locale,
  () => {
    useSeoMeta({
      description: t("site.description"),
    });
  },
  { immediate: true },
);
</script>

<template>
  <NaiveConfig :theme-config="adminThemeConfig" :locale="zhCN" :date-locale="dateZhCN">
    <NMessageProvider>
      <NaiveLayoutNavbar :routes="menu" toggle-icon="carbon:menu">
        <template #end>
          <AdminDataCommit />
          <NPopselect :value="locale" :options="localeOptions" @update:value="setLocale">
            <NButton text :focusable="false">
              <template #icon>
                <div class="i-carbon:language" />
              </template>
            </NButton>
          </NPopselect>
          <NaiveColorModeSwitch
            icon-system="carbon:color-switch" icon-light="carbon:sun" icon-dark="carbon:moon"
            :focusable="false"
          />
        </template>
        <template #default>
          <NuxtPage />
        </template>
      </NaiveLayoutNavbar>
    </NMessageProvider>
  </NaiveConfig>
</template>
