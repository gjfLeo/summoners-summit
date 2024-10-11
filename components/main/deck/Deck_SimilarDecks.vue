<template>
  <NDataTable :data="data" :columns="columns" />
</template>

<script lang="ts" setup>
import { abs, divide } from "mathjs/number";
import type { CardId, DeckCode, DeckTeamId, GetDeckListResponseItem } from "~/types";
import { CardImage, CommonIconButton, NTooltip, NuxtLinkLocale } from "#components";

const props = defineProps<{
  teamId: DeckTeamId;
  deckCode: DeckCode;
  deckList: GetDeckListResponseItem[];
}>();
const { deckCode, deckList } = toRefs(props);

const { t } = useLocales();
const { decodeDeck } = useDeckEncoder();

const actionCardRecord = computed(() => {
  const cards = decodeDeck(deckCode.value).actionCards;
  const record: Record<CardId, number> = {};
  cards.forEach((card) => {
    record[card] = (record[card] ?? 0) + 1;
  });
  return record;
});

const data = computed(() => {
  return deckList.value
    .map((deck) => {
      const record = { ...actionCardRecord.value };
      const cards = decodeDeck(deck.deckCode).actionCards;
      cards.forEach((card) => {
        record[card] = (record[card] ?? 0) - 1;
        if (record[card] === 0) {
          delete record[card];
        }
      });
      return {
        ...deck,
        diffs: record,
        distance: Object.values(record).reduce((acc, cur) => acc + abs(cur), 0),
        winRate: divide(deck.numGamesWin, deck.numGames),
      };
    })
    .filter(item => item.distance <= 10);
});

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "distance",
    sorter: "default",
    defaultSortOrder: "ascend",
    title: t("main.deck.similarTable.deck"),
    render: (row) => {
      return Object.keys(row.diffs).length === 0
        ? t("main.deck.similarTable.current")
        : h("div", { class: "flex gap-1" }, [
          ...Object.entries(row.diffs)
            .filter(([, count]) => count < 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 p-inline-1 text-xs text-red-6 bg-#ffffffd0 border-rd-tl-1" }, count),
              h(CardImage, { card }),
            ])),
          ...Object.entries(row.diffs)
            .filter(([, count]) => count > 0)
            .map(([card, count]) => h("div", { class: "w-8 position-relative" }, [
              h("div", { class: "position-absolute bottom-0 right-0 p-inline-1 text-xs text-blue-6 bg-#ffffffd0 border-rd-tl-1" }, `+${count}`),
              h(CardImage, { card }),
            ])),
        ]);
    },
  },
  {
    title: t("main.deck.similarTable.numGames"),
    key: "numGames",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.deck.similarTable.winRate"),
    key: "winRate",
    align: "center",
    sorter: "default",
    render: row => toPercentageString(row.winRate),
  },
  {
    key: "deckCode",
    title: "",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          NuxtLinkLocale,
          {
            to: `/deck/${props.teamId}/${toBase64Url(row.deckCode)}`,
            prefetch: false,
            class: "flex justify-center",
          },
          () => h(
            CommonIconButton,
            { icon: "i-mingcute:eye-2-line" },
          ),
        ),
        default: () => h("span", t("main.deck.similarTable.view")),
      },
    ),
  },
];
</script>
