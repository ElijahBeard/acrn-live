function toggleMute() {
            
    var audio=document.getElementById("Astream")
    if(audio.muted){
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}
function changeicon() {
    var play = document.getElementById("play");
    var audio=document.getElementById("Astream")
    console.log(play.innerHTML);
    if(play.innerHTML == '<i class="fa-solid fa-pause"></i>'){
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
        audio.pause();
    }
    else if(play.innerHTML == '<i class="fa-solid fa-play"></i>'){
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audio.play();
    }
}