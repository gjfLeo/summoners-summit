<template>
  <NTabs default-value="characters" justify-content="space-evenly" type="line">
    <NTabPane name="characters" tab="角色牌">
      <NText :depth="3" class="mb-2 block">共统计&#x2006;{{ totalGame }}&#x2006;场对局</NText>
      <NDataTable
        :columns="characterStatsColumns"
        :data="characterStatsData"
        max-height="calc(100vh - 20rem)"
      />
    </NTabPane>
    <NTabPane name="actions" tab="行动牌">
      <NText :depth="3" class="mb-2 block">共统计&#x2006;{{ totalDeck }}&#x2006;个对局牌组</NText>
      <NDataTable
        :columns="actionStatsColumns"
        :data="actionStatsData"
        max-height="calc(100vh - 20rem)"
      />
    </NTabPane>
  </NTabs>
</template>

<script lang="ts" setup>
import { type DataTableColumn, NDataTable, NTabPane, NTabs, NText } from "naive-ui";
import { divide, format } from "mathjs/number";
import { CardImage } from "#components";
import type { ActionCard, CharacterCard } from "~/utils/types";

const { gameVersion } = useGameVersion({ detect: true });
const { characterStatsMap, totalGame } = await useApiCharacterStats({ gameVersion: gameVersion.value });
const { actionStatsMap, totalDeck } = await useApiActionStats({ gameVersion: gameVersion.value });

const characterStatsData = computed(() => {
  return Object.entries(characterStatsMap)
    .map(([card, stats]) => {
      return {
        card,
        ...stats,
        pickRate: divide(stats.pick, totalGame),
        winRate: divide(stats.winPick, stats.pick),
      };
    });
});

const characterStatsColumns: DataTableColumn<typeof characterStatsData["value"][number]>[] = [
  {
    key: "card",
    render: row => h(
      "div",
      {
        class: "flex gap-1 items-center",
      },
      [
        h(CardImage, { card: row.card as CharacterCard, class: "h-8" }),
        h("div", row.card),
      ],
    ),
  },
  {
    title: "出场次数",
    key: "pick",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: renderTableTitle("出场率", "按对局数统计，非征服赛制选取率"),
    key: "pickRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.pickRate),
  },
  {
    title: "胜率",
    key: "winRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
];

const actionStatsData = computed(() => {
  return Object.entries(actionStatsMap)
    .map(([card, stats]) => {
      return {
        card,
        ...stats,
        pickRate: divide(stats.game, totalDeck),
        winRate: divide(stats.winGame, stats.game),
        averagePick: divide(stats.pick, stats.game),
        averagePickTotal: divide(stats.pick, totalDeck),
      };
    });
});

const actionStatsColumns: DataTableColumn<typeof actionStatsData["value"][number]>[] = [
  {
    key: "card",
    render: row => h(
      "div",
      {
        class: "flex gap-1 items-center",
      },
      [
        h(CardImage, { card: row.card as ActionCard, class: "h-8" }),
        h("div", row.card),
      ],
    ),
  },
  {
    title: "总携带张数",
    key: "pick",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: renderTableTitle("携带率", "携带至少一张此牌的牌组占比"),
    key: "pickRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.pickRate),
  },
  {
    title: renderTableTitle("携带胜率", "携带至少一张此牌的牌组胜率"),
    key: "winRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
  {
    title: renderTableTitle("携带者平均", "总携带张数 ÷ 携带此牌的牌组数"),
    key: "averagePick",
    align: "center",
    sorter: "default",
    render: row => format(row.averagePick, { precision: 3 }),
  },
  {
    title: renderTableTitle("总平均", "总携带张数 ÷ 总牌组数"),
    key: "averagePickTotal",
    align: "center",
    sorter: "default",
    render: row => format(row.averagePickTotal, { precision: 3 }),
  },
];
</script>
