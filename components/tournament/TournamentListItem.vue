<template>
  <NuxtLink :to="link">
    <div class="flex items-center justify-center border border-rd-2 p-4 transition hover:border-lime hover:text-lime-6">{{ tournament.name }}</div>
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
