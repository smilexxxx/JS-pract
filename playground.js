//variables
// const(value cannot be changed),
// var(value can change)
// let(changing value) recommended
// let weather = prompt("How is the weather");

// if (weather === "rainy") {
//   console.log("carry your umbrella");
// } else {
//   console.log("wear your sunglasses");
// }

//functions
// function myName(name) {
//   greet = `hi ${name}`;

//   console.log(greet);
// }

// myName("johnny");
// const sum = (a, b) => a + b;

// function calculateFoodTotal(food, tip) {
//   tipPercentage = tip / 100;
//   tipAmount = food * tipPercentage;
//   total = sum(food, tipAmount);
//   return total;
// }

// console.log(calculateFoodTotal(100, 30));

//arrays
// const groceries = ["bananas", "oranges", "apples"];

//push
// groceries.push("mangoes");
// groceries.push("pineapples");

//slice
// console.log(groceries);
// console.log(groceries.slice(0, 3));

//objects{}
// const person = {
//   name: "John",
//   shirt: "blue",
//   trouser: "grey",
// };
//dot notation
// console.log(person.name);
//bracket notation
// console.log(person["name"]);

//object, arrow function
// const introduction = (name, shirt, trouser) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     trouser: trouser,
//   };

//   const intro = `Hi, my name is ${person["name"]} and the color of my shirt is ${person.shirt} and my trouser is ${person.trouser}.`;
//   return intro;
// };

// console.log(introduction("John", "blue", "grey"));

// const introduction = (name, shirt, trouser) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     trouser: trouser,
//     assets: 10000,
//     liabilities: 7500,
//     netWorth: function () {
//       return this.assets - this.liabilities;
//     },
//   };

//   const intro = `Hi, my name is ${
//     person["name"]
//   } and the color of my shirt is ${person.shirt} and my trouser is ${
//     person.trouser
//   }. My net worth is ${person.netWorth()}.`;
//   return intro;
// };

// console.log(introduction("John", "blue", "grey"));

// const fruits = ["bananas", "oranges", "apples"];
// fruits.push("mangoes");
// fruits.push("pineapples");

//loops
// for (i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const double = (numbers) => {
//   let result = [];
//   for (const number of numbers) {
//     result.push(number * 2);
//   }
//   return result;
// };

// console.log(
//   double([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
//     8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
//     6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
//     4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
//     2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
//     9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
//     7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4,
//     5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2,
//     3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
//     8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
//     6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
//     4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
//     2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
//     9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
//     7, 8, 9,
//   ])
// );

//strings
// const howManyLetters = () => {
//   const phrase = "hey, count how many letters there are there.";
//   for (const letter of phrase) {
//     console.log(letter);
//   }
// };
// howManyLetters();

// const howManyLetters = (phrase) => {
//   let result = 0;
//   for (const index in phrase) {
//     console.log(Number(index) + 1);
//     result = Number(index) + 1;
//   }
//   return { result };
//alternative
//return{result:phrase.lenght}
// };
// const phrase = prompt("write your phrase");
// howManyLetters(phrase);

// const sumArray = (numbers) => {
//   let result = 0;

//   for (const number of numbers) {
//     console.log(number);
//     result = result + number;
//   }
//   return { result };
// };
// const nums = [12, 3, 4, 5, 6, 7, 8, 9];
// console.log(sumArray(nums));

// const max = (numbers) => {
//   let result = numbers[0];

//   for (const number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return result;
// };

// console.log(max([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// const letterFrequency = (phrase) => {
//   console.log(phrase);
//   //make "frequency" object {}
//   let frequency = {};
//   for (const letter of phrase) {
//     //check if letter exists
//     if (letter in frequency) {
//       //increment value by +1
//       frequency[letter] = frequency[letter] + 1;
//       //otherwise, set value to 1
//     } else {
//       frequency[letter] = 1;
//     }
//   }
//   return frequency;
// };

// console.log(letterFrequency("Hello there."));

// const wordFrequency = (phrase) => {
//   console.log(phrase);
//   let frequency = {};
//   words = phrase.split(" ");
//   for (const word of words) {
//     if (word in frequency) {
//       frequency[word] += 1;
//     } else {
//       frequency[word] = 1;
//     }
//   }
//   return frequency;
// };
// console.log(wordFrequency("Hello world. Hello friend."));

// //higher order functions(map, filter, reduce)
// //map
// [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => console.log(number));

// const doubleMap = (numbers) => {
//   return numbers.map((number) => number * 2);
// };
// console.log(doubleMap([1, 2, 3, 4, 5]));
//filter
// const filter = (numbers, greaterThan = 3) => {
//   let result = [];
//   for (const number of numbers) {
//     if (number > greaterThan) result.push(number);
//   }
//   return result;
// };
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// const actors = [
//   { name: "Joey", netWorth: 20000 },
//   { name: "Rachael", netWorth: 30000 },
//   { name: "Ross", netWorth: 25000 },
//   { name: "Monicah", netWorth: 18000 },
//   { name: "Chandler", netWorth: 24000 },
//   { name: "Phoebe", netWorth: 27000 },
//   { name: "Ben", netWorth: 19000 },
// ];

// let result = actors.filter((actor) => actor.netWorth > 23000);
// console.log(result);
// console.log(result.map((actor) => actor.name));

// playground.innerHTML = `<h1>${result[0]}</h1>`;

//reduce
// sum all of the net worth
// SUM: Think reduce
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = nums.reduce((prev, curr) => prev + curr);
const result = nums.reduce(function (prev, curr) {
  return prev + curr;
});

console.log(result);
