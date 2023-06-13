<template>
  <!-- 角色卡 -->
  <div grid grid-cols-3 m-inline-auto max-w-100 gap-2>
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" w-100% />
    </template>
  </div>
  <!-- 行动卡 -->
  <div grid grid-cols="6 md:10 lg:15" mt gap-2>
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" w-100% />
    </template>
  </div>
  <div mt>
    <h1 text-xl>套牌战绩</h1>
    <div v-for="(record, i) in gameRecords" :key="i">
      {{ record.player }} VS
      <NuxtLink :to="`/deck/${record.opponentDeckId}`" text-lime-7 underline>{{ record.opponentPlayer }}</NuxtLink>
      ：{{ record.startWith ? "先手" : "后手" }} {{ record.win ? "胜" : "负" }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { findDeckGameRecords } from "~/data";
import { findDeck, getActionCardsInDeck, getCharacterCardsInDeck } from "~/data/decks";
import type { Deck } from "~/utils/types";

const route = useRoute();
const id = route.params.id as string;

const deck = findDeck(id) as Deck;

if (!deck) {
  navigateTo("/decks", { replace: true });
}

const characterCards = getCharacterCardsInDeck(deck);
const actionCards = getActionCardsInDeck(deck);
const gameRecords = findDeckGameRecords(deck.id);
</script>
