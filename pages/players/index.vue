<script setup lang="ts">
const { data } = await useFetch("/api/v3/players/list");
</script>

<template>
  <div>Players</div>
  <div>{{ data?.players }}</div>
</template>
