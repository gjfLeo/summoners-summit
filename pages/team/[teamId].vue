<template>
  <div>选取数：{{ teamGameList.length }}</div>
  <div>获胜数：{{ teamGameList.filter(g => g.winner === "A").length }}</div>

  <h1 mt text-xl font-bold>单卡使用率</h1>
  <div class="col-gap-2 row-gap-1 grid items-center justify-start grid-cols-4-auto">
    <div />
    <div />
    <button class="flex items-center outline-none" @click="sortByCount = !sortByCount">
      <div>平均携带张数</div>
      <div ml-1 :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
    <button class="flex items-center outline-none" @click="sortByCount = !sortByCount">
      <div>胜场平均携带张数</div>
      <div ml-1 :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
    <TransitionGroup>
      <template v-for="item in cardUsages" :key="item.card">
        <CardImage :card="item.card" h-8 />
        <div>{{ item.card }}</div>
        <div>{{ item.pick }}</div>
        <div>{{ item.win }}</div>
      </template>
    </TransitionGroup>
  </div>

  <h1 mt text-xl font-bold>对局记录</h1>
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

const actionCardSum = teamGameList.map<[Deck, boolean]>(game => [findDeck(game.deckA) as Deck, game.winner === "A"])
  .reduce(
    (summary, [deck, win]) => {
      for (const entry of Object.entries(deck.actionCards)) {
        const [card, count] = entry as [ActionCard, number];
        const summaryCount = summary[card] ?? { pick: 0, win: 0 };
        summaryCount.pick += count;
        if (win) {
          summaryCount.win += count;
        }
        summary[card] = summaryCount;
      }
      return summary;
    },
    {} as Partial<Record<ActionCard, { pick: number; win: number }>>,
  );
const sortByCount = ref(false);

const cardUsages = computed(() => {
  const usages = Object.entries(actionCardSum)
    .map(([card, { pick, win }]) => {
      return {
        card: card as ActionCard,
        pick: format(divide(pick, teamGameList.length), { precision: 4 }),
        win: format(divide(win, teamGameList.filter(team => team.winner === "A").length), { precision: 4 }),
      };
    })
    .sort((u1, u2) => actionCardSorter(u1.card, u2.card));
  if (sortByCount.value) {
    return usages.sort((u1, u2) => subtract(number(u2.pick), number(u1.pick)));
  }
  else {
    return usages;
  }
});
</script>
