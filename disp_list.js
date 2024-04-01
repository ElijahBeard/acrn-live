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

    // Create options object for toLocaleString
    let options = {
        timeZone: 'America/New_York', // Specify the target time zone
        hour12: true, // Use 12-hour time format
        hour: 'numeric', // Extract hour
        minute: 'numeric' // Extract minute
    };

    // Convert UTC time to EST
    let estTimeString = utcDate.toLocaleString('en-US', options);

    return estTimeString + " - ";
}
  
  // Call updateSongList function initially
  updateSongList();
  
  // Update the list every 5 seconds
  setInterval(updateSongList, 5000);