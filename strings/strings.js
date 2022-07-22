//frequency of letters in strings
const letterFrequency1 = (phrase) => {
  console.log(phrase);
  //make "frequency" object {}
  let frequency = {};
  for (const letter of phrase) {
    //check if letter exists
    if (letter in frequency) {
      //increment value by +1
      frequency[letter] = frequency[letter] + 1;
      //otherwise, set value to 1
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency1("Hello there."));

//frequency of words
const wordFrequency = (phrase) => {
  console.log(phrase);
  let frequency = {};
  words = phrase.split(" ");
  for (const word of words) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
};

console.log(wordFrequency("Hello world. Hello friend."));

//alternative word frequency
const wordFrequency2 = (phrase) => {
  const words = phrase.split("");
  return letterFrequency(words);
};

console.log(wordFrequency("Hello world. Hello friend."));

//frequency of letters in strings
const letterFrequency = (phrase) => {
  console.log(phrase);
  //make "frequency" object {}
  let frequency = {};
  for (const letter of phrase) {
    //check if letter exists
    if (letter in frequency) {
      //increment value by +1
      frequency[letter] = frequency[letter] + 1;
      //otherwise, set value to 1
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency("Hello there."));

//frequency of words
const wordFrequency1 = (phrase) => {
  console.log(phrase);
  let frequency = {};
  words = phrase.split(" ");
  for (const word of words) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
};
console.log(wordFrequency1("Hello world. Hello friend."));
