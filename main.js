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

/*
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
*/

/* ---------- Coding Task #2 ---------- */

/*
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
} else {
  console.log(
    `John's BMI (${BMIJohn}  is higher than Mark's BMI (${BMIMark}))`
  );
}
*/

/* ---------- Type Conversion and Coercion ---------- */

/* ----- Type Conversion ----- */

/*
const inputYear = "1989";

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ramey")); // NaN - "not a number"

console.log(String(23), 23);
*/

/* ----- Type Coercion ----- */

/*
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("25" * "3");
*/

/* ---------- Truthy and Falsy Values ---------- */

// 5 falsy values: 0, "", undefined, null, Not a Number (NaN).

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ramey"));
console.log(Boolean({}));

const money = "100";

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get job!");
}

let height = 123;

if (height) {
  console.log("Wow! Height is defined!");
} else {
  console.log("Height is undefined 😒");
}
*/

/* ---------- Equality Operators == vs === ---------- */

/*
const age = 18;

if (age === 18) console.log("You just became an adult 😊");

if (age == 18) console.log("You just became an adult 😁");

const favNumber = Number(prompt("What's your favourite number?"));

console.log(`My favourite number is ${favNumber}`);

if (favNumber == 7) {
  console.log("Cool! 7️⃣ is an amazing number 😊");
} else if (favNumber === 9) {
  console.log("9️⃣ is a cool number");
} else if (favNumber === 23) {
  console.log("2️⃣3️⃣ is a love number");
} else {
  console.log("Number is not 7 or 9 or 23");
}

if (favNumber !== 23) console.log("Why not is 23?");
*/

/* ---------- Logical Operators ---------- */

/*
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Ramey can drive");
} else {
  console.log("Ramey can't drive");
}

const isTired = true; // C

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Ramey can drive");
} else {
  console.log("Ramey can't drive");
}
*/

/* ---------- Coding Task #3 ---------- */

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const dolphScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

console.log(dolphScore, koalaScore);


if (dolphScore > koalaScore) {
  console.log("Dolphins win 💪");
} else if (koalaScore > dolphScore) {
  console.log("Koalas win 😁");
} else if (dolphScore === koalaScore) {
  console.log("Both team win");
}
*/

/*
const dolphScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

console.log(dolphScore, koalaScore);

if (dolphScore > koalaScore && dolphScore >= 100) {
  console.log("Dolphins win 💪");
} else if (koalaScore > dolphScore && koalaScore >= 100) {
  console.log("Koalas win 😁");
} else if (
  dolphScore === koalaScore &&
  dolphScore >= 100 &&
  koalaScore >= 100
) {
  console.log("Both team wins 🧑🏻‍🤝‍🧑🏻");
} else {
  console.log("No one wins 😒");
}
*/

/* ---------- The switch Statement ---------- */

const day = "monday";

switch (day) {
  case "monday":
    console.log("Training plan 🏋️‍♂️");
    console.log("Go to");
    break;
  case "tuesday":
    console.log("Learning web development 👨‍💻");
    break;
  case "wednesday":
    console.log("Reading book 📙");
    break;
  case "thursday":
    console.log("Walking in the park 🚶‍♂️");
    break;
  case "friday":
    console.log("Meditation 🧘‍♂️");
    break;
  case "saturday":
    console.log("Swimmig 🏊‍♂️");
    break;
  case "sunday":
    console.log("Relaxing 😮‍💨");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Training plan 🏋️‍♂️");
} else if (day === "tuesday") {
  console.log("Learning web development 👨‍💻");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Reading book 📙");
} else if (day === "friday") {
  console.log("Meditation 🧘‍♂️");
} else if (day === "saturday" || day === "sunday") {
  console.log("Relaxing 😮‍💨");
} else {
  console.log("Not a valid day");
}
