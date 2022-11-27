
//declaring variables
let points = document.querySelector(".score");
let score = 20
const highscore = 0;
//check button actions
document.querySelector(".check").addEventListener("click", function guessNumber() {
    //Generate the random-number between 1---20
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    //storing tha value of my input
    let value = document.querySelector(".guess").value;
    //conditions and actions
    if (value == randomNumber) {
        document.querySelector("#container").style.background = "#60b347"
        document.querySelector(".message").innerText = "🎉Correct Number!"
        document.querySelector(".number").innerText = value

        if (score > highscore) {
            document.querySelector(".highscore").innerText = score
        }
    }
    else if (value !== randomNumber) {
        if (score >= 1) {
            if (value < randomNumber) {
                document.querySelector(".message").innerText = "📉 Too low"
            }
            else if (value > randomNumber) {
                document.querySelector(".message").innerText = " 📈 Too high"
            }
            score--;
            points.innerText = score
        } else {

            document.querySelector(".message").innerText = "💥 You Lost the game"
        }


    }
})

//again button actions
document.querySelector(".again").addEventListener("click", function () {
    //default score value and highscore default value inizilazing 
    score = 20
    //Generate again the number between 1 and 20
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    //actions
    document.querySelector(".score").innerText = score;
    document.querySelector(".highscore").innerText = highscore
    document.querySelector(".number").innerText = "?"
    document.querySelector("#container").style.background = "Black"
    document.querySelector(".guess").value = '';
    document.querySelector(".message").innerText = "Start guessing..."

})