<template>
  <NModal
    v-model:show="visible"
    preset="dialog" :show-icon="false" :title="t('terms.actionCards')"
    class="w-800px!"
  >
    <template #default>
      <NForm inline :show-label="false" :show-feedback="false">
        <NFormItem>
          <AdminTournamentMatchActionCardSelector ref="cardSelectorRef" :action-cards="actionCards" @select="handleSelectCard" />
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
      <div class="mt" un-grid="~ cols-6 md:cols-10 gap-2">
        <template v-for="(cardId, i) in actionCards" :key="i">
          <div class="card-container" @click="remove(cardId, i)">
            <CardImage :card="cardId" />
            <div class="card-shadow">
              <NText class="text-4xl text-white"><div class="i-carbon:close" /></NText>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">{{ t('admin.action.confirm') }}</NButton>
    </template>
  </NModal>
</template>

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

function remove(_cardId: CardId, i: number) {
  actionCards.value.splice(i, 1);
}
function clear() {
  actionCards.value = [];
}
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template: 1fr / 1fr;
  cursor: pointer;

  & > * {
    grid-area: 1 / 1 / 2 / 2;
  }
}

.card-shadow {
  border-radius: 0.25rem;
  background-color: #4448;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-container:not(:hover) & {
    display: none;
  }
}
</style>
