function  addition(x,y){
  var add =  x + y;
  document.write("The results is = " + add + "<br/>");
}
function  subtraction(x,y){
  var sub =  x - y;
  document.write("The results is = " + sub + "<br/>");
}
function  division(x,y){
  var div =  x * y;
  document.write("The results is = " + div + "<br/>");
}
function  multiplication(x,y){
  var multiple =  x / y;
  document.write("The results is = " + multiple + "<br/>");
}
function  modulas(x,y){
  var modulas =  x % y;
  document.write("The results is = " + modulas + "<br/>");
}

addition(20,10);
subtraction(50,20);
division(60,2);
multiplication(15,2);
modulas(40,70)


function calc(x,y){
  let plus = x + y;
  let min = x - y;
  let gon = x * y;
  let divide = x / y;
  let modulas = x % y;
  
  document.write(x + " + " + y + " = " + plus + "<br/>");
  document.write(x + " - " + y + " = " + min + "<br/>");
  document.write(x + " * " + y + " = " + gon + "<br/>");
  document.write(x + " / " + y + " = " + divide + "<br/>");
  document.write(x + " % " + y + " = " + modulas + "<br/>");
}
calc(Number(prompt("Enter First Number")),Number(prompt("Enter First Number")))