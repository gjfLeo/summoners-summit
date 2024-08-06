<template>
  <div
    ref="dom"
    un-grid="~ justify-evenly gap-4"
    :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }"
  >
    <template v-for="game in list" :key="`${game.id}-${game.winner}`">
      <GameListItem :game="game" />
    </template>
  </div>
  <div class="mt" un-flex="~ justify-end">
    <NPagination
      v-model:page="page"
      :item-count="games.length"
      :page-size="pageSize"
    />
  </div>
</template>

<script lang="ts" setup>
import type { GameDetail } from "~/types";

const props = defineProps<{
  games: GameDetail[];
}>();

const dom = ref<HTMLDivElement>();
const { width } = useElementSize(dom);
const columns = computed(() => Math.floor(width.value / remToPx(22)));

const pageSize = computed(() => Math.max(columns.value * 2, 1));
const page = ref(1);
const list = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return props.games.slice(start, end);
});
</script>
