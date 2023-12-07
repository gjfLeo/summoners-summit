<template>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import { NDataTable, NText, NTooltip } from "naive-ui";
import type { DataTableColumn } from "naive-ui";
import { divide } from "mathjs/number";
import { CardImage, NuxtLink, PlayerName } from "#components";
import type { ActionCard, ApiDeckSimilarData } from "~/utils/types";

const props = defineProps<{
  similarMap: ApiDeckSimilarData["similarMap"];
}>();

const data = computed(() => {
  return Object.values(props.similarMap)
    .map((item) => {
      return {
        ...item,
        winRate: divide(item.win, item.pick),
      };
    });
});

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "diffCount",
    sorter: "default",
    title: "牌组",
    render: (row) => {
      return Object.keys(row.diffs).length === 0
        ? "当前牌组"
        : h("div", { class: "flex gap-1" }, [
          ...Object.entries(row.diffs)
            .filter(([, count]) => count < 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 text-xs text-red-6 bg-#ffffffc0 border-rd-tl-1" }, count),
              h(CardImage, { class: "w-8", card: card as ActionCard }),
            ])),
          ...Object.entries(row.diffs)
            .filter(([, count]) => count > 0)
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
  {
    key: "deckId",
    title: "",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          NuxtLink,
          {
            to: `/deck/${row.deckId}`,
            prefetch: false,
            class: "flex justify-center",
          },
          () => h(
            NText,
            { depth: 3 },
            () => h("div", { class: "i-carbon:view" }),
          ),
        ),
        default: () => h("span", "查看此牌组"),
      },
    ),
  },
];
</script>
