import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyA0pjm7leanbi1UU4sXyx555_0JOXxOL_Y",
    authDomain: "acrnlive.firebaseapp.com",
    databaseURL: "https://acrnlive-default-rtdb.firebaseio.com",
    projectId: "acrnlive",
    storageBucket: "acrnlive.appspot.com",
    messagingSenderId: "258115656525",
    appId: "1:258115656525:web:b742cafda5e4d098743504",
    measurementId: "G-MB0TLV988M"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, child, get, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
const db = getDatabase();

var displayname = document.getElementById("displayname");

function get_latest_song(){
    console.log("got!")
    const dbref = ref(db);
    const songQuery = query(child(dbref, "Songs"), orderByChild("timestamp"), limitToLast(1));

    get(songQuery)
    .then((snapshot)=>{
        if(snapshot.exists()){
            var songs =[];

            snapshot.forEach(childSnapshot => {
                songs.push(childSnapshot.val());
                var song = songs[0];
                songs[0] = "STUPID ";
                var name = song.Name;
                displayname.innerHTML = "Playing: " + name;
            });
        } else {
          displayname.innerHTML = "";
        }
    })
}
setInterval(get_latest_song, 900);