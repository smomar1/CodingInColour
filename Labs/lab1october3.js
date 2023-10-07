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
        case 'subtract':
            result = a - b;
        case 'multiply':
            result = a x b; 
        case 'divide':
            if (b == 0) { 
                console.log("Division by zero is not allowed.");
            } else {
                result = a / b;
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

if (title === "Star Wars") {
    genre = "Science Fiction";
} else if (title === "The Shawshank Redemption") {
    genre = "Drama";
} else if (title === "Toy Story") {
    genre = "Animation";
} else if (title === "Halloween") {
    genre = "Horror";
} else if (title === "Die Hard") {
    genre = "Action";
} else {
    genre = "Unknown Genre";
}

console.log(`The genre of "${title}" is ${genre}.`);


// 3. Convert the following if-else statements to a ternary operator

// Exercise #1:

let number = 7;
let type;

if (number % 2 === 0) {
    type = "Even";
} else {
    type = "Odd";
}

console.log(`The number ${number} is ${type}.`);


// Exercise #2: 

let grade = 58;
let outcome;

if (grade >= 60) {
    outcome = "Passing";
} else {
    outcome = "Failing";
}

console.log(`With a grade of ${grade}, the outcome is: ${outcome}.`);


// Exercise #3: 

let temperature = 18;  // Celsius
let weather;

if (temperature > 20) {
    weather = "Hot";
} else {
    weather = "Cold";
}

console.log(`With a temperature of ${temperature}°C, it's ${weather}.`);