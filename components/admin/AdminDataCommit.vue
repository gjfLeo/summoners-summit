<script lang="ts" setup>
const modalVisible = ref(false);
const commitMessage = ref("");

const message = useMessage();

function commit() {
  commitMessage.value = "";
  modalVisible.value = true;
}

async function submit() {
  await $fetch("/api/v3/data/commit", {
    method: "POST",
    body: {
      message: commitMessage.value,
    },
  });
  message.success("提交成功");
}
</script>

<template>
  <NButton circle quaternary :focusable="false" @click="commit">
    <template #icon>
      <div class="i-carbon:save" />
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
      <NButton @click="submit">提交</NButton>
      <NButton quaternary @click="modalVisible = false">取消</NButton>
    </template>
  </NModal>
</template>
