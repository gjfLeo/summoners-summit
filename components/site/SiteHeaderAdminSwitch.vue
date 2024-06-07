<script lang="ts" setup>
const route = useRoute();

const isDev = import.meta.env.DEV;

const { t } = useLocales();
</script>

<template>
  <template v-if="isDev">
    <template v-if="route.meta.layout === 'admin'">
      <NuxtLinkLocale to="/" un-flex="~">
        <NTooltip :show-arrow="false">
          <template #trigger><CommonIconButton icon="i-carbon:logout" /></template>
          <template #default>{{ t("admin.action.leaveAdminPage") }}</template>
        </NTooltip>
      </NuxtLinkLocale>
    </template>
    <template v-else>
      <NuxtLinkLocale to="/admin" un-flex="~">
        <NTooltip :show-arrow="false">
          <template #trigger><CommonIconButton icon="i-carbon:login" /></template>
          <template #default>{{ t("admin.action.enterAdminPage") }}</template>
        </NTooltip>
      </NuxtLinkLocale>
    </template>
  </template>
</template>
