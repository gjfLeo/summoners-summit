<template>
  <div class="grid justify-center gap-2" style="grid-template-columns: repeat(3, minmax(0, 8rem));">
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <div class="mt flex flex-wrap justify-center gap-8">
    <NStatistic :label="$t('stats.gamesPlayed')" :value="total" />
    <NStatistic :label="$t('stats.gamesWin')" :value="win" />
    <NStatistic :label="$t('stats.winRate')" :value="winRate" />
    <NStatistic :label="$t('stats.gamesNetWins')" :value="winDiff" />
  </div>

  <NTabs v-model:value="currentTab" size="large">
    <NTabPane name="usages" :tab="$t('team.deckAnalysis')">
      <template v-if="totalWithDeck > 0">
        <NH4>{{ $t('team.actionCardUsages') }}</NH4>
        <TeamCardUsages :card-usages="cardUsageMap" :total-deck="totalWithDeck" />
        <div class="mt text-sm">
          <NText :depth="3">{{ $t('team.numDecks', totalWithDeck) }}</NText>
        </div>

        <NH4 class="flex items-center gap-2">
          <div>{{ t('deck.typicalDeck') }}</div>
          <NButton v-if="typicalDeck" class="ml-auto" size="small" @click="toTypicalDeckDetail">{{ t('actions.detail') }}</NButton>
          <NButton v-if="typicalDeck" size="small" @click="copyTypicalDeckShareCode">{{ t('actions.copyDeckShareCode') }}</NButton>
        </NH4>
        <template v-if="typicalDeck">
          <TeamDeck :typical-actions="typicalDeck.actionCards" />
          <div class="mt text-sm">
            <NText :depth="3">{{ $t('team.numDecksWin', winWithDeck) }}</NText>
          </div>
        </template>
        <template v-else>
          <div class="mt text-sm">
            <NText :depth="3">{{ $t('team.noWinGameWithDeck') }}</NText>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="mt text-sm">
          <NText :depth="3">{{ $t('team.noGameWithDeck') }}</NText>
        </div>
      </template>
    </NTabPane>
    <NTabPane name="statistics" :tab="$t('team.matchups')">
      <TeamTeamStatistics :team-id="teamId" :vs="vsTeamStatsMap" @view-game-list="viewGameList" />
    </NTabPane>
    <NTabPane name="games" :tab="$t('deck.gameList')">
      <template v-if="gameVersion">
        <CharacterSelector v-model="opponentCharacters" class="mb" :placeholder="$t('actions.characterSelector.opponentCharacter')" />
        <GameList :game-list="filteredGameList" />
      </template>
      <template v-else>
        <NText :depth="3">{{ $t('team.allVersionGameListUnsupported') }}</NText>
      </template>
    </NTabPane>
    <NTabPane name="statsByVersion" :tab="$t('team.statsByVersion')">
      <TeamStatsByVersionChart :stats-by-version="statsByVersion" />
    </NTabPane>
  </NTabs>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { ALL_CHARACTER_CARDS_INFO, getCharactersByTeamId, normalizeTeamId } from "~/utils/cards";
import type { CharacterCard, TeamId } from "~/utils/types";

const route = useRoute();
const teamId = normalizeTeamId(route.params.teamId as TeamId);

// 非标准则跳转
if (route.params.teamId !== teamId) {
  await navigateTo(`/team/${teamId}`, { replace: true });
}

const { t, locale } = useI18n();
const characterCards = getCharactersByTeamId(teamId);
const teamName = characterCards.map(c => locale.value === "en" ? ALL_CHARACTER_CARDS_INFO[c].nameEn : c).join (" & ");
useHead({ title: t("site.titleFormatWithName", [teamName, t("menu.teamStats"), t("site.name")]) });

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

onMounted(() => {
  if (history.state.tab) {
    currentTab.value = history.state.tab;
  }
  if (history.state.opponentTeamId) {
    opponentCharacters.value = getCharactersByTeamId(history.state.opponentTeamId);
  }
});
</script>
