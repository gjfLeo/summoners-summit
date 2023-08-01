<template>
  <div grid="~ lg:cols-3 md:cols-2 gap-4">
    <template v-for="tournament in list" :key="tournament.id">
      <NuxtLink :to="`/tournament/${tournament.id}`" no-prefetch>
        <NCard :title="tournament.name" hoverable :style="{ '--n-color': tournament.type && cardColors[tournament.type] }">
          <template #header>
            <div class="flex flex-wrap items-center">
              <div>{{ tournament.name }}</div>
              <NTag v-if="tournament.type" class="ml-auto" size="small">{{ tournament.type }}</NTag>
            </div>
          </template>
        </NCard>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NTag } from "naive-ui";
import type { Tournament } from "~/utils/types";

defineProps<{
  list: Tournament[];
}>();

const cardColors: Record<string, string> = {
  全民积分赛: "#cff2",
  积分赛试办赛: "#eff2",
  主播资格赛: "#ffc2",
};
</script>
