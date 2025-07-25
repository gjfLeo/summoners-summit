<template>
  <template v-if="data">
    <Cards_ActionBarChart
      class="h-16rem"
      :action-card-stats="data"
    />
  </template>
  <template v-else-if="pending">
    <NSpin size="large" />
  </template>
</template>

<script lang="ts" setup>
const props = defineProps<{
  teamId: DeckTeamId;
  gameVersion: GameVersionId;
}>();
const { teamId, gameVersion } = toRefs(props);

const { data, pending } = useLazyFetch("/api/v4/action-cards-usages", {
  query: { teamId, gameVersion },
});
</script>
