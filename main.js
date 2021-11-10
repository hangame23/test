'use strict';
  document.getElementById('button').addEventListener('click', () => {
    let fizz = document.getElementById('fizznum').value;
    let buzz = document.getElementById('buzznum').value;
    const pattern = /^[-]?([1-9]\d*|0)$/;  //整数のみを受け付ける正規表現
    const ul = document.getElementById('list');
    if (!(pattern.test(fizz)) || !(pattern.test(buzz))) {
      const li = document.createElement('li');
      li.textContent = '整数を入力して下さい。';
      ul.appendChild(li);
      return;
    }
    for (let i = 1; i < 100; i++) {
       fizz = fizz * i;
       buzz = buzz * i;
      if (fizz % i == 0 && buzz % i == 0) {
        ul.textContent = `FizzBuzz ${fizz}`;
      }else if (fizz > buzz) {
        ul.textContent = `buzz ${buzz}`;
      }else if (buzz > fizz) {
        ul.textContent = `fizz ${fizz}`;
      }
    }
    //fizzbuzz処理
  });