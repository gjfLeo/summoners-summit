<template>
  <div>
    <div id="team" un-grid="~ md:cols-[auto_1fr] items-end gap-8">
      <div un-grid="~ cols-[repeat(3,minmax(0,8rem))] gap-2">
        <div v-for="cardId in characters" :key="cardId">
          <CardImage class="" :card="cardId" />
        </div>
      </div>
      <Team_BasicStats />
    </div>

    <NH2 id="decks">{{ t('main.team.decks') }}</NH2>
    <Team_Decks />

    <NH2 id="cards">{{ t('main.team.cards') }}</NH2>
    <Team_CardUsages />

    <NH2 id="matchups">{{ t('main.team.matchups.title') }}</NH2>
    <Team_Matchups
      :games="games"
      :game-version="gameVersion"
      @view-games="handleViewGames"
    />

    <NH2 id="games">{{ t('main.team.gameList.title') }}</NH2>
    <Team_GameList ref="refGameList" :games="games" />

    <NH2 id="stats-by-version">{{ t('main.team.statsByVersion.title') }}</NH2>
    <Team_StatsByVersion />

    <SitePageAnchors ref="refAnchors">
      <NAnchorLink :title="t('main.team.details')" href="#team" />
      <NAnchorLink :title="t('main.team.decks')" href="#decks" />
      <NAnchorLink :title="t('main.team.cards')" href="#cards" />
      <NAnchorLink :title="t('main.team.matchups.title')" href="#matchups" />
      <NAnchorLink :title="t('main.team.gameList.title')" href="#games" />
      <NAnchorLink :title="t('main.team.statsByVersion.title')" href="#stats-by-version" />
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
import type { SitePageAnchors, TeamGameList } from "#components";
import type { DeckTeamId } from "~/types";

const route = useRoute("team-teamId-gameVersion___zh");
const teamId = computed(() => route.params.teamId);

const { t, currentLocalized } = useLocales();
const { characterCardById } = await useAsyncSharedData();

const characters = computed(() => getCharacterCardsByTeamId(teamId.value));
const teamName = computed(() => characters.value.map(cardId => currentLocalized(characterCardById.value[cardId].name)).join(" & "));
useHead({ title: t("site.titles.main.team", [teamName.value]) });

const { gameVersion } = useGameVersion();
const { games } = await useApiGetGameList({
  gameVersion: gameVersion.value,
  teamId: teamId.value,
});

const refGameList = ref<InstanceType<typeof TeamGameList>>();
const refAnchors = ref<InstanceType<typeof SitePageAnchors>>();
function handleViewGames(opponentTeamId: DeckTeamId) {
  refGameList.value?.setOpponentTeamId(opponentTeamId);
  refAnchors.value?.scrollTo("#games");
}
</script>
