<script lang="ts" setup>
import type { AdminTournamentMatchActionCardSelector, NAutoComplete } from "#components";
import type { CardId } from "~/types/data";

const { t } = useLocales();

const visible = ref(false);
const actionCards = ref<CardId[]>([]);
const resolveRef = ref<(actionCards: CardId[]) => void>();
const rejectRef = ref<() => void>();

const cardSelectorRef = ref<InstanceType<typeof AdminTournamentMatchActionCardSelector>>();
const countSelectorRef = ref<InstanceType<typeof NAutoComplete>>();

async function edit(currentValue: CardId[]) {
  actionCards.value = [...currentValue];
  visible.value = true;
  return new Promise<CardId[]>((resolve, reject) => {
    actionCards.value = currentValue;
    resolveRef.value = resolve;
    rejectRef.value = reject;
  });
}

defineExpose({
  edit,
});

function confirm() {
  resolveRef.value?.(actionCards.value);
  visible.value = false;
}

const selectedCard = ref<CardId>();
const inputCount = ref("");

function handleSelectCard(value: string) {
  selectedCard.value = value as CardId;
  countSelectorRef.value?.focus();
}

function handleInputCount(value: string) {
  const card = selectedCard.value;
  const count = Number(value);
  inputCount.value = "";
  if (!card) return;
  if (count === 1 || count === 2) {
    actionCards.value.push(...Array.from({ length: count }, () => card));
  }
  cardSelectorRef.value?.clear();
  cardSelectorRef.value?.focus();
}
</script>

<template>
  <NModal
    v-model:show="visible"
    preset="dialog" :show-icon="false" :title="t('terms.actionCards')"
  >
    <template #default>
      <NForm inline :show-label="false" :show-feedback="false">
        <NFormItem>
          <EditorActionCardSelector ref="cardSelectorRef" :action-cards="actionCards" @select="handleSelectCard" />
        </NFormItem>
        <NFormItem>
          <NAutoComplete ref="countSelectorRef" v-model:value="inputCount" :options="['1', '2']" :get-show="() => true" placeholder="数量" @update:value="handleInputCount" />
        </NFormItem>
        <NFormItem>
          <NText>已包含 {{ actionCards.length }} 张</NText>
        </NFormItem>
        <NFormItem>
          <NButton @click="clear">清空</NButton>
        </NFormItem>
      </NForm>
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">{{ t('admin.action.confirm') }}</NButton>
    </template>
  </NModal>
</template>
