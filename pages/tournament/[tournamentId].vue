<template>
  <NH1>{{ tournament.name }}</NH1>

  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <NH2>{{ stage.name }}</NH2>
    <TournamentRules v-if="stage.rules" :rules="stage.rules" />
    <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
      <NCard class="mt">
        <NH3 v-if="part.name">{{ part.name }}</NH3>
        <template v-for="matchId in part.matchIds" :key="matchId">
          <NH4 class="flex flex-wrap items-baseline gap-2">
            <div>{{ matches[matchId].name }}</div>

            <!-- 小屏幕换行 -->
            <div class="h-0 w-full md:hidden" />
            <div class="text-base" :class="{ 'text-orange-500': matches[matchId].winner === 'A' }"><PlayerName :id="matches[matchId].playerAId" :nickname="matches[matchId].playerANickname" /></div>
            <div class="text-sm">VS</div>
            <div class="text-base" :class="{ 'text-orange-500': matches[matchId].winner === 'B' }"><PlayerName :id="matches[matchId].playerBId" :nickname="matches[matchId].playerBNickname" /></div>

            <!-- 右侧 -->
            <div class="ml-auto flex gap-2 text-sm text-gray">
              <LinkVideo v-if="matches[matchId].video" :video="matches[matchId].video!" />
              <div>{{ matches[matchId].date }}</div>
            </div>
          </NH4>
          <TournamentMatchGameList
            :player-a-id="matches[matchId].playerAId"
            :player-a-nickname="matches[matchId].playerANickname"
            :player-b-id="matches[matchId].playerBId"
            :player-b-nickname="matches[matchId].playerBNickname"
            :banned="matches[matchId].banned"
            :games="matches[matchId].gameIds.map(gId => games[gId])"
          />
        </template>
      </NCard>
    </template>
  </template>
</template>

<script lang="ts" setup>
const route = useRoute();
const tournamentId = route.params.tournamentId as string;

const { tournament, matches, games } = await useApiTournamentDetail(tournamentId);

const { t } = useI18n();
useHead({ title: t("site.titleFormatWithName", [tournament.name, t("menu.tournamentDetail"), t("site.name")]) });
</script>
