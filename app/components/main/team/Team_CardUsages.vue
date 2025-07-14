<template>
  <Cards_ActionBarChart
    class="h-16rem"
    :action-card-stats="actionCardStats"
    :num-game-decks="numGameDecks"
  />
</template>

<script lang="ts" setup>
const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;
const { gameVersion } = useGameVersion();

const { actionCardStats, numGameDecks } = await useApiGetActionCardStats({
  gameVersion: gameVersion.value,
  teamId,
});
</script>
