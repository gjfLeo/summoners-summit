<template>
  <NH1>{{ player.uniqueName }}</NH1>
  <NText v-if="player.aliases?.length" :depth="3">其他昵称：{{ player.aliases.join("\u2006/\u2006") }}</NText>

  <div v-if="player.achievements?.length">
    <div v-for="achievement in player.achievements" :key="achievement" class="mt flex items-center gap-4">
      <img
        :src="ALL_ACHIEVEMENTS[achievement].cardBackImage" :alt="ALL_ACHIEVEMENTS[achievement].cardBackName"
        class="inline-block aspect-ratio-200/343 h-30 object-cover"
      />
      <div class="flex flex-col">
        <NH5>{{ ALL_ACHIEVEMENTS[achievement].cardBackName }}</NH5>
        <NText>{{ ALL_ACHIEVEMENTS[achievement].description }}</NText>
      </div>
    </div>
  </div>

  <div class="mt flex flex-wrap justify-center gap-8">
    <NStatistic label="统计场数" :value="matchTotal" />
    <NStatistic label="场次胜率" :value="matchWinRate" />
    <NStatistic label="对局胜率" :value="gameWinRate" />
  </div>
  <div class="mt flex justify-center text-sm">
    <NText class="items-end text-xs" :depth="3">统计可能不全，数据仅供参考</NText>
  </div>

  <NH2>对局记录</NH2>
  <template v-for="match in matchList" :key="match.id">
    <TournamentMatch
      :game-version="gameVersion === '' ? match.gameVersion : ''"
      :tournament-name="match.tournamentName"
      :part-name="`${match.partName}`"
      :match="match" :games="filterGames(match.id)"
    />
  </template>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { NH1, NH2, NH5, NStatistic, NText } from "naive-ui";
import { ALL_ACHIEVEMENTS } from "~/utils/achievements";

const route = useRoute();
const playerId = route.params.playerId as string;

const { gameVersion } = useGameVersion({ detect: true });

const { player } = await useApiPlayer(playerId);
useHead({ title: `${player.uniqueName} - 玩家数据 | 召唤之巅` });

const { matchList } = await useApiMatchList({ gameVersion: gameVersion.value, playerId });
const { gameList } = await useApiGameList({ gameVersion: gameVersion.value, playerId });
const matches = Object.fromEntries(matchList.map(match => [match.id, match]));
const games = Object.fromEntries(gameList.map(game => [game.id, game]));

function filterGames(matchId: string) {
  return Object.fromEntries(
    matches[matchId].gameIds
      .map(gameId => [gameId, games[gameId]]),
  );
}

const matchTotal = matchList.length;
const matchWin = matchList.filter(match => match.winner === "A").length;
const matchWinRate = toPercentageString(divide(matchWin, matchTotal));

const gameTotal = gameList.length;
const gameWin = gameList.filter(game => game.winner === "A").length;
const gameWinRate = toPercentageString(divide(gameWin, gameTotal));
</script>
