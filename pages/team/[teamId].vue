<template>
  <div class="grid justify-center gap-2" style="grid-template-columns: repeat(3, minmax(0, 8rem));">
    <template v-for="(card, i) in team" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <div class="mt flex flex-wrap justify-center gap-8">
    <n-statistic label="选取数" :value="pick" />
    <n-statistic label="获胜数" :value="win" />
    <n-statistic label="胜率" :value="winRate" />
    <n-statistic label="净胜场" :value="winDifferential" />
  </div>

  <h1 class="mt text-xl font-bold">行动牌选择</h1>
  <TeamCardUsages :games="teamGameList" />

  <h1 class="mt text-xl font-bold">对阵数据</h1>
  <TeamTeamStatistics :games="teamGameList" />
</template>

<script lang="ts" setup>
import { divide, subtract } from "mathjs/number";
import { characterCardSorter, gameList } from "~/data";
import type { CharacterCard, Game } from "~/utils/types";

const route = useRoute();
const teamId = route.params.teamId as string;
const team = (teamId.split("-") as CharacterCard[]).sort(characterCardSorter);

useHead({
  title: `${team.join(" & ")} - 阵容数据 | 召唤之颠`,
});

// 非标准则跳转
const normalizedTeamId = team.join("-");
if (normalizedTeamId !== teamId) {
  navigateTo(`/team/${encodeURIComponent(normalizedTeamId)}`, { replace: true });
}

// const decks = findDecksByTeam(teamId);
const teamGameList = gameList.flatMap((game) => {
  const { playerA, playerB, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
  const playerATeamId = getTeamId(playerACharacters);
  const playerBTeamId = getTeamId(playerBCharacters);
  const teamGames = new Array<Game>();
  if (playerATeamId === teamId) {
    teamGames.push(game);
  }
  if (playerBTeamId === teamId) {
    teamGames.push({
      ...game,
      playerA: playerB,
      playerB: playerA,
      playerACharacters: playerBCharacters,
      playerBCharacters: playerACharacters,
      playerADeckId: playerBDeckId,
      playerBDeckId: playerADeckId,
      starter: starter === "A" ? "B" : "A",
      winner: winner === "A" ? "B" : "A",
    });
  }
  return teamGames;
});

const pick = computed(() => teamGameList.length);
const win = computed(() => teamGameList.filter(game => game.winner === "A").length);
const winRate = computed(() => toPercentageString(divide(win.value, pick.value)));
const winDifferential = computed(() => subtract(win.value, subtract(pick.value, win.value)));
</script>
