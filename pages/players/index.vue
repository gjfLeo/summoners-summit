<template>
  <div un-flex="~ col gap-4">
    <div un-flex="~">
      <div>
        <NInput v-model:value="playerFilter" clearable :placeholder="t('main.player.nickname')">
          <template #suffix>
            <NIcon><div class="i-mingcute:search-line" /></NIcon>
          </template>
        </NInput>
      </div>
    </div>
    <NDataTable
      :columns="columns"
      :data="data"
      :scroll-x="1000"
      max-height="calc(100vh - 18rem)"
    />
  </div>
</template>

<script setup lang="ts">
import { divide } from "mathjs/number";
import PinyinMatch from "pinyin-match";
import { PlayerName } from "#components";

const { t } = useLocales();
useHead({ title: t("site.titles.main.players") });

const { stats: allStats } = await useApiGetAllPlayerStats();

const playerFilter = ref<string>("");
const data = computed(() =>
  allStats.value
    .filter((stats) => {
      return !playerFilter.value || PinyinMatch.match(stats.uniqueName, playerFilter.value)
        || stats.aliases?.some(name => PinyinMatch.match(name, playerFilter.value));
    })
    .map(stats => ({
      key: stats.playerId,
      ...stats,
      matchWinRate: divide(stats.numMatchesWin, stats.numMatches),
      gameWinRate: divide(stats.numGamesWin, stats.numGames),
    })),
);

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "playerId",
    width: "10rem",
    fixed: "left",
    align: "center",
    render: row => h(
      PlayerName,
      {
        id: row.playerId,
        nickname: row.uniqueName,
      },
    ),
  },
  {
    title: t("main.players.numMatches"),
    key: "numMatches",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.players.numMatchesWin"),
    key: "numMatchesWin",
    width: "6rem",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: t("main.players.matchWinRate"),
    key: "matchWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.matchWinRate),
  },
  {
    title: t("main.players.numGames"),
    key: "numGames",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.players.numGamesWin"),
    key: "numGamesWin",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.players.gameWinRate"),
    key: "gameWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.gameWinRate),
  },
  {
    title: t("main.players.rankAndScore"),
    key: "score",
    width: "6rem",
    align: "center",
    sorter: (a, b) => (b.rank ?? Number.POSITIVE_INFINITY) - (a.rank ?? Number.POSITIVE_INFINITY),
    render: row => row.score ? `${row.rank} (${row.score})` : "",
  },
];
</script>
