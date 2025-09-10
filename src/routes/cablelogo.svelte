<script lang="ts">
    import "../app.css"
    import { onMount } from "svelte";
    import { draw, fade, fly } from "svelte/transition";
    let start = false;
    onMount(() => {
        start = true;
    });
</script>

<div class="logo-header">
    <div class="animated-cable-logo">
        {#if start}
            <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 436 36.28"
            >
                <g id="b">
                    <path
                        in:draw={{ duration: 2500 }}
                        d="M0,33.45h26.1c5.3,0,10.6,1.1,12.4-3.2,1.6-4.5,6.1-18.3,8.5-24.8,3-7.7,7,.6,9.4,6.5,4,8.4-5.7,5.9-7.8,6.8-1.6.7-2.6,7.1,9.1,5.2,2.8,0,3.2.8,3.9,1.9.7,1.2.81,6.65,4.01,7.05,3.1.4,6.89-2.65,5.99-3.55-5.9-5.9-7.2-28.1,15.1-25.8,1.5,0,1.8.3,0,0-20.8-2.7-22.2,19-15.1,25.8,5.3,5.3,15.3,4,17.2,4h0c7.6,0,6.4-5.2,6.4-9,0,0-.1-8,0-16.3.1-6.7,7.6-5.6,13.8-5.6s5.8,12.7-1.1,12.7c-2.5,0-7.4-.6-7.4,2.8s.8,3.2,6.8,3.2,6.5-.86,6.5,5.94c0,7.3,10.6,8.06,10.6.42,0-19.6-2-25.16,2.8-25.16,1,0,2.3,1.3,3.2,3.6,8.7,22.4,6.9,26.94,11.8,26.94s4.6-4.74,4.6-25.04c0-3.7,6.2-5.6,8.3-5.6h107.9"
                        style="fill: none; stroke: #FFF; stroke-miterlimit: 10; stroke-width: 4.5px;"
                    />
                </g>
            </svg>
            <svg
                id="cable"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36.55 5.4"
            >
                <path
                    in:fly={{x:-20,delay:2200,duration:1500}}
                    d="M36.3,3l-1.2.9c-.2,0-.4.2-.6,0s-.6-.2-.8-.2c-.3,0-.5.7-.5.7h-.5V1h.5s.2.6.5.6.7-.1,1-.2h.4l1.3,1c.2,0,.2.4,0,.5h0l-.1.1Z"
                        style="fill: #FFF; stroke"
                />
                <rect in:fly={{x:-20,delay:2100,duration:1500}} x="19.9" y="1" width="12" height="3.4" style="fill: #FFF; stroke"/>
                <polyline in:fly={{x:-20,delay:2000,duration:1500}} points="1 0 19.6 0 19.6 5.4 1 5.4" style="fill: #FFF; stroke"/>
            </svg>
        {/if}
    </div>
    <div class="live">
        {#if start}
            <span id="live-array" in:fade={{delay:2000,duration:300}}>
                <p>L</p>
                <p style="animation-delay:1s">I</p>
                <p style="animation-delay:2s">V</p>
                <p style="animation-delay:3s">E</p>
            </span>
        {/if}
    </div>
</div>

<style>
    .logo-header {
        font-family: "block";
        font-size:40px;
        background-color: rgba(0, 0, 0, 0.041);
        height: 90px;
        width: 100vw;
        border-top:0px;
        border-bottom:2px;
        border-color:rgb(255, 255, 255);
        border-style:solid;
        margin:0;
        padding:0;
    }
    .live {
        color:maroon;
        position:absolute;
        left:250px;
        top:30px;
    }
    .live span {
        display:flex;
    }
    .live p {
        animation-duration: 3s;
        animation-name: flash;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    .animated-cable-logo {
        width: 750px;
        position: relative;
        padding: 20px;
        left: -25px;
    }
    #cable {
        position:absolute;
        width:100px;
        left:444px;
        top:16px;
    }
    @keyframes flash{
        0% {
            color:maroon;
        }
        49% {
            color:maroon;
        }
        50% {
            color:red;
        }
        100% {
            color:red;
        }
    }
</style>
