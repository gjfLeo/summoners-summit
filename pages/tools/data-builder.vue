<template>
  <EditorTournamentForm ref="tournamentFormRef" />

  <NHr />

  <NCode :hljs="hljs" language="ts" :code="tournamentFormRef?.output" />
</template>

<script lang="ts" setup>
import { NCode, NHr } from "naive-ui";
import hljs from "highlight.js/lib/core";
import hljsTs from "highlight.js/lib/languages/typescript";
import { EditorTournamentForm } from "#components";

hljs.registerLanguage("ts", hljsTs);

const tournamentFormRef = ref<InstanceType<typeof EditorTournamentForm>>();
</script>
