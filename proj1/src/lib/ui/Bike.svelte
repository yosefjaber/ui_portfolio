<script>
    let { pants = $bindable() } = $props()

    let inflating = $state(pants.bike)

    let inflatedpct = $state(pants.bike ? 100 : 0)

    let status = $derived(
        inflatedpct === 100 ? "Inflated"
        : inflating ? "Inflating: "
        : inflatedpct > 0 ? "Deflating: "
        : "Deflated"
    )

    
    function update_state() {
    if (inflating && inflatedpct < 100){
        inflatedpct++
    }
    else if (!inflating && inflatedpct > 0) {
        inflatedpct--
    }
    
    pants.bike = inflatedpct === 100
    }

    $effect(() => {
        const id = setInterval(update_state, 75)
        return () => clearInterval(id)
    })

</script>

<main>
  <h2>Bike Mode</h2>
    <button
    class="switch"
    class:on={inflating}
    role="switch"
    aria-checked={inflating}
    aria-label="Bike mode"
    onclick={() => (inflating = !inflating)}>
        <span class = {inflating ? "button-text-on" :  "button-text-off button"}>{inflating ? "ON" : "OFF"}</span>
    </button>

    <div id="inflate-div">
        <span class = "inflating-text">{status}{(inflatedpct > 0 && inflatedpct < 100) ? inflatedpct + "%" : ""}</span>
        <progress value="{inflatedpct}" max="100"> {inflatedpct}% </progress>
    </div>


</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #inflate-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
    }

    .inflating-text {
        font-variant-numeric: tabular-nums;
    }

    progress {
        width: 12rem;
        accent-color: var(--grape);
    }

    h2 {
        margin-bottom: 6rem;
    }

    .button-text-on {
        margin-right: 2rem;
        color: var(--grape);
    }

    .button-text-off {
        margin-left: 2rem;
        color: var(--text);
    }

    .switch {
        position: relative;
        width: 5rem;
        height: 2.5rem;
        border-radius: 2.5rem;
        border: 1px solid var(--line);
        background: var(--surface);
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
    }

    .switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: calc(2.5rem - 8px);
        height: calc(2.5rem - 8px);
        border-radius: 50%;
        background: var(--text);
        transition: transform 0.2s;
    }

    .switch.on {
        background: var(--accent);
        border-color: var(--accent);
    }

    .switch.on::after {
        background: var(--grape);
        transform: translateX(2.5rem);
    }
</style>