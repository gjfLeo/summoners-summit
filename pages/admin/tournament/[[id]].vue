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
    <pre class="fixed left-0 top-3rem z-1 w-16rem">{{ tournament }}</pre>
    <NH2>{{ id ? t("admin.tournament.titleEdit") : t("admin.tournament.titleAdd") }}</NH2>
    <AdminTournamentForm v-model="tournament" />
  </div>
</template>
