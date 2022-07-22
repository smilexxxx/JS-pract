//functions
function myName(name) {
  greet = `hi ${name}`;

  console.log(greet);
}

myName("johnny");
const sum = (a, b) => a + b;

function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;
  total = sum(food, tipAmount);
  return total;
}

console.log(calculateFoodTotal(100, 30));

//higher order functions(map, filter, reduce)
//map
[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => console.log(number));
//double function using loops
const doubleMap = (numbers) => {
  return numbers.map((number) => number * 2);
};
console.log(doubleMap([1, 2, 3, 4, 5]));

//alternative
const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
};

console.log(double([1, 2, 3, 4, 5]));

//filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums.filter((num) => num >= 6));

//or condition(one of either conditions is true)
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums1.filter((num) => num > 6 || num <= 3));

//and and(both conditions are true)
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums2.filter((num) => num > 6 && num <= 3));

//greaterThan
const filter = (numbers, greaterThan = 3) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) result.push(number);
  }
  return result;
};
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

const actors = [
  { name: "Joey", netWorth: 20000 },
  { name: "Rachael", netWorth: 30000 },
  { name: "Ross", netWorth: 25000 },
  { name: "Monicah", netWorth: 18000 },
  { name: "Chandler", netWorth: 24000 },
  { name: "Phoebe", netWorth: 27000 },
  { name: "Ben", netWorth: 19000 },
];

let result = actors.filter((actor) => actor.netWorth > 23000);
console.log(result);
console.log(result.map((actor) => actor.name));
//netWorth total
console.log(result.reduce((prev, curr) => prev + curr.netWorth, 0));

//reduce
//sum all of the net worth
//SUM: Think reduce
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = nums3.reduce((prev, curr) => prev + curr);
const result1 = nums3.reduce(function (prev, curr) {
  return prev + curr;
});

console.log(result1);

//functions
function myName(name) {
  greet = `hi ${name}`;

  console.log(greet);
}

myName("johnny");
const sum1 = (a, b) => a + b;

function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;
  total = sum(food, tipAmount);
  return total;
}

console.log(calculateFoodTotal(100, 30));
