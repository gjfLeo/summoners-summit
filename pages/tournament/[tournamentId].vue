<template>
  <div v-if="tournament">
    <NH1 :id="currentLocalized(tournament.name)" un-flex="~ items-end">
      <span>{{ currentLocalized(tournament.name) }}</span>
      <NText :depth="2" class="ml text-75%">{{ tournament.gameVersion }}</NText>
      <NText :depth="2" class="ml-2 text-75%">{{ tournament.type }}</NText>
    </NH1>

    <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
      <NH2 :id="currentLocalized(stage.name)">{{ currentLocalized(stage.name) }}</NH2>
      <TournamentRules v-if="stage.rules" :rules="stage.rules" />

      <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
        <NCard class="mt">
          <NH3 v-if="stage.parts.length > 1" :id="`${currentLocalized(stage.name)}-${currentLocalized(part.name)}`">
            {{ currentLocalized(part.name) }}
          </NH3>

          <template v-for="(matchId, matchIndex) in part.matchIds" :key="matchId">
            <NH4 class="flex flex-wrap items-baseline gap-2">
              <div>{{ t('main.tournament.matchName', [matchIndex + 1]) }}</div>

              <!-- 小屏幕换行 -->
              <div class="h-0 w-full md:hidden" />
              <div class="text-base" :class="{ 'text-orange-500': getMatchWinner(matches[matchId], games) === 'A' }">
                <PlayerName :id="matches[matchId].playerA.playerId" :nickname="matches[matchId].playerA.nickname" />
              </div>
              <div class="text-sm">VS</div>
              <div class="text-base" :class="{ 'text-orange-500': getMatchWinner(matches[matchId], games) === 'B' }">
                <PlayerName :id="matches[matchId].playerB.playerId" :nickname="matches[matchId].playerB.nickname" />
              </div>

              <!-- 右侧 -->
              <div class="ml-auto flex gap-2 text-sm text-gray">
                <div>{{ part.date }}</div>
              </div>
            </NH4>
            <TournamentMatchGameList
              :match="matches[matchId]"
              :games="games"
            />
          </template>
        </NCard>
      </template>
    </template>

    <SitePageAnchors>
      <NAnchorLink :title="t('main.tournament.tournamentDetails')" :href="`#${currentLocalized(tournament.name)}`">
        <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
          <NAnchorLink :title="currentLocalized(stage.name)" :href="`#${currentLocalized(stage.name)}`">
            <template v-if="stage.parts.length > 1">
              <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
                <NAnchorLink
                  :title="currentLocalized(part.name)"
                  :href="`#${currentLocalized(stage.name)}-${currentLocalized(part.name)}`"
                />
              </template>
            </template>
          </NAnchorLink>
        </template>
      </NAnchorLink>
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute("tournament-tournamentId___zh");
const tournamentId = route.params.tournamentId;

const { t, currentLocalized } = useLocales();

const { tournament, matches, games } = await useApiGetTournament({ id: tournamentId });
</script>
