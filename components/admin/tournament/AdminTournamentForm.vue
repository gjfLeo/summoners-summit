<script lang="ts" setup>
import { NForm } from "#components";
import type { Tournament } from "~/types/data";

const tournament = defineModel<Tournament>({ required: true });

const formRef = ref<InstanceType<typeof NForm>>();

const { t } = useI18n();
const message = useMessage();

const rules: FormRules = {
  name: {
    trigger: "blur",
    validator: async () => {
      if (!tournament.value.name.zh) {
        throw new Error(t("admin.validate.pleaseInput", [t("main.tournament.name")]));
      }
    },
  },
  gameVersion: {
    trigger: "change",
    validator: async () => {
      if (!tournament.value.gameVersion) {
        throw new Error(t("admin.validate.pleaseSelect", [t("terms.gameVersion")]));
      }
    },
  },
  type: {
    trigger: "change",
    validator: async () => {
      if (!tournament.value.type) {
        throw new Error(t("admin.validate.pleaseSelect", [t("main.tournament.type")]));
      }
    },
  },
};

async function save() {
  try {
    await formRef.value?.validate();
  }
  catch {
    return;
  }
  const res = await $fetch("/api/v3/tournaments/save", {
    method: "POST",
    body: tournament.value,
  });
  if (res.success) {
    message.success(t("admin.message.SUCCESS"));
    await navigateTo(`/admin/tournament/${res.id}`);
  }
}

defineExpose({ save });
</script>

<template>
  <NForm ref="formRef" :model="tournament" :rules="rules">
    <NGrid class="gap-x-2! gap-y-4!">
      <NFormItemGi :span="16" :label="t('main.tournament.name')" path="name">
        <NInputLocale v-model:value="tournament.name" />
      </NFormItemGi>
      <NFormItemGi :span="4" :label="t('terms.gameVersion')" path="gameVersion">
        <GameVersionSelect v-model:value="tournament.gameVersion" />
      </NFormItemGi>
      <NFormItemGi :span="4" :label="t('main.tournament.type')" path="type">
        <AdminTournamentTypeSelect v-model:value="tournament.type" />
      </NFormItemGi>
    </NGrid>
  </NForm>
  {{ tournament }}
</template>
