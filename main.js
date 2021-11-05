const tasks = ['掃除', '買い物', '散歩'];

let createTitle = () => {
    console.log('**************************');
    console.log("現在持っているタスク一覧");
    console.log('**************************');
}
let showTasks = () => {
  tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
  });
}

createTitle();
showTasks();

let task = prompt('追加してください'); //タスク追加
tasks.push(task);

createTitle();
showTasks();

 alert ("新しいタスクを追加しました");
  

  
