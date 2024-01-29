<template>
  <NTabs justify-content="space-evenly" type="line" size="large">
    <NTabPane name="characters" :tab="$t('cards.characterCard')">
      <NText :depth="3" class="mb block text-sm">{{ $t('cards.numGames', totalGame) }}</NText>
      <NDataTable
        :columns="characterStatsColumns"
        :data="characterStatsData"
        max-height="calc(100vh - 18rem)"
      />
    </NTabPane>
    <NTabPane name="actions" :tab="$t('cards.actionCard')">
      <NText :depth="3" class="mb block text-sm">{{ $t('cards.numDecks', totalDeck) }}</NText>
      <NDataTable
        :columns="actionStatsColumns"
        :data="actionStatsData"
        max-height="calc(100vh - 18rem)"
      />
    </NTabPane>
  </NTabs>
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { divide, format } from "mathjs/number";
import type { ActionCard, CharacterCard } from "~/utils/types";
import { CardCell, TableTitle } from "#components";

const { t } = useI18n();
useHead({ title: t("site.titleFormat", [t("menu.cards"), t("site.name")]) });

const { gameVersion } = useGameVersion({ detect: true });
const { characterStatsMap, totalGame } = await useApiCharacterStats({ gameVersion: gameVersion.value });
const { actionStatsMap, totalDeck } = await useApiActionStats({ gameVersion: gameVersion.value });

const characterStatsData = computed(() => {
  return Object.entries(characterStatsMap)
    .map(([card, stats]) => {
      return {
        card: card as CharacterCard,
        ...stats,
        pickRate: divide(stats.pick, totalGame),
        winRate: divide(stats.winPick, stats.pick),
      };
    });
});

const characterStatsColumns: DataTableColumn<typeof characterStatsData["value"][number]>[] = [
  {
    key: "card",
    fixed: "left",
    render: row => h(CardCell, { card: row.card as CharacterCard }),
  },
  {
    title: t("stats.characterPick"),
    key: "pick",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: () => h(TableTitle, { title: t("stats.characterPickRate"), description: t("stats.characterPickRateDescription") }),
    key: "pickRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.pickRate),
  },
  {
    title: t("stats.winRate"),
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
        card: card as ActionCard,
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
    fixed: "left",
    width: "6rem",
    render: row => h(CardCell, { card: row.card as ActionCard }),
  },
  {
    title: t("stats.cardTotalPick"),
    key: "pick",
    width: "6rem",
    align: "center",
    sorter: "default",
    defaultSortOrder: "descend",
  },
  {
    title: () => h(TableTitle, { title: t("stats.cardPickRate"), description: t("stats.cardPickRateDescription") }),
    key: "pickRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.pickRate),
  },
  {
    title: () => h(TableTitle, { title: t("stats.cardPickWinRate"), description: t("stats.cardPickWinRateDescription") }),
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
  {
    title: () => h(TableTitle, { title: t("stats.cardAveragePicksInPick"), description: t("stats.cardAveragePicksInPickDescription") }),
    key: "averagePick",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => format(row.averagePick, { precision: 3 }),
  },
  {
    title: () => h(TableTitle, { title: t("stats.cardAveragePicksInAll"), description: t("stats.cardAveragePicksInAllDescription") }),
    key: "averagePickTotal",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => format(row.averagePickTotal, { precision: 3 }),
  },
];
</script>
