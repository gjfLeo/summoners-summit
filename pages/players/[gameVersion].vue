<template>
  <div class="mb flex flex-row flex-wrap-reverse items-center justify-between gap-4">
    <div>
      <NInput v-model:value="playerFilter" clearable :placeholder="$t('player.nickname')">
        <template #suffix>
          <NIcon><div class="i-carbon:search" /></NIcon>
        </template>
      </NInput>
    </div>
    <NText :depth="3" class="text-sm">{{ $t('player.referenceOnly') }}</NText>
  </div>
  <NDataTable
    :columns="columns"
    :data="data"
    max-height="calc(100vh - 18rem)"
  />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { divide } from "mathjs/number";
import PinyinMatch from "pinyin-match";
import { PlayerName } from "#components";

const { t } = useI18n();
useHead({ title: t("site.titleFormat", [t("menu.players"), t("site.name")]) });

const { gameVersion } = useGameVersion({ detect: true });
const { playerStatsMap } = await useApiPlayerStatsMap(gameVersion.value);

const playerFilter = ref<string>("");
const data = computed(() =>
  Object.values(playerStatsMap)
    .filter((stats) => {
      return !playerFilter.value || PinyinMatch.match(stats.uniqueName, playerFilter.value)
        || stats.aliases?.some(name => PinyinMatch.match(name, playerFilter.value));
    })
    .map(stats => ({
      key: stats.playerId,
      ...stats,
      matchWinRate: divide(stats.matchWin, stats.matchTotal),
      gameWinRate: divide(stats.gameWin, stats.gameTotal),
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
    title: t("player.numMatches"),
    key: "matchTotal",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: t("stats.atLeast", [v]), value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.matchTotal >= Number(value),
  },
  {
    title: t("player.numMatchesWin"),
    key: "matchWin",
    width: "6rem",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: t("player.matchWinRate"),
    key: "matchWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.matchWinRate),
  },
  {
    title: t("player.numGames"),
    key: "gameTotal",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("player.numGamesWin"),
    key: "gameWin",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("player.gameWinRate"),
    key: "gameWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.gameWinRate),
  },
  {
    title: t("player.dynamicRankAndScore"),
    key: "score",
    width: "6rem",
    align: "center",
    sorter: (a, b) => (b.rank ?? Number.POSITIVE_INFINITY) - (a.rank ?? Number.POSITIVE_INFINITY),
    render: row => row.score ? `${row.rank} (${row.score})` : "",
  },
];
</script>
