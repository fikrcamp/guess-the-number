//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector(".check").addEventListener("click",function(){
    let value = document.querySelector(".guess").value
    console.log(randomNumber)
    if(value == randomNumber){
        document.querySelector(".number").innerText = randomNumber
        document.querySelector("body").style.background = "green"
        document.querySelector(".message").innerHTML = "🎉 Correct Number!"
        if(score > highScore){
            document.querySelector(".highscore").innerHTML = score
        }


    }
    else if(value != randomNumber){
        if (score >= 1){
            if(value < randomNumber){
                document.querySelector(".message").innerText = "📉 Too low"
            }
            else if (value > randomNumber){
                document.querySelector(".message").innerText = "📉 Too high"
            }
           
        }
        score--;
        document.querySelector(".score").innerText = score

           
        
    }
    
    
})

document.querySelector(".again").addEventListener("click",function(){
randomNumber = Math.floor(Math.random() * 20) + 1
score = 20
document.querySelector(".message").innerText = "Start you guessing"
document.querySelector(".score").innerText = score
document.querySelector(".highscore").innerText = highScore
document.querySelector("body").style.background = ("black")
document.querySelector(".guess").value = ''
document.querySelector(".number").innerText = "?"
})


