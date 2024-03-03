<template>
  <div u-grid="~ md:cols-2 gap-4">
    <template v-for="tournament in list" :key="tournament.id">
      <NuxtLinkLocale :to="`/tournament/${tournament.id}`" no-prefetch>
        <NCard :title="tournament.name" hoverable class="h-full">
          <template #header>
            <div class="flex flex-wrap items-center">
              <div>{{ tournament.name }}</div>
            </div>
          </template>
          <template #default>
            <dl class="tournament-dl">
              <dt>赛事类别</dt>
              <dd>{{ tournament.type ?? "其他" }}</dd>
              <dt>直播赛段时间</dt>
              <dd>{{ tournament.dateRange[0] }}&#x2006;~&#x2006;{{ tournament.dateRange[1] ?? "" }}</dd>
              <template v-if="tournament.championId && tournament.championNickname">
                <dt>冠军</dt>
                <dd><PlayerName :id="tournament.championId" :nickname="tournament.championNickname" /></dd>
              </template>
            </dl>
          </template>
        </NCard>
      </NuxtLinkLocale>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Tournament } from "~/utils/types";

defineProps<{
  list: Tournament[];
}>();

// const cardColors: Record<string, string> = {
//   全民积分赛: "#cff2",
//   积分赛试办赛: "#eff2",
//   主播资格赛: "#ffc2",
// };
</script>

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
