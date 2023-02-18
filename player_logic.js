function toggleMute() {
            
    var video=document.getElementById("Vstream")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}
function changeicon() {
    var play = document.getElementById("play");
    var video=document.getElementById("Vstream")
    console.log(play.innerHTML);
    if(play.innerHTML == '<i class="fa-solid fa-pause"></i>'){
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
        video.pause();
    }
    else if(play.innerHTML == '<i class="fa-solid fa-play"></i>'){
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        video.play();
    }
}