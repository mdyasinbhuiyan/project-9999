(function sum(x,y){
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
})(Number(prompt("Enter First Number")),Number(prompt("Enter Second Number")))




//function Expration
var func = function (x,y){
  let sum = x + y;
  return sum;
}
document.write(func(2,5))