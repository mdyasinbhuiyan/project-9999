//for loop
for(var i = 1; i <= 10; i++){
  document.write(i)
}

document.write("<br/>");

//while loop
var j = 1;
while(j <= 10){
  document.write(j);
  j++
}

document.write("<br/>");

//do while loop
var k = 1;
do{
  document.write(k);
  k++
} while(k <= 10)

document.write("<br/>");

//continue
for(var i = 1; i <= 20; i++){
  if(i == 10){
    continue; 
    //break;
  }
  document.write(i + " ")
}