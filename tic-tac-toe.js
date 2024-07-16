console.log('Tic Tac Toe');

//state of the game

let turn, board, winner;


/* ------- Game Logic -------*/
init()

function init() {
    turn = 'X';
    board = [
       ' ' ,' ' ,' ',
       ' ' ,' ' ,' ',
       ' ' ,' ' ,' '
    ];
    winner = null;
    render()
}

function render(){
    console.log(`It is player ${turn}'s turn`)
    renderBoard();
}

function renderBoard() {
    console.log(`  ${board[0]}|${board[1]}|${board[2]}`);
    console.log(' --|-|--');
    console.log(`  ${board[3]}|${board[4]}|${board[5]}`);
    console.log(' --|-|--');
    console.log(`  ${board[6]}|${board[7]}|${board[8]}`);

}

function gamePlay() {
    while(!winner){
        console.log(`Select `)
    }
}


