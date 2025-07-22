<template>
  <div un-flex="~ col" class="min-h-content" style="gap: 1rem">
    <div un-flex="~ gap-2">
      <div><NInput v-model:value="filterText" clearable /></div>
      <NButton type="primary" secondary :disabled="loading" @click="refresh()">
        <div class="i-mingcute:refresh-1-line" />
      </NButton>
    </div>
    <AdminPlayerListTable
      :data="filteredPlayers"
      :loading="loading"
      class="flex-table"
      @select-unique-name="playerUniqueNameDialog?.show($event)"
      @merge-player-data="playerMergeDialog?.show($event, players!)"
    />
    <div v-show="false">
      <AdminPlayerUniqueNameDialog ref="playerUniqueNameDialog" @done="refresh()" />
      <AdminPlayerMergeDialog ref="playerMergeDialog" @done="refresh()" />
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { AdminPlayerMergeDialog, AdminPlayerUniqueNameDialog, NButton } from "#components";
import Pinyin from "pinyin-match";

const { t } = useLocales();
useHead({ title: t("site.titles.admin.players") });

const playerUniqueNameDialog = ref<InstanceType<typeof AdminPlayerUniqueNameDialog>>();
const playerMergeDialog = ref<InstanceType<typeof AdminPlayerMergeDialog>>();

const { data: players, pending: loading, refresh } = useLazyFetch("/api/v4/players", {
  query: { includeIgnored: "1" },
});

const filterText = ref("");

const filteredPlayers = computed(() => {
  if (!players.value) {
    return [];
  }
  if (!filterText.value) {
    return players.value;
  }
  return players.value.filter((player) => {
    if (player.uids.includes(filterText.value) || player.id === filterText.value) {
      return true;
    };
    if ([player.uniqueName, ...player.aliases ?? []].some(name => Pinyin.match(name, filterText.value))) {
      return true;
    };
    return false;
  });
});
</script>
