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

  <template v-if="totalWithDeck > 0">
    <NH3>行动牌选择</NH3>
    <TeamCardUsages :card-usages="cardUsageMap" :total-deck="totalWithDeck" />
    <div class="mt text-sm">
      <NText :depth="3">此数据仅统计公布卡组的{{ totalWithDeck }}场对局。</NText>
    </div>

    <NH3 class="flex items-center gap-2">
      <div>典型构筑</div>
      <NButton v-if="typicalDeck" class="ml-auto" size="small" @click="toTypicalDeckDetail">详情</NButton>
      <NButton v-if="typicalDeck" size="small" @click="copyTypicalDeckShareCode">复制分享码</NButton>
    </NH3>
    <template v-if="typicalDeck">
      <TeamDeck :typical-actions="typicalDeck.actionCards" />
      <div class="mt text-sm">
        <NText :depth="3">此数据仅统计公布卡组的{{ winWithDeck }}场获胜对局。</NText>
      </div>
    </template>
    <template v-else>
      <div class="mt text-sm">
        <NText :depth="3">此阵容没有公布卡组的获胜对局。</NText>
      </div>
    </template>
  </template>
  <template v-else>
    <div class="mt text-sm">
      <NText :depth="3">此阵容没有公布卡组的对局。</NText>
    </div>
  </template>

  <NH3>对阵数据</NH3>
  <TeamTeamStatistics :team-id="teamId" :vs="vsTeamStatsMap" />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { NButton, NH3, NStatistic, NText } from "naive-ui";

const route = useRoute();
const { teamId, team, teamDisplayName } = useTeam(route.params.teamId as string);

useHead({ title: `${teamDisplayName.value} - 阵容数据 | 召唤之巅` });

// 非标准则跳转
if (route.params.teamId !== teamId.value) {
  await navigateTo(`/team/${teamId.value}`, { replace: true });
}

const { gameVersion } = useGameVersion({ detect: true });
const { basicStats, cardUsageMap, typicalDeckId, vsTeamStatsMap } = await useApiTeamStats(teamId.value, gameVersion.value);

const { deck: typicalDeck } = typicalDeckId ? (await useApiDeck(typicalDeckId)) : { deck: undefined };

const { total, win, totalWithDeck, winWithDeck } = basicStats;
const winRate = toPercentageString(divide(win, total));
const winDiff = win - (total - win);

const { copy: copyTypicalDeckShareCode } = useCopyDeckShareCode(typicalDeck);

async function toTypicalDeckDetail() {
  await navigateTo(`/deck/${typicalDeck?.id}`);
}
</script>
