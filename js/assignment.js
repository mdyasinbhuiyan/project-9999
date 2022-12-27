// ১. Variable কি ?
//answer: Variable হল কোন পরিবর্তনশীল ডেটা বা আইটেম ।
var example = "This a variable";
console.log(example);



// ২. Variable কিভাবে লিখতে হয় ?
//answer: প্রথমে var তারপর variable name  তারপর (=) চিহ্ন তারপর value লিখতে হয়।
var example2 = "This is a variable";
console.log(example2);



// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
//answer: কোন variable এর value  যদি  ("" , '' , ``)  এই চিহ্ন গুলোর ভিতরে লেখা হয় তাহলে সেটা string type variable হিসেবে গণ্য হবে।
var example3 = "This is a string type variable";
console.log(example3);



// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
//answer: কোন variable এর value  যদি  ("" , '' , ``)  এই চিহ্ন গুলোর ভিতরে না লিখে, শুধুমাত্র সংখ্যা লেখা হয়  তাহলে সেটা number type variable হিসেবে গণ্য হবে।
var num1 = 100;
console.log(num1);



// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
//answer: কোন variable এর value  যদি false and true হয় তাহলে সেটা number type variable হবে।
var num2 = false;
console.log(num2);

var num3 = true;
console.log(num3);



// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
//answer: 
//toUpperCase() দিয়ে সম্পর্ণ লেখা uppercase করা হয়।
var uprCse = "This is Yasin Bhuiyan. I'm from Dhaka in Bangladesh.";
console.log(uprCse.toUpperCase());

//toLowerCase() দিয়ে সম্পর্ণ লেখা lowercase করা হয়।
var lowrCse = "THIS IS YASIN BHUIYAN. I'M FROM DHAKA IN BANGLADESH.";
console.log(uprCse.toLowerCase());





// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
//answer: JavaScript এর মোট 6টি অপারেটর আছে।

// 1.Arithmetic Operators
// 2.Assignment Operators
// 3.Comparison Operators
// 4.Logical Operators
// 5.Conditional Operators
// 6.Type Operators




// ৮. Math.abs() এর ব্যাবহার লিখুন । 
//answer: কোন সংখ্যা negative থেকে Positive এ রূপান্তর করতে     ব্যাবহার করা হয়।
var num4 = -70;
num4 = Math.abs(num4);
console.log(num4);




// ৯. Math.celi()  এর ব্যাবহার লিখুন । 
//answer: Math.ceil() ফাংশন সর্বদা একটি সংখ্যাকে পরবর্তী বৃহত্তম পূর্ণসংখ্যা করে।
var num5 = 80.01;
num5 = Math.ceil(num5);
console.log(num5);




// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
//answer: Math.floor() ফাংশন একটি সংখ্যার দশমিক এর পরের সংখ্যাগলো বাদ দিয়ে দেয়।  অর্থাৎ, প্রদত্ত সংখ্যার চেয়ে কম বা সমান বৃহত্তম পূর্ণসংখ্যা প্রদান করে।
var num6 = 10.99;
num6 = Math.floor(num6)
console.log(num6);




// ১১. Math.round() এর ব্যাবহার লিখুন ।
//answer: Math.round() ফাংশন নিকটতম পূর্ণসংখ্যার বৃত্তাকার সংখ্যার মান প্রদান করে।
var num7 = 20.499;
num7 = Math.round(num7);
console.log(num7);

var num8 = 20.511;
num8 = Math.round(num8);
console.log(num8);




// ১২. Math.random() এর ব্যাবহার লিখুন ।
//answer: Math.random() ফাংশনটি 0 থেকে 1 এর কম পরিসরে এলোমেলো সংখ্যা প্রদান করে। সংখ্যাগুলোর মধ্যে  0 হতে পারে। কিন্তু, 1 হবে না। 1 এর থেকে কম সংখ্যা হবে।
var lotary = Math.random();
console.log(lotary);