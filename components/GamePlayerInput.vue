<template>
  <div grid="~ cols-3 gap-1">
    <template v-for="(card, i) in [modelValue.character1, modelValue.character2, modelValue.character3]" :key="i">
      <div class="h-8 w-8 justify-self-center">
        <CardAvatar v-if="card" :card="card" />
      </div>
    </template>
    <CharacterCardSelector v-model="info.character1" />
    <CharacterCardSelector v-model="info.character2" />
    <CharacterCardSelector v-model="info.character3" />
    <NButton @click="actionsDialogVisible = true">牌组</NButton>
    <NModal v-model:show="actionsDialogVisible">
      <NCard class="w-80%">
        <ActionsInput v-model:actions="info.actions" />
        <ActionsPreview v-model:actions="info.actions" class="mt" />
      </NCard>
    </NModal>
  </div>
</template>

<script lang="ts" setup>
import { NButton, NCard, NModal } from "naive-ui";
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  modelValue: {
    character1?: CharacterCard;
    character2?: CharacterCard;
    character3?: CharacterCard;
    winner?: boolean;
    starter?: boolean;
    actions?: Partial<Record<ActionCard, number>>;
  };
}>();

const emit = defineEmits(["update:modelValue"]);

const info = useVModel(props, "modelValue", emit);

const actionsDialogVisible = ref(false);
</script>
