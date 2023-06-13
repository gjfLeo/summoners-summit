<template>
  <div v-for="team in teamList" :key="team">
    <NuxtLink :to="`/team/${team}`" class="text-lime-600 underline">{{ team }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { teamList } from "~/data";
</script>
