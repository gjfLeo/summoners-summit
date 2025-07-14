<template>
  <div>
    <template v-for="(match, i) in matchList" :key="match.id">
      <NDivider v-if="i > 0 && match.tournamentId !== matchList[i - 1].tournamentId" />
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
const props = defineProps<{
  matchList: MatchDetail[];
  games: Record<GameId, Game>;
}>();
const { matchList, games } = toRefs(props);

const { currentLocalized } = useLocales();
</script>
