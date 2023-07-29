<template>
  <template v-if="gameVersion">
    <TournamentList :list="listByVersion[gameVersion]" />
  </template>
  <template v-else>
    <template v-for="(list, version) in listByVersion" :key="version">
      <n-h2>{{ version }}</n-h2>
      <TournamentList :list="list" />
    </template>
  </template>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/tournament/list");
const tournamentList = data.value?.tournamentList ?? [];

useHead({ title: "赛事 | 召唤之巅" });

const gameVersion = useGameVersion();

const listByVersion = computed(() => {
  return tournamentList.reduce<Record<string, string[]>>(
    (map, { id, gameVersion }) => {
      const list = map[gameVersion] ?? [];
      list.push(id);
      map[gameVersion] = list;
      return map;
    },
    {},
  );
});
</script>
