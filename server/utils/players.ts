export function getPlayer(playerId: string): Player | undefined {
  return ZPlayer.optional().parse(readData(`players/${playerId}`));
}

export function getPlayerList(): Player[] {
  return ZPlayer.array().parse(readDataList("players"));
}

export function savePlayer(params: SavePlayerParams): void {
  if (params.id) {
    deletePlayer(params.id);
  }

  const player = Object.assign({}, params, {
    id: hash(params.uniqueName),
  });
  writeData(`players/${player.id}`, ZPlayer.parse(player));
}

export function deletePlayer(playerId: string): void {
  deleteData(`players/${playerId}`);
}

export function findPlayer(nickname: string): Player | undefined {
  return getPlayerList().find(player => player.uniqueName === nickname || player.aliases?.includes(nickname));
}
