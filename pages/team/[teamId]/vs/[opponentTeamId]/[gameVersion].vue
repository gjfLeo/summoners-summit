<template>
  <div class="mb">
    <NuxtLink :to="`/team/${teamId}`"><NButton>返回</NButton></NuxtLink>
  </div>
  <GameRecords :games="gameList" />
</template>

<script lang="ts" setup>
import { NButton } from "naive-ui";

const route = useRoute();
const { teamId, team, teamDisplayName } = useTeam(route.params.teamId as string);
const { teamId: opponentTeamId, team: opponentTeam } = useTeam(route.params.opponentTeamId as string);

useHead({ title: `${teamDisplayName.value} - 对局记录 | 召唤之巅` });

// 非标准则跳转
if (route.params.teamId !== teamId.value || route.params.opponentTeamId !== opponentTeamId.value) {
  await navigateTo(`/team/${teamId.value}/vs/${opponentTeamId.value}`, { replace: true });
}

const { gameVersion } = useGameVersion({ detect: true });
const { gameList } = await useGameList({
  gameVersion: gameVersion.value,
  characters: team.value,
  opponentCharacters: opponentTeam.value,
  mirror: opponentTeamId.value !== teamId.value,
});
</script>
