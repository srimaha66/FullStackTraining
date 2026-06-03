// Function Declaration
function greet() {
    console.log("Hello");
}
greet();

// Parameters and Arguments
function add(a, b) {
    console.log(a + b);
}
add(10, 20);

// Return Keyword
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 4));

// Function Expression
const square = function(num) {
    return num * num;
};
console.log(square(5));

// Arrow Function
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(20, 5));

// Short Arrow Function
const cube = num => num * num * num;
console.log(cube(3));

// Default Parameters
function welcome(name = "Guest") {
    console.log("Welcome " + name);
}
welcome();
welcome("Sri");

// Local and Global Scope
let globalVar = "Global Variable";

function checkScope() {
    let localVar = "Local Variable";
    console.log(localVar);
    console.log(globalVar);
}
checkScope();

// Block Scope
{
    let blockVar = "Block Scope";
    console.log(blockVar);
}

// Function Calling Another Function
function first() {
    console.log("First Function");
}

function second() {
    first();
    console.log("Second Function");
}
second();

// Anonymous Function
let msg = function() {
    console.log("Anonymous Function");
};
msg();

// Callback Function
function display(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Sri");
}
process(display);

// IIFE Function
(function() {
    console.log("IIFE Executed");
})();

// Even or Odd
function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd(10));

// Maximum Number
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(50, 100));

// Calculator Function
function calculator(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return a / b;
    return "Invalid";
}
console.log(calculator(10, 5, "+"));