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

      if (i % fizz === 0 && i % buzz === 0) {

        const li = document.createElement('li');

        li.textContent = i + 'FizzBuzz';

        ul.appendChild(li);

      } else if (i % fizz === 0) {

        const li = document.createElement('li');

        li.textContent = `${i} Fizz`;

        ul.appendChild(li);

      } else if (i % buzz === 0) {

        const li = document.createElement('li');

        li.textContent = `${i} Buzz`;

        ul.appendChild(li);

      }
    }
    //fizzbuzz処理
  });