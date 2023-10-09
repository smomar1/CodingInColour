// 1. Buggy Calculator to Debug

let operation = 'add';
let a = 5;
let b = 3;
let result;

if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Please provide valid numbers for the operation.");
} else {
    switch (operation) {
        case 'add':
            result = a + b;
            break; // Add a break statement here to prevent fall-through
        case 'subtract':
            result = a - b;
            break; // Add a break statement here to prevent fall-through
        case 'multiply':
            result = a * b; 
            break; // Add a break statement here to prevent fall-through
        case 'divide':
            if (b == 0) { 
                console.log("Division by zero is not allowed.");
                break; // Add a break statement here
            } else {
                result = a / b;
                break; // Add a break statement here
            }
        default: 
            console.log("Invalid operation.");
    }
    console.log(`The result of ${a} ${operation} ${b} = ${result}`);
}


// With the current values and operation, it should output: "The result of 5 add 3 = 8", 
// Please find all bugs and correct them, also adding comments where you found the bugs


// 2. Convert the following if-else chain to a switch statement, while still maintaining the correct output
let title = "Die Hard";
let genre;

switch (title) {
    case "Star Wars":
        genre = "Science Fiction";
        break;
    case "The Shawshank Redemption":
        genre = "Drama";
        break;
    case "Toy Story":
        genre = "Animation";
        break;
    case "Halloween":
        genre = "Horror";
        break;
    case "Die Hard":
        genre = "Action";
        break;
    default:
        genre = "Unknown Genre";
}

console.log(`The genre of "${title}" is ${genre}.`);



// 3. Convert the following if-else statements to a ternary operator

// Exercise #1:

let number = 7;
let type = number % 2 === 0 ? "Even" : "Odd";
console.log(`The number ${number} is ${type}.`);



// Exercise #2: 

let grade = 58;
let outcome = grade >= 60 ? "Passing" : "Failing";
console.log(`With a grade of ${grade}, the outcome is: ${outcome}.`);



// Exercise #3: 

let temperature = 18; // Celsius
let weather = temperature > 20 ? "Hot" : "Cold";
console.log(`With a temperature of ${temperature}°C, it's ${weather}.`);
