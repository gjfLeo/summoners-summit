<template>
  <NModal
    v-model:show="visible"
    preset="dialog"
    :title="t('admin.player.mergePlayerData')"
    :show-icon="false"
  >
    <NForm
      ref="formRef" :model="form" :rules="formRules"
      :show-require-mark="false"
    >
      <NFormItem :label="t('admin.player.mergeSourceLabel')" path="sourceId">
        <AdminPlayerSelect v-model:value="form.sourceId" :players="players" />
      </NFormItem>
      <NFormItem :label="t('admin.player.mergeTargetLabel')" path="targetId">
        <AdminPlayerSelect v-model:value="form.targetId" :players="players" />
      </NFormItem>
    </NForm>
    <template #action>
      <NButton secondary type="primary" @click="submit">{{ t("admin.action.submit") }}</NButton>
      <NButton secondary @click="visible = false">{{ t("admin.action.cancel") }}</NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import { NForm } from "#components";
import type { Player } from "~/types/data";

const emit = defineEmits<{
  (e: "done"): void;
}>();

const { t } = useLocales();
const message = useMessage();

const visible = ref(false);
const submitLoading = ref(false);
const form = ref({
  sourceId: "",
  targetId: "",
});
const formRef = ref<InstanceType<typeof NForm>>();
const formRules: FormRules = {
  sourceId: {
    required: true,
    message: t("admin.player.mergeSourceRequired"),
  },
  targetId: [
    {
      required: true,
      message: t("admin.player.mergeTargetRequired"),
    },
    {
      validator: () => {
        if (form.value.sourceId === form.value.targetId) {
          return Promise.reject(t("admin.player.mergeSourceTargetSame"));
        }
      },
    },
  ],
};
const players = ref<Player[]>([]);

function show(sourceId: string, players_: Player[]) {
  form.value.sourceId = sourceId;
  form.value.targetId = "";
  formRef.value?.restoreValidation();
  players.value = players_;
  visible.value = true;
}

async function submit() {
  try {
    await formRef.value?.validate();
  }
  catch (error) {
    console.error(error);
    return;
  }

  submitLoading.value = true;
  const res = await $fetch("/api/v3/players/merge", {
    method: "POST",
    body: form.value,
  });
  if (res.success) {
    message.success(t("admin.message.SUCCESS"));
    visible.value = false;
    emit("done");
  }
  else {
    message.error(t(`admin.message.${res.code}`));
  }
  submitLoading.value = false;
}

defineExpose({ show });
</script>
