<template>
  <NH1>{{ player.uniqueName }}</NH1>
  <NText v-if="player.aliases?.length" class="mt block" :depth="3">其他昵称：{{ player.aliases.join("\u2006/\u2006") }}</NText>
  <NText v-if="player.awards?.length" class="mt block" :depth="2">{{ player.awards.join("、") }}</NText>

  <div v-if="player.achievements?.length">
    <NCard v-for="achievement in player.achievements" :key="achievement" class="mt">
      <div class="flex items-center gap-4">
        <img
          :src="ALL_ACHIEVEMENTS[achievement].cardBackImage" :alt="ALL_ACHIEVEMENTS[achievement].cardBackName"
          class="inline-block aspect-ratio-200/343 h-30 object-cover"
        />
        <div class="flex flex-col gap-2">
          <NText :depth="1" class="text-120%">{{ ALL_ACHIEVEMENTS[achievement].cardBackName }}</NText>
          <NText :depth="2">{{ ALL_ACHIEVEMENTS[achievement].description }}</NText>
          <NText v-if="ALL_ACHIEVEMENTS[achievement].flavorText" :depth="3">{{ ALL_ACHIEVEMENTS[achievement].flavorText }}</NText>
        </div>
      </div>
    </NCard>
  </div>

  <div class="mt h-60 flex justify-center">
    <Chart
      id="stats-by-version"
      :options="chartOptions"
      :data="chartData"
      type="bar"
    />
  </div>

  <template v-if="matchTotal > 0">
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
  <template v-else>
    <NText :depth="3">该选手在当前选择的游戏版本没有对局记录。</NText>
  </template>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { NCard, NH1, NH2, NStatistic, NText } from "naive-ui";
import { Chart } from "vue-chartjs";
import {
  BarController, BarElement, CategoryScale,
  Chart as ChartJS, Colors, Legend, LineController, LineElement, LinearScale, PointElement,
  Title, Tooltip,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { ALL_ACHIEVEMENTS } from "~/utils/achievements";
import type { ApiTournamentDetailsGamesValue } from "~/utils/types";

const route = useRoute();
const playerId = route.params.playerId as string;

const { gameVersion } = useGameVersion({ detect: true });

const { player } = await useApiPlayer(playerId);
useHead({ title: `${player.uniqueName} - 玩家数据 | 召唤之巅` });

const { matchList } = await useApiMatchList({ gameVersion: gameVersion.value, playerId });
const { gameList } = await useApiGameList({ gameVersion: gameVersion.value, playerId });
const matches = Object.fromEntries(matchList.map(match => [match.id, match]));
const games = Object.fromEntries(gameList.map(game => [game.id, game]));

function filterGames(matchId: string): Record<string, ApiTournamentDetailsGamesValue> {
  const map = Object.fromEntries(
    matches[matchId].gameIds
      .map(gameId => [gameId, games[gameId]]),
  );
  return map;
}

const matchTotal = matchList.length;
const matchWin = matchList.filter(match => match.winner === "A").length;
const matchWinRate = toPercentageString(divide(matchWin, matchTotal));

const gameTotal = gameList.length;
const gameWin = gameList.filter(game => game.winner === "A").length;
const gameWinRate = toPercentageString(divide(gameWin, gameTotal));

const { statsByVersion } = await useApiPlayerStatsByVersion(playerId);
const statsByVersionList = Object.entries(statsByVersion)
  .map(([gameVersion, stats]) => ({ gameVersion, ...stats }))
  .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion));

ChartJS.register(
  Title, Tooltip, Legend, Colors,
  CategoryScale, LinearScale, PointElement, LineElement, LineController, BarElement,
  BarController,
);

const chartData: ChartData = {
  labels: statsByVersionList.map(item => item.gameVersion),
  datasets: [
    {
      label: "场次胜率",
      data: statsByVersionList.map(item => divide(item.matchWin, item.matchTotal)),
      yAxisID: "yPercent",
      borderColor: "#368cf1c0",
      backgroundColor: "#368cf1",
      type: "line",
    },
    {
      label: "对局胜率",
      data: statsByVersionList.map(item => divide(item.gameWin, item.gameTotal)),
      yAxisID: "yPercent",
      borderColor: "#f1a936c0",
      backgroundColor: "#f1a936",
      type: "line",
    },
    {
      label: "胜场数",
      data: statsByVersionList.map(item => item.matchWin),
      backgroundColor: "#368cf180",
      yAxisID: "yCount",
      categoryPercentage: 0.5,
      stack: "matchStack",
      type: "bar",
    },
    {
      label: "负场数",
      data: statsByVersionList.map(item => item.matchTotal - item.matchWin),
      backgroundColor: "#808080",
      yAxisID: "yCount",
      categoryPercentage: 0.5,
      stack: "matchStack",
      type: "bar",
    },
  ],
};
const chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    // tooltip: {
    //   callbacks: {
    //     footer: (tooltipItems) => {
    //       let sum = 0;
    //       tooltipItems.forEach((tooltipItem) => {
    //         sum += tooltipItem.parsed.y;
    //       });
    //       return `Sum: ${sum}`;
    //     },
    //   },
    // },
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "版本",
      },
    },
    yCount: {
      stacked: true,
      title: {
        display: true,
        text: "场数",
      },
    },
    yPercent: {
      min: 0,
      max: 1,
      ticks: {
        callback: s => toPercentageString(Number(s)),
        stepSize: 0.25,
      },
      position: "right",
      title: {
        display: true,
        text: "胜率",
      },
    },
  },
};
</script>
