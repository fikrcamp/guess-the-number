let randomNumber = Math.floor(Math.random() * 20) + 1 ;

let check = document.querySelector(".check");
let again = document.querySelector(".again");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let message= document.querySelector(".message")
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let body =document.querySelector("body");


// step 2: initializing the value of score_value and highscore_value 
let score_value =20;
let highscore_value= 0;

score.innerHTML= score_value;
highscore.innerHTML = highscore_value;


 
// step 3 :checking function

 check.addEventListener("click" , function(){
    let guess = document.querySelector(".guess").value;
    if(guess === ""){
        message.innerHTML = " No number!"
         }
     else if(guess == randomNumber){
        message.textContent =" Correct Number!";
        score.innerHTML = score_value;
        number.innerHTML = randomNumber;
        body.style.backgroundColor = "limegreen";
        
        if(score_value > highscore_value ){
         highscore_value = score_value;
         highscore.innerHTML = highscore_value;
        }
         
       } 
    else{
        score_value = score_value -1;
        score.innerHTML = score_value;

        if(guess < randomNumber){
            message.innerHTML ="  Too low!"
           } else if(guess > randomNumber ){
            message.innerHTML =" Too high!"
           } 


    // if you try  20 attemps and didn't get the random number you lost the game
           if(score_value <= 0 ){
            message.innerHTML =" You lost the game!"
            score_value= 1;
           }

    }

       
 })


// step 4: again function

 again.addEventListener("click" , function(){

    //reset for their previous values
    score.innerHTML= score_value = 20;
    message.innerHTML ="Start guessing...";
    number.innerHTML = "?"
    body.style.background = "#222"     
    guess.value = "";
    
   // creating another random value
     randomNumber = Math.floor(Math.random() * 20) + 1 ;
      console.log(randomNumber);})