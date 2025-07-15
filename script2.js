// HTMLからidを使って要素を取得します
const video = document.getElementById('intro-video');
const menu = document.getElementById('main-menu');

// video要素の再生が終了した時に実行する処理を登録します
video.addEventListener('ended', () => {
  // menu要素のクラスリストに 'is-visible' を追加します
  menu.classList.add('is-visible');
});
