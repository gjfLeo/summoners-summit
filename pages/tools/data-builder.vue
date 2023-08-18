<template>
  <ActionsInput v-model:actions="actions" />
  <ActionsPreview v-model:actions="actions" class="mt" />

  <NHr />

  <NCode :code="JSON.stringify(actions, undefined, 2)" language="json" :hljs="hljs" />
</template>

<script lang="ts" setup>
import { NCode, NHr } from "naive-ui";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import type { ActionCard } from "~/utils/types";

hljs.registerLanguage("json", json);

const actions = ref<Partial<Record<ActionCard, number>>>({});
</script>
