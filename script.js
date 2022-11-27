//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector(".check") .addEventListener('click', function(){
    let correctNumber = Number(document.querySelector(".guess").value);
     if (correctNumber === randomNumber){
        document.querySelector(".message").innerText="🎉Correct Number!"
        document.querySelector(".number").innerText = correctNumber
        document.querySelector("body").style.backgroundColor= "#60b347"
        if(score > highScore)
        highScore = score
        document.querySelector(".highscore").innerText = highScore;
     }
     else if (correctNumber < randomNumber){
         if(score > 1){
            score--;
            document.querySelector('.score').innerText = score;
         }
         document.querySelector('.score').innerText= "📉Too low!"
     }else if (correctNumber > randomNumber){
         if(score > 1){
             score--;
             document.querySelector('.score').innerText= score;
         }
         document.querySelector(".message").innerText= "📈 Too high!"
     }
})

document.querySelector(".again").addEventListener('click',function(){
    score = 20;
    document.querySelector(".message").innerText = "start guessing..."
    document.querySelector(".number").innerText = "?"
    document.querySelector(".body").style.backgroundColor = "#222"
    document.querySelector(".guess").value = ''
    document.querySelector(".score").innerText = score
})

