<template>
  <NDataTable
    :data="data"
    :columns="columns"
    max-height="24rem"
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { CommonIconButton, NTooltip, NuxtLinkLocale, RenderWinRate, TeamAvatars } from "#components";
import type { DeckTeamId, GameDetail, GameVersionId } from "~/types";

const props = defineProps<{
  games: GameDetail[];
  gameVersion: GameVersionId;
}>();
const emit = defineEmits<{
  (e: "viewGames", teamId: DeckTeamId): void;
}>();

const { games: gameList, gameVersion } = toRefs(props);

const { t } = useLocales();

const data = computed(() => {
  const record: Record<DeckTeamId, {
    opponentTeamId: DeckTeamId;
    numGames: number;
    numGamesWin: number;
    numGamesStarter: number;
    numGamesStarterWin: number;
    numGamesFollower: number;
    numGamesFollowerWin: number;
  }> = {};
  function getRecord(teamId: DeckTeamId) {
    return record[teamId] ??= {
      opponentTeamId: teamId,
      numGames: 0,
      numGamesWin: 0,
      numGamesStarter: 0,
      numGamesStarterWin: 0,
      numGamesFollower: 0,
      numGamesFollowerWin: 0,
    };
  }

  gameList.value.forEach((game) => {
    const record = getRecord(game.playerBDeck.teamId);
    record.numGames++;
    if (game.winner === "A") {
      record.numGamesWin++;
    }
    if (game.starter === "A") {
      record.numGamesStarter++;
      if (game.winner === "A") {
        record.numGamesStarterWin++;
      }
    }
    if (game.starter === "B") {
      record.numGamesFollower++;
      if (game.winner === "A") {
        record.numGamesFollowerWin++;
      }
    }
  });

  return Object.values(record)
    .map((item) => {
      return {
        ...item,
        winRate: divide(item.numGamesWin, item.numGames),
        starterWinRate: divide(item.numGamesStarterWin, item.numGamesStarter),
        followerWinRate: divide(item.numGamesFollowerWin, item.numGamesFollower),
      };
    })
    .sort(sorter("numGames")).reverse();
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
        to: `/team/${row.opponentTeamId}/${getGameVersionPath(gameVersion.value)}`,
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
