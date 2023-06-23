


function get_achievement(points) {

  let sum = 0;  //足し算が行われる前のsumはもちろん0なので、はじめにsumを0と定義(初期化)しておく

  for(let i = 0; i < number; i ++) {   //pointsの配列の要素の数を変数numberで表したためi < numberとする。こうすることで要素の数が増減しても対応できるようになる。
    sum = sum + points[i]
  }
  if(sum >= number * 100 * 0.8) { //ここでの条件は合計点数が満点の80%以上がA判定になるので、要素数*100*0.8で出すことができる。
    return "A";
  } else if(sum >= number * 100 * 0.6) {
    return "B";
  } else if (sum >= number * 100 * 0.4){
    return "C"
  } else {
    return "D"
  }
}


function get_pass_or_failure(points) {
  let judge = "合格"
  for(i = 0; i < number; i ++){
    if(points[i] < 60){
      judge =  "不合格";
      break;
    }
  }
  return judge;
}

function judgement(point) {
  let achievement = get_achievement(point);
  let failure = get_pass_or_failure(point);
  return `あなたの成績は${achievement}です。${failure}です`;
}


let points = [70,100,80,80,70,80];
let number = points.length;  //pointsの配列の要素数を取得し変数numberに代入する
console.log(judgement(points));

