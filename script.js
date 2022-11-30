//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guessedNumber = document.querySelector(".guess").value;
  let scoreValue = document.querySelector(".score");
  let highScoreValue = document.querySelector(".highscore");

  if (guessedNumber == randomNumber) {
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").innerText = randomNumber;
    document.querySelector(".message").innerText = "Correct Number!";
    if (highScore < score) {
      highScoreValue.innerText = score;
    }
  } else if (guessedNumber > randomNumber) {
    document.querySelector(".message").innerText = "Too high!";
    score--;
    scoreValue.innerText = score;
  } else {
    document.querySelector(".message").innerText = "Too low!";
    score--;
    scoreValue.innerText = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").innerText = "Start guessing...";
  document.querySelector(".number").innerText = "?";
  document.querySelector(".guess").innerText = "";
  document.querySelector("body").style.background = "";
  let scoreValue = document.querySelector(".score");
  let highScoreValue = document.querySelector(".highscore");

  if (highScore < score) {
    highScoreValue.innerText = score;
  }

  scoreValue.innerText = 20;
});
