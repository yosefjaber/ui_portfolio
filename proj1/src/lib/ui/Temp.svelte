<script>
    let { pants = $bindable() } = $props()

    let current_temp = $state(pants.temp)
    let target_temp = $state(72)

    let heating = $derived(pants.temp < target_temp)
    let cooling = $derived(pants.temp > target_temp)

    function update_state() {
        if (pants.temp < target_temp){
            pants.temp++
        }
        else if (pants.temp > target_temp) {
            pants.temp--
        }
    }

    $effect(() => {
        const id = setInterval(update_state, 5000);
        return () => clearInterval(id)
    })
</script>

<main>
    <h2>Target Skin Temperature</h2>

    <div class="readout margin">
        <span class="label">Current</span>
        <span class="temp">{pants.temp}℉</span>
    </div>

    <div class="target-holder margin">
    <button onclick={() => target_temp--}>-</button>
    <span class="target-value">{target_temp}℉</span>
    <button onclick={() => target_temp++}>+</button>
    </div>

    <p class="status margin" class:heating class:cooling>
        {heating ? "Heating" : cooling ? "Cooling" : "At target"}
    </p>

</main>

<style> 

    .margin {
        margin: 1rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    p {
        font-size: 22px;
    }

    span {
        font-size: 22px;
    }

    .target-value {
        min-width: 4ch;
        text-align: center;
    }

    .target-holder {
        display:flex;
        align-items: center;
        gap: 0.75rem;
    }

    button {
        padding: .5rem;
        margin: .5rem;
        background-color: var(--surface);
        color: var(--text); 
        border: 1px solid var(--line);
        border-radius: .4rem;
        cursor: pointer;
    }

    button:hover {
        border-color: var(--accent);
        filter: brightness(1.25);
    }

    button:active {
        transform: scale(0.90);
        background-color: var(--granite);
    }

    .readout {
        text-align: center;
        color: var(--granite, #2d3748);
        margin-top: 3rem;
    }

    button {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    .heating { color: var(--ash); }
    .cooling { color: var(--granite); }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 2rem;
        margin-top: 1rem;
    }

    .status {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0;
        font-weight: 600;
        color: var(--ash);
    }

    .status::before {
        content: "";
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: currentColor;
    }

    .heating { color: #e5673b; }
    .cooling { color: #3b8fe5; }

    .heating::before,
    .cooling::before {
    animation: pulse 1.5s ease-out infinite;
    }

    @keyframes pulse {
        0%   { box-shadow: 0 0 0 0 color-mix(in srgb, currentColor 60%, transparent); }
        100% { box-shadow: 0 0 0 0.6rem transparent; }
    }

    @media (prefers-reduced-motion: reduce) {
        .heating::before,
        .cooling::before { animation: none; }
    }
</style>