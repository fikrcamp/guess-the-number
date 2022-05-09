//code
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let input = document.querySelector(".guess").value;
  if (input == secretNumber && score != 0) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").innerText = input;
    document.querySelector(".message").innerText = "🎉 Correct Number!";
    if (score > highScore) {
      document.querySelector(".highscore").innerText = score;
      highScore = score;
    }
  } else {
    if (input === "") {
      document.querySelector(".message").innerText = "No Number!";
    } else if (input < 1 || input > 20) {
      document.querySelector(".message").innerText =
        "Please enter a valid number!";
      if (score > 1) {
        score -= 2;
        document.querySelector(".score").innerText = score;
      } else if (score == 1) {
        score--;
        document.querySelector(".score").innerText = score;
      }
      if (score == 0) {
        document.querySelector(".message").innerText = "Game Over!";
        document.querySelector("body").style.backgroundColor = "red";
      }
    } else {
      if (input > secretNumber) {
        document.querySelector(".message").innerText = "Too High!";
        if (score > 0) {
          score--;
          document.querySelector(".score").innerText = score;
        }
        if (score == 0) {
          document.querySelector(".message").innerText = "Game Over!";
          document.querySelector("body").style.backgroundColor = "red";
        }
      } else if (input < secretNumber) {
        document.querySelector(".message").innerText = "Too Low!";
        if (score > 0) {
          score--;
          document.querySelector(".score").innerText = score;
        }
        if (score == 0) {
          document.querySelector(".message").innerText = "Game Over!";
          document.querySelector("body").style.backgroundColor = "red";
        }
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").innerText = "?";
  document.querySelector(".message").innerText = "Start guessing...";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").innerText = score;
});
