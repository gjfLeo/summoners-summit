<script lang="ts" setup>
import type { FormRules } from "naive-ui";
import { NForm } from "#components";

const { t } = useI18n();
const message = useMessage();

const visible = ref(false);
const formRef = ref<InstanceType<typeof NForm>>();
const form = ref({
  id: null as string | null,
  content: null as string | null,
});

const ranks = computed(() => {
  return {
    id: form.value.id,
    ranks: [...(form.value.content ?? "").matchAll(/^(?<rank>\d+)\s(?<nickname>.*?)(\s*（.*?）)?\s(?<uid>\d{9})\s(?<score>\d+)$/gsm)]
      .map(m => m.groups),
  };
});

const rules: FormRules = {
  id: [
    { required: true, trigger: "blur", message: t("idRequired") },
  ],
  content: [
    {
      required: true,
      trigger: "blur",
      validator: () => {
        if (!form.value.content) {
          return Promise.reject(t("contentRequired"));
        }
        if (ranks.value.ranks.length !== 200) {
          return Promise.reject(t("contentParseError"));
        }
      },
    },
  ],
};

function open() {
  visible.value = true;
}

async function submit() {
  try {
    await formRef.value?.validate();
  }
  catch (error) {
    return;
  }
  await $fetch("/api/v3/ranks/save", {
    method: "POST",
    body: {
      ranks: ranks.value,
    },
  });
  visible.value = false;
  message.success(t("success"));
}
</script>

<template>
  <NButton @click="open">{{ t("importTable") }}</NButton>
  <NModal v-model:show="visible" preset="dialog" :title="t('importTable')" :show-icon="false">
    <NForm ref="formRef" :model="form" :rules="rules">
      <NFormItem label="ID" path="id">
        <NInput v-model:value="form.id" />
      </NFormItem>
      <NFormItem label="表格内容" path="content">
        <NInput v-model:value="form.content" type="textarea" />
      </NFormItem>
      <NFormItem :show-label="false">
        <NSpace>
          <NButton @click="submit">{{ t("submit") }}</NButton>
          <NButton @click="visible = false">{{ t("cancel") }}</NButton>
        </NSpace>
      </NFormItem>
    </NForm>
  </NModal>
</template>

<i18n lang="yaml">
  zh:
    importTable: 从表格导入
    idRequired: "ID\u2006不能为空"
    contentRequired: 导入内容不能为空
    contentParseError: 输入内容解析错误
    submit: 提交
    cancel: 取消
    success: 操作成功
  en:
    importTable: Import from table
    idRequired: ID is required
    contentRequired: Content is required
    contentParseError: Content parse error
    submit: Submit
    cancel: Cancel
    success: Success
  </i18n>
