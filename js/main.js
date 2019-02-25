'use strict';   // 厳密なエラーチェック

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {    // クリックしたら
    // const results = ['大吉', '中吉', '凶', '末吉'];   // 配列定義
    // const results = ['大吉', '大吉', '凶', '大吉'];   // 75％大吉定義例
    // const n = Math.floor(Math.random() * results.length); // ランダムな数値生成
    // btn.textContent = results[n];            // n番目を表示
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '凶' // 5%
    } else if (n < 0.25) {
      btn.textContent = '大吉'; // 20%
    } else if (n < 0.55) {
      btn.textContent = '中吉'; // 30%
    } else if (n < 0.8) {
      btn.textContent = '小吉'; // 25%
    } else {
      btn.textContent = '末吉' // 20%
    }
    // btn.textContent = n;                     // 数値変更表示
    // btn.textContent = 'hit!';             // テキスト変更表示
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
  btn.addEventListener('mousedown', () => {  // 押し込まれたら
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {  // 離したら
    btn.classList.remove('pressed');       // 元に戻す
  });
}
