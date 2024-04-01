/* 
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import { getDatabase, child, ref, get, onValue, push, set, serverTimestamp, limitToLast, remove} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

    var recents = [10];
    var songs_array = [10];
    const ul = document.getElementById('songs_list');

    const firebaseConfig = {
        apiKey: "AIzaSyATEFejYNt33H9Z5PYfY44yfQIGIZ2nILg",
        authDomain: "acrn-live-63411.firebaseapp.com",
        projectId: "acrn-live-63411",
        storageBucket: "acrn-live-63411.appspot.com",
        messagingSenderId: "555640486207",
        appId: "1:555640486207:web:b6ba2c7aabe592e4b9bb8a",
        databaseURL: "https://acrn-live-63411-default-rtdb.firebaseio.com/"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const db_ref = ref(getDatabase());

    function write(){
        //fetch song data from radio.co json
        fetch('https://public.radio.co/api/v2/s319507a6f/track/current')
        .then(response => response.text())
        .then(html => {
            const pre_element = document.createElement('pre');
            pre_element.innerHTML = html;
            const json_data = JSON.parse(pre_element.textContent.trim());
            //this var 'title' is the artist - song elem
            const title = json_data.data.title;
            //console.log(title + " - radio.co");
            //recents.push(title);

            set(ref(database, 'current/'), {
                song: title,
                time: serverTimestamp()
            })
        })
    }
    function read() {
        get(child(db_ref, 'current/')).then((snapshot) => {
            if(snapshot.exists()) {
                const song = snapshot.val().song;
                const time = epoch_convert(snapshot.val().time);
                const label = time + " : " +song;
                if(song != songs_array[songs_array.length - 1]){

                    if(recents.length == 10){
                        recents.shift();
                        recents.push(label);
                        songs_array.push(song);
                    }
                    else{
                        
                        recents.push(label);
                        songs_array.push(song);
                        append_list();
                    }
                }
            }
            else{
                console.log("cant find songs yo");
            }
        })
    }

    function epoch_convert(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formatted_hour = hours % 12 || 12;
        const formatted_ampm = hours < 12 ? 'AM' : 'PM';
        const formatted_min = minutes < 10 ? 'O' + minutes : minutes;

        const time_string = `${formatted_hour}:${formatted_min} ${formatted_ampm}`;

        return time_string;
    }

    function append_list(){
        for (let i = 0; i < recents.length; i++) {
            console.log(recents[i]);
            const li = document.createElement('li');
            li.textContent = recents[i];
            ul.appendChild(li);
        }
    }

    setInterval(() =>{
        write();
        read();
    }, 3000); //repeat every 3 seconds
*/
function updateSongList() {
    // Fetch data from the URL
    fetch('https://public.radio.co/stations/s319507a6f/history')
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        // Extract the tracks array from the data
        var inc = 0;
        const tracks = data.tracks;
        // Get the <ul> element by its id
        const ul = document.getElementById('songs_list');
  
        // Clear existing list items
        ul.innerHTML = '';
        
        const lastTenTracks = tracks.slice(0,15);
        // Iterate through the tracks array and create <li> elements for each track
        lastTenTracks.forEach(track => {
          // Create a new <li> element
          //console.log(data.tracks[inc].start_time)
          const li = document.createElement('li');
          //console.log(track.start_time)
          //console.log(convertUTCToEST(track.start_time))
  
          // Set the text content of the <li> to the track title
          li.textContent =  convertUTCToEST(track.start_time) + track.title;
  
          // Append the <li> to the <ul>
          ul.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  function convertUTCToEST(utcTimeString) {
    // Create a Date object from the UTC time string
    let utcDate = new Date(utcTimeString);

    // Convert UTC time to EST by adding 5 hours (in milliseconds)
    let estOffset = -5 * 60 * 60 * 1000;
    let estDate = new Date(utcDate.getTime() + estOffset);

    // Extract hours and minutes
    let hours = estDate.getHours();
    let minutes = estDate.getMinutes();

    // Convert hours to 12-hour format
    let period = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12; // If hours is 0, make it 12

    // Add leading zeros to minutes if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Construct the EST time string
    let estTimeString = hours + ':' + minutes + ' ' + period + " - ";

    return estTimeString;
}
  
  // Call updateSongList function initially
  updateSongList();
  
  // Update the list every 5 seconds
  setInterval(updateSongList, 5000);