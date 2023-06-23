// const hasStudentCard = false
// if(hasStudentCard === true) {
//   console.log("学生割引");
// }else{
//   console.log("学生書がないため割引できません");
// }

const userAge = 30;
const hasStudentCard = false;
const minAge = 3;
const maxAge = 25;

if(hasStudentCard === true){
  console.log("学生割引");
}else if(userAge >= minAge && userAge <= maxAge){
  console.log("学生割引");
}else{
  console.log("条件に合わないので割引できません");
}