<template>
  <template v-if="!loading">
    <NDataTable
      :data="data"
      :columns="columns"
      max-height="24rem"
    />
  </template>
  <template v-else>
    <NSpin size="large" />
  </template>
</template>

<script lang="ts" setup>
import { CommonIconButton, NTooltip, NuxtLinkLocale, RenderWinRate, TeamAvatars } from "#components";
import { divide } from "mathjs/number";

const props = defineProps<{
  teamId: DeckTeamId;
  gameVersion: GameVersionId;
}>();
const emit = defineEmits<{
  (e: "viewGames", teamId: DeckTeamId): void;
}>();

const { t } = useLocales();

const { data: matchupStatsData, pending: loading } = useLazyFetch(`/api/v4/teams/${props.teamId}/matchup-stats`, {
  query: { gameVersion: props.gameVersion },
});

const data = computed(() => {
  if (!matchupStatsData.value) {
    return [];
  }

  return matchupStatsData.value
    .map((item) => {
      return {
        ...item,
        numGamesFollower: item.numGames - item.numGamesStarter,
        numGamesFollowerWin: (item.numGames - item.numGamesStarter) - (item.numGamesWin - item.numGamesStarterWin),
      };
    })
    .map((item) => {
      return {
        ...item,
        winRate: divide(item.numGamesWin, item.numGames),
        starterWinRate: divide(item.numGamesStarterWin, item.numGamesStarter),
        followerWinRate: divide(item.numGamesFollowerWin, item.numGamesFollower),
      };
    })
    .sort((a, b) => b.numGames - a.numGames);
});

const columns: DataTableColumn<typeof data.value[0]>[] = [
  {
    key: "opponentTeamId",
    title: t("main.team.matchups.opponent"),
    width: "7rem",
    fixed: "left",
    align: "center",
    render: row => h(
      NuxtLinkLocale,
      {
        to: { path: `/team/${row.opponentTeamId}/${getGameVersionPath(props.gameVersion)}` },
        prefetch: false,
      },
      () => h(TeamAvatars, { team: row.opponentTeamId }),
    ),
  },
  {
    title: t("main.team.matchups.numGames"),
    key: "numGames",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.team.matchups.winRate"),
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => RenderWinRate(row.numGamesWin, row.numGames, row.winRate),
  },
  {
    title: t("main.team.matchups.starterWinRate"),
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => RenderWinRate(row.numGamesStarterWin, row.numGamesStarter, row.starterWinRate),
  },
  {
    title: t("main.team.matchups.followerWinRate"),
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => RenderWinRate(row.numGamesFollowerWin, row.numGamesFollower, row.followerWinRate),
  },
  {
    key: "actions",
    width: "2rem",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          CommonIconButton,
          {
            icon: "i-mingcute:eye-2-line",
            onClick: () => emit("viewGames", row.opponentTeamId),
          },
        ),
        default: () => h("span", t("main.team.matchups.view")),
      },
    ),
  },
];
</script>
