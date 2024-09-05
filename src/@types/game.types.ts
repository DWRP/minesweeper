export type CellValue = number | "mine" | null;
export type CellState = "hidden" | "revealed" | "flagged";

export interface Cell {
  value: CellValue;
  state: CellState;
}

export interface Player {
  name: string;
  score: number;
}
