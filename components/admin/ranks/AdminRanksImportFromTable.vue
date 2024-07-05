<template>
  <NButton @click="open">{{ t("admin.ranks.importFromTable") }}</NButton>
  <NModal
    v-model:show="visible"
    preset="dialog"
    :title="t('admin.ranks.importFromTable')"
    :show-icon="false"
  >
    <NFormItem
      ref="contentRef"
      :rule="contentRule"
      :show-label="false"
      class="mt"
    >
      <NInput
        v-model:value="content"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 10 }"
        :placeholder="t('admin.ranks.tableContentDescription')"
      />
    </NFormItem>
    <template #action>
      <NButton secondary type="primary" @click="confirm">{{ t("admin.action.confirm") }}</NButton>
      <NButton secondary @click="visible = false">{{ t("admin.action.cancel") }}</NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import { NFormItem } from "#components";
import type { Ranks } from "~/types/data";

const emit = defineEmits<{
  (e: "done", v: Ranks["ranks"]): void;
}>();

const { t } = useLocales();

const visible = ref(false);
const content = ref("");
const contentRef = ref<InstanceType<typeof NFormItem>>();

const ranks = computed(() => {
  if (!content.value) return [];
  const matchResult = content.value
    .matchAll(/^\s*(?<rank>\d+)\s+(?<nickname>\S+)\s+(?<uid>\d{9})\s+(?<score>\d+)$/gm);
  return [...matchResult].map<Ranks["ranks"][number]>((m) => {
    const { rank, nickname, uid, score } = m.groups!;
    return {
      rank: Number(rank),
      nickname: nickname.replaceAll(/\r|\n/g, ""),
      uid,
      score: Number(score),
    };
  });
});

const contentRule: FormItemRule = {
  trigger: "input",
  validator: () => {
    if (!content.value) {
      return Promise.reject(t("admin.ranks.tableContentRequired"));
    }
    if (ranks.value.length !== 200) {
      return Promise.reject(t("admin.ranks.tableContentParseError"));
    }
  },
};

function open() {
  visible.value = true;
}

async function confirm() {
  try {
    await contentRef.value?.validate();
  }
  catch (error) {
    return;
  }
  emit("done", ranks.value);
  visible.value = false;
}
</script>
