<template>
  <div
    class="mt text-center"
    u-flex="~ wrap items-center justify-center gap-4"
  >
    <NStatistic :label="$t('player.numMatches')" :value="matchTotal" />
    <NDivider class="h-12!" vertical />
    <NStatistic :label="$t('player.matchWinRate')" :value="matchWinRate" />
    <NDivider class="h-12!" vertical />
    <NStatistic :label="$t('player.gameWinRate')" :value="gameWinRate" />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
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
