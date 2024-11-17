# React Tic Tac Toe

## Description
This is a simple Tic Tac Toe game built with React. Players can take turns to place their symbols (X or O) on a 3x3 grid. The game tracks player names, game turns, and determines the winner or if the game ends in a draw.

## Features
- Two-player mode with customizable player names.
- Game board that updates with each turn.
- Displays the winner or a draw message at the end of the game.
- Option to rematch and start a new game.

## Installation

1. Clone the repository

2. Navigate to the project directory:
   ```bash
   cd react-tic-tac-toe
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage.
- Enter player names for Player 1 (X) and Player 2 (O).
- Click on the squares to make your moves.
- The game will announce the winner or if it's a draw.
- Click "Rematch" to start a new game.

## Components
- **App**: Main component that manages game state and renders the game board, players, and game over screen.
- **GameBoard**: Displays the grid and handles square selection.
- **Player**: Represents each player and allows editing of player names.
- **GameOver**: Displays the result of the game and provides a rematch option.
- **Log**: Shows the history of moves made during the game.
