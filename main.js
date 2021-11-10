'use strict';

const showMessage = () => {
  const fizznumbox = document.getElementById('fizznum');  //fizznumの値を取得
  const bizznumbox = document.getElementById('bizznum');  //bizznumの値を取得
  let fizznum = fizznumbox.value; //fizznumの値を代入
  let bizznum = bizznumbox.value; //bizznumの値を代入
  let fizznum2;
  let bizznum2;
  const check = fizznum.match(/[^0-9]/);
  const check2 = bizznum.match(/[^0-9]/);
  console.log(check);
  for (let i = 1; fizznum < 100; i++ ) {
    fizznum2 = fizznum * i;
    bizznum2 = bizznum * i;
    if (!fizznum || check && !bizznum2 || check2) {
      document.getElementById('msg').innerHTML = "数字を入力してください";
      break;
    }
    if (fizznum2 > 99) {
      break;
    }
    if (bizznum2 > 99) {
      break;
    }
    if (fizznum2 && fizznum == 0 && fizznum2 % bizznum == 0) {
      console.log("Fizzbuz" + fizznum2);
      document.getElementById('msg').innerHTML = fizznum2;
    } else if (fizznum2 > bizznum2) {
      console.log(bizznum2);
      console.log(fizznum2);
      document.getElementById('msg').innerHTML = bizznum2;
      document.getElementById('msg').innerHTML = fizznum2;
    } else {
      console.log(bizznum2);
      console.log(fizznum2);
      document.getElementById('msg').innerHTML = fizznum2;
      document.getElementById('msg').innerHTML = bizznum2;
    }
  }
}