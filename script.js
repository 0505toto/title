// HTMLの読み込みが完了したら、中のコードを実行します
document.addEventListener('DOMContentLoaded', () => {

    // HTMLからidを使ってビデオ要素とメニュー要素を取得します
    const introVideo = document.getElementById('intro-video');
    const mainMenu = document.getElementById('main-menu');

    // ビデオの再生が終了したときに実行される処理を登録します
    introVideo.addEventListener('ended', () => {
        // ビデオを非表示にする
        introVideo.style.display = 'none';

        // メニューを表示する
        // CSSで .menu に display:flex が設定されているため、 'flex' を指定します
        mainMenu.style.display = 'flex';
    });

});