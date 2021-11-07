'use strict';

const tasks = {
  '机を掃除' : '掃除', 
  '牛乳を買う' : '買い物', 
  '散歩する' :  '運動',
};

const createTitle = () => {
    console.log('**************************');
    console.log("現在持っているタスク一覧");
    console.log('**************************');
}
const showTasks = () => {
  const keys = Object.keys(tasks);
  keys.forEach((key) => {
    console.log(`[内容]${key} 、[ジャンル]${tasks[key]}`);
  });
}

createTitle();
showTasks();

const contents = prompt('内容を入力してください'); 
const  genre = prompt('ジャンルを入力してください'); 

tasks[contents] = genre;

createTitle();
showTasks();

 alert ("新しいタスクを追加しました");








 
 



 
