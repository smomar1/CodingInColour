// Create a list of your favorite songs
let favoriteSongs = ["Smells Like Teen Spirit", "Imagine", "Bohemian Rhapsody", "One", "Billie Jean"];

// Print the list of songs and how many songs are in the list
console.log("My Favorite Songs:", favoriteSongs);
console.log("Total Songs:", favoriteSongs.length);

// Change the third song to a song you don't like
favoriteSongs[2] = "Hey Jude";
console.log("Updated List after changing the third song:", favoriteSongs);

// Remove the last song from the list
favoriteSongs.pop();
console.log("Updated List after removing the last song:", favoriteSongs);

// Add a new song to the end of the list
favoriteSongs.push("Like A Rolling Stone");
console.log("Updated List after adding a new song to the end:", favoriteSongs);

// Remove the first song from the list
favoriteSongs.shift();
console.log("Updated List after removing the first song:", favoriteSongs);

// Add a new song to the beginning of the list
favoriteSongs.unshift("I Can't Get No Satisfaction");
console.log("Updated List after adding a new song to the beginning:", favoriteSongs);

// Try to get the 10th song (which doesn't exist) and see what happens
console.log("Trying to get the 10th song:", favoriteSongs[9]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*// Create a table of numbers
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Initialize variables to store sums
  let rowSums = []; // Store sums of each row
  let mainDiagonalSum = 0; // Store the sum of the main diagonal
  let secondaryDiagonalSum = 0; // Store the sum of the secondary diagonal
  
  // Loop through the rows
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0; // Initialize the sum for the current row
  
    // Loop through the columns in each row
    for (let j = 0; j < matrix[i].length; j++) {
      // Add the current number to the row sum
      rowSum += matrix[i][j];
  
      // Check if it's on the main diagonal
      if (i === j) {
        mainDiagonalSum += matrix[i][j];
      }
  
      // Check if it's on the secondary diagonal
      if (i + j === matrix.length - 1) {
        secondaryDiagonalSum += matrix[i][j];
      }
    }
  
    // Store the row sum in the rowSums array
    rowSums.push(rowSum);
  }
  
  // Print row sums
  for (let i = 0; i < rowSums.length; i++) {
    console.log(`Sum of row ${i + 1}: ${rowSums[i]}`);
  }
  
  // Print diagonal sums
  console.log(`Sum of the main diagonal: ${mainDiagonalSum}`);
  console.log(`Sum of the secondary diagonal: ${secondaryDiagonalSum}`);*/
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  /*const readline = require('readline');

  // Create a 3x5 movie theatre grid
  const rows = 3;
  const seatsPerRow = 5;
  const theatre = Array.from({ length: rows }, () => Array(seatsPerRow).fill('O'));
  
  // Function to print the theatre grid
  function printTheatre() {
    console.log('Movie Theatre:');
    for (let i = 0; i < rows; i++) {
      console.log(theatre[i].join(' '));
    }
    console.log('\n');
  }
  
  // Create a readline interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Function to book a seat
  function bookSeat() {
    rl.question('Enter row number (1-3): ', (rowInput) => {
      const row = parseInt(rowInput) - 1;
  
      if (row < 0 || row >= rows) {
        console.log('Invalid row number. Please try again.\n');
        bookSeat();
        return;
      }
  
      rl.question(`Enter seat number (1-${seatsPerRow}): `, (seatInput) => {
        const seat = parseInt(seatInput) - 1;
  
        if (seat < 0 || seat >= seatsPerRow) {
          console.log('Invalid seat number. Please try again.\n');
          bookSeat();
          return;
        }
  
        if (theatre[row][seat] === 'X') {
          console.log('Seat is already booked. Please try again.\n');
          bookSeat();
        } else {
          theatre[row][seat] = 'X';
          printTheatre();
          rl.close();
        }
      });
    });
  }
  
  // Start the booking process
  printTheatre();
  bookSeat();*/
  

  // Each program is disable with the /*, so you can look at each one at a time.