<template>
  <NH1>{{ tournament.name }}</NH1>

  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <NH2>{{ stage.name }}</NH2>
    <TournamentRules v-if="stage.rules" :rules="stage.rules" />
    <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
      <template v-for="matchId in part.matchIds" :key="matchId">
        <TournamentMatch :part-name="part.name" :match-id="matchId" />
      </template>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { NH1, NH2 } from "naive-ui";

const route = useRoute();
const tournamentId = route.params.tournamentId;

const { data, error } = await useFetch(`/api/v1/tournaments/${tournamentId}`);
if (error.value) throw createError({ ...error.value });
if (!data.value?.tournament) throw createError("获取数据失败");
const { tournament } = data.value;

useHead({ title: `${tournament.name} - 赛事记录 | 召唤之巅` });
</script>
