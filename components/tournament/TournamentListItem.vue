<script lang="ts" setup>
import type { TournamentRB } from "~/types/data";

defineProps<{
  tournament: TournamentRB;
}>();

const { locale, t } = useLocales();
</script>

<template>
  <NCard :title="tournament.name[locale]" hoverable class="h-full cursor-pointer">
    <!-- <template #header>
      <div class="flex flex-wrap items-center">
        <div>{{ tournament.name[locale] }}</div>
      </div>
    </template> -->
    <template #default>
      <dl class="tournament-dl">
        <dt>{{ t('main.tournament.type') }}</dt>
        <dd>{{ tournament.type }}</dd>
        <dt>{{ t('main.tournament.dateRange') }}</dt>
        <dd>{{ tournament.dateRange.start }}&#x2006;~&#x2006;{{ tournament.dateRange.end ?? "" }}</dd>
        <template v-if="tournament.champion">
          <dt>{{ t('main.tournament.champion') }}</dt>
          <dd>
            <PlayerName :id="tournament.champion.playerId" :nickname="tournament.champion.nickname" />
          </dd>
        </template>
      </dl>
    </template>
  </NCard>
</template>

<style scoped>
.tournament-dl {
  @apply ml-2;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 2rem;

  @screen lt-sm {
    & {
      display: flex;
      flex-direction: column;
    }
    dd {
      @apply ml-6 mt--1;
    }
  }
}
</style>
