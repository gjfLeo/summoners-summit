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
          <template #default>{{ t("exit") }}</template>
        </NTooltip>
      </NuxtLinkLocale>
    </template>
    <template v-else>
      <NuxtLinkLocale to="/admin">
        <NTooltip :show-arrow="false">
          <template #trigger>
            <NButton text :focusable="false">
              <template #icon>
                <div class="i-carbon:login" />
              </template>
            </NButton>
          </template>
          <template #default>{{ t("enter") }}</template>
        </NTooltip>
      </NuxtLinkLocale>
    </template>
  </template>
</template>

<i18n lang="yaml">
zh:
  enter: 进入管理页面
  exit: 退出管理页面
en:
  enter: Enter admin page
  exit: Exit admin page
</i18n>
