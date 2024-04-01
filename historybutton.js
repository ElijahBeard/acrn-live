document.getElementById("history_button").addEventListener("click", function() {
    var history = document.getElementById("recents");
    var current_right = parseInt(getComputedStyle(history).right);
    console.log("cl!");
    if(current_right < 0) {
        history.style.right = "0";
    } else {
        history.style.right = "-500px";
    }
})
document.getElementById("history_button_b").addEventListener("click", function() {
    var history = document.getElementById("recents");
    var current_right = parseInt(getComputedStyle(history).right);
    console.log("cl!");
    if(current_right > 0) {
        history.style.right = "0";
    } else {
        history.style.right = "-500px";
    }
})