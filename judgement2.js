function get_achievent(x,y,z) {
  sum = x + y + z;

  if (sum >= 250) {
    return "A"
  } else if (sum >= 200){
    return "B"
  } else if ( sum >= 100) {
    return "C"
  } else {
    return "D"
  }
}



function get_pass_or_failure(x,y,z) {
  if(x >= 60 && y >= 60 && z >= 60) {
    return "合格"
  } else {
    return "不合格"
  }
};

// console.log(get_pass_or_failure(100,59,70));

function judgement(x,y,z){
  let achievement = get_achievent(x,y,z);
  let pass_or_failure = get_pass_or_failure(x,y,z);

return `あなたの成績は${achievement}です。${pass_or_failure}です!`;

};

console.log(judgement(100,59,70));