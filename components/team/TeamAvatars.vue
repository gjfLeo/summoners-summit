<template>
  <div class="mr-1 inline-flex justify-center">
    <CardAvatar
      v-for="card in team" :key="card"
      :card="card"
      class="mr--1 h-8 border border-light-9 rd-50%"
    />
  </div>
</template>

<script lang="ts" setup>
import type { CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

const { team } = useTeam(props);
</script>
