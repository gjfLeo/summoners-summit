<script lang="ts" setup>
import { NForm } from "#components";
import type { TournamentStage } from "~/types/data";

const props = defineProps<{
  index: number;
  editing?: boolean;
}>();

defineEmits<{
  (e: "delete"): void;
}>();

const stage = defineModel<TournamentStage>({ required: true });

const formRef = ref<InstanceType<typeof NForm>>();

const { t } = useI18n();

const defaultName = computed(() => t("main.tournament.stageNameDefault", [props.index]));

const hasRules = computed({
  get: () => {
    return stage.value.rules !== undefined;
  },
  set: (v) => {
    stage.value.rules = v ? { numGames: 3, mode: "conquest" } : undefined;
  },
});
const rules = {
  name: {
    trigger: "blur",
    validator: async () => {
      if (!stage.value.name.zh) {
        throw new Error(t("admin.validate.pleaseInput", [t("main.tournament.stageName")]));
      }
    },
  },
};

function addPart() {
  stage.value.parts.push({
    name: {},
    date: dayjs().subtract(20, "hours").format("YYYY-MM-DD"),
    matchIds: [],
  });
}

function validate() {
  return formRef.value?.validate();
}

defineExpose({ validate });
</script>

<template>
  <NCard>
    <template #header>
      <div flex="~ gap-2">
        <span>{{ defaultName }}</span>
        <span v-if="stage.name.zh">{{ stage.name.zh }}</span>
      </div>
    </template>
    <template #header-extra>
      <div flex="~ gap-2">
        <template v-if="editing">
          <CommonConfirmButton :text="t('admin.action.delete')" @click="$emit('delete')">
            <CommonIconButton icon="i-carbon:trash-can" danger>{{ t('admin.action.delete') }}</CommonIconButton>
          </CommonConfirmButton>
        </template>
      </div>
    </template>
    <template #default>
      <NCollapseTransition :show="stage && editing">
        <NForm ref="formRef" :model="stage" :rules="rules">
          <NFormItem :label="t('main.tournament.stageName')" path="name">
            <NInputLocale v-model:value="stage.name" />
          </NFormItem>
        </NForm>
        <div flex="~ items-center gap-2">
          <NText :depth="1" class="cursor-default">{{ t('main.tournament.rules') }}</NText>
          <NSwitch v-model:value="hasRules" />
        </div>
        <NCollapseTransition :show="hasRules">
          <AdminTournamentRulesForm v-if="stage.rules" v-model="stage.rules" />
        </NCollapseTransition>
        <TransitionGroup
          name="common-transition-group" tag="div"
          class="mt" flex="~ col gap-4"
        >
          <NCard
            v-if="editing"
            :key="-1"
            class="border-dashed!"
          >
            <template #header-extra>
              <CommonIconButton icon="i-carbon:add" @click="addPart">{{ t('admin.tournament.addPart') }}</CommonIconButton>
            </template>
            <template #header>
              <div />
            </template>
          </NCard>
        </TransitionGroup>
      </NCollapseTransition>
      <NCollapseTransition :show="stage && !editing">
        {{ stage }}
      </NCollapseTransition>
    </template>
  </NCard>
</template>
