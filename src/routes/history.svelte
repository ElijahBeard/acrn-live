<script lang="ts">
    import { onMount } from "svelte";
    interface track {
        title:string;
        start_time:string;
    }
    let tracks : track[] = [];
    function UTCtoEST(utc:string):string {
        const utcdate = new Date (utc);
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'America/New_York',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        };
        const est = utcdate.toLocaleString('en-US',options);
        return `[${est}]`;
    }
    async function update_song_list() {
        try {
            const response = await fetch('https://public.radio.co/stations/s319507a6f/history');
            const data = await response.json();
            tracks = data.tracks.slice(0,15);
        } catch (error) {
            console.error('Error fetching song data: ',error);
        }
    }
    onMount(() => {
        update_song_list();
        const interval = setInterval(update_song_list,5000);
        return () => clearInterval(interval);
    });
</script>

<ul id="songs_list">
    <div class="title">
        <h1>-- TRACK HISTORY --</h1>
    </div>
  {#each tracks as track}
    <li>{UTCtoEST(track.start_time).padEnd(100)}{track.title}</li>
  {/each}
</ul>

<style>
.title {
    width:100%;
    background-color: white;
    color:black;
    text-align: center;

}
#songs_list {
    color:white;
    margin-left:20px;
    font-family: "picto", sans-serif;
    font-size:14pt;

}
</style>