<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";

    let play=`<i class="fa-solid fa-play" style="color:white"></i>`
    let pause=`<i class="fa-solid fa-pause" style="color:white"></i>`
    let mute=`<i class="fa-solid fa-volume-xmark" style="color:white"></i>`
    let low_vol=`<i class="fa-solid fa-volume-low" style="color:white"></i>`
    let high_vol=` <i class="fa-solid fa-volume-high" style="color:white"></i>`
    let playstatus=play;
    let volume=high_vol;
    let now_playing=" ";
    let marquee: HTMLDivElement;

    async function get_song_data(text:string) {

    }

    onMount(() => {
        const contentWidth = marquee.scrollWidth;
        const duration = contentWidth / 100;
            gsap.to(marquee, {
                x: -contentWidth / 2,
                duration,
                repeat: -1,
                ease: 'linear',
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % (contentWidth / 2))
                }
            });
        get_song_data(now_playing);
    });
</script>

<div class="player">
    <div class="play-status">
        <i class="fa-solid fa-circle"></i>
        {@html playstatus}
    </div>
    <div bind:this={marquee} class="now-playing">
        <div class="marquee">
            <span class="marquee_content">
                {now_playing}
            </span>
            <span class="marquee_content">
                {now_playing}
            </span>
        </div>
    </div>
    <div class="volume-controls">
        {@html volume}
    </div>
</div>


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
</style>