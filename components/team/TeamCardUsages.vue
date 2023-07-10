<template>
  <template v-if="numGamesWithDeck > 0">
    <n-data-table
      :columns="columns"
      :data="data"
      size="small"
      max-height="50vh"
    />
    <div class="mt text-sm">
      <n-text :depth="3">此数据仅统计公布卡组的{{ numGamesWithDeck }}场对局。</n-text>
    </div>
  </template>
  <template v-else>
    <div class="mt text-sm">
      <n-text :depth="3">此阵容没有公布卡组的对局。</n-text>
    </div>
  </template>
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { format } from "mathjs/number";
import { CardImage } from "#components";
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

const { teamId } = useTeam(props);
const { games } = useGameList({ teamId });
const { cardUsage, numGamesWithDeck } = useCardUsage(games);

const data = computed(() => Object.entries(cardUsage.value).map(([card, usage]) => ({
  key: card,
  card: card as ActionCard,
  ...usage,
})));

type RowType = typeof data["value"][number];
const columns: DataTableColumn<RowType>[] = [
  {
    key: "card",
    render: row => h(
      "div",
      {
        class: "flex gap-1 items-center",
      },
      [
        h(CardImage, { card: row.card, class: "h-8" }),
        h("div", row.card),
      ],
    ),
  },
  {
    title: "平均携带",
    key: "totalAverage",
    align: "center",
    sorter: "default",
    render: row => format(row.totalAverage, { precision: 3 }),
  },
  {
    title: "胜场平均携带",
    key: "winAverage",
    align: "center",
    sorter: "default",
    render: row => format(row.winAverage, { precision: 3 }),
  },
];
</script>
