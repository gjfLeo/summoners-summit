<template>
  <div>
    <template v-for="(match, i) in matches" :key="match.id">
      <NDivider v-if="i > 0 && match.tournamentId !== matches[i - 1].tournamentId" />
      <NH3 un-flex="~ gap-2">
        <span>{{ match.gameVersion }}</span>
        <span>{{ currentLocalized(match.tournamentName) }}</span>
        <span>{{ currentLocalized(match.stageName) }}</span>
        <span>{{ currentLocalized(match.partName) }}</span>
      </NH3>
      <TournamentMatchGameList v-bind="{ match, games: match.games }" />
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  matches: (MatchDetail & { games: Record<GameId, Game> })[];
}>();
const { matches } = toRefs(props);

const { currentLocalized } = useLocales();
</script>
