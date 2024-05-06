<script lang="ts" setup>
import { AdminTournamentPartForm, NForm } from "#components";
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
const partFormRefs = ref<InstanceType<typeof AdminTournamentPartForm>[]>([]);

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

let key = stage.value.parts.length;
function addPart() {
  const lastPart = stage.value.parts.at(-1);
  stage.value.parts.push({
    _key: key++,
    name: {},
    date: lastPart
      ? dayjs(lastPart.date).add(1, "day").format("YYYY-MM-DD")
      : dayjs().subtract(20, "hours").format("YYYY-MM-DD"),
    matchIds: [],
  });
}

async function validate() {
  const results = await Promise.allSettled([
    validateForm(formRef),
    ...partFormRefs.value.map(partForm => partForm.validate()),
  ]);
  const messages = results.filter(result => result.status === "rejected")
    .flatMap(result => result.reason as string[]);
  return Promise.reject(messages);
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
          <template v-for="(part, partIndex) in stage.parts" :key="part._key">
            <AdminTournamentPartForm
              ref="partFormRefs"
              v-model="stage.parts[partIndex]"
              :is-only-part="stage.parts.length === 1"
              :editing="editing"
              :index="partIndex + 1"
              @delete="stage.parts.splice(partIndex, 1)"
            />
          </template>
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
        <TournamentRules v-if="stage.rules" :rules="stage.rules" />
        {{ stage }}
      </NCollapseTransition>
    </template>
  </NCard>
</template>
