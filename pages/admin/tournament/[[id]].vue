<script lang="ts" setup>
import type { Tournament } from "~/types/data";

definePageMeta({ title: "site.titles.admin.tournament" });

const route = useRoute<"admin-tournament-id___zh">();
const id = route.params.id;

const { t } = useI18n();
const tournament = ref<Tournament>({
  id: "",
  name: {},
  gameVersion: "",
  type: "",
  stages: [],
});

if (id) {
  const { data } = await useFetch(() => "/api/v3/tournaments/get", {
    query: { id },
  });
  if (!data.value?.tournament) {
    await navigateTo({ name: route.name });
  }
  else {
    tournament.value = data.value.tournament;
  }
}
</script>

<template>
  <div>
    <!-- <pre class="fixed z-1 w-16rem">{{ tournament }}</pre> -->
    <AdminTournamentForm v-model="tournament" />

    <Teleport to="#main-content">
      <div class="position-fixed right-0 top-0 w-[calc(50%-32rem)]">
        <NAnchor>
          <NAnchorLink title="赛事信息">
            <NAnchorLink
              v-for="stage in tournament.stages"
              :key="stage._key"
              :title="stage.name.zh"
            >
              <NAnchorLink
                v-for="part in stage.parts"
                :key="part._key"
                :title="part.name.zh"
              />
            </NAnchorLink>
          </NAnchorLink>
        </NAnchor>
      </div>
    </Teleport>
  </div>
</template>
