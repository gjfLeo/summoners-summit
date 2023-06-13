<template>
  <div>
    单卡使用率
    <button class="translate-y-1 outline-none" @click="sortByCount = !sortByCount">
      <div :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
  </div>
  <pre>{{ actionCardAverage }}</pre>

  <div>
    <div v-for="(record, i) in deckGameRecords" :key="i">
      <NuxtLink :to="`/deck/${record.deckId}`" class="text-lime-600 underline">
        {{ getTeamId(findDeck(record.deckId)!) }} by {{ record.player }}
      </NuxtLink>
      vs
      <NuxtLink :to="`/deck/${record.opponentDeckId}`" class="text-lime-600 underline">
        {{ getTeamId(findDeck(record.opponentDeckId)!) }} by {{ record.opponentPlayer }}
      </NuxtLink>
      {{ record.startWith ? "先手" : "后手" }}
      {{ record.win ? "胜" : "负" }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { add, divide, format, multiply, number, subtract } from "mathjs/number";
import { findDeck, findDeckGameRecords, findDecksByTeam } from "~/data";
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
const deckGameRecords = decks.flatMap(deck => findDeckGameRecords(deck.id));

const actionCardSum = decks
  .reduce(
    (summary, deck) => {
      Object.entries(deck.actionCards).forEach(([card, count]) => {
        if (!actionCardFilter(card)) return;
        const summaryCount = summary[card];
        const recordNum = deckGameRecords.filter(record => record.deckId === deck.id).length;
        if (summaryCount) {
          summary[card] = add(summaryCount, multiply(count, recordNum));
        }
        else {
          summary[card] = multiply(count, recordNum);
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
      return [card as ActionCard, format(divide(count, deckGameRecords.length), { precision: 4 })];
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
</script>
