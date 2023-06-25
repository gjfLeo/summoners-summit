<template>
  <div class="grid mt gap-2" grid-cols="6 md:10 lg:15">
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

const { teamId } = useTeamProp(props);
const { teamTypicalActions } = useTeamInfo(teamId);
const actionCards = Object.entries(teamTypicalActions.value).flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard));
</script>
