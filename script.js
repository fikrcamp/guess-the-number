//code
let score = 20;
let haighScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)

//1. check random number with user input

document.querySelector(".check").addEventListener("click", function () {
  let input = document.querySelector(".guess").value;
// 2. Check button 
if(input ==""){
    document.querySelector(".message").innerText = "No Number!"

}
  else if (input == secretNumber) {
    //1. background green background
   document.querySelector("body").style.backgroundColor = "green";
    //2. change ? to random numbers
    document.querySelector(".number").innerText = input;

    //3. message changes to correct number
    document.querySelector(".message").innerText = "Correct Number!"
    // let haighsore score
        if(score > haighScore ){
            document.querySelector(".highscore").innerText = score;
            haighScore = score;

        }


  } else{
      score--
        document.querySelector(".score").innerText = score--;
      if(input > secretNumber){
        // massage change to  too haigh
        document.querySelector(".message").innerText = "📈 Too High!"
      
      }
      else if(input < secretNumber){
          // massage change to  too Low
        document.querySelector(".message").innerText = "📉 Too Low!"
        // substract score one


    }
}
 
});
// 3. Again button
document.querySelector(".again").addEventListener("click", function(){
    // change massage to start guessing
      document.querySelector(".message").innerText = "Start Guessing!"
    //   change number to ?
     document.querySelector(".number").innerText = "?"
    //  change guess number to empty 
     document.querySelector(".guess").value = "";
    //  change background color
    document.querySelector("body").style.backgroundColor = "#222";
    // make new random
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   console.log(secretNumber)
   // change score to 20
   score = 20;
   document.querySelector(".score").innerText = `${score}`;


})
// 4. score
// score
document.querySelector(".score").innerText = score;
// haighScore
document.querySelector(".highscore").innerText = haighScore;

