<script lang="ts" setup>
import { NForm } from "#components";
import type { Tournament } from "~/types/data";

const tournament = defineModel<Tournament>({ required: true });

const { t } = useI18n();
const message = useMessage();

const formRef = ref<InstanceType<typeof NForm>>();

const editing = ref(false);

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
    if (res.id !== tournament.value.id) {
      await navigateTo(`/admin/tournament/${res.id}`);
    }
    editing.value = false;
  }
}
</script>

<template>
  <NCard title="赛事信息" content-class="flex flex-col gap-4">
    <template #header-extra>
      <CommonIconButton v-if="!editing" icon="i-carbon:edit" text @click="editing = true">编辑</CommonIconButton>
      <CommonIconButton v-if="editing" icon="i-carbon:save" text @click="save">保存</CommonIconButton>
    </template>

    <NForm ref="formRef" :rules="rules" :model="tournament">
      <NGrid class="gap-x-2! gap-y-4!">
        <NFormItemGi :span="16" :label="t('main.tournament.name')" path="name">
          <CommonTransition>
            <NInputLocale v-if="editing" v-model:value="tournament.name" />
            <div v-else>{{ tournament.name.zh }}</div>
          </CommonTransition>
        </NFormItemGi>
        <NFormItemGi :span="4" :label="t('terms.gameVersion')" path="gameVersion">
          <CommonTransition>
            <GameVersionSelect v-if="editing" v-model:value="tournament.gameVersion" />
            <div v-else>{{ tournament.gameVersion }}</div>
          </CommonTransition>
        </NFormItemGi>
        <NFormItemGi :span="4" :label="t('main.tournament.type')" path="type">
          <CommonTransition>
            <AdminTournamentTypeSelect v-if="editing" v-model:value="tournament.type" />
            <div v-else>{{ tournament.type }}</div>
          </CommonTransition>
        </NFormItemGi>
      </NGrid>
    </NForm>
    <div>{{ tournament }}</div>

    <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
      <AdminTournamentStageForm
        v-model="tournament.stages[stageIndex]"
        :editing="editing"
        :index="stageIndex + 1"
        @edit="editing = true"
        @save="save"
        @delete="tournament.stages.splice(stageIndex, 1)"
      />
    </template>

    <AdminTournamentStageForm
      v-if="editing"
      v-model="tournament.stages[tournament.stages.length]"
      :editing="editing"
      :index="tournament.stages.length + 1"
      @add="tournament.stages.push({ name: {}, parts: [], rules: undefined })"
    />
  </NCard>
</template>
