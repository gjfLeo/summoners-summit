<template>
  <div class="flex gap-2">
    <template v-if="rules.numGames === 1">
      <NTag round size="small">{{ $t('rules.bo1') }}</NTag>
    </template>
    <template v-else>
      <!-- 准备和禁用 -->
      <NTooltip>
        <template #default>
          <span v-if="rules.numDecksBanned">{{ $t('rules.numDecksWithBanDescription', [rules.numDecks, rules.numDecksBanned]) }}</span>
          <span v-else>{{ $t('rules.numDecksDescription', [rules.numDecks]) }}</span>
        </template>
        <template #trigger>
          <NTag round size="small">
            <span v-if="rules.numDecksBanned">{{ $t('rules.numDecksWithBan', [rules.numDecks, rules.numDecksBanned]) }}</span>
            <span v-else>{{ $t('rules.numDecks', [rules.numDecks]) }}</span>
          </NTag>
        </template>
      </NTooltip>

      <!-- 禁用角色 -->
      <template v-if="rules.numCharactersBanned">
        <NTooltip>
          <template #default>
            <span>{{ $t('rules.numCharacterBannedDescription', rules.numCharactersBanned) }}</span>
          </template>
          <template #trigger>
            <NTag round size="small">{{ $t('rules.numCharacterBanned', rules.numCharactersBanned) }}</NTag>
          </template>
        </NTooltip>
      </template>

      <!-- 角色要求 -->
      <template v-if="rules.numCharactersRequired">
        <NTooltip>
          <template #default>
            <span>{{ $t('rules.numCharactersRequiredDescription', [rules.numCharactersRequired]) }}</span>
          </template>
          <template #trigger>
            <NTag round size="small">{{ $t('rules.numCharactersRequired', [rules.numCharactersRequired]) }}</NTag>
          </template>
        </NTooltip>
      </template>

      <!-- 场数 -->
      <NTag round size="small">{{ $t('rules.boX', [rules.numGames, (rules.numGames + 1) / 2]) }}</NTag>
      <!-- 模式 -->
      <NTooltip>
        <template #default>
          <span>{{ modes[rules.mode].description }}</span>
        </template>
        <template #trigger>
          <NTag round size="small">{{ modes[rules.mode].name }}</NTag>
        </template>
      </NTooltip>

      <!-- 额外规则 -->
      <NTooltip v-for="(rule, i) of rules.extra ?? []" :key="i">
        <template #default>
          <span>{{ rule[1] }}</span>
        </template>
        <template #trigger>
          <NTag round size="small">{{ rule[0] }}</NTag>
        </template>
      </NTooltip>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { TournamentRules } from "~/utils/types";

defineProps<{
  rules: TournamentRules;
}>();

const { t } = useI18n();

const modes: Record<TournamentRules["mode"], { name: string; description: string }> = {
  Conquest: { name: t("rules.conquest"), description: t("rules.conquestDescription") },
  Duel: { name: t("rules.duel"), description: t("rules.duelDescription") },
};
</script>
