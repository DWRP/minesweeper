import { BoardState } from "@/@types/stores.types";
import { createBoard, revealCell, toggleFlag } from "@/utils/board";
import { create } from "zustand";

export const useBoardStore = create<BoardState>((set) => ({
  board: createBoard(),
  setBoard: (board) => set({ board }),
  resetBoard: () => set({ board: createBoard() }),
  revealCell: (row, col) =>
    set((state) => ({ board: revealCell(state.board, row, col) })),
  toggleFlag: (row, col) =>
    set((state) => ({ board: toggleFlag(state.board, row, col) })),
}));
