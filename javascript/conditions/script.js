let isStudent = true;
let isTeacher = false;

console.log(isStudent);
console.log(isTeacher);

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}

let marks = 30;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let score = 75;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 70) {
    console.log("Grade B");
}
else if (score >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {
        console.log("Login Successful");
    }
    else {
        console.log("Wrong Password");
    }

}
else {
    console.log("Invalid Username");
}

let day = 2;

switch (day) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;

    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Invalid Day");
}

let mathMarks = 80;
let scienceMarks = 75;

if (mathMarks >= 35 && scienceMarks >= 35) {
    console.log("Pass in all subjects");
}

let hasID = false;
let hasCollegeCard = true;

if (hasID || hasCollegeCard) {
    console.log("Entry Allowed");
}

let raining = false;

if (!raining) {
    console.log("You can go outside");
}

let userName = null;

let displayName = userName ?? "Guest User";

console.log(displayName);