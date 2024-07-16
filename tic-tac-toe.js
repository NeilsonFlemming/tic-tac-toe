console.log('Tic Tac Toe');

//state of the game

let turn, board;


/* ------- Game Logic -------*/
init()

function init() {
    turn = 'X';
    board = [
       ' ' ,' ' ,' ',
       ' ' ,' ' ,' ',
       ' ' ,' ' ,' '
    ];
    render()
}

function render(){
    console.log(`It is player ${turn}'s turn`)
    renderBoard();
}

function renderBoard() {
    console.log(' 1 |2| 3');
    console.log(`1 ${board[0]}|${board[1]}|${board[2]}`);
    console.log(' --|-|--');
    console.log(`2 ${board[3]}|${board[4]}|${board[5]}`);
    console.log(' --|-|--');
    console.log(`3 ${board[6]}|${board[7]}|${board[8]}`);

}
