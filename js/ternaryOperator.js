var num1 = Number(prompt("Enter first Number"));
var num2 = Number(prompt("Enter second Number"));
var num3 = Number(prompt("Enter third Number"));
var big = "The big Number is : ";

var results = num1 > num2 && num1 > num3 ? big + num1: num2 > num1 && num2 > num3 ? big + num2: num3 > num1 && num3 > num2 ? big + num3: num1 == num2 && num2 == num3 ? "All Number is equal" : "Please Enter a Valid Number";
document.write(results);