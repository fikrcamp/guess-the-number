//code
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber)
//1. check random number with user input
document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").innerText = "?";
    document.querySelector(".message").innerText = "Start guessing...";
    document.querySelector(".guess").value="";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
        highScore = score;
    document.querySelector(".highscore").innerText = highScore;
    score = 20;
    document.querySelector(".label-score").innerText= `score : ${score}`
        

console.log(secretNumber)
})

document.querySelector(".check").addEventListener("click", function () {
    let input = document.querySelector(".guess").value;
    if (input == "") {
        document.querySelector(".message").innerText = "no number";

} else if (input == secretNumber) {
        document.querySelector("body").style.background = "green";
        document.querySelector(".number").innerText = secretNumber;
        document.querySelector(".message").innerText = "correct number";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".label-score").innerText = highScore;
        }

        document.querySelector(".highscore").innerText = score;
        document.querySelector(".label-score").innerText =`score:${score}` ;
    //1. background green background
    //2. change ? to random numbers
    //3. message changes to correct number
    } else {
        if (input > secretNumber) {
            document.querySelector(".message").innerText = "Too high"
            score--
            document.querySelector(".label-score").innerText = `score:${score}` ;
        } else if (input < secretNumber) {
            document.querySelector(".message").innerText = "Too low"
            score--
            document.querySelector(".label-score").innerText = `score:${score}`;
        
        }
    } 
  
});