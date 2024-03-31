<script lang="ts" setup>
import Pinyin from "pinyin-match";
import { AdminPlayerDelete, AdminPlayerEditor, NButton, NTag } from "#components";

definePageMeta({
  layout: "admin",
});

const { t } = useI18n();

const { data, refresh: queryPlayers, pending } = await useFetch("/api/v3/players/getPlayerList");

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
    key: "uniqueName",
    title: t("player.mainNickname"),
  },
  {
    key: "aliases",
    title: t("player.otherNicknames"),
    render: (row) => {
      return h(
        "div",
        { flex: "~ gap-2" },
        [
          ...(row.aliases ?? []).map(alias => h(
            NTag,
            () => alias,
          )),
        ],
      );
    },
  },
  {
    key: "operations",
    title: t("action.operations"),
    width: "8rem",
    render: (row) => {
      return h(
        "div",
        { class: "flex gap-2" },
        [
          h(
            NButton,
            { text: true, onClick: () => editPlayer(row) },
            () => h("div", { class: "i-carbon:edit" }),
          ),
          h(
            AdminPlayerDelete,
            { player: row, onDone: queryPlayers },
          ),
        ],
      );
    },
  },
];

const playerEditorRef = ref<InstanceType<typeof AdminPlayerEditor>>();
async function editPlayer(player?: Player) {
  try {
    await playerEditorRef.value?.edit(player);
    queryPlayers();
  }
  catch (error) {
  }
}
</script>

<template>
  <div flex="~ col gap-4">
    <div flex="~ gap-2">
      <NInput v-model:value="filterText" />
      <NButton type="primary" @click="editPlayer()">
        <template #icon><div class="i-carbon:add" /></template>
        <template #default>{{ $t("action.add") }}</template>
      </NButton>
    </div>
    <NDataTable :data="filteredPlayers" :columns="columns" :loading="pending" />
  </div>
  <AdminPlayerEditor ref="playerEditorRef" />
</template>
