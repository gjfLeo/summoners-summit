<template>
  <div u-grid="~ cols-6 md:cols-10 lg:cols-15 gap-2">
    <template v-for="(card, i) in deckActionCards" :key="i">
      <div class="card-container" @click="remove(card)">
        <CardImage :card="card" class="w-100%" />
        <div class="card-shadow">
          <NText text-4xl text-white><NIcon><div class="i-carbon:close" /></NIcon></NText>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { type ActionCard, actionCardSorter } from "~/utils/cards";
import type { Deck } from "~/utils/types";

const props = defineProps<{
  actions?: Deck["actionCards"];
}>();

const emit = defineEmits<{
  (e: "update:actions", v: Deck["actionCards"]): void;
}>();

const deckActionCards = computed(() => Object.entries(props.actions ?? {})
  .flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard))
  .sort(actionCardSorter),
);

function remove(card: ActionCard) {
  if (props.actions?.[card] === 2) {
    emit("update:actions", Object.assign({}, props.actions, { [card]: 1 }));
  }
  else if (props.actions?.[card] === 1) {
    emit("update:actions", Object.fromEntries(Object.entries(props.actions).filter(([c]) => c !== card)));
  }
}
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template: 1fr / 1fr;
  cursor: pointer;

  &>* {
    grid-area: 1 / 1 / 2 / 2;
  }
}

.card-shadow {
  border-radius: 0.25rem;
  background-color: #4448;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-container:not(:hover) & {
    display: none;
  }
}
</style>
