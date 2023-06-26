<template>
  <template v-if="numWinGameWithDeck > 0">
    <div class="grid mt gap-2" grid-cols="6 md:10 lg:15">
      <template v-for="(card, i) in actionCards" :key="i">
        <CardImage :card="card" class="w-100%" />
      </template>
    </div>
    <div class="mt text-sm text-gray">此处典型构筑指与胜场平均携带张数差距最小的一套构筑，仅统计公布卡组的{{ numWinGameWithDeck }}场获胜对局。</div>
  </template>
  <template v-else>
    <div class="mt text-sm text-gray">此阵容没有公布卡组的获胜对局。</div>
  </template>
</template>

<script lang="ts" setup>
import type { ActionCard, CharacterCard } from "~/utils/types";

const props = defineProps<{
  team: CharacterCard[] | string;
}>();

const { teamId } = useTeamProp(props);
const { teamGameList, teamTypicalActions } = useTeamInfo(teamId);

const numWinGameWithDeck = computed(() => teamGameList.value.filter(game => game.playerADeckId && game.winner === "A").length);
const actionCards = Object.entries(teamTypicalActions.value).flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard));
</script>
