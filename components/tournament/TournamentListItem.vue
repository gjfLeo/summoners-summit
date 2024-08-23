<template>
  <NCard :title="currentLocalized(tournament.name)" hoverable class="h-full">
    <template #default>
      <dl class="tournament-dl">
        <dt>{{ t('main.tournament.type') }}</dt>
        <dd>{{ tournament.type }}</dd>
        <dt>{{ t('main.tournament.dateRange') }}</dt>
        <dd>{{ tournament.dateRange.start }}&#x2006;~&#x2006;{{ tournament.dateRange.end ?? "" }}</dd>
        <template v-if="tournament.champion">
          <dt>{{ t('main.tournament.champion') }}</dt>
          <dd>
            <PlayerName :id="tournament.champion.playerId" :nickname="tournament.champion.nickname" :link="false" />
          </dd>
        </template>
      </dl>
    </template>
  </NCard>
</template>

<script lang="ts" setup>
import type { TournamentDetailBrief } from "~/types/data";

defineProps<{
  tournament: TournamentDetailBrief;
}>();

const { currentLocalized, t } = useLocales();
</script>

<style scoped>
.tournament-dl {
  @apply ml-2;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 2rem;
}

@screen lt-sm {
  .tournament-dl {
    display: flex;
    flex-direction: column;

    dd {
      margin-left: 1.5rem;
      margin-top: -0.25rem;
    }
  }
}
</style>
