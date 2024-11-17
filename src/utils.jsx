import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActiveState(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (let combination of WINNING_COMBINATIONS) {
    const firstCombSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondCombSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdCombSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstCombSymbol &&
      firstCombSymbol === secondCombSymbol &&
      firstCombSymbol === thirdCombSymbol
    ) {
      winner = players[firstCombSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialBoard.map((arr) => [...arr])]; // deep copy

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}
export { deriveActiveState, deriveWinner, deriveGameBoard };
