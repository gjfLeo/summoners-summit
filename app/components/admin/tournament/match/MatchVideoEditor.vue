<template>
  <NModal
    v-model:show="visible"
    preset="dialog" :show-title="false" :show-icon="false"
    :closable="false" :mask-closable="false"
    style="width: 40vw"
  >
    <template #default>
      <NForm label-placement="left" label-width="auto">
        <NFormItem label="视频地址">
          <NInput v-model:value.trim="value" placeholder="请输入视频链接" />
        </NFormItem>
        <NFormItem label="精确至分P">
          <NSwitch
            :value="canHasBilibiliPart && hasPart" :disabled="!canHasBilibiliPart"
            @update:value="hasPart = $event"
          />
        </NFormItem>
      </NForm>
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">确定</NButton>
      <NButton secondary @click="cancel">取消</NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
const message = useMessage();

const visible = ref(false);
const value = ref<string>();
const hasPart = ref(false);
const oldValue = ref<string>();
const resolveRef = ref<(s: string | undefined) => void>(() => {});

async function input(video: string | undefined) {
  value.value = video;
  oldValue.value = video;
  visible.value = true;
  return new Promise<string | undefined>((resolve) => {
    resolveRef.value = resolve;
  });
}

defineExpose({ input });

function confirm() {
  if (!value.value) {
    visible.value = false;
    return resolveRef.value(undefined);
  }
  try {
    const url = new URL(value.value);
    if (url.host !== "www.bilibili.com") {
      visible.value = false;
      return resolveRef.value(value.value);
    }
    const p = url.searchParams.get("p");
    const part = (hasPart.value && p) ? `?p=${p}` : "";
    visible.value = false;
    return resolveRef.value(url.origin + url.pathname.replace(/\/$/, "") + part);
  }
  catch {
    message.warning("视频链接格式不正确");
  }
}

function cancel() {
  resolveRef.value?.(oldValue.value);
  visible.value = false;
}

const canHasBilibiliPart = computed(() => {
  return value.value?.includes("www.bilibili.com") && value.value?.includes("p=");
});
</script>
