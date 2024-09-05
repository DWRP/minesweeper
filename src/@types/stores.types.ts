import { Cell } from "./game.types";

export type GameMode =
  | "menu"
  | "single-player"
  | "multiplayer"
  | "local-multiplayer"
  | "online-multiplayer"
  | "instructions"
  | "credits";

export interface GameModeState {
  gameMode: GameMode;
  setGameMode: (mode: GameMode) => void;
}

export interface OnlineGameState {
  roomId: string | null;
  playerId: string | null;
  opponentId: string | null;
  isPlayerTurn: boolean;
  board: Cell[][];
  setRoomId: (roomId: string | null) => void;
  setPlayerId: (playerId: string | null) => void;
  setOpponentId: (opponentId: string | null) => void;
  setIsPlayerTurn: (isPlayerTurn: boolean) => void;
  setBoard: (board: Cell[][]) => void;
  resetOnlineGame: () => void;
}

export interface Player {
  name: string;
  score: number;
}

export interface PlayerState {
  players: Player[];
  currentPlayer: number;
  setPlayers: (players: Player[]) => void;
  setCurrentPlayer: (index: number) => void;
}

export interface BoardState {
  board: Cell[][];
  setBoard: (board: Cell[][]) => void;
  resetBoard: () => void;
  revealCell: (row: number, col: number) => void;
  toggleFlag: (row: number, col: number) => void;
}
