let startX;

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].pageX; // タッチ開始位置
});

document.addEventListener('touchend', function(event) {
    const endX = event.changedTouches[0].pageX; // タッチ終了位置
    if (startX - endX > 50) { // 左にフリックした場合
        document.getElementById('popup').style.display = 'block';
    }
});
