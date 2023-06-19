<template>
  <n-data-table
    :columns="columns"
    :data="data"
    size="small"
    max-height="50vh"
    class="m-inline-auto max-w-3xl"
  />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { divide, format } from "mathjs/number";
import { CardImage } from "#components";
import { findDeck } from "~/data";
import type { ActionCard, Game } from "~/utils/types";

const props = defineProps<{
  games: Game[];
}>();

const data = computed(() => {
  const cardUsageMap = props.games.reduce<Partial<Record<ActionCard, { pick: number; win: number }>>>(
    (map, game) => {
      const deck = findDeck(game.deckA);
      for (const entry of Object.entries(deck?.actionCards ?? {})) {
        const [card, count] = entry as [ActionCard, number];
        const cardUsage = map[card] ?? { pick: 0, win: 0 };
        cardUsage.pick += count;
        cardUsage.win += game.winner === "A" ? count : 0;
        map[card] = cardUsage;
      }
      return map;
    },
    {},
  );
  return Object.entries(cardUsageMap)
    .map(([card, usage]) => {
      return {
        key: card as ActionCard,
        card: card as ActionCard,
        pick: format(divide(usage.pick, props.games.length), { precision: 3 }),
        win: format(divide(usage.win, props.games.filter(game => game.winner === "A").length), { precision: 3 }),
      };
    });
});

type RowType = typeof data["value"][number];
const columns: DataTableColumn<RowType>[] = [
  {
    key: "card",
    align: "center",
    render: row => h(
      "div",
      {
        class: "inline-flex gap-1 items-center min-w-40",
      },
      [
        h(CardImage, { card: row.card, class: "h-8" }),
        h("div", row.card),
      ],
    ),
  },
  {
    title: "平均携带",
    key: "pick",
    align: "center",
    sorter: "default",
  },
  {
    title: "胜场平均携带",
    key: "win",
    align: "center",
    sorter: "default",
  },
];
</script>
