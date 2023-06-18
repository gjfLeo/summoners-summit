<template>
  <div class="grid grid-cols-9 grid-rows-9 aspect-ratio-1" style="filter: drop-shadow(0 0 1px #888)">
    <template v-if="teamElement.e3">
      <img :src="elementImages[teamElement.e3]" style="grid-area: 1 / 1 / 10 / 10" />
    </template>
    <template v-else-if="teamElement.e2">
      <img :src="elementImages[teamElement.e2]" style="grid-area: 2 / 2 / 9 / 9" />
      <img :src="elementImages[teamElement.e1s[0]]" style="grid-area: 6 / 6 / 10 / 10" />
    </template>
    <template v-else>
      <img :src="elementImages[teamElement.e1s[0]]" style="grid-area: 1 / 1 / 6 / 6" />
      <img :src="elementImages[teamElement.e1s[2]]" style="grid-area: 5 / 3 / 10 / 8" />
      <img :src="elementImages[teamElement.e1s[1]]" style="grid-area: 1 / 5 / 6 / 10" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { characterElement, elementSorter } from "~/data/shared/utils";
import type { CharacterCard, GElement } from "~/utils/types";
import { elementImages } from "~/data";

const props = defineProps<{
  team: string;
}>();

const characters = computed(() => props.team.split("-") as CharacterCard[]);
const elements = computed(() => characters.value.map(character => characterElement[character]));

const teamElement = computed(() => {
  const map: Partial<Record<GElement, number>> = {};
  elements.value.forEach((element) => {
    map[element] = (map[element] ?? 0) + 1;
  });
  return {
    e3: (Object.keys(map) as GElement[]).find(element => map[element] === 3),
    e2: (Object.keys(map) as GElement[]).find(element => map[element] === 2),
    e1s: (Object.keys(map) as GElement[]).filter(element => map[element] === 1).sort(elementSorter),
  };
});
</script>
