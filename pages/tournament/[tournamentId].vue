<template>
  <NH1>{{ tournament.name }}</NH1>

  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <NH2>{{ stage.name }}</NH2>
    <TournamentRules v-if="stage.rules" :rules="stage.rules" />
  </template>

  {{ tournament }}
</template>

<script lang="ts" setup>
import { NH1, NH2 } from "naive-ui";

const route = useRoute();
const tournamentId = route.params.tournamentId;

const { data } = await useFetch(`/api/tournament/${tournamentId}`);
if (!data.value) throw createError("获取数据失败");
const { tournament } = data.value;
if (!tournament) throw createError("赛事数据不存在");

useHead({ title: `${tournament?.name} - 赛事记录 | 召唤之巅` });
</script>
