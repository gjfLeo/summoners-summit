<template>
  <template v-for="tournament in Object.values(tournamentById)" :key="tournament.id">
    <NuxtLink :to="`/tournament/${tournament.id}`" class="text-lime-500 underline">{{ tournament.name }}</NuxtLink>
  </template>
</template>

<script lang="ts" setup>
import { tournamentById } from "~/data";
</script>
