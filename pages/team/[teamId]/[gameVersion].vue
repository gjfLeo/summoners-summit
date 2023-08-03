<template>
  <div class="grid justify-center gap-2" style="grid-template-columns: repeat(3, minmax(0, 8rem));">
    <template v-for="(card, i) in team" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <div class="mt flex flex-wrap justify-center gap-8">
    <NStatistic label="选取数" :value="total" />
    <NStatistic label="获胜数" :value="win" />
    <NStatistic label="胜率" :value="winRate" />
    <NStatistic label="净胜场" :value="winDiff" />
  </div>

  <template v-if="numGamesWithDeck > 0">
    <NH3>行动牌选择</NH3>
    <TeamCardUsages :card-usages="cardUsages" />
    <div class="mt text-sm">
      <NText :depth="3">此数据仅统计公布卡组的{{ numGamesWithDeck }}场对局。</NText>
    </div>

    <NH3>典型构筑</NH3>
    <TeamDeck :typical-actions="typicalActions" />
  </template>
  <template v-else>
    <div class="mt text-sm">
      <NText :depth="3">此阵容没有公布卡组的对局。</NText>
    </div>
  </template>

  <NH3>对阵数据</NH3>
  <TeamTeamStatistics :team-id="teamId" :game-list="gameList" />
</template>

<script lang="ts" setup>
import { NH3, NStatistic, NText } from "naive-ui";
import type { Deck } from "~/utils/types";

const route = useRoute();
const { teamId, team, teamDisplayName } = useTeam(route.params.teamId as string);

useHead({ title: `${teamDisplayName.value} - 阵容数据 | 召唤之巅` });

// 非标准则跳转
if (route.params.teamId !== teamId.value) {
  await navigateTo(`/team/${teamId.value}`, { replace: true });
}

const { gameVersion } = useGameVersion({ detect: true });
const { gameList } = await useGameList({ gameVersion: gameVersion.value, characters: team.value });

const deckIds = gameList.map(game => game.playerADeckId).join(",");
let decks: Record<string, Deck> = {};
if (deckIds.length > 0) {
  const { data } = await useFetch(`/api/decks/${deckIds}`);
  if (!data.value) throw createError("获取数据失败");
  decks = data.value.decks;
}

const { total, win, winRate, winDiff } = useGamesStatistics(gameList);
const { numGamesWithDeck, cardUsages, typicalActions } = useCardUsage(gameList, decks);
</script>
