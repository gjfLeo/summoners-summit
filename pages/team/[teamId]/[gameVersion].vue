<template>
  <div>
    <div id="basic" un-grid="~ md:cols-[auto_1fr] items-end gap-8">
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

    <NH2 id="games">对局列表</NH2>
    <GameList :games="games" />

    <NH2 id="stats-by-version">版本数据</NH2>
    <Team_StatsByVersion />

    <SitePageAnchors>
      <NAnchorLink title="基本信息" href="#basic" />
      <NAnchorLink title="牌组" href="#decks" />
      <NAnchorLink title="卡牌" href="#cards" />
      <NAnchorLink title="对局列表" href="#games" />
      <NAnchorLink title="版本数据" href="#stats-by-version" />
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
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
</script>
