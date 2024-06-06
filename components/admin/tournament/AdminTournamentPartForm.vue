<script lang="ts" setup>
import type AdminTournamentMatchEditor from "./match/MatchEditor.vue";
import { NForm } from "#components";
import type { TournamentPart } from "~/types/data";

const props = defineProps<{
  stageIndex: number;
  stageKey: number;
  partIndex: number;
  editing?: boolean;
  isOnlyPart: boolean;
}>();
defineEmits<{
  (e: "delete"): void;
}>();
const part = defineModel<TournamentPart>({ required: true });

const formRef = ref<InstanceType<typeof NForm>>();

const { t } = useI18n();

const defaultName = computed(() => t("main.tournament.partNameDefault", [props.partIndex + 1]));

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

const matchEditor = inject<Ref<InstanceType<typeof AdminTournamentMatchEditor>>>("matchEditor");
async function addMatch() {
  if (matchEditor?.value) {
    try {
      const matchId = await matchEditor.value.create({
        stageIndex: props.stageIndex,
        partIndex: props.partIndex,
      });
      // part.value.matchIds.push(matchId);
    }
    catch {
    }
  }
}

function validate() {
  return validateForm(formRef);
}

defineExpose({ validate });
</script>

<template>
  <div class="mt">
    <NH4 v-if="!isOnlyPart" :id="`S${stageKey}P${part._key}`" un-flex="~ gap-2">
      <span>{{ defaultName }}</span>
      <span v-if="part.name.zh">{{ part.name.zh }}</span>

      <div class="ml-auto" un-flex="~ gap-2">
        <template v-if="editing">
          <CommonConfirmButton :text="t('admin.action.delete')" @click="$emit('delete')">
            <CommonIconButton icon="i-carbon:trash-can" danger>{{ t('admin.action.delete') }}</CommonIconButton>
          </CommonConfirmButton>
        </template>
      </div>
    </NH4>

    <CommonTransition>
      <NForm v-if="editing" ref="formRef" :model="part" :rules="rules">
        <NGrid class="gap-2!">
          <NFormItemGi v-if="!isOnlyPart" :span="24" :label="t('main.tournament.partName')" path="name">
            <NInputLocale v-model:value="part.name" />
          </NFormItemGi>
          <NFormItemGi :span="6" :label="t('main.tournament.date')" path="date">
            <NDatePicker v-model:formatted-value="part.date" value-format="yyyy-MM-dd" type="date" />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <NDescriptions v-else label-placement="left" :column="1" separator="&emsp;">
        <NDescriptionsItem :label="t('main.tournament.date')">{{ part.date }}</NDescriptionsItem>
      </NDescriptions>
    </CommonTransition>

    <template v-if="!editing">
      <NButton
        class="mt w-full" dashed
        @click="addMatch"
      >
        {{ t('admin.tournament.addMatch') }}
      </NButton>
    </template>
  </div>
</template>
