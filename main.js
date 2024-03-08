/* ---------- Values and variables ---------- */

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

const nowYear = 2024;
const ageRamey = nowYear - 1989;
const ageYusif = nowYear - 2001;

console.log(nowYear - 1989 > nowYear - 2001);

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageRamey + ageYusif) / 2;

console.log(ageRamey, ageYusif, averageAge);
