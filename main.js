'use strict';

const tasks = [
  {
    content: '机を片付ける',
    genre: '掃除'
  },
  {
    content: '牛乳を買う',
    genre: '買い物'
  },
  {
    content: '散歩する',
    genre: '運動'
  },
];

const createTitle = () => {
    console.log('**************************');
    console.log("現在持っているタスク一覧");
    console.log('**************************');
}
const showTasks = () => {
  tasks.forEach((key) => {
    console.log(`[内容]${key.content} 、[ジャンル]${key.genre}`);
  });
}

createTitle();
showTasks();

const contents = prompt('内容を入力してください'); 
const  genre = prompt('ジャンルを入力してください'); 

tasks.push({content: contents , genre: genre});

createTitle();
showTasks();

 alert ("新しいタスクを追加しました");