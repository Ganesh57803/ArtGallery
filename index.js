// index.js
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', function() {
        document.querySelector('audio').play();
    });
});