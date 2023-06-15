<template>
  <div>选取数：{{ teamGameList.length }}</div>
  <div>获胜数：{{ teamGameList.filter(g => g.winner === "A").length }}</div>

  <div>
    单卡使用率
    <button class="translate-y-1 outline-none" @click="sortByCount = !sortByCount">
      <div :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
  </div>

  <TransitionGroup>
    <template v-for="item in cardUsages" :key="item.card">
      <div>{{ item.card }}: {{ item.count }}</div>
    </template>
  </TransitionGroup>

  <GameRecordList :list="teamGameList" />
</template>

<script lang="ts" setup>
import { divide, format, number, subtract } from "mathjs/number";
import { findDeck, findGamesByTeam } from "~/data";
import type { ActionCard, Deck } from "~/utils/types";

const SPLITTER = "-";

const route = useRoute();
const teamId = route.params.teamId as string;
const team = teamId.split(SPLITTER).filter(characterCardFilter).sort(characterCardSorter);

// 非标准则跳转
const normalizedTeamId = team.join(SPLITTER);
if (normalizedTeamId !== teamId) {
  navigateTo(`/team/${encodeURIComponent(normalizedTeamId)}`, { replace: true });
}

// const decks = findDecksByTeam(teamId);
const teamGameList = findGamesByTeam(teamId);

const actionCardSum = teamGameList.map(game => findDeck(game.deckA) as Deck)
  .reduce(
    (summary, deck) => {
      for (const entry of Object.entries(deck.actionCards)) {
        const [card, count] = entry as [ActionCard, number];
        const summaryCount = summary[card] ?? 0;
        summary[card] = summaryCount + count;
      }
      return summary;
    },
    {} as Partial<Record<ActionCard, number>>,
  );
const sortByCount = ref(false);

const cardUsages = computed(() => {
  const usages = Object.entries(actionCardSum)
    .map(([card, count]) => {
      return {
        card: card as ActionCard,
        count: format(divide(count, teamGameList.length), { precision: 4 }),
      };
    })
    .sort((u1, u2) => actionCardSorter(u1.card, u2.card));
  if (sortByCount.value) {
    return usages.sort((u1, u2) => subtract(number(u1.count), number(u2.count)));
  }
  else {
    return usages;
  }
});
</script>
