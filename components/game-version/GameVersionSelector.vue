<template>
  <ClientOnly>
    <template #default>
      <NSelect
        v-model:value="gameVersion"
        class="w-6.25rem"
        filterable
        :placeholder="$t('common.gameVersionShort')"
        :options="gameVersionOptions"
        @update:value="changeGameVersion"
      />
    </template>
    <template #fallback>
      <NSpin :size="20" />
    </template>
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { SelectGroupOption, SelectOption } from "naive-ui";
import { type GameVersionOptional, getAllGameVersionsReversed, getGameVersionPath } from "~/utils/game-version";

const route = useRoute();

const { gameVersion } = useGameVersion();
const { t } = useI18n();

// 版本选项
const gameVersionOptions: (SelectOption | SelectGroupOption)[] = [
  { label: t("common.gameVersionAll"), value: "" },
  ...getAllGameVersionsReversed().map<SelectOption>(v => ({ label: v, value: v })),
];

function changeGameVersion(gameVersion: GameVersionOptional) {
  if (typeof route.params.gameVersion === "string") {
    return navigateTo({
      name: route.name!,
      params: {
        ...route.params,
        gameVersion: getGameVersionPath(gameVersion),
      },
    });
  }
}
</script>
