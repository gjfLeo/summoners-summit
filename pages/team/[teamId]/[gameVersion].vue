<template>
  <div>
    <div un-grid="~ md:cols-[auto_1fr] items-end gap-8">
      <div un-grid="~ cols-[repeat(3,minmax(0,8rem))] gap-2">
        <div v-for="cardId in characters" :key="cardId">
          <CardImage class="" :card="cardId" />
        </div>
      </div>
      <Team_BasicStats />
    </div>

    <Team_Decks />
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
</script>
