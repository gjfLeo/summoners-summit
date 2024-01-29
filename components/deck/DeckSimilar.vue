<template>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { divide } from "mathjs/number";
import { CardImage, NText, NTooltip, NuxtLinkLocale, PlayerName } from "#components";
import type { ActionCard, ApiDeckSimilarData } from "~/utils/types";

const props = defineProps<{
  similarMap: ApiDeckSimilarData["similarMap"];
}>();

const { t } = useI18n();

const data = computed(() => {
  return Object.values(props.similarMap)
    .map((item) => {
      return {
        ...item,
        winRate: divide(item.win, item.pick),
      };
    });
});

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "diffCount",
    sorter: "default",
    title: t("common.deck"),
    render: (row) => {
      return Object.keys(row.diffs).length === 0
        ? t("deck.currentDeck")
        : h("div", { class: "flex gap-1" }, [
          ...Object.entries(row.diffs)
            .filter(([, count]) => count < 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 p-inline-1 text-xs text-red-6 bg-#ffffffd0 border-rd-tl-1" }, count),
              h(CardImage, { class: "w-8 border-rd-2px", card: card as ActionCard }),
            ])),
          ...Object.entries(row.diffs)
            .filter(([, count]) => count > 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 p-inline-1 text-xs text-blue-6 bg-#ffffffd0 border-rd-tl-1" }, `+${count}`),
              h(CardImage, { class: "w-8 border-rd-2px", card: card as ActionCard }),
            ])),
        ]);
    },
  },
  {
    title: t("stats.gamesPlayed"),
    key: "pick",
    align: "center",
    sorter: "default",
  },
  {
    title: t("stats.winRate"),
    key: "winRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
  {
    key: "players",
    title: t("stats.usedBy"),
    render: (row) => {
      return h(
        "div",
        { class: "flex gap-2" },
        row.players.map(player => h(
          PlayerName,
          { id: player.playerId, nickname: player.uniqueName },
        )),
      );
    },
  },
  {
    key: "deckId",
    title: "",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          NuxtLinkLocale,
          {
            to: `/deck/${row.deckId}`,
            prefetch: false,
            class: "flex justify-center",
          },
          () => h(
            NText,
            { depth: 3 },
            () => h("div", { class: "i-carbon:view" }),
          ),
        ),
        default: () => h("span", t("deck.gotoSimilarDeck")),
      },
    ),
  },
];
</script>
