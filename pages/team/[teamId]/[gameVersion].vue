<template>
  <div>Team {{ teamId }} Game Version {{ gameVersion }}</div>
</template>

<script lang="ts" setup>
const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;

const { gameVersion } = useGameVersion();
</script>
