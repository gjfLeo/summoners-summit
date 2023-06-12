<template>
  <button class="outline-none" @click="sortByCount = !sortByCount">
    <div :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
  </button>
  <pre>{{ actionCardAverage }}</pre>
  <!-- <pre v-if="sortByCount">{{ actionCardAverageSortByOrder }}</pre> -->
</template>

<script lang="ts" setup>
import { add, divide, format, number, subtract } from "mathjs/number";
import { findDecksByTeam } from "~/data";
import type { ActionCard } from "~/utils/types";

const SPLITTER = "-";

const route = useRoute();
const teamId = route.params.teamId as string;
const team = teamId.split(SPLITTER).filter(characterCardFilter).sort(characterCardSorter);

// 非标准则跳转
const normalizedTeamId = team.join(SPLITTER);
if (normalizedTeamId !== teamId) {
  navigateTo(`/team/${encodeURIComponent(normalizedTeamId)}`, { replace: true });
}

const decks = findDecksByTeam(teamId);

// const commonActionCards = Object.values(decks)
//   .reduce((common, deck) => {
//     Object.keys(common)
//       .forEach((cardString) => {
//         const card = cardString as ActionCard;
//         const countInCommon = common[card];
//         const countInDeck = deck.actionCards[card];
//         if (countInCommon && countInDeck) {
//           common[card] = Math.min(countInCommon, countInDeck) as 1 | 2;
//         }
//         else {
//           delete common[card];
//         }
//       });
//     return common;
//   }, decks[0].actionCards);

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
    return Object.fromEntries(entries
      .sort(([card1], [card2]) => actionCardSorter(card1, card2))
      .sort(([,count1], [,count2]) => subtract(number(count2), number(count1))),
    );
  }
  else {
    return Object.fromEntries(entries
      .sort(([,count1], [,count2]) => subtract(number(count2), number(count1)))
      .sort(([card1], [card2]) => actionCardSorter(card1, card2)),
    );
  }
});
// const actionCardAverageSortByCount = Object.fromEntries(
//   Object.entries(actionCardSum)
//     .map<[ActionCard, string]>(([card, count]) => {
//       return [card as ActionCard, format(divide(count, decks.length), { precision: 4 })];
//     })
//     .sort(([card1], [card2]) => actionCardSorter(card1, card2))
//     .sort(([,count1], [,count2]) => subtract(number(count2), number(count1))),
// );
// const actionCardAverageSortByOrder = Object.fromEntries(
//   Object.entries(actionCardSum)
//     .map<[ActionCard, string]>(([card, count]) => {
//       return [card as ActionCard, format(divide(count, decks.length), { precision: 4 })];
//     })
//     .sort(([,count1], [,count2]) => subtract(number(count2), number(count1)))
//     .sort(([card1], [card2]) => actionCardSorter(card1, card2)),
// );
</script>
