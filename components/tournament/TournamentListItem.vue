<template>
  <NuxtLink :to="link" :prefetch="false">
    <n-card :title="tournament.name" hoverable :style="{ '--n-color': tournament.type && cardColors[tournament.type] }">
      <!-- <template v-if="tournament.image" #cover>
        <img :src="tournament.image" />
      </template> -->
      <template #header>
        <div class="flex flex-wrap items-center">
          <div>{{ tournament.name }}</div>
          <n-tag v-if="tournament.type" class="ml-auto" size="small">{{ tournament.type }}</n-tag>
        </div>
      </template>
    </n-card>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { tournamentById } from "~/data";

const props = defineProps<{
  id: string;
}>();

const tournament = computed(() => tournamentById[props.id]);
const link = computed(() => `/tournament/${props.id}`);

const cardColors: Record<string, string> = {
  全民积分赛: "#cff2",
  积分赛试办赛: "#eff2",
  主播资格赛: "#ffc2",
};
</script>
