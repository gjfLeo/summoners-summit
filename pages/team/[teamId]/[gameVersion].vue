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

  <NTabs v-model:value="currentTab" size="large">
    <NTabPane name="usages" tab="构筑分析">
      <template v-if="totalWithDeck > 0">
        <NH4>行动牌选择</NH4>
        <TeamCardUsages :card-usages="cardUsageMap" :total-deck="totalWithDeck" />
        <div class="mt text-sm">
          <NText :depth="3">此数据仅统计公布卡组的{{ totalWithDeck }}场对局。</NText>
        </div>

        <NH4 class="flex items-center gap-2">
          <div>典型构筑</div>
          <NButton v-if="typicalDeck" class="ml-auto" size="small" @click="toTypicalDeckDetail">详情</NButton>
          <NButton v-if="typicalDeck" size="small" @click="copyTypicalDeckShareCode">复制分享码</NButton>
        </NH4>
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
    </NTabPane>
    <NTabPane name="statistics" tab="对阵数据">
      <TeamTeamStatistics :team-id="teamId" :vs="vsTeamStatsMap" @view-game-list="viewGameList" />
    </NTabPane>
    <NTabPane name="games" tab="对局历史">
      <CharacterSelector v-model="opponentCharacters" class="mb" placeholder="对手角色" />
      <GameListByPage :game-list="filteredGameList" />
    </NTabPane>
  </NTabs>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { NButton, NH4, NStatistic, NTabPane, NTabs, NText } from "naive-ui";
import { getCharactersByTeamId } from "~/utils/cards";
import type { CharacterCard } from "~/utils/types";

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

const currentTab = ref("usages");

const { total, win, totalWithDeck, winWithDeck } = basicStats;
const winRate = toPercentageString(divide(win, total));
const winDiff = win - (total - win);

const { gameList } = await useApiTeamGames(teamId.value, gameVersion.value);
const opponentCharacters = ref<CharacterCard[]>([]);
const filteredGameList = computed(() => gameList.filter(g => opponentCharacters.value.every(c => g.playerBCharacters.includes(c))));

function viewGameList(opponentTeamId: string) {
  opponentCharacters.value = getCharactersByTeamId(opponentTeamId);
  currentTab.value = "games";
}

const { copy: copyTypicalDeckShareCode } = useCopyDeckShareCode(typicalDeck);

async function toTypicalDeckDetail() {
  await navigateTo(`/deck/${typicalDeck?.id}`);
}
</script>
