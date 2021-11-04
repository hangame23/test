'use strict';

let name = prompt('日本の首都は');

while (name) {
  if (name === '東京都') {
    alert('正解です');
    break;
  } else {
    alert('不正解です');
    name = prompt('日本の首都は');
  }
}



