<script lang="ts" setup>
const route = useRoute();

const isDev = import.meta.env.DEV;

const { t } = useI18n();
</script>

<template>
  <template v-if="isDev">
    <template v-if="route.meta.layout === 'admin'">
      <NuxtLinkLocale to="/" flex="~">
        <NTooltip :show-arrow="false">
          <template #trigger>
            <NButton text :focusable="false">
              <template #icon>
                <div class="i-carbon:logout" />
              </template>
            </NButton>
          </template>
          <template #default>{{ t("admin.action.leaveAdminPage") }}</template>
        </NTooltip>
      </NuxtLinkLocale>
    </template>
    <template v-else>
      <NuxtLinkLocale to="/admin" flex="~">
        <NTooltip :show-arrow="false">
          <template #trigger>
            <NButton text :focusable="false">
              <template #icon>
                <div class="i-carbon:login" />
              </template>
            </NButton>
          </template>
          <template #default>{{ t("admin.action.enterAdminPage") }}</template>
        </NTooltip>
      </NuxtLinkLocale>
    </template>
  </template>
</template>
