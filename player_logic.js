document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById("bar");
    slider.oninput = function() {
        console.log(slider.value / 100);
        const audio = document.getElementById('streamAudio');
        audio.volume = (slider.value / 100);
    }
});



function toggleAudio() {
    const audio = document.getElementById('streamAudio');
    const play = document.getElementById('play');

    try {
    audio.play();
    } catch (e) {
    console.error(e);
    }
    
    if (audio.paused) {
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    
    play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    });
}