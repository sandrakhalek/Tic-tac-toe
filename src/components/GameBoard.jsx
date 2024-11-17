
function GameBoard({ onSelectSquare, gameBoard }) {

  //   const [gameBoard, setGameBoard] = useState(initialBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevBoard) => {
  //       const updateArray = [...prevBoard.map((innerArray) => [...innerArray])];
  //       updateArray[rowIndex][colIndex] = playerSymbol;
  //       return updateArray;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(index, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export { GameBoard };
