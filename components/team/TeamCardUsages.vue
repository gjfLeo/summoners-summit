<template>
  <template v-if="numGamesWithDeck > 0">
    <NDataTable
      :columns="columns"
      :data="data"
      size="small"
      max-height="50vh"
    />
    <div class="mt text-sm">
      <NText :depth="3">此数据仅统计公布卡组的{{ numGamesWithDeck }}场对局。</NText>
    </div>
  </template>
  <template v-else>
    <div class="mt text-sm">
      <NText :depth="3">此阵容没有公布卡组的对局。</NText>
    </div>
  </template>
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { format } from "mathjs/number";
import { NDataTable, NText } from "naive-ui";
import { CardImage } from "#components";
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

const { team } = useTeam(props);
const { gameVersion } = useGameVersion();
const { gameList } = await useGameList({ characters: team.value, gameVersion: gameVersion.value });
const { cardUsages, numGamesWithDeck } = await useCardUsage(gameList);

const data = computed(() => Object.entries(cardUsages).map(([card, usage]) => ({
  key: card,
  card: card as ActionCard,
  ...usage,
})));

const columns: DataTableColumn<typeof data["value"][number]>[] = [
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
