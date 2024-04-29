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
    <NH2>{{ id ? t("admin.tournament.titleEdit") : t("admin.tournament.titleAdd") }}</NH2>
    <AdminEditBlock v-model="tournament">
      <template #view>
        {{ tournament }}
      </template>
      <template #edit="{ data: t11 }">
        <AdminTournamentForm v-model="tournament" />
      </template>
    </AdminEditBlock>
    <template v-if="tournament">
      <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
        <AdminTournamentStageForm v-model="tournament.stages[stageIndex]" />
      </template>
    </template>
  </div>
</template>
