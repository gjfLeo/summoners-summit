<template>
  <div un-flex="~ col" class="min-h-content" style="gap: 1rem">
    <div un-flex="~ gap-2">
      <div><NInput v-model:value="filterText" clearable /></div>
      <NButton type="primary" secondary @click="refresh()"><div class="i-mingcute:refresh-1-line" /></NButton>
    </div>
    <AdminPlayerListTable
      :data="filteredPlayers"
      :loading="status === 'pending'"
      class="flex-table"
      @select-unique-name="playerUniqueNameDialog?.show($event)"
      @merge-player-data="playerMergeDialog?.show($event, players)"
    />
    <div v-show="false">
      <AdminPlayerUniqueNameDialog ref="playerUniqueNameDialog" @done="refresh()" />
      <AdminPlayerMergeDialog ref="playerMergeDialog" @done="refresh()" />
    </div>
  </div>
</template>

<script lang="tsx" setup>
import Pinyin from "pinyin-match";
import { AdminPlayerMergeDialog, AdminPlayerUniqueNameDialog, NButton } from "#components";

const { t } = useLocales();
useHead({ title: t("site.titles.admin.players") });

const playerUniqueNameDialog = ref<InstanceType<typeof AdminPlayerUniqueNameDialog>>();
const playerMergeDialog = ref<InstanceType<typeof AdminPlayerMergeDialog>>();

const { data, status, refresh } = await useFetch("/api/v3/players/list");

const players = computed(() => data.value?.players ?? []);

const filterText = ref("");

const filteredPlayers = computed(() => {
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
