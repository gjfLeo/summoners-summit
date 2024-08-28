<template>
  <NDataTable
    v-bind="{ data, columns, summary }"
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { DataTableCreateSummary } from "naive-ui";
import type { GetOverviewResponse } from "~/types/api/stub/GetOverview";

const props = defineProps<GetOverviewResponse>();
const { overview } = toRefs(props);

const { t } = useLocales();

const data = computed(() => {
  return overview.value.map(stats => ({
    key: stats.gameVersion,
    ...stats,
    starterWinRate: divide(stats.numGamesStarterWin, stats.numGamesWithStarter),
  }));
});

type RowType = typeof data["value"][number];

const columns: DataTableColumn<RowType>[] = [
  {
    key: "gameVersion",
    title: t("main.home.overview.gameVersion"),
    align: "center",
  },
  {
    key: "numGames",
    title: t("main.home.overview.numGames"),
    align: "center",
  },
  {
    key: "numGamesWithDeck",
    title: t("main.home.overview.numGamesWithDeck"),
    align: "center",
  },
  {
    key: "starterWinRate",
    title: t("main.home.overview.starterWinRate"),
    render: row => toPercentageString(row.starterWinRate),
    align: "center",
  },
];

const summary: DataTableCreateSummary<RowType> = (data) => {
  return {
    gameVersion: {
      value: "总计",
    },
    numGames: {
      value: data.reduce((acc, cur) => acc + cur.numGames, 0),
    },
    numGamesWithDeck: {
      value: data.reduce((acc, cur) => acc + cur.numGamesWithDeck, 0),
    },
    starterWinRate: {
      value: toPercentageString(
        data.reduce((acc, cur) => acc + cur.numGamesStarterWin, 0),
        data.reduce((acc, cur) => acc + cur.numGamesWithStarter, 0),
      ),
    },
  };
};
</script>
