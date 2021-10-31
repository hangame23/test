'use strict';


var suuti = 100;
while (suuti > 0) {
  var name = prompt("日本の首都は？");

  if (name == '東京都') {
    alert("正解です");
    break;
  } 
  else {
    alert('不正解です');
  }
}