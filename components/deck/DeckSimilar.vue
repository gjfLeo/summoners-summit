<template>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import { NDataTable } from "naive-ui";
import type { DataTableColumn } from "naive-ui";
import { divide } from "mathjs/number";
import { CardImage, PlayerName } from "#components";
import type { ActionCard, ApiDeckSimilarData, ApiDeckSimilarItem } from "~/utils/types";

const props = defineProps<{
  similarMap: ApiDeckSimilarData["similarMap"];
}>();

function diffCount(item: ApiDeckSimilarItem) {
  return Object.values(item.diffs).reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
}

const data = computed(() => {
  return Object.values(props.similarMap)
    .map((item) => {
      return {
        ...item,
        winRate: divide(item.win, item.pick),
      };
    })
    .sort((a, b) => diffCount(a) - diffCount(b));
});

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "deckId",
    title: "牌组",
    render: (row) => {
      return Object.keys(row.diffs).length === 0
        ? "当前牌组"
        : h("div", { class: "flex gap-1" }, [
          ...Object.entries(row.diffs)
            .filter(([card, count]) => count < 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 text-xs text-red-6 bg-#ffffffc0 border-rd-tl-1" }, count),
              h(CardImage, { class: "w-8", card: card as ActionCard }),
            ])),
          ...Object.entries(row.diffs)
            .filter(([card, count]) => count > 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 text-xs text-blue-6 bg-#ffffffc0 border-rd-tl-1" }, `+${count}`),
              h(CardImage, { class: "w-8", card: card as ActionCard }),
            ])),
        ]);
    },
  },
  {
    title: "场数",
    key: "pick",
    align: "center",
    sorter: "default",
  },
  {
    title: "胜率",
    key: "winRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
  {
    key: "players",
    title: "使用者",
    render: (row) => {
      return row.players.map(player => h(PlayerName, { id: player.playerId, nickname: player.uniqueName }));
    },
  },
];
</script>
