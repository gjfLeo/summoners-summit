<template>
  <div class="grid justify-center gap-2" style="grid-template-columns: repeat(3, minmax(0, 8rem));">
    <template v-for="(card, i) in characterCards" :key="i">
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
      <template v-if="gameVersion">
        <CharacterSelector v-model="opponentCharacters" class="mb" placeholder="对手角色" />
        <GameList :game-list="filteredGameList" />
      </template>
      <template v-else>
        <NText :depth="3">全版本对局历史暂不支持，请指定游戏版本后查看。</NText>
      </template>
    </NTabPane>
    <NTabPane name="statsByVersion" tab="版本数据">
      <TeamStatsByVersionChart :stats-by-version="statsByVersion" />
      <div class="flex justify-end">
        <NText class="flex gap-2 text-sm" :depth="3">
          <span>早期版本禁用数据未收录</span>
        </NText>
      </div>
    </NTabPane>
  </NTabs>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { NButton, NH4, NStatistic, NTabPane, NTabs, NText } from "naive-ui";
import { getCharactersByTeamId, normalizeTeamId } from "~/utils/cards";
import type { CharacterCard, TeamId } from "~/utils/types";

const route = useRoute();
const teamId = normalizeTeamId(route.params.teamId as TeamId);

// 非标准则跳转
if (route.params.teamId !== teamId) {
  await navigateTo(`/team/${teamId}`, { replace: true });
}

const characterCards = getCharactersByTeamId(teamId);

useHead({ title: `${characterCards.join(" & ")} - 阵容数据 | 召唤之巅` });

const { gameVersion } = useGameVersion({ detect: true });
const { basicStats, cardUsageMap, typicalDeckId, vsTeamStatsMap } = await useApiTeamStats(teamId, gameVersion.value);

const { deck: typicalDeck } = typicalDeckId ? (await useApiDeck(typicalDeckId)) : { deck: undefined };

const currentTab = ref("usages");

const { total, win, totalWithDeck, winWithDeck } = basicStats;
const winRate = toPercentageString(divide(win, total));
const winDiff = win - (total - win);

const { gameList } = await useApiTeamGames(teamId, gameVersion.value);
const opponentCharacters = ref<CharacterCard[]>([]);
const filteredGameList = computed(() => gameList.filter(g => opponentCharacters.value.every(c => g.playerBCharacters.includes(c))));

function viewGameList(opponentTeamId: TeamId) {
  opponentCharacters.value = getCharactersByTeamId(opponentTeamId);
  currentTab.value = "games";
}

const { copy: copyTypicalDeckShareCode } = useCopyDeckShareCode(typicalDeck);

async function toTypicalDeckDetail() {
  await navigateTo(`/deck/${typicalDeck?.id}`);
}

const { statsByVersion } = await useApiTeamStatsByVersion(teamId);
</script>
