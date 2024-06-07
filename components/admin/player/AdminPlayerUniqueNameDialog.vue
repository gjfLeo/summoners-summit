<script lang="ts" setup>
import type { Player } from "~/types/data";

const emit = defineEmits<{
  (e: "done"): void;
}>();

const { t } = useLocales();
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
  if (!res.success || !res.player) {
    // message.error(t("admin.message.PLAYER_NOT_FOUND"));
    message.error(t(`admin.message.${res.code}`));
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
    body: {
      id: player.value.id,
      uniqueName: uniqueName.value,
    },
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
    :title="t('admin.player.selectUniqueName')"
    :show-icon="false"
  >
    <div class="mt" un-flex="~ wrap gap-2">
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
