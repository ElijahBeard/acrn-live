<script lang="ts">
    import Cablelogo from "./cablelogo.svelte";
    import Player from "./player.svelte";
    import Radio from "./radio.svelte";
    import History from "./history.svelte";
</script>

<div class="player">
    <Cablelogo/>
    <Player/>
</div>
<div class="radio">
    <Radio/>
</div>
<div class="radio-body">
        <div class="chat">
            <script id="cid0020000322445555671" 
            data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js"
            style="width: 100%;height: 100%;">{"handle":"acrnmed","arch":
            "js","styles":{"a":"000000","b":100,"c":"FFFFFF","d":"FFFFFF",
            "k":"292c2f","l":"292c2f","m":"292c2f","n":"FFFFFF","p":"10",
            "q":"000000","r":100,"t":0,"surl":0,"allowpm":0}}
            </script>
        </div>
        <div class="history">
            <History/>
        </div>
</div>

<style>
:global(body) {
    overflow:hidden;
    background-color: black;
}
.player {
    z-index:5;
}
.radio {
    position:absolute;
    width:100vw;
    height:100vh;
    background-color: black;
    z-index: -1;
}
.radio :global(.radio:nth-child(1)) {
    width:100vw;
    height:100vh;
    opacity: 0;
}
.radio-body {
    display:flex;
    height:70vh;
}
.chat {
    overflow:hidden;
    margin-top:0px;
    height:80vh;
    width:70vw;
}
@media screen and (max-width:550px) {
    .chat {
        display:none;
    }
    .radio-body{
        display:flex;
        justify-content: center;
        margin-top:10px;
    }
}
</style>