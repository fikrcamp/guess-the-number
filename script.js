//code
// document.querySelector(".btn").addEventListener("click", function (max = 20) {
//   let compare = document.querySelector(".guess").value * 1;
//   let result = Math.floor(Math.random() * max);
// //   if (compare == result) {
// //     document.querySelector(".message").innerText = "correct";

// //   } else if (compare >= result) {
// //     document.querySelector(".message").innerText = "too high";
// //   } else {
// //     document.querySelector(".message").innerText = "you are correct";
//   }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
//1. check random number with user input

document.querySelector(".check").addEventListener("click", function () {
  let input = document.querySelector(".guess").value;

  if (!input) {
    document.querySelector(".message").innerText = "⛔ Not Number";
  } else if (input == secretNumber) {
    //1. background green background
    document.querySelector("body").style.backgroundColor = "green";
    //2. change ? to random numbers
    document.querySelector(".number").innerText = input;
    //3. message changes to correct number
    document.querySelector(".message").innerText = "Correct Number!";

    if (score > highscore) {
      document.querySelector(".highscore").innerText = score;
      highscore = score;
    }
  } else {
    if (input > secretNumber) {
      document.querySelector(".message").innerText = "too High! ";
      score--;
      document.querySelector(".label-score").innerText = score;
    } else if (input < secretNumber) {
      document.querySelector(".message").innerText = "too Low !";
      score--;
      document.querySelector(".label-score").innerText = `💯 Score:${score}`;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").innerText = "Start guessing...";
  document.querySelector(".number").innerText = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".score").innerText = 20;
  document.querySelector(".highscore").innerText = highscore;
});
