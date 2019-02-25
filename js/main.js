'use strict';   // 厳密なエラーチェック

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {    // クリックしたら
    btn.textContent = 'hit!';             // テキスト変更
  });
}
