<template>
  <template v-for="(list, version) in listByVersion" :key="version">
    <NH2>{{ version }}</NH2>
    <TournamentList :list="list" />
  </template>
</template>

<script lang="ts" setup>
import { NH2 } from "naive-ui";
import type { Tournament } from "~/utils/types";

useHead({ title: "赛事 | 召唤之巅" });

const { gameVersion } = useGameVersion({ detect: true });

const { data, error } = await useFetch("/api/v1/tournaments", {
  query: { gameVersion: gameVersion.value },
});
if (error.value) throw createError({ ...error.value });
if (!data.value) throw createError("获取数据失败");

const { tournamentList } = data.value;

const listByVersion = tournamentList.reduce<Record<string, Tournament[]>>(
  (map, tournament) => {
    const gameVersion = tournament.gameVersion;
    const list = map[gameVersion] ?? [];
    list.push(tournament as Tournament);
    map[gameVersion] = list;
    return map;
  },
  {},
);
</script>
