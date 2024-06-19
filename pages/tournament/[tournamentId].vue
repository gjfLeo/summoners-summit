<script lang="ts" setup>
const route = useRoute<"tournament-tournamentId___zh">();
const tournamentId = route.params.tournamentId;

const { t, currentLocalized } = useLocales();

const { tournament } = await useApiGetTournament({ id: tournamentId });
</script>

<template>
  <div v-if="tournament">
    <NH1 un-flex="~ items-end">
      <span>{{ currentLocalized(tournament.name) }}</span>
      <NText :depth="2" class="ml text-75%">{{ tournament.gameVersion }}</NText>
      <NText :depth="2" class="ml-2 text-75%">{{ tournament.type }}</NText>
    </NH1>
  </div>
</template>
