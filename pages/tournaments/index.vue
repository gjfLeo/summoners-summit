<template>
  <div>
    <template v-for="season in seasons" :key="season">
      <NH2 :id="`S${season}`">第{{ season }}赛季</NH2>
      <template v-for="(list, gameVersion) in bySeason[season]" :key="gameVersion">
        <NH2 :id="gameVersion.replace('.', '-')">{{ gameVersion }}</NH2>
        <TournamentList :tournaments="list" @item-click="handleItemClick" />
      </template>
    </template>

    <SitePageAnchors>
      <template v-for="season in seasons" :key="season">
        <NAnchorLink
          :title="`第\u2006${season}\u2006赛季`"
          :href="`#S${season}`"
        >
          <template v-for="(list, gameVersion) in bySeason[season]" :key="gameVersion">
            <NAnchorLink
              :title="gameVersion"
              :href="`#${gameVersion.replace('.', '-')}`"
            />
          </template>
        </NAnchorLink>
      </template>
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
import type { GameVersionId, SeasonPhraseId, TournamentDetailBrief, TournamentId } from "~/types/data";

const { t } = useLocales();
useHead({ title: t("site.titles.main.tournaments") });

const { tournaments } = await useApiGetTournamentList();
const { gameVersionList } = useSharedData();

const bySeason = computed(() => {
  const bySeason: Record<SeasonPhraseId, Record<GameVersionId, TournamentDetailBrief[]>> = {};
  tournaments.value.forEach((tournament) => {
    const gameVersionId = tournament.gameVersion;
    const gameVersion = gameVersionList.value.find(v => v.id === gameVersionId);
    if (!gameVersion) {
      return;
    }
    const season = gameVersion.seasonPhrase.split(".")[0];
    if (!bySeason[season]) bySeason[season] = {};
    if (!bySeason[season][gameVersionId]) bySeason[season][gameVersionId] = [];
    bySeason[season][gameVersionId].push(tournament);
  });
  return bySeason;
});
const seasons = computed(() => Object.keys(bySeason.value).sort().reverse());

const router = useRouter();
const localePath = useLocalePath();
function handleItemClick(tournamentId: TournamentId) {
  router.push(localePath(`/tournament/${tournamentId}`));
}
</script>
