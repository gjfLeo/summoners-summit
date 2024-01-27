<template>
  <NDataTable
    :columns="columns"
    :data="data"
    max-height="50vh"
  />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { divide, format } from "mathjs/number";
import type { ActionCard, ApiTeamStatsData } from "~/utils/types";
import { CardCell, TableTitle } from "#components";

const props = defineProps<{
  cardUsages: ApiTeamStatsData["cardUsageMap"];
  totalDeck: number;
}>();

const { t } = useI18n();

const data = Object.entries(props.cardUsages).map(([card, usage]) => ({
  key: card,
  card: card as ActionCard,
  ...usage,
  pickRate: divide(usage.deckPick, props.totalDeck),
}));

const columns: DataTableColumn<typeof data[number]>[] = [
  {
    key: "card",
    render: row => h(CardCell, { card: row.card }),
  },
  {
    title: () => h(TableTitle, { title: t("stats.cardPickRate"), description: t("stats.cardPickRateDescription") }),
    key: "pickRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.pickRate),
  },
  {
    title: t("stats.cardAveragePicks"),
    key: "totalAverage",
    align: "center",
    sorter: "default",
    render: row => format(row.totalAverage, { precision: 3 }),
  },
  {
    title: t("stats.cardAveragePicksInWins"),
    key: "winAverage",
    align: "center",
    sorter: "default",
    render: row => format(row.winAverage, { precision: 3 }),
  },
];
</script>
