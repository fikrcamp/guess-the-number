//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
  let guess = document.querySelector('.guess').value *1;
  document.querySelector('.score').textContent = score;

  if(!guess){
  document.querySelector(".message").innerText = "No number!";
  }
  else if (score < 1) {
    document.querySelector('.message').textContent = 'You lost';
  }
 else if(guess < randomNumber){
    document.querySelector(".message").innerText = "Too low!";
  }
  else if(guess > randomNumber){
    document.querySelector(".message").innerText = "Too high!";
    
  }  
  else if(guess == randomNumber){
    document.querySelector(".message").innerText = "Correct Number!";
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').innerText = guess;
   
  }

  

})



document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').innerText = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').innerText = '?';


})





console.log(randomNumber);