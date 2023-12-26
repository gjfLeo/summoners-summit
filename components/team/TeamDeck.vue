<template>
  <div
    class="mt"
    u-grid="~ gap-2 cols-6 md:cols-10 lg:cols-15"
  >
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { type ActionCard, actionCardSorter } from "~/utils/cards";
import type { Deck } from "~/utils/types";

const props = defineProps<{
  typicalActions: Deck["actionCards"];
}>();

const actionCards = Object.entries(props.typicalActions)
  .flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard))
  .sort(actionCardSorter)
;
</script>
