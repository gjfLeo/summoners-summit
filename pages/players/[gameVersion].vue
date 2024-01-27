<template>
  <div class="mb flex flex-row flex-wrap-reverse items-center justify-between gap-4">
    <div>
      <NInput v-model:value="playerFilter" clearable placeholder="选手昵称">
        <template #suffix>
          <NIcon><div class="i-carbon:search" /></NIcon>
        </template>
      </NInput>
    </div>
    <NText :depth="3" class="text-sm">统计可能不全，数据仅供参考</NText>
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
    title: "记录场数",
    key: "matchTotal",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.matchTotal >= Number(value),
  },
  {
    title: "胜利场数",
    key: "matchWin",
    width: "6rem",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: "场次胜率",
    key: "matchWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.matchWinRate),
  },
  {
    title: "记录对局数",
    key: "gameTotal",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: "胜利对局数",
    key: "gameWin",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: "对局胜率",
    key: "gameWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.gameWinRate),
  },
];
</script>
