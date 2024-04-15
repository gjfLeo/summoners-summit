<script lang="ts" setup>
import Pinyin from "pinyin-match";
import { NButton, NTag } from "#components";

const { t } = useI18n();

const { data, pending } = await useFetch("/api/v3/players/list");

const players = computed(() => data.value?.players ?? []);

const filterText = ref("");

const filteredPlayers = computed(() => {
  if (!filterText.value) {
    return players.value;
  }
  return players.value.filter((player) => {
    if (player.uid === filterText.value || player.id === filterText.value) {
      return true;
    };
    if ([player.uniqueName, ...player.aliases ?? []].some(name => Pinyin.match(name, filterText.value))) {
      return true;
    };
    return false;
  });
});

const columns: DataTableColumn<typeof players.value[number]>[] = [
  {
    key: "id",
    title: "ID",
    width: "8rem",
    className: "font-mono text-xs",
  },
  {
    key: "uid",
    title: "UID",
    width: "6rem",
    className: "font-mono text-xs",
  },
  {
    key: "uniqueName",
    title: t("player.mainNickname"),
    minWidth: "8rem",
  },
  {
    key: "aliases",
    title: t("player.otherNicknames"),
    render: (row) => {
      return h(
        "div",
        { class: "flex flex-wrap gap-2" },
        (row.aliases ?? []).map(alias => h(
          NTag,
          () => alias,
        )),
      );
    },
  },
];
</script>

<template>
  <div flex="~ col gap-4">
    <div flex="~ gap-2">
      <div>
        <NInput v-model:value="filterText" />
      </div>
    </div>
    <NDataTable :data="filteredPlayers" :columns="columns" :loading="pending" :pagination="{ pageSize: 10 }" />
  </div>
</template>
