<template>
  <NModal v-model:show="dialogVisible" preset="card" class="max-w-6xl" title="视频链接">
    <template #default>
      <NForm label-placement="left" label-width="auto" :show-feedback="false">
        <NFormItem label="地址">
          <NInput v-model:value="videoLinkRaw" clearable />
        </NFormItem>
        <NFormItem v-if="videoLinkRaw.includes('www.bilibili.com') && videoLinkRaw.includes('p=')" label="精确至分P">
          <NCheckbox v-model:checked="videoWithPart" />
        </NFormItem>
      </NForm>
    </template>
    <template #footer>
      <NButton @click="dialogVisible = false">确认</NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
const dialogVisible = ref(false);
const videoLinkRaw = ref("");
const videoWithPart = ref(false);

async function inputVideo(oldValue?: string): Promise<string | undefined> {
  videoLinkRaw.value = oldValue ?? "";
  videoWithPart.value = Boolean(oldValue?.includes("?p="));
  dialogVisible.value = true;
  await until(dialogVisible).toBe(false);

  if (!videoLinkRaw.value) {
    return undefined;
  }
  try {
    const url = new URL(videoLinkRaw.value);
    if (url.host !== "www.bilibili.com") {
      return videoLinkRaw.value;
    }
    const p = url.searchParams.get("p");
    const part = (videoWithPart.value && p) ? `?p=${p}` : "";
    return url.origin + url.pathname.replace(/\/$/, "") + part;
  }
  catch {
    return undefined;
  }
}

defineExpose({
  inputVideo,
});
</script>
