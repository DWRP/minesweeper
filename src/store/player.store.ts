import { PlayerState } from "@/@types/stores.types";
import { create } from "zustand";

export const usePlayerStore = create<PlayerState>((set) => ({
  players: [
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ],
  currentPlayer: 0,
  setPlayers: (players) => set({ players }),
  setCurrentPlayer: (index) => set({ currentPlayer: index }),
}));
