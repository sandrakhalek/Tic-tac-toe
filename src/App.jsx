import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { GameOver } from "./components/GameOver";
import { Log } from "./components/Log";
import { Player } from "./components/Player";
import { deriveActiveState, deriveGameBoard, deriveWinner } from "./utils";

const PLAYERS = { X: "Player 1", O: "Player 2" };

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActiveState(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const handlePlayerName = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActiveState(prevTurns);

      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  function handleRematch() {
    setGameTurns([]);
  }

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log logs={gameTurns} />
    </main>
  );
}

export default App;
