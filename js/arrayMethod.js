var name1 = ["Mohammed", "Yasin", "Bhuiyan"];
console.log(name1);

//push
name1.push("Alamin");
console.log(name1);

//pop
name1.pop();
console.log(name1);

//unshift
name1.unshift("Akssg");
console.log(name1);

//shift
name1.shift();
console.log(name1);

//splice
name1.splice(1,0,"Alamin");
console.log(name1);

name1.splice(1,1);
console.log(name1);

name2 = name1.slice(1);
console.log(name2);

//sort
var sort = name1.sort();
name1.reverse();
console.log(name1);