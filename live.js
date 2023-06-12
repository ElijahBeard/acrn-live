function playlogic(elementId) {
const element = document.getElementById(elementId);
element.addEventListener('click', () => {
    if(element.innerHTML == '<i class="fa-sharp fa-solid fa-play"></i>'){
        element.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>';
    }
    else{
        element.innerHTML = '<i class="fa-sharp fa-solid fa-play"></i>'
    }
});
}