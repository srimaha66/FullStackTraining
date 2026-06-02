// ==========================================
// JAVASCRIPT BASICS - SINGLE EASY PROGRAM
// Covers:
// Syntax
// Statements
// Comments
// Variables
// var, let, const
// Data Types
// ==========================================
console.log("Welcome to JavaScript");

console.log("This is statement 1");
console.log("This is statement 2");

let sum = 10 + 20;
console.log("Sum is:", sum);

// This is a single-line comment

/*
This is a
multi-line comment
*/

console.log("Comments are used for explanation");
var studentName = "Srimaha";
console.log("Student Name:", studentName);

var age = 20;
console.log("Age:", age);

age = 21; // changed value
console.log("Updated Age:", age);

var age = 22; // redeclared
console.log("Redeclared Age:", age);

let city = "Vizag";
console.log("City:", city);

city = "Hyderabad"; // changed
console.log("Updated City:", city);

const country = "India";
console.log("Country:", country);

// country = "USA";  
// Error if uncommented
// String
let name = "JavaScript";
console.log("String:", name);

// Number
let marks = 95;
console.log("Number:", marks);

// Boolean
let isPassed = true;
console.log("Boolean:", isPassed);

// Undefined
let futureValue;
console.log("Undefined:", futureValue);

// Null
let emptyValue = null;
console.log("Null:", emptyValue);

// Object
let student = {
    id: 101,
    studentName: "Ravi",
    course: "JavaScript"
};

console.log("Object:", student);

// Array
let colors = ["Red", "Blue", "Green"];
console.log("Array:", colors);


// -----------------------------
// 9. MULTIPLE STATEMENTS
// -----------------------------

let x = 5;
let y = 10;
let result = x + y;

console.log("x =", x);
console.log("y =", y);
console.log("Result =", result);
