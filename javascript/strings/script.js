// Creating String
let text = " Hello JavaScript ";
console.log(text);

// String Length
console.log(text.length);

// charAt()
console.log(text.charAt(1));

// at()
console.log(text.at(2));

// Access using []
console.log(text[3]);

// charCodeAt()
console.log(text.charCodeAt(1));

// concat()
let firstName = "Sri";
let lastName = "Ram";
console.log(firstName.concat(" ", lastName));

// slice()
console.log(text.slice(1, 6));

// substring()
console.log(text.substring(1, 6));

// toUpperCase()
console.log(text.toUpperCase());

// toLowerCase()
console.log(text.toLowerCase());

// trim()
console.log(text.trim());

// trimStart()
console.log(text.trimStart());

// trimEnd()
console.log(text.trimEnd());

// padStart()
let num1 = "5";
console.log(num1.padStart(4, "0"));

// padEnd()
let num2 = "5";
console.log(num2.padEnd(4, "0"));

// repeat()
console.log("Hi ".repeat(3));

// replace()
console.log(text.replace("JavaScript", "World"));

// replaceAll()
let fruits = "apple mango apple";
console.log(fruits.replaceAll("apple", "orange"));

// split()
let names = "Sri,Ram,John";
console.log(names.split(","));

// indexOf()
console.log(text.indexOf("JavaScript"));

// lastIndexOf()
let word = "hello hello";
console.log(word.lastIndexOf("hello"));

// includes()
console.log(text.includes("JavaScript"));

// startsWith()
console.log(text.trim().startsWith("Hello"));

// endsWith()
console.log(text.trim().endsWith("JavaScript"));

// Template Literal
let age = 20;
console.log(`My name is ${firstName} and age is ${age}`);

// Practice - Reverse String
let original = "Hello";
let reversed = original.split("").reverse().join("");
console.log(reversed);

// Practice - Palindrome
let checkWord = "madam";
let reverseWord = checkWord.split("").reverse().join("");

if (checkWord === reverseWord) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}