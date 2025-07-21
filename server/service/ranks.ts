import type { GameVersionId } from "~~/shared/types";
import { getStoragePlayer } from "./player";

export async function getRanksIds() {
  const storage = useStorage("assets:data:ranks");
  const keys = await storage.getKeys();
  return keys.map(key => key.replace(".json", ""));
}
export async function getRanks(rankId: string) {
  const storage = useStorage("assets:data:ranks");
  const ranks = await storage.getItem(`${rankId}.json`);
  return ZRanks.parse(ranks);
}

// ----------------------------------------------------------------------------

export function saveRanks(ranks: Ranks) {
  writeData(`ranks/${ranks.id}`, ranks);
}

// ----------------------------------------------------------------------------

export async function getRanksByGameVersion(gameVersion?: GameVersionId) {
  gameVersion = gameVersion ?? (await getRanksIds()).toSorted().at(-1)!;
  return await getRanks(gameVersion);
}

export async function getPlayerRank(player: Player | PlayerId, options: {
  ranks?: Ranks;
  gameVersion?: GameVersionId;
}) {
  if (typeof player === "string") {
    const _player = await getStoragePlayer(player);
    if (!_player) {
      throw createError({ statusCode: 500, message: `Player ${player} not found` });
    }
    player = _player;
  }

  const ranks = options.ranks ?? await getRanksByGameVersion(options.gameVersion);
  if (!ranks) {
    return undefined;
  };

  const rank = ranks.ranks.find(r => player.uids.includes(r.uid));
  return rank;
}
