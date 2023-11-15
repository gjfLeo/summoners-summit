<template>
  <NDataTable
    :columns="columns"
    :data="data"
    max-height="50vh"
  />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { format } from "mathjs/number";
import { NDataTable } from "naive-ui";
import type { ActionCard } from "~/utils/types";
import { CardCell } from "#components";

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
    render: row => h(CardCell, { card: row.card }),
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
