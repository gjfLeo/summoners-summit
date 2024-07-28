<template>
  <NButton text :focusable="false" @click="commit">
    <template #icon>
      <div class="i-mingcute:save-2-line" />
    </template>
  </NButton>
  <NModal v-model:show="modalVisible" preset="dialog">
    <template #header>
      提交至代码库
    </template>
    <template #default>
      <NFormItem label="提交信息">
        <NInput v-model:value="commitMessage" placeholder="更新数据" />
      </NFormItem>
    </template>
    <template #action>
      <NButton :loading="submitLoading" @click="submit">提交</NButton>
      <NButton @click="modalVisible = false">取消</NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
const modalVisible = ref(false);
const commitMessage = ref("");
const submitLoading = ref(false);

const message = useMessage();

function commit() {
  commitMessage.value = "";
  modalVisible.value = true;
}

async function submit() {
  submitLoading.value = true;
  await $fetch("/api/v3/data/commit", {
    method: "POST",
    body: {
      message: commitMessage.value || "更新数据",
    },
  });
  submitLoading.value = false;
  modalVisible.value = false;
  message.success("提交成功");
}
</script>
