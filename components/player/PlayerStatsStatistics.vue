<template>
  <div class="mt flex flex-wrap justify-center gap-8">
    <NStatistic label="总统计场数" :value="matchTotal" />
    <NStatistic label="总场次胜率" :value="matchWinRate" />
    <NStatistic label="总对局胜率" :value="gameWinRate" />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { NStatistic } from "naive-ui";
import type { ApiPlayerStatsByVersionData } from "~/utils/types";

const props = defineProps<{
  statsByVersion: ApiPlayerStatsByVersionData["statsByVersion"];
}>();

const matchTotal = computed(() => Object.values(props.statsByVersion).map(s => s.matchTotal).reduce((a, b) => a + b, 0));
const matchWin = computed(() => Object.values(props.statsByVersion).map(s => s.matchWin).reduce((a, b) => a + b, 0));
const gameTotal = computed(() => Object.values(props.statsByVersion).map(s => s.gameTotal).reduce((a, b) => a + b, 0));
const gameWin = computed(() => Object.values(props.statsByVersion).map(s => s.gameWin).reduce((a, b) => a + b, 0));

const matchWinRate = computed(() => toPercentageString(divide(matchWin.value, matchTotal.value)));
const gameWinRate = computed(() => toPercentageString(divide(gameWin.value, gameTotal.value)));
</script>
