// Create an object representing yourself
const myself = {
    name: "Salman Omar",
    age: 24,
    isStudent: true,
  };
  
  // Print the entire object
  console.log(myself);
  
  // Access and print 3 properties using dot notation
  console.log("Name: " + myself.name);
  console.log("Age: " + myself.age);
  console.log("Is Student: " + myself.isStudent);
  
  // Try to access an attribute that hasn't been set (middleName)
  console.log("Middle Name: " + myself.middleName); // This will print 'undefined'
  
  // Remove the isStudent property from your object
  delete myself.isStudent;
  
  // Add new properties
  myself.hobbies = ["Playing Basketball", "Coding", "Gaming"];
  myself.favoriteColor = "Blue";
  myself.favoriteSongs = ["Smells Like Teen Spirit", "Imagine", "Billie Jean", "One"];
  
  // Print the entire modified object
  console.log(myself);
  
  // Print information using dot notation and array accessing
  console.log("One of my hobbies is " + myself.hobbies[0] + " and the song I play while doing this hobby is " + myself.favoriteSongs[2]);
  
  // Repeat the above using bracket notation
  console.log("One of my hobbies is " + myself['hobbies'][0] + " and the song I play while doing this hobby is " + myself['favoriteSongs'][2]);
  
  // Create a variable declaration
  let hobbies = 'favoriteFood';
  
  // Print the results
  console.log(myself.hobbies);      // Prints the 'hobbies' property of the object
  console.log(myself[hobbies]);     // Prints 'undefined' because 'favoriteFood' property doesn't exist
  console.log(myself['hobbies']);   // Prints the 'hobbies' property of the object

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const expenses = [];
let totalExpenses = 0;
let budgetLimit = 0;

function askForExpense() {
  // Ask the user for expense description
  rl.question('Enter expense description (or type "exit" to finish): ', (description) => {
    if (description.toLowerCase() === 'exit') {
      displayExpenses();
      return rl.close();
    }

    // Ask the user for expense amount
    rl.question('Enter expense amount: ', (amount) => {
      const expenseAmount = parseFloat(amount);

      if (isNaN(expenseAmount) || expenseAmount <= 0) {
        console.log('Please enter a valid expense amount.');
      } else {
        // Store the expense and update the total
        expenses.push({ description, amount: expenseAmount });
        totalExpenses += expenseAmount;
        if (totalExpenses > budgetLimit) {
          console.log('Warning: Total expenses exceed the budget limit!');
        }
      }

      // Continue asking for more expenses
      askForExpense();
    });
  });
}

function displayExpenses() {
  console.log('\nExpense Report:');
  expenses.forEach((expense) => {
    console.log(`${expense.description}: $${expense.amount.toFixed(2)}`);
  });

  console.log(`\nTotal Expenses: $${totalExpenses.toFixed(2)}`);
  rl.close();
}

// Start by asking for the budget limit
rl.question('Enter your budget limit: $', (limit) => {
  budgetLimit = parseFloat(limit);

  if (isNaN(budgetLimit) || budgetLimit <= 0) {
    console.log('Please enter a valid budget limit.');
    rl.close();
  } else {
    console.log('Expense Tracker\n');
    askForExpense();
  }
});*/