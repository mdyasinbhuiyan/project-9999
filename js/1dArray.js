// function highestScore(){
//   var scores = new Array();
//   for (i = 0; i < 5; i++){
//     scores[i] = parseFloat(prompt("Enter Scores"));
//   }
//   if(scores[0] > scores[1] && scores[0] > scores[2] && scores[0] > scores[3] && scores[0] > scores[4]){
//     console.log(scores[0]);
//   }else if(scores[1] > scores[0] && scores[1] > scores[2] && scores[1] > scores[3] && scores[1] > scores[4]){
//     console.log(scores[1]);
//   }else if(scores[2] > scores[0] && scores[2] > scores[1] && scores[2] > scores[3] && scores[2] > scores[4]){
//     console.log(scores[2]);
//   }else if(scores[3] > scores[0] && scores[3] > scores[1] && scores[3] > scores[2] && scores[3] > scores[4]){
//     console.log(scores[3]);
//   }else{
//     console.log(scores[4])
//   }
// }
// highestScore();



function highestScore(scores){
  var max = scores[0];
  for (var i = 1; i < scores.length; i++){
    if (max < scores[i]){
      max = scores[i];
    }
  }
  return max;
}
let scores = [20, 30, 50, 50, 70];
let maxes = highestScore(scores);
console.log(maxes);