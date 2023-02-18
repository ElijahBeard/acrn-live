//CHATGPT this is the file for song_getter.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHdsBxqMOrK_h410mm23zirTE4hchQSFw",
    authDomain: "stable-db.firebaseapp.com",
    projectId: "stable-db",
    storageBucket: "stable-db.appspot.com",
    messagingSenderId: "362097743711",
    appId: "1:362097743711:web:1dc055477c6ba76f9fc8ea"
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