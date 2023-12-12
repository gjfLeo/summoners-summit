<template>
  <div class="p-8 text-center">
    首页还没做，点击上方导航栏跳转~
  </div>
  <GlobalStatsByVersionTable :stats-list="statsList" />
</template>

<script lang="ts" setup>
const { statsList } = await useApiGlobalStatsListByVersion();
</script>
