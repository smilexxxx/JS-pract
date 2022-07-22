<<<<<<< HEAD
//arrays & objects
const groceries = ["bananas", "oranges", "apples"];

//push
groceries.push("mangoes");
groceries.push("pineapples");

//slice
console.log(groceries);
console.log(groceries.slice(0, 3));

//objects{}
const person = {
  name: "John",
  shirt: "blue",
  trouser: "grey",
};
//dot notation
console.log(person.name);
//bracket notation
console.log(person["name"]);

//object, arrow function
const introduction = (name, shirt, trouser) => {
  const person = {
    name: name,
    shirt: shirt,
    trouser: trouser,
  };

  const intro = `Hi, my name is ${person["name"]} and the color of my shirt is ${person.shirt} and my trouser is ${person.trouser}.`;
  return intro;
};

console.log(introduction("John", "blue", "grey"));

const introduction2 = (name, shirt, trouser) => {
  const person = {
    name: name,
    shirt: shirt,
    trouser: trouser,
    assets: 10000,
    liabilities: 7500,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hi, my name is ${
    person["name"]
  } and the color of my shirt is ${person.shirt} and my trouser is ${
    person.trouser
  }. My net worth is ${person.netWorth()}.`;
  return intro;
};

console.log(introduction2("John", "blue", "grey"));

//sum of array
const sumArray = (numbers) => {
  let result = 0;

  for (const number of numbers) {
    console.log(number);
    result = result + number;
  }
  return { result };
};
const nums = [12, 3, 4, 5, 6, 7, 8, 9];
console.log(sumArray(nums));

//max number of items
const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
};

console.log(max([1, 2, 3, 4, 5, 6, 7, 8, 9]));
=======
//arrays & objects
const groceries = ["bananas", "oranges", "apples"];

//push
groceries.push("mangoes");
groceries.push("pineapples");

//slice
console.log(groceries);
console.log(groceries.slice(0, 3));

//objects{}
const person = {
  name: "John",
  shirt: "blue",
  trouser: "grey",
};
//dot notation
console.log(person.name);
//bracket notation
console.log(person["name"]);

//object, arrow function
const introduction = (name, shirt, trouser) => {
  const person = {
    name: name,
    shirt: shirt,
    trouser: trouser,
  };

  const intro = `Hi, my name is ${person["name"]} and the color of my shirt is ${person.shirt} and my trouser is ${person.trouser}.`;
  return intro;
};

console.log(introduction("John", "blue", "grey"));

const introduction2 = (name, shirt, trouser) => {
  const person = {
    name: name,
    shirt: shirt,
    trouser: trouser,
    assets: 10000,
    liabilities: 7500,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hi, my name is ${
    person["name"]
  } and the color of my shirt is ${person.shirt} and my trouser is ${
    person.trouser
  }. My net worth is ${person.netWorth()}.`;
  return intro;
};

console.log(introduction2("John", "blue", "grey"));

//sum of array
const sumArray = (numbers) => {
  let result = 0;

  for (const number of numbers) {
    console.log(number);
    result = result + number;
  }
  return { result };
};
const nums = [12, 3, 4, 5, 6, 7, 8, 9];
console.log(sumArray(nums));

//max number of items
const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
};

console.log(max([1, 2, 3, 4, 5, 6, 7, 8, 9]));
>>>>>>> 135e7583820d179500910ecccac4f24efa9fe107
