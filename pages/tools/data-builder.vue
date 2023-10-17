<template>
  <EditorTournamentForm ref="tournamentFormRef" />

  <NHr />

  <NCard>
    <NCollapse>
      <NCollapseItem title="生成代码预览" name="1">
        <NCode :hljs="hljs" language="ts" :code="code" />
        <template #header-extra>
          <NButton text @click.stop="copyCode">
            <div class="i-carbon:copy" />
          </NButton>
        </template>
      </NCollapseItem>
    </NCollapse>
  </NCard>
</template>

<script lang="ts" setup>
import { NButton, NCard, NCode, NCollapse, NCollapseItem, NHr, useMessage } from "naive-ui";
import hljs from "highlight.js/lib/core";
import hljsTs from "highlight.js/lib/languages/typescript";
import { EditorTournamentForm } from "#components";

hljs.registerLanguage("ts", hljsTs);

const tournamentFormRef = ref<InstanceType<typeof EditorTournamentForm>>();

const latestVersion = gameVersionList[1].value;

await Promise.all([
  (async function () {
    const actionPicksString = useLocalStorage("actionPicks", "{}");
    const { actionStatsMap } = await useApiActionStats({ preferredGameVersion: latestVersion });
    actionPicksString.value = JSON.stringify(Object.fromEntries(Object.entries(actionStatsMap).map(([card, { pick }]) => [card, pick])));
  }()),
  (async function () {
    const characterPicksString = useLocalStorage("characterPicks", "{}");
    const { characterStatsMap } = await useApiCharacterStats({ preferredGameVersion: latestVersion });
    characterPicksString.value = JSON.stringify(Object.fromEntries(Object.entries(characterStatsMap).map(([card, { pick }]) => [card, pick])));
  }()),
]);

const code = computed(() => tournamentFormRef.value?.output ?? "");
const { copy } = useClipboard({ source: code });
const message = useMessage();
async function copyCode() {
  await copy();
  message.success("已复制");
}
</script>
