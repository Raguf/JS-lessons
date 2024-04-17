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

/*
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
*/

/* ---------- The Conditional (Ternary) Operator ---------- */

/*
const age = 2;

// age >= 18
//   ? console.log("I like to drink 🍷")
//   : console.log("I can drink only water 💦");

// const drink = age >= 18 ? "wine 🍷" : "water 💦";

// console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💦";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);
*/

/* ---------- Coding Task #4 ---------- */

/*Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
Example: “The bill was 275, the tip was 41.25, and the total value316.25”

Test data:
Data 1: Test for bill values 275, 40 and 430
Hints:To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
Value X is between 50 and 300,  if it's ▶= 50 && ◀= 300 😉
*/

/*
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

/* ---------- Functions ---------- */

/*
function logger() {
  console.log("My name is Ramey");
}

logger(); // calling / running / invoking function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `🧃 consist of ${apples} 🍎 & ${oranges} 🍊.`;
  return juice;
}

const fresh = fruitProcessor(2, 4);

console.log(fresh);

function transsportCount(moto, car, train, aircraft, ship) {
  console.log(moto, car, train, aircraft, ship);
  const factory = `This year it was released: 🏍️(${moto}), 🚗(${car}), 🚄(${train}), ✈️(${aircraft}) & 🛳️(${ship}).`;
  return factory;
}

const transsport = transsportCount(10, 20, 5, 4, 2);

console.log(transsport);
*/

/* ---------- Function Declarations vs Expressions ---------- */

/*
// Function Declarations
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1989);

// Function Expressions
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1989);

console.log(age1, age2);
*/

/* ---------- Arrow Functions ---------- */

/*
// Function Expressions
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1989);

// Arrow Functions
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1989);

console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(age3, yearsUntilRetirement("Ramey", 1989));
*/

/* ---------- Functions Calling Other Functions ---------- */

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePices = cutFruitPieces(oranges);

  const juice = `🧃 consist of ${applePieces} pieces of 🍎 & ${orangePices} pieces of 🍊.`;
  return juice;
}

console.log(fruitProcessor(2, 4));
*/

/* ---------- Reviewing Functions ---------- */

/*
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (firstName, birthYear) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement("Ramey", 0));
*/

/* ---------- Coding Task #5 ---------- */

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

console.log(calcAverage(3, 4, 5));

const dolphScore = calcAverage(85, 54, 41);
const koalaScore = calcAverage(23, 34, 27);

console.log(dolphScore, koalaScore);

const checkWinner = function (avgDolph, avgKoala) {
  if (avgDolph >= 2 * avgKoala) {
    console.log(`Dolphins wins (${avgDolph} vs. ${avgKoala})`);
  } else if (avgKoala >= 2 * avgDolph) {
    console.log(`Koalas wins (${avgKoala} vs. ${avgDolph})`);
  } else {
    console.log("No one wins");
  }
};

console.log(checkWinner(dolphScore, koalaScore));
*/

/* ---------- Arrays ---------- */

/*
const friends = ["Ali", "Islam", "Nihat"];

console.log(friends);

// const years = new Array(1989, 1990, 1991);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends);

friends[1] = "Razim";
console.log(friends);

const ramey = ["Raguf", "Mehdiyev", 2024 - 1989, "developer", friends];
console.log(ramey);

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1989, 1999, 2009, 2019];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/* ---------- Basic Array Operations (Methods) ---------- */

/*
const friends = ["Ali", "Islam", "Nihat"];

//Add elements
const newLength = friends.push("Abdulla"); // push method - add new last element
console.log(newLength);

friends.unshift("Razim"); // // unshift method - add new first element
console.log(friends);

//Remove elements
friends.pop(); // pop method - remove last element
console.log(friends);

friends.shift(); // shift method - remove first element
console.log(friends);

console.log(friends.indexOf("Islam")); // indexof method - show  current index element

console.log(friends.includes("Islam")); // includes method - show true or false element

if (friends.includes("Peter")) {
  console.log("Peter is my friend");
} else {
  console.log("Who are Peter? I don't know");
}
*/

/* ---------- Coding Task #6 ---------- */

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

Test data: 125, 555 and 44
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip1 = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

/* ---------- Objects ---------- */

/*
const rameyArray = [
  "Raquf",
  "Mehdiyev",
  2024 - 1989,
  "developer",
  ["Ali", "Kamal", "Elnur"],
];

const ramey = {
  firstName: "Raquf",
  lastName: "Mehdiyev",
  age: 2024 - 1989,
  job: "developer",
  friends: ["Ali", "Kamal", "Elnur"],
};
*/

/* ---------- Dot vs Bracket Notation ---------- */

/*
const ramey = {
  firstName: "Raquf",
  lastName: "Mehdiyev",
  age: 2024 - 1989,
  job: "developer",
  friends: ["Ali", "Kamal", "Elnur"],
};
console.log(ramey);
console.log(ramey.lastName);
console.log(ramey["age"]);

const interestedIn = prompt(
  "What do you want to know about Ramey? Choose between fisrtName, lastName, age, job, friends."
);

if (ramey[interestedIn]) {
  console.log(ramey[interestedIn]);
} else {
  console.log("Choose between fisrtName, lastName, age, job, friends.");
}

ramey.location = "Baku";

// Chalange
// "Ramey has 3 friends, and his best friend is called Kamal"
console.log(
  `${ramey.firstName} has ${ramey.friends.length} friends, and his best friend is called ${ramey.friends[1]}`
);
*/

/* ---------- Object Methods ---------- */

/*
const ramey = {
  firstName: "Raquf",
  lastName: "Mehdiyev",
  birthYear: 1989,
  job: "developer",
  friends: ["Ali", "Kamal", "Elnur"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${
      this.hasDriverLicense ? "has" : "has not"
    } a driver's license.`;
  },
};
console.log(ramey.calcAge());
console.log(ramey.age);
console.log(ramey.age);
console.log(ramey.getSummery());
//console.log(ramey["calcAge"](1989));

// Challenge
// "Ramey is a 46-year old teacher, and he has a driver's license"
*/

/* ---------- Coding Task #7 ---------- */

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

/*
const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

console.log(
  `${mark.fullName}'s BMI (${mark.bmi}) is ${
    mark.bmi > john.bmi ? "higner" : "lower"
  } than ${john.fullname}'s BMI (${john.bmi}))!`
);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi}))!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}))!`
  );
}
*/

/* ---------- Iteration The for Loop ---------- */

/*
//for loop keeps runnig while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

/* ---------- Looping Arrays, Breaking and Continuing ---------- */

/*
const ramey = [
  "Raquf",
  "Mehdiyev",
  2024 - 1989,
  "developer",
  ["Ali", "Kamal", "Elnur"],
  true,
];

const types = [];

for (let i = 0; i < ramey.length; i++) {
  console.log(ramey[i], typeof ramey[i]);

  //types[i] = typeof ramey[i];
  types.push(typeof ramey[i]);
}

console.log(types);

const years = [1989, 2009, 2019, 2029];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2039 - years[i]);
}
console.log(ages);

// Continue
console.log("---------- Continue only Strings ----------");
for (let i = 0; i < ramey.length; i++) {
  if (typeof ramey[i] !== "string") continue;
  console.log(ramey[i], typeof ramey[i]);
}

// Break
console.log("---------- Break with Number ----------");
for (let i = 0; i < ramey.length; i++) {
  if (typeof ramey[i] === "number") break;
  console.log(ramey[i], typeof ramey[i]);
}
*/

/* ---------- Looping Backwards and Loops in Loops ---------- */

/*
const ramey = [
  "Raquf",
  "Mehdiyev",
  2024 - 1989,
  "developer",
  ["Ali", "Kamal", "Elnur"],
];

for (let i = ramey.length - 1; i >= 0; i--) {
  console.log(i, ramey[i]);
}

for (let exs = 1; exs <= 3; exs++) {
  console.log(`***** Starting exercise № ${exs} *****`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`----- Exersice ${exs}: Repetition № ${rep} -----`);
  }
}
*/

/* ---------- The while Loop ---------- */

/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`----- Repetition № ${rep} -----`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`While ----- Repetition № ${rep} -----`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("Loop is about to end......");
  }
}
*/

/* ---------- Coding Task #8 ---------- */

/*
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together.
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
4.3. Call the function with the 'totals' array.
*/
/*
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
// const calcTip1 = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//console.log(bills, tips, total);

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 4]));
console.log(calcAverage(totals));
*/

/* ---------- Solving some tasks ---------- */
/*
// Problem №1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error".

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
//Q: What is temperatures amplitude?
//A: Difference between highest and lowest temperatures.
//Q: How to compute max and min temperatures?
//Q: What is a sensor error?
//Q: What do do?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperatures array.
// - Find min value in temperatures array.
// - Subtract min from max (amplitude) and return it.

const calcTempAmpl = function (temps) {
  let max = temps[0];
  let min = temps[0];
  let subtract = max - min;
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(min, max);
  return max - min;
};
// calcTempAmpl([4, 3, 5, 23]);
const amplitute = calcTempAmpl(temp);
console.log(amplitute);

// Problem №2:
// Function should now receive 2 arrays of temperatures

// 1. Understanding the problem
//Q: With 2 arrays, should we implement functionality twice?
//A: No! Just merge 2 arrays.

// 2. Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  let subtract = max - min;
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(min, max);
  return max - min;
};
// calcTempAmpl([4, 3, 5, 23]);
const amplituteNew = calcTempAmplNew([3, 5, 1], [9, 0, 5]);
console.log(amplituteNew);
*/

/* ---------- Debugging with the Console and Breakpoints ---------- */
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // c) Fix error
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // b) Find error
  //console.log(measurement);
  console.table(measurement);
  //console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// a) Identify error
console.log(measureKelvin());
//Using a debbuger
const calcTempAmplBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  let subtract = max - min;
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(min, max);
  return max - min;
};
// calcTempAmpl([4, 3, 5, 23]);
const amplituteBug = calcTempAmplBug([3, 5, 1], [9, 4, 5]);
// a) Identify
console.log(amplituteBug);
*/

/* ---------- Coding Task #9 ---------- */

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]
*/

// 1. Understanding the problem
//- Array transsformed to string, separated by ....
//- What is X days? Answer: index [i] + 1.

// 2. Breaking up into sub-problems
// - Transform array into string.
// - Transform each element to string with ºC.
// - Strings needs to contain day (index + 1).
// - Add ... between elements and start and end of string.
// - Log  a string to console.
/*
const temp = [17, 21, 23];
const tempNew = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(str + '...');
};
printForecast(temp);
printForecast(tempNew);
*/

/* ---------- Scoping in Practice ---------- */
/*
'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  const printAge = function () {
    const output = `${firstName} is ${age} old years, and he born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating new  variable with same name as outer scope's variable
      const firstName = 'Yusif';

      // Reassigning 'Output' scope's varible
      const output = 'New Output';

      const str = `Wow ${firstName}, yor're millenial!!!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(5, 6));
    }
    console.log(output);
  };
  printAge();

  return age;
}

const firstName = 'Ramey';
calcAge(1989);
*/

/* ---------- Hoisting and TDZ ---------- */
/*
// console.log(me); // undefined
// console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

// Variables
// var me = 'Ramey';
// let job = 'developer';
// const year = 1989;

// // Functions

// console.log(addDecl(5, 6)); // 11
// console.log(addExpr(5, 6)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(5, 6)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

// if (!numProducts) deleteShopingCart();

// var numProducts = 10;

// function deleteShopingCart() {
//   console.log('All products deleted'); // All products deleted
// }

var x = 1; // 1
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

/* ---------- The this Keyword ---------- */
/*
'use strict';
// Use this keyword in function
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(1989);

// Use this keyword in arrow function
const caclAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
};
caclAgeArrow(1980);

// Use this keyword in object(with help method)
const ramey = {
  year: 1989,
  calcAge: function (birthYear) {
    console.log(this);
    console.log(2024 - this.year);
  },
};
ramey.calcAge();

const yumey = {
  year: 2001,
};

yumey.calcAge = ramey.calcAge;
yumey.calcAge();

const f = ramey.calcAge;

f();
*/

/* ---------- Regular Functions vs Arrow Functions ---------- */
/*
// var firstName = 'Yumey';

// const ramey = {
//   firstName: 'Ramey',
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//   },

//   greet: () => {
//     console.log(`Hi ${this.firstName}`);
//   },
// };

// ramey.greet();

'use strict';

const ramey = {
  firstName: 'Ramey',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenium = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // console.log(this);
    // console.log(this.year >= 1981 && this.year <= 1996);

    // Solution 2
    const isMillenium = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenium();
  },

  greet: () => {
    console.log(`Hi ${this.firstName}`);
  },
};

ramey.greet();
ramey.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
*/

/* ---------- Primitives vs Objects (Primitive vs Reference Types) ---------- */
/*
let age = 35;
let oldAge = age;
age = 36;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Ramey',
  age: 37,
};

const friend = me;
friend.age = 38;

console.log(me.age);
console.log(friend.age);
*/
/*
// Primitive types
let lastName = 'Mehdiyev';
let oldLastName = lastName;
lastName = 'Aliyev';
console.log(lastName, oldLastName);

// Reference types
const natali = {
  firstName: 'Natali',
  lastName: 'Jonson',
  age: 30,
};

const nataliMarried = natali;
nataliMarried.lastName = 'Simpson';
console.log(natali.lastName, nataliMarried.lastName);

// Copying objects
const natali2 = {
  firstName: 'Natali',
  lastName: 'Jonson',
  age: 30,
  family: ['Father', 'Mother', 'Brother', 'Sister'],
};

const nataliCopy = Object.assign({}, natali2);
nataliCopy.lastName = 'Davis';

nataliCopy.family.push('Uncle', 'Aunt');
console.log(natali2, nataliCopy);
*/

/* ---------- Destructuring Arrays ---------- */
/*
const restaurant = {
  name: 'Gavali',
  location: 'Asif Meherremov 23, Baku, Azerbaijan',
  categories: ['National', 'Vegetarian', 'Organic'],
  startMenu: ['Kete', 'Dovqa', 'Coban salati'],
  mainMenu: ['Dolma', 'Ash', 'Kebab'],

  order: function (startetIndex, mainIndex) {
    return [this.startMenu[startetIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a fucntion
const [starter, final] = restaurant.order(2, 0);
console.log(starter, final);

// Nested destructing
const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/

/* ---------- Destructuring Objects ---------- */
/*
'use strict';

const restaurant = {
  name: 'Gavali',
  location: 'Asif Meherremov 23, Baku, Azerbaijan',
  categories: ['National', 'Vegetarian', 'Organic'],
  startMenu: ['Kete', 'Dovqa', 'Coban salati'],
  mainMenu: ['Dolma', 'Ash', 'Kebab'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adrress,
  }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} & ${this.mainMenu[mainIndex]} we will delevery to ${adrress} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adrress: 'Qara Qarayev 35',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adrress: 'Qara Qarayev 35',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Rename some elelment of a object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values of a object
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 777;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/* ---------- The Spread Operator (...) ---------- */

'use strict';

const restaurant = {
  name: 'Gavali',
  location: 'Asif Meherremov 23, Baku, Azerbaijan',
  categories: ['National', 'Vegetarian', 'Organic'],
  startMenu: ['Kete', 'Dovqa', 'Coban salati'],
  mainMenu: ['Dolma', 'Ash', 'Kebab'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adrress,
  }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} & ${this.mainMenu[mainIndex]} we will delevery to ${adrress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Bozartma'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. But not OBJECTS
const str = 'Ramey';
const letters = [...str, ' ', 'R.'];
console.log(letters);
console.log(...str);

// Real example
// const ingredients = [
//   prompt("Let' s make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 1989,
  ...restaurant,
  founder: 'Asif Meherremov',
};
console.log(newRestaurant);
