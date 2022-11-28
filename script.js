//code
// gets a random number from 1 - 20

let randomNumber = Math.floor(Math.random() * 20) + 1
      let score = 20
      let highScore = 0

let Entercheck = document.querySelector(".btn check");
     let againbutton = document.querySelector(".again");
     let output = document.querySelector(".message");

     document.querySelector("#submit").addEventListener("click", function(){
    //  function checknumber = (){
      
      let input = document.querySelector(".guess").value;
      if(input == randomNumber){
        output.innerHTML= "You win"+","+" it was romdon number"
        output.style.color="white"
        document.querySelector("body").style.background="green"
        document.querySelector(".highscore").innerText= score
      }
       else if (score == 0){
        output.innerHTML="Game over"
       }

       else if(input>randomNumber && input < 100){
        output.innerHTML="You got too high"
        score--  
        document.querySelector("body").style.background="red"
        document.querySelector(".score").innerText= score
        // console.log(score)
      }
      else if(input<randomNumber && input > 1){
        output.innerHTML="You got too low"
        score--  
        document.querySelector("body").style.background="red"
        document.querySelector(".score").innerText= score
      }
      else if(input<1){
        output.innerHTML="Higher, its between 1 and 20"
      }

      else if(isNAN(input)){
        output.innerHTML="That not number!";
      }
      else{
        output.innerHTML="No it was to be between 1 and 100";
      }
     

    // Entercheck.addEventListener('click', checknumber);
    // againbutton.addEventListener('click', function(){
    //   location.reload();
    // })
  })

  againbutton.addEventListener('click', function(){
       location.reload();
     })