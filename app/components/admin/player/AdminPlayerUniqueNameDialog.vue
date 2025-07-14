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
        <div class="i-mingcute:add-line" />
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
        <template #icon><div class="i-mingcute:check-line" /></template>
      </NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import type { NInput } from "#components";

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
  try {
    const res = await $fetch(`/api/v4/players/${playerId}/details`, {
      method: "GET",
    });
    player.value = res;
    uniqueName.value = res.uniqueName;
  }
  catch {
    // TODO
    message.error(t("admin.message.PLAYER_NOT_FOUND"));
    return;
  }
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
