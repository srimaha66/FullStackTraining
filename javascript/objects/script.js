// Creating Object
let student = {
    name: "Sri",
    age: 20,
    course: "JavaScript"
};

console.log(student);

// Accessing Object Values
console.log(student.name);
console.log(student["age"]);

// Updating Object Value
student.age = 21;
console.log(student);

// Adding New Property
student.city = "Mumbai";
console.log(student);

// Deleting Property
delete student.course;
console.log(student);

// Object Method
let person = {
    firstName: "Sri",
    lastName: "Ram",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// this Keyword
let user = {
    name: "Alex",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet();

// Nested Object
let employee = {
    name: "John",

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(employee.address.city);

// Object.keys()
console.log(Object.keys(student));

// Object.values()
console.log(Object.values(student));

// Object.entries()
console.log(Object.entries(student));

// for...in loop
for (let key in student) {
    console.log(key, student[key]);
}

// Checking Property
console.log("name" in student);

// Object Destructuring
let car = {
    brand: "BMW",
    model: "X5"
};

let { brand, model } = car;
console.log(brand);
console.log(model);

// Spread Operator
let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    ...obj1,
    c: 3
};

console.log(obj2);

// Object.freeze()
let account = {
    balance: 1000
};

Object.freeze(account);

account.balance = 2000;
console.log(account);

// Array of Objects
let students = [
    { name: "Sri", age: 20 },
    { name: "Ram", age: 22 }
];

console.log(students);

// Practice - Student Details
let details = {
    name: "Sri",
    age: 20,
    marks: 95
};

console.log(details.name);
console.log(details.marks);

// Practice - Calculator Object
let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));