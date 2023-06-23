let dicMember = {
  position: 
  {
    ceo: "noro",
    aiTeacher: "nakao",
    railsaTeacher: "shibata"
  }
};

console.log(dicMember.position.ceo);

let user_1 = {
  information:
  {
    name:"田中",
    age:21,
    sex:"male"
  }
};

console.log(user_1.information.name);

user_1['class'] = 'gold';
console.log(user_1.information.class);

let user_2 = {
  name:"佐藤",
  age:21,
  sex:"male"
};
user_2["class"] = "GOLD";

console.log(user_2.class);

let test = [
    { subject: 'math', points: 70 },
    { subject: 'english', points: 50 },
    { subject: 'society', points: 80 }
  ];
let science = { subject: 'science', points: 100 };
test.push(science);
console.log(test[3].points);
