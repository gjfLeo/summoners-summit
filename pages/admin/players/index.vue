<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});

const { data: players, refresh: queryPlayers } = await useFetch("/api/v3/players", {
  method: "GET",
  immediate: false,
});
</script>

<template>
  <NSpace vertical>
    <NSpace>
      <NButton type="primary" @click="queryPlayers()">查询</NButton>
    </NSpace>
    <div>
      {{ players }}
    </div>
  </NSpace>
</template>
