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
        :type="nickname === uniqueName && !inputting ? 'primary' : 'default'"
        @click="uniqueName = nickname, inputting = false"
      >
        {{ nickname }}
      </NTag>
      <NTag v-if="!inputting" key="####1" type="default" @click="handleAdd">
        <div class="i-carbon:add" />
      </NTag>
      <NInput
        v-if="inputting"
        ref="input"
        v-model:value.trim="uniqueName"
        placeholder=""
        size="small" autosize class="min-w-8"
      />
    </div>

    <template #action>
      <NButton type="primary" secondary :disabled="uniqueName === ''" :loading="submitLoading" @click="submit">
        <template #icon><div class="i-carbon:checkmark" /></template>
      </NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import type { NInput } from "#components";
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
const inputting = ref(false);

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
  inputting.value = false;
  visible.value = true;
}

async function submit() {
  if (!uniqueName.value) {
    return;
  };
  submitLoading.value = true;
  const { success } = await $fetch("/api/v3/players/changeUniqueName", {
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

const input = ref<InstanceType<typeof NInput>>();
function handleAdd() {
  inputting.value = true;
  uniqueName.value = "";
  nextTick(() => {
    input.value?.focus();
  });
}

defineExpose({
  show,
});
</script>
