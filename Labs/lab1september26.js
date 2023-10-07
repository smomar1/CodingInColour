// Declare your first name, last name, age, whether you like ice cream, and favorite color.
var firstName = "Salman"; // Your first name
var lastName = "Omar"; // Your last name
var age = 24; // Your age
var likesIceCream = false; // Whether you like ice cream (false means you don't like it)
var favoriteColor = "blue"; // Your favorite color

// Combine your first and last name to create your full name.
var fullName = firstName + " " + lastName;

// Create a sentence that describes you using the variables you declared.
var sentence = "I am " + fullName + ", and I am " + age + " years old, and I ";
sentence += likesIceCream ? "like ice cream" : "do not like ice cream."; // If you like ice cream, it says "like," otherwise "do not like."
sentence += " My favorite color is " + favoriteColor;

// Display the sentence in the console.
console.log(sentence);

// Error Codes:
// 1. SyntaxError: Unexpected token
// 2. TypeError: Cannot read property 'x' of undefined
// 3. ReferenceError: functionName is not defined
// 4. RangeError: Maximum call stack size exceeded
// 5. TypeError: Cannot assign to read-only property 'x' of object