export function mirrorPlayer<T>(player: T | "A" | "B"): T | "A" | "B" {
  if (player === "A") {
    return "B";
  }
  else if (player === "B") {
    return "A";
  }
  else {
    return player;
  }
}
