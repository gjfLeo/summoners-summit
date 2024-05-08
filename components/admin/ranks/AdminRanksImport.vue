<script lang="ts" setup>
import type { ValidateError } from "async-validator";
import { NButton, NDataTable, NFormItem, NInput } from "#components";
import type { Ranks } from "~/types/data";

const emit = defineEmits<{
  (e: "done", id: string): void;
}>();

const { t } = useI18n();
const message = useMessage();

const tableRef = ref<InstanceType<typeof NDataTable>>();
const nicknameEditable = ref(false);
const nicknameNeedConfirm = ref<Record<number, boolean>>({});

const ranks = ref<Ranks["ranks"]>([]);
const columns: DataTableColumn<Ranks["ranks"][number]>[] = [
  {
    key: "rank",
    title: t("main.player.rank"),
  },
  {
    key: "uid",
    title: t("main.player.uid"),
  },
  {
    key: "nickname",
    title: t("main.player.nickname"),
    render: (row, index) => {
      return nicknameEditable.value
        ? h(
          NInput,
          {
            value: row.nickname,
            onInput: (value) => {
              row.nickname = value;
              nicknameNeedConfirm.value[index] = isNicknameNeedConfirm(row.nickname);
            },
            status: nicknameNeedConfirm.value[index] ? "warning" : undefined,
          },
          {
            suffix: nicknameNeedConfirm.value[index]
              ? () => h(
                  NButton,
                  {
                    text: true,
                    onClick: () => {
                      nicknameNeedConfirm.value[index] = false;
                    },
                  },
                  () => h("div", { class: "i-carbon:checkmark" }),
                )
              : undefined,
          },
        )
        : row.nickname;
    },
  },
  {
    key: "score",
    title: t("main.player.score"),
  },
];

const id = ref("");
const idRef = ref<InstanceType<typeof NFormItem>>();
const idRule: FormItemRule = {
  validator: () => {
    if (!/^\d\.\d$/.test(id.value)) {
      return Promise.reject(t("admin.ranks.invalidId"));
    }
  },
  trigger: "blur",
};

function isNicknameNeedConfirm(nickname: string) {
  return nickname.includes("（") || nickname.includes("/");
}

function importRanks(value: Ranks["ranks"], editable = false) {
  ranks.value = value;
  nicknameEditable.value = editable;
  nicknameNeedConfirm.value = {};
  if (editable) {
    ranks.value.forEach((item, index) => {
      if (isNicknameNeedConfirm(item.nickname)) {
        nicknameNeedConfirm.value[index] = true;
      }
    });
  }
}

async function submit() {
  try {
    await idRef.value?.validate();
  }
  catch (error: any) {
    message.warning((error as ValidateError[])[0].message!);
    return;
  }

  if (ranks.value.length === 0) {
    message.warning(t("admin.ranks.ranksRequired"));
    return;
  }

  const needConfirmRow = Object.entries(nicknameNeedConfirm.value).find(([, value]) => value)?.[0];
  if (needConfirmRow !== undefined) {
    const rowHeight = getComputedStyle(document.querySelector(".n-data-table-td")!).height;
    const rowHeightPxValue = Number(rowHeight.replace(/px$/, ""));
    tableRef.value?.scrollTo({ top: Number(needConfirmRow) * rowHeightPxValue, behavior: "smooth" });
    message.warning(t("admin.ranks.nicknameNeedConfirm"));
    return;
  }

  await $fetch("/api/v3/ranks/save", {
    method: "POST",
    body: {
      ranks: {
        id: id.value,
        ranks: ranks.value,
      },
    },
  });
  message.success(t("admin.message.SUCCESS"));
  emit("done", id.value);
}
</script>

<template>
  <div class="min-h-full" un-flex="~ col gap-4">
    <div un-flex="~ gap-2">
      <AdminRanksImportFromTable @done="importRanks($event, true)" />
      <AdminRanksImportFromJson @done="importRanks($event, false)" />
      <div class="ml-auto" />
      <NFormItem
        ref="idRef"
        :show-label="false" :show-feedback="false"
        :rule="idRule"
        :placeholder="t('terms.gameVersion')"
      >
        <NInput v-model:value="id" />
      </NFormItem>
      <NButton secondary type="primary" @click="submit">{{ t("admin.action.submit") }}</NButton>
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
