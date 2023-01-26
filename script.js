var music = document.getElementById("audio");
function mulai() {
    // x.play()
    if (music.paused) {
        music.play();
        console.log('tekan');
    } else {
        music.pause();
    }
   
}