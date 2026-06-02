// FOR LOOP

for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}


// WHILE LOOP

let a = 1;

while (a <= 5) {
    console.log("While Loop:", a);
    a++;
}


// DO WHILE LOOP

let b = 1;

do {
    console.log("Do While Loop:", b);
    b++;
}
while (b <= 5);


// BREAK

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log("Break:", i);
}


// CONTINUE

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log("Continue:", i);
}


// FOR IN LOOP

let student = {
    name: "Srimaha",
    age: 20,
    city: "Vizag"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}


// FOR OF LOOP

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


// LABELS

outerLoop:

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (i === 2 && j === 2) {
            break outerLoop;
        }

        console.log(i, j);
    }
}


// ARRAY WITH INDEX

let cars = ["BMW", "Volvo", "Audi"];
let text = "";

for (let i = 0; i < cars.length; i++) {

    text += cars[i] + " ";
}

console.log(text);