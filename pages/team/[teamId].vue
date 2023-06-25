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

  <n-h3>
    行动牌选择
    <n-tooltip trigger="hover">
      <template #trigger><n-icon size="1rem"><div class="i-carbon:information" /></n-icon></template>
      <span>仅计算公布卡组的对局</span>
    </n-tooltip>
  </n-h3>
  <TeamCardUsages :team="teamId" />

  <n-h3>
    典型构筑
    <n-tooltip trigger="hover">
      <template #trigger><n-icon size="1rem"><div class="i-carbon:information" /></n-icon></template>
      <span>指与平均携带张数差距最小的一套构筑</span>
    </n-tooltip>
  </n-h3>
  <TeamDeck :team="teamId" />

  <n-h3>对阵数据</n-h3>
  <TeamTeamStatistics :team="teamId" />
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
