// Step 1: Define some variables
let num1 = 2023; // We have a number called num1 with the value 2023
let num2 = 2024; // We have another number called num2 with the value 2024
let str1 = 'Coding'; // We have a word called str1 which is 'Coding'
let str2 = 'Programming'; // We have another word called str2 which is 'Programming'

// Step 2: Check and log if these statements are true or false
console.log("Three is not bigger than thirty-three: " + (3 > 33)); // This is false because 3 is smaller than 33
console.log("Twenty-four divided by six is four: " + (24 / 6 === 4)); // This is true because 24 divided by 6 is indeed 4
console.log("Eight is larger than seven and smaller than ten: " + (8 > 7 && 8 < 10)); // This is true because 8 is greater than 7 and less than 10

// Here, we have two conditions combined:
// First, we check if 'Coding' is NOT greater than 'Programming' (true because it comes before in the alphabet)
// Second, we check if 2023 is less than 2024 (true)
// Finally, we use '&&' to say both conditions must be true for the whole expression to be true
// So, the result is true
let result1 = !(str1 > str2) && num1 < num2;

// Here, we have two conditions combined:
// First, we check if 'Coding' is greater than 'Programming' (false)
// Second, we check if 2023 is less than 2024 (true)
// Then, we use '&&' to say both conditions must be true, but we put '!' in front, which means NOT.
// So, the result is true because we are saying "it's NOT true that 'Coding' is greater AND 2023 is less."
let result2 = !(str1 > str2 && num1 < num2);

// Step 3: Log the results
console.log("Result 1: " + result1); // Result 1 is true
console.log("Result 2: " + result2); // Result 2 is true

// Both result 1 & result 2 are true, therefore they are equal.