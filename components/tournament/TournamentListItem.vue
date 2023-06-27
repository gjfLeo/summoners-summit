<template>
  <NuxtLink :to="link">
    <n-card :title="tournament.name" hoverable>
      <template v-if="tournament.image" #cover>
        <img :src="tournament.image" />
      </template>
      <template #header>
        <div class="flex flex-wrap items-center">
          <div>{{ tournament.name }}</div>
          <n-tag v-if="tournament.tag" class="ml-auto" size="small">{{ tournament.tag }}</n-tag>
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
</script>
