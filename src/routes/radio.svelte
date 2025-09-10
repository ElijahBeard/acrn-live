<script lang="ts">
    import { onMount } from "svelte";
    let size = 40;
    function draw() {
        size += 2;
        if(size > Math.max(document.body.clientHeight,document.body.clientWidth) + 200) {
            size=0;
        }
        requestAnimationFrame(draw);
    }
    onMount(() => {
        draw();
    });
</script>

<svg>
    <circle         
        cx={0}
        cy={0}
        r={size}
        stroke={'#FFF'}
        fill-opacity={0}
        viewBox="0 50 10000 10000"
    >
    </circle>
</svg>

<style>
svg {
    overflow:visible;
    filter:blur(0.04px);
}
</style>                                                                ``````````````