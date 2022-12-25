//get first name from user
var firstName = prompt("Enter Your First Name : ");

// get last name from user
var lastName = prompt("Enter Your last Name : ");

// add without using library function
var fullName = firstName + " " + lastName;

// print full name
document.write("Your Full Name is : " + fullName + "<br/>");

// total length of full name
var length = fullName.length;
document.write("Total length of full name is : " + length + "<br/>")

// convert full name into uppercase
var fullNameUpper = fullName.toUpperCase();
document.write("Convert full name into uppercase : " + fullNameUpper + "<br/>")

// print the 2nd position from full name
var secondChat = fullName.charAt(1);
document.write("The 2nd position character from full name : " + secondChat)


