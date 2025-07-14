<template>
  <NButton text :focusable="false" @click="commit">
    <template #icon>
      <div class="i-mingcute:save-2-line" />
    </template>
  </NButton>
  <NModal v-model:show="modalVisible" preset="dialog" :show-icon="false">
    <template #header>
      提交至代码库
    </template>
    <template #default>
      <NFormItem label="提交信息">
        <NInput v-model:value="commitMessage" placeholder="更新数据" />
      </NFormItem>
    </template>
    <template #action>
      <NButton :loading="submitLoading" type="primary" secondary @click="submit">提交</NButton>
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
  try {
    const res = await $fetch("/api/v3/data/commit", {
      method: "POST",
      body: {
        message: commitMessage.value || "更新数据",
      },
    });
    if (res.success) {
      message.success("提交成功");
      modalVisible.value = false;
    }
    else {
      message.error(`请重试：${res.code}`);
    }
  }
  catch (error) {
    console.error(error);
    message.error("提交失败");
  }
  finally {
    submitLoading.value = false;
  }
}
</script>
