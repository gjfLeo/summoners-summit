<template>
  <div un-flex="~ wrap gap-2">
    <template v-for="(tag, i) in tags" :key="i">
      <template v-if="Array.isArray(tag)">
        <NTooltip placement="bottom-start">
          <template #trigger><NTag round size="small">{{ tag[0] }}</NTag></template>
          <template #default>{{ tag[1] }}</template>
        </NTooltip>
      </template>
      <template v-else>
        <NTag round size="small">{{ tag }}</NTag>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { TournamentRules } from "~/types/data";

const props = defineProps<{
  rules: TournamentRules;
}>();

const { t } = useLocales();

const tags = computed(() => {
  const tags = new Array<string | [string, string]>();
  if (props.rules.numGames === 1) {
    tags.push(t("main.rules.bo1"));
  }
  else {
    tags.push(t("main.rules.boX", [props.rules.numGames]));
    tags.push([
      t(`main.rules.mode.${props.rules.mode}`),
      t(`main.rules.mode.${props.rules.mode}Description`),
    ]);
  }

  if (props.rules.banCharacters) {
    tags.push([
      t("main.rules.banCharacters", [props.rules.banCharacters.num]),
      t("main.rules.banCharactersDescription", [props.rules.banCharacters.num]),
    ]);
  }
  if (props.rules.submitTeams) {
    if (props.rules.submitTeams.banTeams) {
      tags.push([
        t("main.rules.submitTeamsBanTeams", [props.rules.submitTeams.num, props.rules.submitTeams.banTeams.num]),
        t("main.rules.submitTeamsBanTeamsDescription", [props.rules.submitTeams.num, props.rules.submitTeams.banTeams.num]),
      ]);
    }
    else {
      tags.push([
        t("main.rules.submitTeams", [props.rules.submitTeams.num]),
        t("main.rules.submitTeamsDescription", [props.rules.submitTeams.num]),
      ]);
    }
    if (props.rules.submitTeams.numCharactersRequired
      && props.rules.submitTeams.numCharactersRequired !== props.rules.submitTeams.num * 3) {
      tags.push([
        t("main.rules.charactersRequired", [props.rules.submitTeams.numCharactersRequired]),
        t("main.rules.charactersRequiredDescription", [props.rules.submitTeams.numCharactersRequired]),
      ]);
    }
    else {
      tags.push([
        t("main.rules.charactersNoRepeat"),
        t("main.rules.charactersNoRepeatDescription"),
      ]);
    }

    if (props.rules.submitTeams.submitDecks) {
      if (props.rules.submitTeams.submitDecks.maxNumForEachTeam) {
        tags.push([
          t("main.rules.submitDecks"),
          t("main.rules.submitDecksEachTeamDescription", [props.rules.submitTeams.submitDecks.maxNumForEachTeam]),
        ]);
      }
      if (props.rules.submitTeams.submitDecks.maxNumInTotal) {
        tags.push([
          t("main.rules.submitDecks"),
          t("main.rules.submitDecksInTotalDescription", [props.rules.submitTeams.submitDecks.maxNumInTotal]),
        ]);
      }
    }
  }

  return tags;
});
</script>
