<script>
    let { pants = $bindable() } = $props()

    let fill = $derived(pants.style === "primary" ? pants.primaryColor : `url(#${pants.style})`)

    function changeStyle(newStyle) {
        pants.style = newStyle
    }

</script>

<main>
    <h2>Color</h2>
    <div class="inputs">

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

        <label class="colorInput">
            <span class="colorText">Primary Color:</span>
            <input type="color" bind:value={pants.primaryColor} />
        </label>

        <label class="colorInput">
            <span class="colorText">Secondary Color:</span>
            <input type="color" bind:value={pants.secondaryColor} />
        </label>

    </div>
</main>

<style> 
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin: 1rem;
        align-items: center;
    }

    input[type="color"] {
        appearance: none;
        -webkit-appearance: none;
        width: 3rem;
        height: 2rem;
        margin: 1rem;
        padding: 0;
        background: none;
        border: 2px solid var(--text);
        border-radius: .4rem;
        cursor: pointer;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: .3rem;
    }

    input[type="color"]::-moz-color-swatch {
        border: none;
        border-radius: .3rem;
    }

    input[type="color"]:hover {
        border-color: var(--accent);
    }

    input[type="color"]:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }

    .styleSelector {
        display: flex;
        flex-direction: column;
    }

    button {
        margin: 0.5rem;
        background-color: var(--surface);
        color: var(--text); 
        border: 1px solid var(--line);
        border-radius: 0.4rem;
        cursor: pointer;
        padding: .5rem 3.5rem;
    }

    button:hover {
        border-color: var(--accent);
        filter: brightness(1.15);
    }

    button:active {
        transform: scale(0.95);
    }

    button.active {
        background-color: var(--accent);
        color: var(--text-on-light); 
        border-color: var(--accent);
        font-weight: 600;
    }

    .colorInput {
        display:flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .colorText{
        color: var(--text);
    }
    
</style>