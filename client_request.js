// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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