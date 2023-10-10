// Begin Program

// Setup an empty game with 9 spaces
// Set the current player to X

// Set a counter to keep track of the number of moves (initial value 0)
// Define a winning combination for the board(rows,columns and diagonals)

// rows{[0,1,2],[3,4,5],[6,7,8]}
// columns{[0,3,6],[1,4,7],[2,5,8]}
// diagonals{[0,4,8],[2,4,6]}

// Display a message for the tic tac toe game
// While this games is still going on
// Display the current game board

// Ask user to choose a position between 0 and 8
// If the player provides no input
// Inform the user that they have to quit the game
// End the game

// Converting chosen position to interger
// If the chosen position is valid or empty
// Update the game board
// Increment move counter

// For each winning combo
// If all 3 positions in the current combination have the symbol
// Display winning board 
// End the game

// If the total number of moves has reached 9 and no player has won
// Display the game is a ties
// Display the winning board
// End the game
// else
// switch current user
// we take input

// End program

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
//            0    1    2    3    4    5    6    7    8
let currentPlayer = "X";
let moves = 0;

let winningCombos = [
    [0,1,2],[3,4,5],[6,7,8], //rows
    [0,3,6],[1,4,7],[2,5,8], //columns
    [0,4,8],[2,4,6], //diagonals
]

console.log("Welcome to Tic Tac Toe!");

let keepPlaying = true;

function displayBoard(board){
    console.log(' ---------------------- Board ----------------------');
                console.log(board[0] + "|" + board[1] + "|" + board[2]);
                console.log("-+-+-");
                console.log(board[3] + "|" + board[4] + "|" + board[5]);
                console.log("-+-+-");
                console.log(board[6] + "|" + board[7] + "|" + board[8]);
}

function checkWin(board){
    for(let i=0; i < winningCombos.length ; i++){
        if(board[winningCombos[i][0]] !== " " &&
           board[winningCombos[i][0]]== board[winningCombos[i][1]] &&
           board[winningCombos[i][0]] === board[winningCombos[i][2]]){
            console.log(currentPlayer + "wins!");
            keepPlaying = false;
            
            displayBoard(board);
           }
    }
}

function tieornot(board){
        
        if(moves === 9){
            console.log("its a tie");
            keepPlaying = false;

            displayBoard(board);

        }


}
while(keepPlaying){
    //Display the board
    console.log(' ---------------------- New Board ----------------------');
    console.log(board[0] + "|" + board[1] + "|" + board[2]);
    console.log("-+-+-");
    console.log(board[3] + "|" + board[4] + "|" + board[5]);
    console.log("-+-+-");
    console.log(board[6] + "|" + board[7] + "|" + board[8]);

    let input= prompt("Enter a position(0-8) for" + currentPlayer + ":");
    console.log(`You chose ${input}`); //("You chose" + input)

    if(!input){
        console.log("You quit.");
        keepPlaying = false;
}

let position = parseInt(input);

if(position >= 0 && position <=8 && board[position] == " "){
    board[position] = currentPlayer;
    moves++;

checkWin(board);



//check if its a tie
if(keepPlaying === false){
    break;
}
else
{
    tieornot(board);

}



currentPlayer = (currentPlayer === "X") ? "O" : "X";
}else{
    console.log("Invalid input. Try again");
}

}