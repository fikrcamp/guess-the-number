let  randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0
//dec var
let check = document.querySelector('#Check');
let IScore = document.querySelector('.score');
let again = document.querySelector('#Again');
let highIScore = document.querySelector('.highscore');
let input = document.querySelector('.guess');
//check operation
document.querySelector(".check").addEventListener("click",function(){
    if (randomNumber == input.value){
        document.body.style.backgroundColor = '#70e000';
         document.querySelector('.message').innerHTML= 'Correct Number!';
        document.querySelector('.number').innerText = randomNumber;
        highIScore.innerText = score;
    }

      if (input.value > randomNumber){
                score -= 1;
                IScore.innerText = score
                document.querySelector(".message").innerText = "Too high"
                document.body.style.backgroundColor = 'black';
            } else if (input.value < randomNumber){
                score -= 1;
                IScore.innerText = score
                document.querySelector(".message").innerText = "Too low"
                document.body.style.backgroundColor = 'black';
         }
              
 })
 //again operation
document.querySelector(".again").addEventListener("click",function(){
   score = 20;
   IScore.innerText = score
    const randomNumber = Math.floor(Math.random() * 20) + 1;

     document.body.style.backgroundColor =  '#222';
      document.querySelector('.number').innerText = '?';

     document.querySelector('.message').innerHTML = 'Start guessing...';
     input.value = '';

});

