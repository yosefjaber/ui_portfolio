<script>
    let primaryColor = "green"
    let secondaryColor = "red"
    let style = "half"

    $: fill = style === "primary" ? primaryColor : `url(#${style})`

    function changeStyle(newStyle){
        style = newStyle
    }

</script>

<main>
    <input type="color" bind:value={primaryColor} />
    <input type="color" bind:value={secondaryColor} />

    <button class="button" onclick={changeStyle("half")}>
        half
    </button>

    <button class="button" onclick={changeStyle("camo")}>
        camo
    </button>

    <button class="button" onclick={changeStyle("gradient")}>
        gradient
    </button>

    <button class="button" onclick={changeStyle("strips")}>
        stripes
    </button>

    <button class="button" onclick={changeStyle("primary")}>
        primary
    </button>

    <svg viewBox="0 0 500 500" width="5%">

        <defs>
            <linearGradient id="half">
                <stop offset="50%" stop-color="{primaryColor}" />
                <stop offset="50%" stop-color="{secondaryColor}" />
            </linearGradient>

            <pattern id="camo" width="150" height="150" patternUnits="userSpaceOnUse">
                <rect width="150" height="150" fill="green" />
                <ellipse cx="40" cy="40" rx="30" ry="20" fill="darkgreen" />
                <ellipse cx="110" cy="100" rx="35" ry="25" fill="brown" />
            </pattern>

            <linearGradient id="gradient">
                <stop offset="0%" stop-color="{primaryColor}" />
                <stop offset="100%" stop-color="{secondaryColor}" />
            </linearGradient>

            <pattern id="stripes" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="30" height="60" fill="{secondaryColor}" />
                <rect x="30" width="30" height="60" fill="{primaryColor}" />
            </pattern>
        </defs>

        <polygon points="100,0 400,0 500,500, 300,500, 250,100 200,500 0,500" {fill} stroke="black" stroke-width="15"></polygon>
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