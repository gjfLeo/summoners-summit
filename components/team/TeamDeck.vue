<template>
  <template v-if="Object.keys(actionCards).length > 0">
    <div class="grid mt gap-2" grid-cols="6 md:10 lg:15">
      <template v-for="(card, i) in actionCards" :key="i">
        <CardImage :card="card" class="w-100%" />
      </template>
    </div>
    <div class="mt text-sm text-gray">此处典型构筑指与平均携带张数差距最小的一套构筑，仅统计公布卡组的{{ numGameWithDeck }}场对局。</div>
  </template>
  <template v-else>
    <div class="mt text-sm text-gray">此阵容没有公布卡组的对局。</div>
  </template>
</template>

<script lang="ts" setup>
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

const { teamId } = useTeamProp(props);
const { teamGameList, teamTypicalActions } = useTeamInfo(teamId);

const numGameWithDeck = computed(() => teamGameList.value.filter(game => game.playerADeckId).length);
const actionCards = Object.entries(teamTypicalActions.value).flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard));
</script>
