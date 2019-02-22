

document.getElementById('track').oninput = function sliderMove() {
    let items = document.getElementById('items');
    let track = document.getElementById('track');
    items.style.right = track.value +'px';
};