<template>
  <div class="h-full w-full flex items-center p-4">
    <div>召唤之颠</div>
    <div class="ml-auto text-xs text-dark-100">更新时间：{{ updateTime }}</div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const updateTime = runtimeConfig.public.updateTime;
</script>
