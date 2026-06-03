// Creating Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// Accessing Elements
console.log(fruits[0]);
console.log(fruits[1]);

// Changing Value
fruits[1] = "Orange";
console.log(fruits);

// Array Length
console.log(fruits.length);

// push()
fruits.push("Grapes");
console.log(fruits);

// pop()
fruits.pop();
console.log(fruits);

// unshift()
fruits.unshift("Pineapple");
console.log(fruits);

// shift()
fruits.shift();
console.log(fruits);

// splice()
fruits.splice(1, 1, "Kiwi");
console.log(fruits);

// slice()
let newFruits = fruits.slice(0, 2);
console.log(newFruits);

// indexOf()
console.log(fruits.indexOf("Mango"));

// includes()
console.log(fruits.includes("Apple"));

// join()
console.log(fruits.join(" - "));

// reverse()
console.log(fruits.reverse());

// sort()
let numbers = [40, 10, 90, 20];
numbers.sort((a, b) => a - b);
console.log(numbers);

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach()
fruits.forEach(function(item) {
    console.log(item);
});

// map()
let nums = [1, 2, 3, 4];

let doubled = nums.map(num => num * 2);
console.log(doubled);

// filter()
let even = nums.filter(num => num % 2 === 0);
console.log(even);

// find()
let found = nums.find(num => num > 2);
console.log(found);

// reduce()
let total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);

// Array of Objects
let students = [
    {name: "Sri", age: 20},
    {name: "Ram", age: 22}
];

console.log(students);

// Nested Array
let nested = [[1, 2], [3, 4]];
console.log(nested[1][0]);

// Practice - Largest Number
let arr = [10, 45, 67, 23];
console.log(Math.max(...arr));

// Practice - Sum of Array
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

// Practice - Even Numbers
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);