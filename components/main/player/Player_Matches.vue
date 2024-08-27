<template>
  <div>
    <template v-for="match in matchList" :key="match.id">
      <NH3 un-flex="~ gap-2">
        <span>{{ match.gameVersion }}</span>
        <span>{{ currentLocalized(match.tournamentName) }}</span>
        <span>{{ currentLocalized(match.stageName) }}</span>
        <span>{{ currentLocalized(match.partName) }}</span>
      </NH3>
      <TournamentMatchGameList v-bind="{ match, games }" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ApiGetPlayerMatchesResponse } from "~/types";

const props = defineProps<ApiGetPlayerMatchesResponse>();
const { matchList, games } = toRefs(props);

const { currentLocalized } = useLocales();
</script>
