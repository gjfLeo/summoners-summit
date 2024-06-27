<script lang="ts" setup>
definePageMeta({ title: "site.titles.admin.tournament" });

const route = useRoute("admin-tournament-tournamentId___zh");
const id = route.params.tournamentId;

const { t } = useLocales();

if (!id) {
  await navigateTo({ name: route.name });
  throw createError("NOT_ACCESSIBLE");
}

const { tournament, matches, games, refresh } = await useApiGetTournament({ id });

provide("matches", matches);
provide("games", games);
</script>

<template>
  <div>
    <!-- <pre class="fixed z-1 w-16rem">{{ tournament }}</pre> -->
    <AdminTournamentForm v-model="tournament" @save="refresh" />

    <SitePageAnchors>
      <NAnchorLink
        :title="t('admin.tournament.title')"
        href="#title"
      >
        <NAnchorLink
          v-for="stage in tournament.stages"
          :key="stage._key"
          :title="stage.name.zh ?? t('main.tournament.stage')"
          :href="`#S${stage._key}`"
        >
          <template v-if="stage.parts.length > 1">
            <NAnchorLink
              v-for="part in stage.parts"
              :key="part._key"
              :title="part.name.zh ?? t('main.tournament.part')"
              :href="`#S${stage._key}P${part._key}`"
            />
          </template>
        </NAnchorLink>
      </NAnchorLink>
    </SitePageAnchors>
  </div>
</template>
