<template>
  <div>
    单卡使用率
    <button class="translate-y-1 outline-none" @click="sortByCount = !sortByCount">
      <div :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
  </div>

  <div grid-cols-3-auto grid items-center>
    <!-- <TransitionGroup> -->
    <template v-for="item in actionCardAverage" :key="item.card">
      <CardImageThumb :card="item.card" class="m-block-1" />
      <div>{{ item.card }}</div>
      <div>{{ item.averageUsage }}</div>
    </template>
    <!-- </TransitionGroup> -->
  </div>
</template>

<script lang="ts" setup>
import { add, divide, format, number, subtract } from "mathjs/number";
import { findDeck, gameList } from "~/data";
import type { ActionCard, Deck } from "~/utils/types";

const decks = gameList.flatMap(game => [game.deckA, game.deckB]).map(deckId => findDeck(deckId)).filter<Deck>((deck): deck is Deck => deck !== undefined);

const actionCardSum = decks
  .reduce(
    (summary, deck) => {
      Object.entries(deck.actionCards).forEach(([card, count]) => {
        if (!actionCardFilter(card)) return;
        const summaryCount = summary[card];
        if (summaryCount) {
          summary[card] = add(summaryCount, count);
        }
        else {
          summary[card] = count;
        }
      });
      return summary;
    },
    {} as Partial<Record<ActionCard, number>>,
  );
const sortByCount = ref(false);
const actionCardAverage = computed(() => {
  const entries = Object.entries(actionCardSum)
    .map<[ActionCard, string]>(([card, count]) => {
      return [card as ActionCard, format(divide(count, decks.length), { precision: 4 })];
    });
  if (sortByCount.value) {
    return entries
      .sort(([card1], [card2]) => actionCardSorter(card1, card2))
      .sort(([,count1], [,count2]) => subtract(number(count2), number(count1)))
      .map(([card, averageUsage]) => ({ card, averageUsage }));
  }
  else {
    return entries
      .sort(([,count1], [,count2]) => subtract(number(count2), number(count1)))
      .sort(([card1], [card2]) => actionCardSorter(card1, card2))
      .map(([card, averageUsage]) => ({ card, averageUsage }));
  }
});
</script>
