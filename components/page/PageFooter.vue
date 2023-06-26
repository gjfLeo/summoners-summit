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
          <NuxtLink to="https://github.com/gjfLeo/summoners-summit" target="_blank">
            <n-icon class="text-2xl"><div class="i-carbon:logo-github" /></n-icon>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <div>欢迎建议和纠错</div>
          <NuxtLink to="https://nga.178.com/read.php?tid=36782766" target="_blank">
            <n-icon class="text-2xl"><div class="i-nga" /></n-icon>
          </NuxtLink>
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

<style scoped>
.i-nga {
  width: 1.2em;
  height: 1.2em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApFJREFUeNqsll9ojlEcx989e4uFcIELZlnExWptWrJRrKQpK9MSIkqSUiim0JJ2sXax5UabGyluVovdTMpcaEpv6C1uLLR2wwU1fzJ/hs+vvk+dTue8z3vhW5/e5/c+5znf55zzO7/zVDRs3pIroUXQAW3QBDVQCXMwBQUYg5HnTx5/iXVSETGpgi44DYtz2ZqBAejF7Lt/Mwk8UA9F6C7TIKd21r7Y2Ly1PsukFSZgnff/Hy/+GjGz5yYwao2Z2BuMwoLAw3eca2vzQtehdbDnR90RJc4aDAcMfsBJuKv4PRyFlfALLkRGZP0MY1TlmnQFpsg0CNfhg+JuGVuWXZWp6SV8DExdV5pdlqbTkUX+Bv3QCLvgHMzqd62MDsA2eBPJuuq89kEsi2y4x2G54j7H/Azsh2PQ7Iyozsu6jrw2WkiWUYfhNsyD1bBKU3XK9oTaWXwCLuql6rx+2hLtZF+2qHtlkCbAJDyCm7AJLsFPGNJ02u7fHuirKdGb+BpyMsqmagRuaQQV8Bt61PlTtXsALYG+ahLVIl/TzvVC2AOH4Brcg6W690odn9eoQqpMVOx8ufP6Fj458W54BhstoFbNQZ/+C2kuUTX1dTDtRCp499eo/Fjm5dh0KyKVwjSVVwe1fnWGG1qHWcW+LOMGMTirrIuZFPI6D/YFbjYIXz16qfWwQb+lNJa143OBWjbfiXcoq0qdM9WJKulAmefGZy9+CO9KtB+wEzMtkL3abFlaBkec2Kb7b6TtZFoVUhM7MjtVk7LUr+KYU3bVRgprZ3oUu4eWHbntZRgtgddwHy5HDNoxKMaO33Ht4Kyps5Te6VRnd4paMBjP+pAo6ii+ouwoRzNqX++OIOuT6L9+d/0TYADFM6ixD4QtSwAAAABJRU5ErkJggg==);
  background-size: 90%;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
