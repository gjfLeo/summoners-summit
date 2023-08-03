<template>
  <NDataTable
    :columns="columns"
    :data="data"
    size="small"
    max-height="50vh"
  />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { format } from "mathjs/number";
import { NDataTable } from "naive-ui";
import { CardImage } from "#components";
import type { ActionCard } from "~/utils/types";

const props = defineProps<{
  cardUsages: ReturnType<typeof useCardUsage>["cardUsages"];
}>();

const data = Object.entries(props.cardUsages).map(([card, usage]) => ({
  key: card,
  card: card as ActionCard,
  ...usage,
}));

const columns: DataTableColumn<typeof data[number]>[] = [
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
    title: "平均携带",
    key: "totalAverage",
    align: "center",
    sorter: "default",
    render: row => format(row.totalAverage, { precision: 3 }),
  },
  {
    title: "胜场平均携带",
    key: "winAverage",
    align: "center",
    sorter: "default",
    render: row => format(row.winAverage, { precision: 3 }),
  },
];
</script>
