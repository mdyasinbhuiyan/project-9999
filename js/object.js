//Object like almost css
let profile = {
  id: 100,
  name: "Yasin",
}
console.log(profile);

function User(name, age, lang){
  this.name = name;
  this.age = age;
  this.lang = lang;
  this.display = function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.lang);
  }
}
var user1 = new User("Md Yasin Bhuiyan", 15, ["English", "Bangla", "Arabic"]);
var user2 = new User("Md alamin Bhuiyan", 15, ["English", "Bangla", "Arabic"]);
var user3 = new User("Md sakib Bhuiyan", 15, ["English", "Bangla", "Arabic"]);

user1.display();
user2.display();
user3.display();