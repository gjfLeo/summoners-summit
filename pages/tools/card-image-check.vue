<template>
  <div u-flex="~ col">
    <div u-grid="~ cols-20 gap-1">
      <template v-for="card in ALL_CHARACTER_CARDS" :key="card">
        <NTooltip trigger="hover" placement="bottom">
          <template #trigger>
            <div>
              <CardAvatar :card="card" />
            </div>
          </template>
          <template #default>
            <span>{{ card }}</span>
          </template>
        </NTooltip>
      </template>
    </div>
    <NHr />
    <div u-grid="~ cols-20 gap-1">
      <template v-for="card in ALL_CHARACTER_CARDS" :key="card">
        <NTooltip trigger="hover" placement="bottom">
          <template #trigger>
            <div>
              <CardImage :card="card" />
            </div>
          </template>
          <template #default>
            <span>{{ card }}</span>
          </template>
        </NTooltip>
      </template>
    </div>
    <NHr />
    <div u-grid="~ cols-20 gap-1">
      <template v-for="card in ALL_ACTION_CARDS" :key="card">
        <NTooltip trigger="hover" placement="bottom">
          <template #trigger>
            <div>
              <CardImage :card="card" />
            </div>
          </template>
          <template #default>
            <span>{{ card }}</span>
          </template>
        </NTooltip>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS } from "~/utils/cards";

const { t } = useI18n();
useHead({ title: t("site.titleFormat", [t("menu.cardImageCheck"), t("site.name")]) });
</script>
