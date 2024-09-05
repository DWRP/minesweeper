import { Cell } from "@/@types/game.types";

const BOARD_SIZE = 10;
const NUM_MINES = 15;

export function createBoard(): Cell[][] {
  const board: Cell[][] = Array(BOARD_SIZE)
    .fill(null)
    .map(() =>
      Array(BOARD_SIZE)
        .fill(null)
        .map(() => ({ value: null, state: "hidden" }))
    );

  // Place mines
  let minesPlaced = 0;
  while (minesPlaced < NUM_MINES) {
    const row = Math.floor(Math.random() * BOARD_SIZE);
    const col = Math.floor(Math.random() * BOARD_SIZE);
    if (board[row][col].value !== "mine") {
      board[row][col].value = "mine";
      minesPlaced++;
    }
  }

  // Calculate numbers
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col].value !== "mine") {
        let count = 0;
        for (let r = -1; r <= 1; r++) {
          for (let c = -1; c <= 1; c++) {
            if (
              row + r >= 0 &&
              row + r < BOARD_SIZE &&
              col + c >= 0 &&
              col + c < BOARD_SIZE
            ) {
              if (board[row + r][col + c].value === "mine") count++;
            }
          }
        }
        board[row][col].value = count;
      }
    }
  }

  return board;
}

export function revealCell(
  board: Cell[][],
  row: number,
  col: number
): Cell[][] {
  const newBoard = [...board];
  const cell = newBoard[row][col];

  if (cell.state !== "hidden") return newBoard;

  cell.state = "revealed";

  if (cell.value === 0) {
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        if (
          row + r >= 0 &&
          row + r < BOARD_SIZE &&
          col + c >= 0 &&
          col + c < BOARD_SIZE
        ) {
          revealCell(newBoard, row + r, col + c);
        }
      }
    }
  }

  return newBoard;
}

export function toggleFlag(
  board: Cell[][],
  row: number,
  col: number
): Cell[][] {
  const newBoard = [...board];
  const cell = newBoard[row][col];

  if (cell.state === "hidden") {
    cell.state = "flagged";
  } else if (cell.state === "flagged") {
    cell.state = "hidden";
  }

  return newBoard;
}
