<template>
  <div>
    <TeamsStatsTable v-bind="{ gameVersion }" id="team-list" />
    <TeamsMatchupTable v-bind="{ gameVersion }" id="matchup-stats" class="mt-8" />

    <!-- <SitePageAnchors>
      <NAnchorLink :title="t('main.teams.anchors.teamList')" href="#team-list" />
      <NAnchorLink :title="t('main.teams.anchors.matchupStats')" href="#matchup-stats" />
    </SitePageAnchors> -->
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocales();
useHead({ title: t("site.titles.main.teams") });

const { gameVersion } = useGameVersion();
</script>
