<script>
    let color = "black"
</script>

<main>
    <input type="color" bind:value={color} />
    <!-- <svg viewBox="0 0 500 500" width="5%">
        <polygon points="100,0 400,0 500,500, 300,500, 250,100 200,500 0,500" fill="{color}" stroke="black"></polygon>
    </svg> -->
    <svg viewBox="0 0 500 500" width="5%">
        <defs>
            <linearGradient id="half">
            <stop offset="50%" stop-color="red" />
            <stop offset="50%" stop-color="green" />
            </linearGradient>
        </defs>

        <defs>
            <linearGradient id="strips">
            <stop offset="0%" stop-color="red" />
            <stop offset="25%" stop-color="red" />

            <stop offset="25%" stop-color="green" />
            <stop offset="50%" stop-color="green" />

            <stop offset="50%" stop-color="red" />
            <stop offset="75%" stop-color="red" />

            <stop offset="75%" stop-color="green" />
            <stop offset="100%" stop-color="green" />
            </linearGradient>
        </defs>
        <polygon points="100,0 400,0 500,500, 300,500, 250,100 200,500 0,500" fill="url(#strips)" stroke="black"></polygon>
    </svg>
</main>

<style> 
  h1 {
    padding: .5rem
  }
  svg {
    padding: .5rem
  }
</style>