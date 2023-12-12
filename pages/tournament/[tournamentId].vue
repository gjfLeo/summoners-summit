<template>
  <NH1>{{ tournament.name }}</NH1>

  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <NH2>{{ stage.name }}</NH2>
    <TournamentRules v-if="stage.rules" :rules="stage.rules" />
    <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
      <template v-for="matchId in part.matchIds" :key="matchId">
        <TournamentMatch :part-name="part.name" :match="matches[matchId]" :games="filterGames(matchId)" />
      </template>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { NH1, NH2 } from "naive-ui";
import type { MatchId } from "~/utils/types";

const route = useRoute();
const tournamentId = route.params.tournamentId as string;

const { tournament, matches, games } = await useApiTournamentDetail(tournamentId);

function filterGames(matchId: MatchId) {
  return Object.fromEntries(
    matches[matchId].gameIds
      .map(gameId => [gameId, games[gameId]]),
  );
}

useHead({ title: `${tournament.name} - 赛事记录 | 召唤之巅` });
</script>
