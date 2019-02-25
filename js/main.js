'use strict';   // 厳密なエラーチェック

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {    // クリックしたら
    btn.textContent = 'hit!';             // テキスト変更
  });
  btn.addEventListener('mousedown', () => {  // 押し込まれたら
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {  // 離したら
    btn.classList.remove('pressed');       // 元に戻す
  });
}
