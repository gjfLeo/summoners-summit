<template>
  <n-h1>{{ playerInfo?.nickname ?? player }}</n-h1>
  <GameRecords :games="games" />
</template>

<script lang="ts" setup>
import { playerById } from "~/data";

const route = useRoute();

const player = computed(() => {
  const playerParam = route.params.player as string;
  if (playerParam.match(/^\d+$/)) {
    return Number(playerParam);
  }
  else {
    return playerParam;
  }
});

const playerInfo = computed(() => {
  return playerById[player.value];
});

const { games } = useGameList({ player });
</script>
