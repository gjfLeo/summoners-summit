<template>
  <div class="flex flex-col gap-4">
    <NInput v-model:value="version" />
    <NButton @click="handleSetLatestVersion">设置最新版本</NButton>
  </div>
</template>

<script lang="ts" setup>
const version = ref();

const { t } = useLocales();
const message = useMessage();
const { gameVersionLatest, fetchGameVersionData } = useSharedData();
watch(gameVersionLatest, (newVal) => {
  version.value = newVal;
});

async function handleSetLatestVersion() {
  await $fetch("/api/v3/versions/setLatestVersion", {
    query: {
      version: version.value,
    },
  });
  message.success(t("admin.message.SUCCESS"));
  return Promise.all([
    fetchGameVersionData(),
  ]);
}
</script>
