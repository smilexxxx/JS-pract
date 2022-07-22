let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

const squares = document.querySelectorAll(".colorButton");
// console.log(squares);

//forEach
// squares.forEach((square) => {
//   square.onclick = () => console.log(square.value);
// });

const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onClick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

const clearScores = () => {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => (square.value = 0));
};
const clearGameBtn = document.getElementById("clear-game");
clearGameBtn.onclick = () => clearScores();
