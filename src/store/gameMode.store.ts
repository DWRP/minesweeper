import { GameModeState } from "@/@types/stores.types";
import { create } from "zustand";

export const useGameModeStore = create<GameModeState>((set) => ({
  gameMode: "menu",
  setGameMode: (mode) => set({ gameMode: mode }),
}));
