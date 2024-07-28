<template>
  <div un-flex="~ items-center justify-center gap-2">
    <CommonTextButton
      :primary="starter === player"
      :strong="starter === player"
      :error="starter === undefined"
      text="先"
      @click="starter = player"
    />
    <CommonTextButton
      :primary="winner === player"
      :strong="winner === player"
      :error="winner === undefined"
      text="胜"
      @click="winner = player"
    />
    <div un-flex="~ gap-1">
      <template v-for="i in 3" :key="i">
        <CharacterCardSelector
          :ref="bindInputCharacterRef(i - 1)"
          v-model="deck.characters[i - 1]"
          @update:model-value="handleCharacterSelected(i - 1)"
        />
      </template>
    </div>
    <CommonTextButton
      :primary="actionCards.length === 30"
      :error="actionCards.length > 0 && actionCards.length < 30"
      @click="inputActionCards"
    >
      行动牌 ({{ actionCards.length }})
    </CommonTextButton>
    <CommonIconButton size="tiny" icon="i-mingcute:copy-line" @click="copyDeck" />
    <CommonIconButton size="tiny" icon="i-carbon:paste" @click="pasteDeck" />
  </div>
</template>

<script lang="ts" setup>
import type { CardId, Game } from "~/types/data";
import {
  type AdminTournamentMatchActionCardsEditor as ActionCardsEditor,
  AdminTournamentMatchCharacterCardSelector as CharacterCardSelector,
} from "#components";
import type { MatchSaveParams } from "~/server/service";

defineProps<{
  player: "A" | "B";
}>();

const deck = defineModel<MatchSaveParams["games"][number]["playerADeck"]>("deck", { required: true });
const starter = defineModel<Game["starter"]>("starter", { required: true });
const winner = defineModel<Game["winner"]>("winner", { required: true });

const { awaitData } = useSharedData();
await awaitData();
const { encodeDeck, decodeDeck } = useDeckEncoder();

const characterCardSelectorRefs = ref<(InstanceType<typeof CharacterCardSelector> | null)[]>([]);
const actionCardsEditor = inject<Ref<InstanceType<typeof ActionCardsEditor>>>("actionCardsEditor");

const actionCards = computed<CardId[]>({
  get() {
    return deck.value.deckCode ? decodeDeck(deck.value.deckCode).actionCards : [];
  },
  set(cards) {
    deck.value.deckCode = cards.length
      ? encodeDeck({ characterCards: deck.value.characters, actionCards: cards })
      : undefined;
  },
});
const deckCards = computed(() => ({
  characterCards: deck.value.characters,
  actionCards: actionCards.value,
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

async function inputActionCards() {
  if (!actionCardsEditor) {
    console.error("actionCardsEditor not found");
    return;
  }
  try {
    actionCards.value = await actionCardsEditor.value.edit(actionCards.value);
  }
  catch {
    // 取消
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
    deck.value.characters = pastedDeck.characterCards;
    actionCards.value = pastedDeck.actionCards;
    message.success("已粘贴");
  }
  catch (e: any) {
    message.error(e.message);
  }
}
</script>
