<script lang="ts" setup>
import Pinyin from "pinyin-match";
import { AdminPlayerUniqueNameSelector, NButton, NTag } from "#components";

const uniqueNameSelector = ref<InstanceType<typeof AdminPlayerUniqueNameSelector>>();

const { t } = useI18n();

const { data, pending, refresh } = await useFetch("/api/v3/players/list");

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
    title: t("uniqueName"),
    width: "18rem",
  },
  {
    key: "aliases",
    title: t("aliases"),
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
  {
    key: "actions",
    width: "8rem",
    render: (row) => {
      return h(
        "div",
        { class: "flex flex-wrap gap-2" },
        [
          h(
            NButton,
            { text: true, focusable: false, onClick: () => uniqueNameSelector.value?.show(row.id) },
            () => h("div", { class: "i-carbon:edit" }),
          ),
        ],
      );
    },
  },
];
</script>

<template>
  <div flex="~ col gap-4" class="min-h-content">
    <div flex="~ gap-2">
      <div><NInput v-model:value="filterText" clearable /></div>
      <NButton type="primary" secondary @click="refresh()"><div class="i-carbon:renew" /></NButton>
    </div>
    <NDataTable
      :data="filteredPlayers"
      :columns="columns"
      :loading="pending"
      flex-height
      class="flex-table"
    />
    <div v-show="false">
      <AdminPlayerUniqueNameSelector ref="uniqueNameSelector" @done="refresh()" />
    </div>
  </div>
</template>

<i18n lang="yaml">
zh:
  uniqueName: 主要昵称
  aliases: 其他昵称
</i18n>
