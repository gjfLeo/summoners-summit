<template>
  <n-button @click="copy(code)">复制</n-button>
  <n-card class="mt">
    <n-scrollbar style="max-height: calc(100vh - 14rem)">
      <n-code :code="code" :hljs="hljs" language="json" />
    </n-scrollbar>
  </n-card>
</template>

<script lang="ts" setup>
import type { ActionCard } from "utils/types";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";

hljs.registerLanguage("json", json);

const { cardUsage } = useCardUsage();
const { copy } = useClipboard();

const cardPicks = computed(() =>
  Object.fromEntries(
    Object.entries(cardUsage.value)
      .map(([card, usage]) => [card, usage.win] as [ActionCard, number])
      .sort((a, b) => b[1] - a[1]),
  ),
);

const code = computed(() => JSON.stringify(cardPicks.value, undefined, 2));
</script>
