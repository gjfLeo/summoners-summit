<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2">
    <n-statistic label="已统计对局" :value="total" />
    <n-statistic label="含牌组对局" :value="totalWithDeck" />
  </div>
  <n-hr />
  <div class="grid lg:grid-cols-3 md:grid-cols-2">
    <n-statistic label="先手胜率" :value="starterWinPercent" />
    <n-statistic label="后手胜率" :value="followerWinPercent" />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { gameList } from "~/data";

useHead({ title: "统计 | 召唤之巅" });

const total = gameList.length;
const totalWithDeck = gameList.filter(game => game.playerADeckId && game.playerBDeckId).length;
const starterWin = gameList.filter(game => game.winner === game.starter).length;
const followerWin = gameList.filter(game => game.winner !== game.starter).length;
const starterWinPercent = toPercentageString(divide(starterWin, total));
const followerWinPercent = toPercentageString(divide(followerWin, total));
</script>
