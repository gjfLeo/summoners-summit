<template>
  <GameVersionSelect
    v-model:value="gameVersion"
    :clearable="false"
    class="w-6.25rem"
    @update:value="updateGameVersion"
  />
</template>

<script lang="ts" setup>
import type { GameVersionId } from "~/types";

const { gameVersion } = useGameVersion();

const route = useRoute();

function updateGameVersion(gameVersion: GameVersionId) {
  if ("gameVersion" in route.params && typeof route.params.gameVersion === "string") {
    return navigateTo({
      name: route.name,
      params: {
        ...route.params,
        gameVersion: getGameVersionPath(gameVersion),
      },
    } as any);
  }
}
</script>
