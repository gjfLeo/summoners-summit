<template>
  <NDataTable
    :columns="columns"
    :data="data"
    max-height="50vh"
  />
</template>

<script lang="ts" setup>
import { type DataTableColumn, NTooltip } from "naive-ui";
import { divide, format } from "mathjs/number";
import type { ActionCard, ApiTeamActionCardUsageData } from "~/utils/types";
import { CardCell, TableTitle } from "#components";

const props = defineProps<{
  cardUsages: ApiTeamActionCardUsageData["actionCardUsageMap"];
  totalNumDecks: number;
  totalNumDecksWin: number;
}>();

const { t } = useI18n();

const data = Object.entries(props.cardUsages).map(([card, usage]) => {
  return {
    key: card,
    card: card as ActionCard,
    pickRate: divide(usage.numDecksWith1 + usage.numDecksWith2, props.totalNumDecks),
    averagePick: divide(usage.numDecksWith1 + usage.numDecksWith2 * 2, props.totalNumDecks),
    averagePickInWins: divide(usage.numDecksWith1Win + usage.numDecksWith2Win * 2, props.totalNumDecksWin),
    winRate: divide(usage.numDecksWith1Win + usage.numDecksWith2Win, usage.numDecksWith1 + usage.numDecksWith2),
    winRateWith1: divide(usage.numDecksWith1Win, usage.numDecksWith1),
    winRateWith2: divide(usage.numDecksWith2Win, usage.numDecksWith2),
  };
});

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
    key: "averagePick",
    align: "center",
    sorter: "default",
    render: row => format(row.averagePick, { precision: 3 }),
  },
  {
    title: t("stats.cardAveragePicksInWins"),
    key: "averagePickInWins",
    align: "center",
    sorter: "default",
    render: row => format(row.averagePickInWins, { precision: 3 }),
  },
  {
    title: () => h(TableTitle, { title: t("stats.cardPickWinRate"), description: t("stats.cardPickWinRateDescription") }),
    key: "winRate",
    align: "center",
    sorter: "default",
    render: row => h(NTooltip, { placement: "right" }, {
      trigger: () => toPercentageString(row.winRate),
      default: () => h("div", { class: "grid", style: "grid-template-columns: auto auto; gap: 0 1rem" }, [
        h("div", 1),
        h("div", toPercentageString(row.winRateWith1)),
        h("div", 2),
        h("div", toPercentageString(row.winRateWith2)),
      ]),
    }),
  },
];
</script>
