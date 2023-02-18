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
import {getDatabase, set, remove, ref, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
const db = getDatabase();

var name = document.getElementById("name");

var setsong = document.getElementById("setsong");
var signout = document.getElementById("signout");


function set_song(){
    const timestamp = Date.now().toString();
    set(ref(db, "Songs/" + timestamp), {
        Name: name.value,
        timestamp: serverTimestamp()
    })
    .then(()=>{
        alert("song added successfully")
    })
    .catch((error)=>{
        alert(error)
    });
}
function sign_out(){
    // Get a reference to the database
    const db = getDatabase();
    
    // Get a reference to the root node of the database
    const rootRef = ref(db);
    
    // Remove all data from the root node
    remove(rootRef)
      .then(() => {
        console.log("All data deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting data: ", error);
      });    
}

setsong.addEventListener('click', set_song);
signout.addEventListener('click', sign_out);
