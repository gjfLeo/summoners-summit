<template>
  <n-data-table
    size="small"
    max-height="50vh"
    :columns="columns"
    :data="data"
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
    render: row => h(
      "div",
      {
        class: "flex gap-1 items-center",
      },
      [
        h(CardImage, { card: row.card, class: "h-8" }),
        h("div", row.card),
      ],
    ),
  },
  {
    title: "平均携带张数",
    key: "pick",
    sorter: "default",
    width: "6rem",
  },
  {
    title: "胜场平均携带张数",
    key: "win",
    sorter: "default",
    width: "6rem",
  },
];
</script>
