export function getPlayer(playerId: string): Player | undefined {
  return ZPlayer.optional().parse(readData(`players/${playerId}`));
}

export function getPlayerList(): Player[] {
  return ZPlayer.array().parse(readDataList("players"));
}

export function savePlayer(playerInput: PlayerInput): void {
  const player = {
    ...playerInput,
    hashId: `_${hash(playerInput.uniqueName)}`,
  };
  if (player.uid) {
    deletePlayer(player.hashId);
    writeData(`players/${player.uid}`, ZPlayer.parse(player));
  }
  else {
    writeData(`players/${player.hashId}`, ZPlayer.parse(player));
  }
}

export function deletePlayer(playerId: string): void {
  deleteData(`players/${playerId}`);
}
