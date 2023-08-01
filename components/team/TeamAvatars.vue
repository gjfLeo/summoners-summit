<template>
  <div class="mr-1 inline-flex justify-center">
    <CardAvatar
      v-for="card in characters" :key="card"
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

const characters = computed<CharacterCard[]>(() => {
  if (typeof props.team === "string") {
    return props.team.split("-") as CharacterCard[];
  }
  else {
    return props.team;
  }
});
</script>
