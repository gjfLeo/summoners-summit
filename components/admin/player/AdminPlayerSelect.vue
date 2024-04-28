<script lang="tsx" setup>
import Pinyin from "pinyin-match";
import type { SelectRenderLabel, SelectRenderTag } from "naive-ui";
import type { Player } from "~/types/data";
import { NText } from "#components";

const props = defineProps<{
  players: Player[];
  // value: string | null;
}>();

const playerId = defineModel<string>("value");

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

const renderLabel: SelectRenderLabel = (option) => {
  const player = option.player as Player;
  if (!player) return <></>;
  return (
    <div class="flex flex-col p-block-2">
      <div class="flex items-center gap-2">
        <div>{player.uniqueName}</div>
        <NText class="text-xs" depth={3}>{player.uids.join("\u2006/\u2006")}</NText>
      </div>
      <NText class="text-xs" depth={3}>{player.aliases.join("\u2006/\u2006")}</NText>
    </div>
  );
};

const renderTag: SelectRenderTag = ({ option }) => {
  const player = option.player as Player;
  if (!player) return <></>;
  return (
    <div class="flex items-center gap-2">
      <div>{player.uniqueName}</div>
      <div class="text-xs opacity-50">{player.uids.join("\u2006/\u2006")}</div>
    </div>
  );
};
</script>

<template>
  <NSelect
    v-model:value="playerId"
    :options="options"

    clearable filterable
    :filter="selectFilter"
    :render-tag="renderTag"
    :render-label="renderLabel"
  />
</template>
