function fetch_song_data(){
    fetch('https://public.radio.co/api/v2/s319507a6f/track/current')
        .then(response => response.text())
        .then(html => {
            const pre_element = document.createElement('pre');
            pre_element.innerHTML = html;
            const json_data = JSON.parse(pre_element.textContent.trim());
    
            const title = json_data.data.title;

            //console.log(title);
            var current_track = document.getElementById('current');
            current_track.innerHTML = "Now Playing:&nbsp&nbsp&nbsp&nbsp" + title + "&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp@acrnmedia&nbsp&nbsp&nbsp&nbsp&nbsp";
            /*
                const song_container = document.getElementById('song_data');
                const song_element = document.createElement('h2');
                song_element.textContent = title;
            */
        })
        //.catch(error => console.error('Cannot fetch song data: ', error));
}

fetch_song_data();
setInterval(fetch_song_data, 10000);