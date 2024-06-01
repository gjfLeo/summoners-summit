<script lang="ts" setup>
import type { CardId, Game } from "~/types/data";
import { AdminTournamentMatchCharacterCardSelector as CharacterCardSelector } from "#components";

defineProps<{
  player: "A" | "B";
}>();

const deck = defineModel<Game["playerADeck"]>("deck", { required: true });
const starter = defineModel<Game["starter"]>("starter", { required: true });
const winner = defineModel<Game["winner"]>("winner", { required: true });

const characterCardSelectorRefs = ref<(InstanceType<typeof CharacterCardSelector> | null)[]>([]);

function bindInputCharacterRef(i: number) {
  return (el: any) => characterCardSelectorRefs.value[i] = el;
}
function handleCharacterSelected(i: number) {
  if (i < 2) {
    characterCardSelectorRefs.value[i + 1]?.focus();
  }
}
</script>

<template>
  <div un-flex="~ items-center justify-center gap-2">
    <NTextSwitch
      warn-when-undefined
      :value="starter === player"
      @update:value="starter = player"
    >
      先
    </NTextSwitch>
    <NTextSwitch
      warn-when-undefined
      :value="winner === player"
      @update:value="winner = player"
    >
      胜
    </NTextSwitch>
    <div un-flex="~ gap-1">
      <template v-for="i in 3" :key="i">
        <CharacterCardSelector
          :ref="bindInputCharacterRef(i - 1)"
          v-model="deck.characters[i - 1]"
          @update:model-value="handleCharacterSelected(i - 1)"
        />
      </template>
    </div>
  </div>
</template>
