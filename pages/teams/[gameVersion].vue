<template>
  <div>{{ gameVersion }}</div>
</template>

<script lang="ts" setup>
const route = useRoute("teams-gameVersion___zh");
const gameVersion = route.params.gameVersion;
</script>
