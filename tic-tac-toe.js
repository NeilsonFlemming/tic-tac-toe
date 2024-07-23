console.log("Tic Tac Toe");
const prompt = require("prompt-sync")();

//state of the game

let turn, board, winner;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* ------- Game Logic -------*/
init();
gamePlay();

function init() {
  turn = "X";
  board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  winner = null;
}

function render() {
  console.log(`It is player ${turn}'s turn`);
  renderBoard();
}

function renderBoard() {
  console.log(`  ${board[0]}|${board[1]}|${board[2]}`);
  console.log(" --|-|--");
  console.log(`  ${board[3]}|${board[4]}|${board[5]}`);
  console.log(" --|-|--");
  console.log(`  ${board[6]}|${board[7]}|${board[8]}`);
}

function playMaker(playerMove) {
  if (board[playerMove] === "X" || board[playerMove] === "O")
    console.log("That space is taken, please select another.");
  else if (playerMove > 8 || playerMove < 0)
    console.log("Invlaid move, please select another.");
  else {
    board[playerMove] = turn;
    turn === "X" ? (turn = "O") : (turn = "X");
  }
}

function winnerWinnerChickenDinner() {
  for (const combo of winningCombos) {
    if (
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    ) {
      winner = board[combo[0]];
    }
  }
  if (winner) console.log(`We have a winner! ${winner} has won the game`);
}

function draw() {
  //console.log(board.every((position) => position == "O" || position == "X"));
  if (board.every((position) => position == "O" || position == "X")) {
    winner = "Everyone has lost";
    console.log("The game is a draw");
  }
}

function gamePlay() {
  while (!winner) {
    render();
    const playerMove = prompt(
      `${turn} It's your move, please select a space : `
    ).toUpperCase();
    if (playerMove === "EXIT") return;
    playMaker(playerMove);
    winnerWinnerChickenDinner();
    draw();
  }
}
