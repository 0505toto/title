// script.js（テスト用）

// HTMLからidを使って要素を取得します
const video = document.getElementById('intro-video');
const menu = document.getElementById('main-menu');

// ページを開いてから5秒後にメニューを表示する
setTimeout(() => {
  // menu要素のクラスリストに 'is-visible' を追加します
  if (menu) {
    menu.classList.add('is-visible');
    console.log('5秒経ったのでメニューを表示しました。');
  } else {
    console.log('エラー: menu要素が見つかりません。HTMLのidを確認してください。');
  }
}, 5000); // 5000ミリ秒 = 5秒
