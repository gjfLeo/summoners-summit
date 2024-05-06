<script lang="ts" setup>
import { NForm } from "#components";
import type { TournamentPart } from "~/types/data";

const props = defineProps<{
  index: number;
  editing?: boolean;
  isOnlyPart: boolean;
}>();
defineEmits<{
  (e: "delete"): void;
}>();
const part = defineModel<TournamentPart>({ required: true });

const formRef = ref<InstanceType<typeof NForm>>();

const { t } = useI18n();

const defaultName = computed(() => t("main.tournament.partNameDefault", [props.index]));

const rules = {
  name: {
    trigger: "blur",
    validator: async () => {
      if (!props.isOnlyPart && !part.value.name.zh) {
        throw new Error(t("admin.validate.pleaseInput", [t("main.tournament.partName")]));
      }
    },
  },
  date: {
    trigger: "change",
    validator: async () => {
      if (!part.value.date) {
        throw new Error(t("admin.validate.pleaseSelect", [t("main.tournament.date")]));
      }
    },
  },
};

function validate() {
  return validateForm(formRef);
}

defineExpose({ validate });
</script>

<template>
  <NCard>
    <template #header>
      <div flex="~ gap-2">
        <span>{{ defaultName }}</span>
        <span v-if="part.name.zh">{{ part.name.zh }}</span>
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
      <NCollapseTransition :show="part && editing">
        <NForm ref="formRef" :model="part" :rules="rules">
          <NGrid class="gap-2!">
            <NFormItemGi :span="18" :label="t('main.tournament.partName')" path="name">
              <NInputLocale v-model:value="part.name" />
            </NFormItemGi>
            <NFormItemGi :span="6" :label="t('main.tournament.date')" path="date">
              <NDatePicker v-model:formatted-value="part.date" value-format="yyyy-MM-dd" type="date" />
            </NFormItemGi>
          </NGrid>
        </NForm>
      </NCollapseTransition>
    </template>
  </NCard>
</template>
