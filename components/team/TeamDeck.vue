<template>
  <div class="grid mt gap-2" grid-cols="6 md:10 lg:15">
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ActionCard } from "~/utils/types";

const props = defineProps<{
  typicalActions: ReturnType<typeof useCardUsage>["typicalActions"];
}>();

const actionCards = Object.entries(props.typicalActions).flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard));
</script>
