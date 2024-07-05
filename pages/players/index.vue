<template>
  <div>
    <div>Players</div>
    <div>{{ data?.players }}</div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/v3/players/list");
</script>
