//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0

 

let check = document.getElementById('check');
let zcore = document.querySelector('.score');
let again = document.getElementById('again');
let highZcore = document.querySelector('.highscore');
let input = document.querySelector('.guess');
  
check.addEventListener("click", Checker);

 function Checker(){
    
    
    if (randomNumber == input.value){
        document.body.style.backgroundColor = '#60b347';
         document.querySelector('.message').innerHTML= 'Correct Number!';
        document.querySelector('.number').innerText = randomNumber;
        highZcore.innerHTML = highScore;
        
      if (score > highScore){
         highScore = score;
          highZcore.innerHTML = highScore;
      }

      
       
    } else if (input.value > randomNumber){
         score --;
        zcore.innerHTML = score;
        document.querySelector('.message').innerHTML = 'Too High!';
        
    }
    else if (input.value < randomNumber){
         score --;
        zcore.innerHTML = score;
       
        document.querySelector('.message').innerHTML= 'Too Low!';
        

    }
};
again.addEventListener("click", function(){
    score = 20;
    zcore.innerHTML = score;
     randomNumber = Math.floor(Math.random() * 20) + 1;
    
     document.body.style.backgroundColor =  '#222';
      document.querySelector('.number').innerText = '?';
   
     document.querySelector('.message').innerHTML = 'Start guessing...';
     input.value = '';



});

