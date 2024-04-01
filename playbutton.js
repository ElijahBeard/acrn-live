const element = document.getElementById('play_button');
var stream = document.getElementById('stream');
element.addEventListener('click', () => {
    if(element.innerHTML == '<i class="fa-sharp fa-solid fa-play"></i>'){
        element.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>';
        stream.play();
    }
    else{
        element.innerHTML = '<i class="fa-sharp fa-solid fa-play"></i>'
        stream.pause();
    }
});