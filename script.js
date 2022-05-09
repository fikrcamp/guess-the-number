//code

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highScore = 0

//1. check random number with user input

document.querySelector(".check").addEventListener("click", function () {
  let input = document.querySelector(".guess").value;

  if (input == secretNumber) {
    //1. background green background
    //2. change ? to random numbers
    //3. message changes to correct number
    document.querySelector(
      ".message"
).innerText = `correct number`
    document.querySelector(
   ".number" 
).innerText = secretNumber
    document.querySelector(
    "body"
).style.backgroundColor = "green"

    if(score > highScore){
        document.querySelector(
            ".highscore"
        ).innerText = score
    }
  } else {
      score--;
      document.querySelector(
          ".score"
      ).innerText = score;
      if (input > secretNumber){
          document.querySelector(
              ".message"
          ).innerText = `Too high`;
      } else{
          input < secretNumber (
              document.querySelector(
                ".message"
              ).innerText = `Too low`
          )
      }       
  }
});
document.querySelector(".again").addEventListener ("click" , function (){
    document.querySelector(
        ".score"
    ).innerText = 20
    document.querySelector(
        ".number"
    ).innerText = "?"

    document.querySelector("body").style.backgroundColor = "grey"
    
    document.querySelector(".message").innerText = `start guessing...`

    document.querySelector(".guess").value = ""


    }
)