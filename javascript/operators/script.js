console.log("===== Arithmetic Operators =====");

let a = 20;
let b = 5;

console.log("a =", a);
console.log("b =", b);
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
a++;
console.log("Increment a:", a);
b--;
console.log("Decrement b:", b);

console.log("\n===== Assignment Operators =====");

let x = 10;

console.log("Initial value:", x);

// +=
x += 5;
console.log("After += 5:", x);

// -=
x -= 3;
console.log("After -= 3:", x);

// *=
x *= 2;
console.log("After *= 2:", x);

// /=
x /= 4;
console.log("After /= 4:", x);

// %=
x %= 3;
console.log("After %= 3:", x);

// **=
x **= 2;
console.log("After **= 2:", x);
console.log("\n===== Comparison Operators =====");

let num1 = 10;
let num2 = 15;

console.log("num1 =", num1);
console.log("num2 =", num2);

// Equal to
console.log("num1 == num2:", num1 == num2);

// Strict Equal
console.log("num1 === num2:", num1 === num2);

// Not Equal
console.log("num1 != num2:", num1 != num2);

// Greater Than
console.log("num1 > num2:", num1 > num2);

// Less Than
console.log("num1 < num2:", num1 < num2);

// Greater Than or Equal
console.log("num1 >= num2:", num1 >= num2);

// Less Than or Equal
console.log("num1 <= num2:", num1 <= num2);


// ------------------------------------
// 4. CONDITIONAL (TERNARY) OPERATOR
// ------------------------------------

console.log("\n===== Conditional Operator =====");

let age = 18;

// condition ? true value : false value

let result = (age >= 18)
    ? "Eligible to Vote"
    : "Not Eligible to Vote";

console.log("Age:", age);
console.log(result);