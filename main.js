var todo = ['掃除', '買い物', '散歩'];

function tekisuto2() {
    console.log('**************************');
    console.log("現在持っているタスク一覧");
    console.log('**************************');
}
function tekisuto3() {
  for(var i = 0; i < todo.length; i++) {
    console.log(i + ':' + todo[i]);
  }
}

tekisuto2();
tekisuto3();

var tekisuto11 = prompt('追加してください');
todo.push(tekisuto11);
tekisuto2();
tekisuto3();

alert ("新しいタスクを追加しました");
  

  
