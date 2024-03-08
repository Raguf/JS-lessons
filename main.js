/* ---------- Values and Variables ---------- */

/*let fullName = "Ramey";
let age = 34;
let job = "developer";

console.log(`My name is ${fullName}, I'm ${age} old, and I'm ${job}.`);*/

/* ---------- Data Types ---------- */

/*let fullName = "Ramey"; // string
let age = 34; // number
let rameyIsDeveloper = true; // boolean
let rameyCar; // undefined

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(rameyIsDeveloper, typeof rameyIsDeveloper);
console.log(rameyCar, typeof rameyCar);*/

/* ---------- let, const and var ---------- */

/*let age = 30; // allow to change, and - declarations are block scoped.
age = 32;

const birthYear = 1989; // don't allow to change

var job = "programmer"; // like to "let", but "var" - declarations are globally scoped or function scoped.
job = "driver";*/

/* ---------- Basic Operators ---------- */

/*const nowYear = 2024;
const ageRamey = nowYear - 1989;
const ageYusif = nowYear - 2001;

console.log(
  `Ramey is ${ageRamey} years old and Yusif is ${ageYusif} years old`
);
console.log(ageRamey * 2, ageRamey / 3);

const firstName = "Raquf";
const lastName = "Mehdiyev";

console.log(firstName + " " + lastName);*/

/* ----- Assigment Operators ----- */

/*let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1 = 51
x--; // x = x - 1 = 50
console.log(x);*/

/* ----- Comparison Operators ----- */

/*console.log(ageRamey > ageYusif); // >, <, >=, <=
console.log(ageYusif >= 18);*/

/* ---------- Operator Precedence ---------- */

/*const nowYear = 2024;
const ageRamey = nowYear - 1989;
const ageYusif = nowYear - 2001;

console.log(nowYear - 1989 > nowYear - 2001);

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageRamey + ageYusif) / 2;

console.log(ageRamey, ageYusif, averageAge);*/

/* ---------- Coding Task #1 ---------- */

/*
Instructions:
1) The Complete JavaScript Course contains over 25 coding challenges for you to practice the concepts we learn in each section, on your own. This is a fundamental part of your learning journey.

2) This document contains all coding challenges in this course, so that you can read the challenge text without watching the video (I still recommend watching the videos because I might give some additional clues)

3) Some challenges require some starting code, which you can get from this document instead of copying it from the videos

4) The solution of each challenge is in the videos themselves, so you still have to go watch them 

5) Some of the later challenges are quite difficult on purpose (after all, they are called challenges, right? ). If one of them is too difficult, don’t worry, this is completely normal! Just start watching the solution, then pause the video, and keep working on your own. Struggling is part of the journey, but you can do it.


Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(`Mark BMI's is ${BMIMark} & John BMI's is ${BMIJohn}.`);
console.log(markHigherBMI);
*/

/* ---------- Strings and Template Literals ---------- */

/*
const firstName = "Ramey";
const year = 2024;
const birthYear = 1989;
const job = "developer";

const ramey =
  "I'm " +
  firstName +
  " ,a " +
  (year - birthYear) +
  " years old " +
  "and I'm a " +
  job;

console.log(ramey);

const rameyNew = `I'm ${firstName}, a ${
  year - birthYear
} years old and I'm a ${job}`;

console.log(rameyNew);

console.log(`String with \n\ multiple \n\ lines`); // If you need space
*/

/* ---------- if - else Statements ---------- */

const age = 14;

if (age >= 18) {
  console.log("Ramey can drive a car 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Ramey is too young. Wait some ${yearsLeft} years 😒`);
}

const birthYear = 1989;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
