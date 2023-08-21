<template>
  <div flex="~ gap-2 items-center justify-center">
    <NText
      :type="player === starter ? 'primary' : (starter === undefined ? 'error' : undefined)"
      :depth="player === starter ? 1 : 3"
      :class="{ 'font-bold': player === starter }"
      class="cursor-pointer select-none"
      @click="dataStarter = player"
    >
      先
    </NText>
    <NText
      :type="player === winner ? 'primary' : (winner === undefined ? 'error' : undefined)"
      :depth="player === winner ? 1 : 3"
      :class="{ 'font-bold': player === winner }"
      class="cursor-pointer select-none"
      @click="dataWinner = player"
    >
      胜
    </NText>
    <div flex="~ gap-1 justify-center">
      <template v-for="i in 3" :key="i">
        <EditorCharacterCardSelector
          :ref="bindInputCharacterRef(i - 1)"
          v-model="dataCharacters[i - 1]"
          @update:model-value="handleCharacterSelected(i - 1)"
        />
      </template>
    </div>
    <NText
      :type="actionsCount === 30 ? 'primary' : (actionsCount === 0 ? undefined : 'error')"
      :depth="actionsCount > 0 ? 1 : 3"
      :class="{ 'font-bold': actionsCount > 0 }"
      class="cursor-pointer select-none"
      @click="actionsDialogVisible = true"
    >
      牌组
    </NText>
  </div>
  <NModal v-model:show="actionsDialogVisible" preset="card" class="max-w-6xl">
    <EditorActionsInput v-model:actions="dataActions" />
    <EditorActionsPreview v-model:actions="dataActions" class="mt" />
    <template #footer>
      <NButton @click="actionsDialogVisible = false">关闭</NButton>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import { NButton, NModal, NText } from "naive-ui";
import type { ActionCard, CharacterCard } from "~/utils/types";
import { EditorCharacterCardSelector } from "#components";

const props = defineProps<{
  player: "A" | "B";
  characters: CharacterCard[];
  actions?: Partial<Record<ActionCard, number>>;
  starter?: "A" | "B";
  winner?: "A" | "B";
}>();

const emit = defineEmits(["update:characters", "update:actions", "update:starter", "update:winner"]);

const dataCharacters = useVModel(props, "characters", emit);
const dataActions = useVModel(props, "actions", emit);
const dataStarter = useVModel(props, "starter", emit);
const dataWinner = useVModel(props, "winner", emit);
const actionsCount = computed(() => Object.values(dataActions.value ?? {}).reduce((a, b) => a + b, 0));

const inputCharacterRefs = ref<(InstanceType<typeof EditorCharacterCardSelector> | null)[]>([]);

const actionsDialogVisible = ref(false);

function bindInputCharacterRef(i: number) {
  return (el: any) => inputCharacterRefs.value[i] = el;
}

function handleCharacterSelected(i: number) {
  if (i < 2) {
    inputCharacterRefs.value[i + 1]?.focus();
  }
}
</script>
