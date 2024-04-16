<script lang="ts" setup>
const emit = defineEmits<{
  (e: "done"): void;
}>();

const { t } = useI18n();
const message = useMessage();

const visible = ref(false);
const player = ref<Player>({} as Player);
const uniqueName = ref<string>();
const submitLoading = ref(false);

async function show(playerId: Player["id"]) {
  const res = await $fetch("/api/v3/players/get", {
    method: "GET",
    params: { id: playerId },
  });
  if (!res.player) {
    message.error(t("playerNotFound"));
    return;
  }
  player.value = res.player;
  uniqueName.value = res.player.uniqueName;

  visible.value = true;
}

async function submit() {
  submitLoading.value = true;
  const { success } = await $fetch("/api/v3/players/setUniqueName", {
    method: "POST",
    body: { id: player.value.id, uniqueName: uniqueName.value },
  });
  submitLoading.value = false;
  if (success) {
    emit("done");
    visible.value = false;
  }
}

defineExpose({
  show,
});
</script>

<template>
  <NModal
    v-model:show="visible"
    preset="dialog"
    :title="t('selectUniqueName')"
    :show-icon="false"
  >
    <div class="mt" flex="~ wrap gap-2">
      <NTag
        v-for="nickname in player ? [player.uniqueName, ...player.aliases] : []" :key="nickname"
        class="cursor-pointer"
        :type="nickname === uniqueName ? 'primary' : 'default'"
        @click="uniqueName = nickname"
      >
        {{ nickname }}
      </NTag>
    </div>

    <template #action>
      <NButton type="primary" secondary :loading="submitLoading" @click="submit">
        <template #icon><div class="i-carbon:checkmark" /></template>
      </NButton>
    </template>
  </NModal>
</template>

<i18n lang="yaml">
zh:
  selectUniqueName: 选择主要昵称
  uniqueName: 主要昵称
  confirm: 确定
  playerNotFound: 未获取到玩家信息
</i18n>
