<script lang="ts" setup>
import type { CardId } from "~/types/data";
import {
  AdminTournamentMatchCharacterCardSelector as CharacterCardSelector,
} from "#components";

const cardIds = defineModel<CardId[]>("cardIds", { required: true });

const { decodeDeck } = useDeckEncoder();

const characterCardSelectorRefs = ref<(InstanceType<typeof CharacterCardSelector> | null)[]>([]);

const deckCards = computed(() => ({
  characterCards: cardIds.value,
  actionCards: [],
}));

const { copy } = useCopyDeckCode(deckCards);

function bindInputCharacterRef(i: number) {
  return (el: any) => characterCardSelectorRefs.value[i] = el;
}
function handleCharacterSelected(i: number) {
  if (i < 2) {
    characterCardSelectorRefs.value[i + 1]?.focus();
  }
}

function copyDeck() {
  copy();
}

const permissionClipboardRead = usePermission("clipboard-read");
const message = useMessage();
async function pasteDeck() {
  try {
    if (permissionClipboardRead.value === "denied") {
      throw new Error("无读取剪贴板权限");
    }
    const text = await navigator.clipboard.readText();
    const pastedDeck = decodeDeck(text);
    cardIds.value = pastedDeck.characterCards;
    message.success("已粘贴");
  }
  catch (e: any) {
    message.error(e.message);
  }
}
</script>

<template>
  <div un-flex="~ items-center justify-center gap-2">
    <div un-flex="~ gap-1">
      <template v-for="i in 3" :key="i">
        <CharacterCardSelector
          :ref="bindInputCharacterRef(i - 1)"
          v-model="cardIds[i - 1]"
          @update:model-value="handleCharacterSelected(i - 1)"
        />
      </template>
    </div>
    <CommonIconButton size="tiny" icon="i-carbon:copy" @click="copyDeck" />
    <CommonIconButton size="tiny" icon="i-carbon:paste" @click="pasteDeck" />
  </div>
</template>
