<template>
  <div class="h-full w-full flex items-center justify-center gap-4 p-4 text-sm text-dark-1">
    <div>召唤之巅——七圣召唤赛事资料 by gjfLeo</div>
    <div class="cursor-pointer underline" @click="showAboutDrawer = true">关于本站</div>
  </div>
  <n-drawer v-model:show="showAboutDrawer" :width="502" placement="bottom" :auto-focus="false">
    <n-drawer-content title="召唤之巅">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <div>by gjfLeo</div>
          <NuxtLink to="https://github.com/gjfLeo/summoners-summit"><div class="i-carbon:logo-github h-8 w-8" /></NuxtLink>
        </div>
        <div>更新时间：{{ updateTime }}</div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const updateTime = runtimeConfig.public.updateTime;

const showAboutDrawer = ref(false);
</script>
