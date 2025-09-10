<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";

    var stream : HTMLAudioElement;
    let play=`<i class="fa-solid fa-play" style="color:white"></i>`
    let pause=`<i class="fa-solid fa-pause" style="color:white"></i>`
    let mute=`<i class="fa-solid fa-volume-xmark" style="color:white"></i>`
    let low_vol=`<i class="fa-solid fa-volume-low" style="color:white"></i>`
    let med_vol=`<img src="/images/volume.svg" alt="icon" width="22" height="22">`
    let high_vol=` <i class="fa-solid fa-volume-high" style="color:white"></i>`
    let playstatus=play;
    let volume=high_vol;
    let now_playing=" ";
    let marquee : HTMLDivElement;

    async function fetch_song_data(): Promise<void> {
        try {
            const response = await fetch('https://public.radio.co/api/v2/s319507a6f/track/current');
            const text = await response.text();

            const json_data = JSON.parse(text);
            const title : string = json_data?.data?.title ?? ' ';
            now_playing = `${"Now Playing : ".padEnd(5)}${title.padEnd(100)}`;
        } catch (error) {
            console.error("Cant fetch song data: ", error);
            now_playing = ' '
        }
    }

    let state = 3;
    function volume_state() {
        state = state === 3 ? 0 : state + 1;
        switch (state) {
            case 0:
                stream.volume = 0.0;
                break;
            case 1:
                stream.volume = 0.25;
                break;
            case 2:
                stream.volume = 0.50;
                break;
            case 3:
                stream.volume = 0.80;
                break;
        }
    }

    let is_playing = false;
    function play_pause() {
        is_playing = !is_playing;
        playstatus = is_playing
            ? `<i class="fa-solid fa-pause" style="color:white"></i>`
            : `<i class="fa-solid fa-play" style="color:white"></i>`;
        if(is_playing){
            stream.play();
            console.log("playing");
        } else { stream.pause(); }
    }
        
    onMount(() => {
            stream.load()
        fetch_song_data();
        const contentWidth = marquee.scrollWidth;
        const duration = contentWidth / 100;
        gsap.to(marquee, {
            x: -contentWidth / 4,
            duration: contentWidth / 50,
            repeat: -1,
            ease: 'linear',
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % (contentWidth / 2))
            }
        });
        const interval = setInterval(fetch_song_data, 5000);
        return () => clearInterval(interval);
    });
</script>

<div class="player">
    <button on:click={play_pause} class="play-status">
        <i class="fa-solid fa-circle"></i>
        <div class="play-button">
            {@html playstatus}
        </div>
    </button>
    <div bind:this={marquee} class="now-playing">
        <div class="marquee">
            <span class="marquee_content">
                {@html now_playing}
            </span>
            <span class="marquee_content">
                {@html now_playing}
            </span>
            <span class="marquee_content">
                {@html now_playing}
            </span>
                <span class="marquee_content">
                {@html now_playing}
            </span>
        </div>
    </div>
    <button class="volume-controls" on:click={volume_state}>
        {#if state === 0}
            {@html mute}
        {:else if state === 1}
            {@html low_vol}
        {:else if state === 2}
            {@html med_vol}
        {:else}
            {@html high_vol}
        {/if}
    </button>

</div>
<audio bind:this={stream}>
    <source src="https://streamer.radio.co/s319507a6f/listen"
    type="audio/mpeg">
</audio>


<style>
.player{
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    width:100vw;
    height:30px;
    border-color:white;
    border-top:2px;
    border-bottom:2px;
}
i {
    color:white;
}
.fa-circle {
    font-size:8px;
    animation-duration: 3s;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
@keyframes blink {
    0% {
        color:maroon;
    }
    50% {
        color:red;
    }
    100% {
        color:maroon;
    }
}
.now-playing {
    position:absolute;
    z-index:0;
}
.marquee {
    white-space: pre;
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
}
.marquee_content {
    color:white;
    font-family: "picto", sans-serif;
    flex: 0 0 auto;
    overflow:hidden;
    padding-right: 0.1rem;
}
.play-status {
    display:flex;
    align-items: center;
    background-color: black;
    z-index:2;
    height:100%;
    justify-content: space-evenly;
    width:50px;
}
.volume-controls {
    z-index:2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    height:100%;
    width:50px;
}
.play-button{
    width:20px;
}
</style>