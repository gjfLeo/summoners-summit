<template>
  <div>
    <div id="team" un-grid="~ md:cols-[auto_1fr] items-end gap-8">
      <div un-grid="~ cols-[repeat(3,minmax(0,8rem))] gap-2">
        <div v-for="cardId in characters" :key="cardId">
          <CardImage :card="cardId" />
        </div>
      </div>
      <TeamBasicStats v-bind="{ teamId, gameVersion }" />
    </div>

    <NH2 id="decks">{{ t('main.team.decks') }}</NH2>
    <TeamDecks v-bind="{ teamId, gameVersion }" />

    <NH2 id="cards">{{ t('main.team.cards') }}</NH2>
    <TeamActionCardsUsages v-bind="{ teamId, gameVersion }" />

    <NH2 id="matchups">{{ t('main.team.matchups.title') }}</NH2>
    <TeamMatchupStats v-bind="{ teamId, gameVersion }" @view-games="handleViewGames" />

    <NH2 id="games">{{ t('main.team.gameList.title') }}</NH2>
    <TeamGameList ref="refGameList" v-bind="{ teamId, gameVersion }" />

    <NH2 id="stats-by-version">{{ t('main.team.statsByVersion.title') }}</NH2>
    <TeamGameVersionStats v-bind="{ teamId, gameVersion }" />

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

const route = useRoute("team-teamId-gameVersion___zh");
const teamId = computed(() => route.params.teamId);

const { t, currentLocalized } = useLocales();
const { characterCardById } = await useAsyncSharedData();

const characters = computed(() => getCharacterCardsByTeamId(teamId.value));
const teamName = computed(() => characters.value.map(cardId => currentLocalized(characterCardById.value[cardId].name)).join(" & "));
useHead({ title: t("site.titles.main.team", [teamName.value]) });

const { gameVersion } = useGameVersion();

const refGameList = ref<InstanceType<typeof TeamGameList>>();
const refAnchors = ref<InstanceType<typeof SitePageAnchors>>();
function handleViewGames(opponentTeamId: DeckTeamId) {
  refGameList.value?.setOpponentTeamId(opponentTeamId);
  refAnchors.value?.scrollTo("#games");
}
</script>
