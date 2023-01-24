let won = 0;
let lost = 0;
for (let i = 0; i < 5; i++){
  let guessingNumber = parseInt(prompt("Enter Number 1 to 5"));
  let randomNumber = Math.ceil(Math.random() * 5);
  
  if (guessingNumber == randomNumber){
    console.log("You have won");
    won++;
  }else{
    console.log("You have lose. Random Number is " + randomNumber);
    lost++;
  }
}
document.write("you have total won " + won + " times" + "<br/>");
document.write("you have total lost " + lost + " times");