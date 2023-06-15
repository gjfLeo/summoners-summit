<template>
  <!-- 角色卡 -->
  <div grid grid-cols-3 m-inline-auto max-w-100 gap-2>
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>
  <!-- 行动卡 -->
  <div grid grid-cols="6 md:10 lg:15" mt gap-2>
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>
  <div mt>
    <h1>
      <span text-xl>套牌战绩</span>
      <span text ml>{{ games.filter(g => g.winner === "A").length }} 胜 / {{ games.filter(g => g.winner === "B").length }} 负</span>
    </h1>
    <GameRecordList :list="games" />
  </div>
</template>

<script lang="ts" setup>
import { findGamesByDeck } from "~/data";
import { findDeck } from "~/data/decks";
import type { Deck } from "~/utils/types";

definePageMeta({
  validate: (route) => {
    const id = route.params.deckId as string;
    const deck = findDeck(id);
    if (!deck) return false;
    return true;
  },
});

const route = useRoute();
const id = route.params.deckId as string;
const deck = findDeck(id) as Deck;

const characterCards = getCharacterCardsInDeck(deck);
const actionCards = getActionCardsInDeck(deck);
const games = findGamesByDeck(deck.id);
</script>
