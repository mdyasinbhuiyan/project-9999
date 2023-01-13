var playersInfo = [
  ["sakib", 50],
  ["Mosfiq", 60],
  ["Masrafi", 80],
  ["Abdul", 92],
  ["Mostafiz", 70],
  ["robi", 80],
  ["doni", 79],
  ["hassan", 18],
  ["anis", 200],
  ["Eshan", 199],
  ["totul", 198],
  ["Yasin", 100]
]
function highestRunScorer(playersInfo){
  var run = playersInfo[0][1];
  var name = playersInfo[0][0];
  for (var x = 1; x < playersInfo.length; x++){
    if (run < playersInfo[x][1]){
      run = playersInfo[x][1];
      name =  playersInfo[x][0];
    }
  }
  return name;
}
console.log(highestRunScorer(playersInfo));