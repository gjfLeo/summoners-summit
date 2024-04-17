<script lang="ts" setup>
import { NButton, NDataTable, NInput } from "#components";
import type { Ranks } from "~/types/data";

const { t } = useI18n();

const tableRef = ref<InstanceType<typeof NDataTable>>();
const needConfirm = ref<Record<number, boolean>>({});

const ranks = ref<Ranks["ranks"]>([]);
const columns: DataTableColumn<Ranks["ranks"][number]>[] = [
  {
    key: "rank",
    title: t("player.rank"),
  },
  {
    key: "uid",
    title: t("player.uid"),
  },
  {
    key: "nickname",
    title: t("player.nickname"),
    render: (row, index) => {
      return h(
        NInput,
        {
          value: row.nickname,
          onInput: (value) => {
            row.nickname = value;
            needConfirm.value[index] = isNicknameNeedConfirm(row.nickname);
          },
          status: needConfirm.value[index] ? "warning" : undefined,
        },
        {
          suffix: needConfirm.value[index]
            ? () => h(
                NButton,
                {
                  text: true,
                  onClick: () => {
                    needConfirm.value[index] = false;
                  },
                },
                () => h("div", { class: "i-carbon:checkmark" }),
              )
            : undefined,
        },
      );
    },
  },
  {
    key: "score",
    title: t("player.score"),
  },
];

function isNicknameNeedConfirm(nickname: string) {
  return nickname.includes("（");
}

function checkNeedConfirm() {
  needConfirm.value = {};
  ranks.value.forEach((item, index) => {
    if (isNicknameNeedConfirm(item.nickname)) {
      needConfirm.value[index] = true;
    }
  });
}

function importRanks(value: Ranks["ranks"]) {
  ranks.value = value;
  checkNeedConfirm();
}

async function submit() {
  const needConfirmRow = Object.entries(needConfirm.value).find(([, value]) => value)?.[0];
  if (needConfirmRow !== undefined) {
    const rowHeight = getComputedStyle(document.querySelector(".n-data-table-td")!).height;
    const rowHeightPxValue = Number(rowHeight.replace(/px$/, ""));
    tableRef.value?.scrollTo({ top: Number(needConfirmRow) * rowHeightPxValue, behavior: "smooth" });
    return;
  }
  // TODO submit ranks
  console.log(ranks.value);

  // await $fetch("/api/v3/ranks/save", {
  //   method: "POST",
  //   body: {
  //     ranks: ranks.value,
  //   },
  // });
  // message.success(t("success"));
}
</script>

<template>
  <div class="min-h-full" flex="~ col gap-4">
    <div flex="~ gap-2">
      <AdminRanksImportFromTable @done="importRanks" />
      <NButton>从接口数据导入</NButton>
      <div class="ml-auto" />
      <NButton @click="submit">提交</NButton>
    </div>
    <NDataTable
      ref="tableRef"
      :data="ranks"
      :columns="columns"
      flex-height
      class="flex-table flex-basis-none"
    />
  </div>
</template>
