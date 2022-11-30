// code

 // varible declration
let points = document.querySelector(".score")
let score = 20;
let highScore =0;

    // getting random num between 1-20   
 let randomNumber= Math.floor(math.random()*20)+1

 document.querySelector("btn check").addEventListener("click", function guessNumber(){
    document.querySelector(".guess").value
     
     // conditions
     if (value==randomNumber){
        document.querySelector(".container").style.background="red"
        document.querySelector(".message").innerText= "woow!! great you won"
        document.querySelector(".number").innerText="value"
     }
     if (score< highScore){
        document.querySelector(".highScore").innerText=score
     }
     else if(value!== randomNumber){
        if(score>=1){
            if( value< randomNumber){
                document,querySelector(".message").innerText= "too low"
                document.querySelector(".container").style.background="black"
            }
            else if ( value < randomNumber){
                document.querySelector(".message").innerText="too high"
                document.querySelector(".container").style.background= "black"
            }
             // score decerment 
            score--;
            points.innerText.score

        } else if( score < 1){
            document.querySelector(".message").innerText="you have lost the game plz try again !"

        }
    }
})

            // again actions to do 
     document.querySelector(".again").addEventListener("click", function () {
        //default score value and highscore default value inizilazing 
        score = 20
        //Generate again random num between 1 and 20
        let randomNumber = Math.floor(Math.random() * 20) + 1;
        //action doing 
        document.querySelector(".score").innerText = score;
        document.querySelector(".highscore").innerText = highscore
        document.querySelector(".number").innerText = "?"
        document.querySelector("#container").style.background = "Black"
        document.querySelector(".guess").value = '';
        document.querySelector(".message").innerText = "Start guessing..."
    
    })
