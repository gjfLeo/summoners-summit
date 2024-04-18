<script lang="ts" setup>
import Pinyin from "pinyin-match";
import type { Player } from "~/types/data";

const props = defineProps<{
  players: Player[];
  value: string;
}>();

const emit = defineEmits<{
  (e: "update:value", value: string): void;
}>();

const playerId = useVModel(props, "value", emit);

const options = computed(() => {
  return props.players.map<SelectOption>((player) => {
    return {
      label: player.uniqueName,
      value: player.id,
      player,
    };
  });
});

const selectFilter: SelectFilter = (pattern, option) => {
  const player = option.player as Player;
  return player.id === pattern || player.uids.includes(pattern)
    || [player.uniqueName, ...player.aliases].some(name => Pinyin.match(name, pattern));
};
</script>

<template>
  <NSelect
    v-model:value="playerId"
    :options="options"
    filterable
    :filter="selectFilter"
  />
</template>
