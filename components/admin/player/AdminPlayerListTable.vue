<template>
  <NDataTable
    :data="data"
    :columns="columns"
    :loading="loading"
    flex-height
  />
</template>

<script lang="tsx" setup>
import { NButton, NTag } from "#components";
import type { Player } from "~/types/data";

defineProps<{
  data: Player[];
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "selectUniqueName", id: Player["id"]): void;
  (e: "mergePlayerData", id: Player["id"]): void;
}>();

const { t } = useLocales();

const columns: DataTableColumn<Player>[] = [
  {
    key: "id",
    title: "ID",
    width: "8rem",
    className: "font-mono text-xs",
  },
  {
    key: "uids",
    title: "UID",
    width: "6rem",
    className: "font-mono text-xs",
    render: (row) => {
      return (
        <div class="flex flex-col">
          {row.uids.map(uid => <div>{uid}</div>)}
        </div>
      );
    },
  },
  {
    key: "uniqueName",
    title: t("main.player.mainNickname"),
    width: "18rem",
  },
  {
    key: "aliases",
    title: t("main.player.otherNicknames"),
    render: (row) => {
      return (
        <div class="flex flex-wrap gap-2">
          {row.aliases?.map(alias => <NTag>{alias}</NTag>)}
        </div>
      );
    },
  },
  {
    key: "actions",
    width: "8rem",
    render: (row) => {
      return (
        <div class="flex flex-wrap gap-2">
          <NButton text focusable={false} onClick={() => emit("selectUniqueName", row.id)}>
            <div class="i-carbon:edit" />
          </NButton>
          <NButton text focusable={false} onClick={() => emit("mergePlayerData", row.id)}>
            <div class="i-carbon:direction-merge" />
          </NButton>
        </div>
      );
    },
  },
];
</script>
