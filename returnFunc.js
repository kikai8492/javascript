// function add(i,j) {
//   let sum = i +j
//   return sum
// }

// console.log(add(2,3));

// function isOverTen(i) {
//   if(i >= 10) {
//     return true;
//   }else{
//     return false;
//   }
// };

// console.log(isOverTen(10));
// console.log(isOverTen(8));

// function isOverTen(i) {
//   return i >= 10;
// }

// console.log(isOverTen(12));
// console.log(isOverTen(8));

function devide(i ,j) {
  if (j === 0) {
    return "error";
  } else {
    return i / j;
  }
};

function showResult(i,j) {
  let result = devide(i , j);
  if(result === "error") {
    return result;
  } else {
    return `${result * 100}パーセントです。`;
  }
};

console.log(showResult(2,4));