<template>
  <GameRecords :games="games" />
</template>

<script lang="ts" setup>
const route = useRoute();
const { teamId, teamDisplayName } = useTeam(route.params.teamId as string);
const { teamId: opponentTeamId } = useTeam(route.params.opponentTeamId as string);

useHead({ title: `${teamDisplayName.value} - 对局记录 | 召唤之巅` });

// 非标准则跳转
if (route.params.teamId !== teamId.value || route.params.opponentTeamId !== opponentTeamId.value) {
  navigateTo(`/team/${encodeURIComponent(teamId.value)}/vs/${opponentTeamId}`, { replace: true });
}

const { games } = useGameList({ teamId, opponentTeamId, mirror: computed(() => opponentTeamId.value !== teamId.value) });
</script>
