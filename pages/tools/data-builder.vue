<template>
  <!-- <NTable class="text-center">
    <thead>
      <tr>
        <th>
          <NInput />
        </th>
        <th>
          <NInput />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <GamePlayerInput v-model="infoA" />
        </td>
        <td>
          <GamePlayerInput v-model="infoB" />
        </td>
      </tr>
    </tbody>
  </NTable>

  <NHr /> -->

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

// const infoA = ref<any>({});
// const infoB = ref<any>({});
</script>
