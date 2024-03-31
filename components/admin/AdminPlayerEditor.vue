<script lang="ts" setup>
import type { FormRules } from "naive-ui";
import { NForm, NInput } from "#components";

const message = useMessage();
const { t } = useI18n();

const initPlayer = (): SavePlayerParams => ({ uniqueName: "", aliases: [] });
const params = ref<SavePlayerParams>(initPlayer());

const uniqueNameRef = ref<InstanceType<typeof NInput>>();

const modalShow = ref(false);
const submitLoading = ref(false);

const resolve = ref(() => {});
const reject = ref(() => {});

const formRef = ref<InstanceType<typeof NForm>>();
const rules: FormRules = {
  uniqueName: { required: true, message: t("action.validate.canNotBeEmpty", [t("player.mainNickname")]) },
};

async function edit(player?: Player) {
  params.value = Object.assign(initPlayer(), player);
  modalShow.value = true;
  await nextTick(() => {
    uniqueNameRef.value?.focus();
  });
  return new Promise<void>((res, rej) => {
    resolve.value = res;
    reject.value = rej;
  });
}

async function submit() {
  submitLoading.value = true;
  try {
    await formRef.value?.validate();
  }
  catch (error) {
    submitLoading.value = false;
    return;
  }

  if (!params.value.uid) {
    params.value.uid = undefined;
  }
  if (!params.value.aliases?.length) {
    params.value.aliases = undefined;
  }

  const data = await $fetch("/api/v3/players/savePlayer", {
    method: "POST",
    body: params.value,
  });
  if (data.success) {
    resolve.value();
    modalShow.value = false;
    message.success(t("action.message.success"));
  }
  else {
    message.error(data.message ?? t("action.message.error"));
  }
  submitLoading.value = false;
}

function cancel() {
  reject.value();
}

defineExpose({ edit });
</script>

<template>
  <NModal
    v-model:show="modalShow"
    preset="dialog"
    :show-icon="false"
    @after-leave="cancel"
  >
    <template #header>
      {{ $t("action.add") }}
    </template>
    <template #default>
      <NForm ref="formRef" :model="params" :rules="rules" class="mt">
        <NFormItem :label="$t('player.mainNickname')" path="uniqueName">
          <NInput ref="uniqueNameRef" v-model:value="params.uniqueName" />
        </NFormItem>
        <NFormItem :label="$t('player.otherNicknames')" path="aliases">
          <NDynamicTags v-model:value="params.aliases" />
        </NFormItem>
      </NForm>
    </template>
    <template #action>
      <NButton @click="modalShow = false">{{ $t("action.cancel") }}</NButton>
      <NButton type="primary" :loading="submitLoading" @click="submit">{{ $t("action.confirm") }}</NButton>
    </template>
  </NModal>
</template>
