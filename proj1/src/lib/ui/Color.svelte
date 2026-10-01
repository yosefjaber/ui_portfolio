<script>
    let { pants = $bindable() } = $props()

    let fill = $derived(pants.style === "primary" ? pants.primaryColor : `url(#${pants.style})`)

    function changeStyle(newStyle) {
        pants.style = newStyle
    }

</script>

<main>
    <div class="inputs">
        <h2>Color</h2>

        <div class="styleSelector">
            <button class:active={pants.style==="half"} onclick={() => changeStyle("half")}>
                Half
            </button>

            <button class:active={pants.style==="camo"} onclick={() => changeStyle("camo")}>
                Camo
            </button>

            <button class:active={pants.style==="gradient"} onclick={() => changeStyle("gradient")}>
                Gradient
            </button>

            <button class:active={pants.style==="stripes"} onclick={() => changeStyle("stripes")}>
                Stripes
            </button>

            <button class:active={pants.style==="primary"} onclick={() => changeStyle("primary")}>
                Primary
            </button>
        </div>


        <div class="colorInput">
            <p class="colorText">Primary Color: </p>
            <input type="color" bind:value={pants.primaryColor} />
        </div>

        <div class="colorInput">
            <p class="colorText">Secondary Color: </p>
            <input type="color" bind:value={pants.secondaryColor} />
        </div>

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

    button:hover {
        background: #A9A9A9;
    }

    button:active {
        transform: scale(0.95);
    }

    button.active {
        background-color: #808080;
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