var num = prompt("Enter Your Marks Here : ");
num = parseFloat(num);
var result = "Your Marks is : " + num + "<br/>" + "Congratulations! You have got : ";

if (num > 100 || num < 0){
  document.write("Please! Enter Valid Marks")
} else if (num <= 100 && num >= 80) {
  document.write(result + "A+")
} else if (num <= 79 && num >= 70) {
  document.write(result + "A")
} else if (num <= 69 && num >= 60) {
  document.write(result + "A-")
} else if (num <= 59 && num >= 50) {
  document.write(result + "B")
} else if (num <= 49 && num >= 40) {
  document.write(result + "C")
} else if (num <= 39 && num >= 33) {
  document.write(result + "D")
} else if (num <= 32 && num >= 0) {
  document.write("Sorry! You did Fail")
} else {
  document.write("Please! Enter Your Marks")
}