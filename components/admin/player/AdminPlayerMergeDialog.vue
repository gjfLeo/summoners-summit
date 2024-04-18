<script lang="ts" setup>
import { NForm } from "#components";
import type { Player } from "~/types/data";

const { t } = useI18n();

const visible = ref(false);
const form = ref({
  sourceId: "",
  targetId: "",
});
const formRef = ref<InstanceType<typeof NForm>>();
const formRules: FormRules = {};
const players = ref<Player[]>([]);

function show(sourceId: string, players_: Player[]) {
  form.value.sourceId = sourceId;
  players.value = players_;
  visible.value = true;
}

function submit() {
}

defineExpose({ show });
</script>

<template>
  <NModal
    v-model:show="visible"
    preset="dialog"
    :title="t('admin.player.mergePlayerData')"
    :show-icon="false"
  >
    <NForm ref="formRef" :model="form" :rules="formRules">
      <NFormItem :label="t('admin.player.mergeSourceLabel')">
        <AdminPlayerSelect v-model:value="form.sourceId" :players="players" />
      </NFormItem>
      <NFormItem :label="t('admin.player.mergeTargetLabel')">
        <AdminPlayerSelect v-model:value="form.targetId" :players="players" />
      </NFormItem>
    </NForm>
    <template #action>
      <NButton secondary type="primary" @click="submit">{{ t("admin.action.submit") }}</NButton>
      <NButton secondary @click="visible = false">{{ t("admin.action.cancel") }}</NButton>
    </template>
  </NModal>
</template>
