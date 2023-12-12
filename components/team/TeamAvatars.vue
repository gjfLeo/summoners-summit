<template>
  <div class="mr-1 inline-flex justify-center">
    <CardAvatar
      v-for="card in characterCards" :key="card"
      :card="card"
      class="mr--1 h-8 border border-light-9 rd-50%"
    />
  </div>
</template>

<script lang="ts" setup>
import { getCharactersByTeamId } from "~/utils/cards";
import type { CharacterCard, TeamId } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | TeamId;
}>();

const characterCards = computed(() => {
  if (typeof props.team === "string") {
    return getCharactersByTeamId(props.team);
  }
  else {
    return props.team;
  }
});
</script>
