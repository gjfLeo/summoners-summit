<template>
  <div>
    <NButton @click="clearStorageCache">清除开发环境缓存</NButton>
  </div>
</template>

<script lang="ts" setup>
const message = useMessage();

async function clearStorageCache() {
  const loading = message.loading("操作中", { duration: 0 });
  try {
    await $fetch("/api/v4/debug", {
      method: "POST",
      query: { action: "clearStorageCache" },
    });
    loading.destroy();
    message.success("操作成功");
  }
  catch (error) {
    console.error(error);
    loading.destroy();
    message.error("操作失败");
  }
}
</script>
