//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1 ;

let check = document.querySelector(".check");
let again = document.querySelector("#again");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let message= document.querySelector(".message")
let number = document.querySelector(".number");
let body =document.querySelector("body");


// initializing the value of score_value and highscore_value 
let score_value =20;
let highscore_value= 0;

score.innerHTML= score_value;
highscore.innerHTML = highscore_value;


 
// checking function

 check.addEventListener("click" , function(){
    let input_number = document.querySelector("#input_number").value;
    if(input_number === ""){
        message.innerHTML = "⛔️ No number!"
         }
     else if(input_number == randomNumber){
        message.textContent ="🎉 Correct Number!";
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

        if(input_number < randomNumber){
            message.innerHTML =" 📉 Too low!"
           } else if(input_number > randomNumber ){
            message.innerHTML ="📈 Too high!"
           } 


    // if you try  20 attemps and didn't get the random number you lost the game
           if(score_value <= 0 ){
            message.innerHTML ="💥 You lost the game!"
            score_value= 1;
           }

    }

       
 })


// again function

 again.addEventListener("click" , function(){

    //reset for their previous values
    score_value= 20;
    message.innerHTML ="Start guessing...";
    number.innerHTML = "?"
    body.style.background = "#222"     
    input_number.value = "";
    
   // creating another random value
     randomNumber = Math.floor(Math.random() * 20) + 1 ;
      console.log(randomNumber);

})
