<script>
    let primaryColor = $state("blue")
    let secondaryColor = $state("red")

    let style = $state("half")

    let fill = $derived(style === "primary" ? primaryColor : `url(#${style})`)

    let activeColor = "grey"

    let nonactiveColor = "white"

    function changeStyle(newStyle){
        style = newStyle
    }

</script>

<main>
    <div class="inputs">
        <h2>Color</h2>

        <div class="styleSelector">
            <button class:active={style==="half"} onclick={() => changeStyle("half")}>
                Half
            </button>

            <button class:active={style==="camo"} onclick={() => changeStyle("camo")}>
                Camo
            </button>

            <button class:active={style==="gradient"} onclick={() => changeStyle("gradient")}>
                Gradient
            </button>

            <button class:active={style==="stripes"} onclick={() => changeStyle("stripes")}>
                Stripes
            </button>

            <button class:active={style==="primary"} onclick={() => changeStyle("primary")}>
                Primary
            </button>
        </div>


        <div class="colorInput">
            <p class="colorText">Primary Color: </p>
            <input type="color" bind:value={primaryColor} />
        </div>

        <div class="colorInput">
            <p class="colorText">Secondary Color: </p>
            <input type="color" bind:value={secondaryColor} />
        </div>

    </div>

    <div class="preview">
        <svg viewBox="0 0 500 500" width="100%">

            <defs>
                <linearGradient id="half">
                    <stop offset="50%" stop-color="{primaryColor}" />
                    <stop offset="50%" stop-color="{secondaryColor}" />
                </linearGradient>

                <pattern id="camo" width="150" height="150" patternUnits="userSpaceOnUse">
                    <rect width="150" height="150" fill="{primaryColor}" />
                    <ellipse cx="40" cy="40" rx="30" ry="20" fill="{secondaryColor}" />
                    <ellipse cx="110" cy="100" rx="35" ry="25" fill="{secondaryColor}" />
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
    </div>
</main>

<style> 
    main {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .preview {
        flex: 1;
        max-width: 220px;
    }

    svg {
        padding: .5rem;
    }

    .styleSelector {
        display: flex;
        flex-direction: column;
    }

    button {
        padding: .5rem;
        margin: .5rem;
        margin-top: .5rem;
        background-color: white;
    }

    button.active {
        background-color: #a9a9a9;
    }

    input {
        margin: 1rem;
        align-items: center;
    }

    .colorInput {
        display:flex;
        flex-direction: row;
        align-items: center;
    }

    .colorText{
        color: white;
    }
    
</style>