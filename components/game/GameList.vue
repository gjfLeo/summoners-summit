<template>
  <div>
    <div
      ref="listDom"
      un-grid="~ justify-evenly gap-4"
      :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }"
    >
      <template v-for="game in list" :key="`${game.id}-${game.winner}`">
        <GameListItem :game="game" />
      </template>
    </div>
    <div class="mt <md:hidden" un-flex="~ justify-end">
      <NPagination
        v-model:page="page"
        :item-count="games.length"
        :page-size="pageSize"
      />
    </div>
    <div class="mt md:hidden" un-flex="~ justify-end">
      <NPagination
        v-model:page="page"
        :item-count="games.length"
        :page-size="pageSize"
        simple
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { GameDetail } from "~/types";

const props = defineProps<{
  games: GameDetail[];
}>();

const listDom = ref<HTMLDivElement>();
const { width } = useElementSize(listDom);
const columns = computed(() => Math.max(Math.floor(width.value / remToPx(22)), 1));

const pageSize = computed(() => columns.value * 2);
const page = ref(1);
const list = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return props.games.slice(start, end);
});
</script>
