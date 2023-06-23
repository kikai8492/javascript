function mainTemplate () {
  console.log("田中さん,今日のランチはうどんにしましょう。");
}

mainTemplate()

function weather() {
  console.log("晴れ");
  console.log("曇り");
  console.log("雨");
};

weather();



function mainTemplate(name, time, menu) {
  console.log(`${name}さん、今日のランチは${time}時に${menu}を食べに行きましょう。`);
}
mainTemplate("田中", 12, "とんかつ");




function mainTemplate(lastname, time, menu) {
  console.log(`${lastname}さん、今日のランチは${time}時に${menu}を食べに行きましょう。`);
}

const lastname = "田中";
const time = 12;
const menu = "とんかつ";

mainTemplate(lastname, time, menu);



function introduce(name,age) {
  console.log(`私は${name}です。年齢は${age}歳です。`);
}

introduce("matumoto","22");


function information(name,age,user_id) {
  console.log(`私の名前は${name}です。年齢は${age}歳です。ユーザーIDは${user_id}です。`)
}

information("kikai",21,4545);


function introduce(name,age,hobby) {
  console.log(`こんにちは、${name}です。${age}歳です。しゅみは${hobby}です`)
}

introduce("kikai",21,"サッカー");