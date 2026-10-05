<script>

    let { pants = $bindable(),slot = $bindable() } = $props()

</script>

<main>
    <h2>Perfect Pants</h2>
    <div id="preset-holder">
        <button class:active={slot === 0} onclick={() => slot = 0}>Preset 1</button>
        <button class:active={slot === 1} onclick={() => slot = 1}>Preset 2</button>
        <button class:active={slot === 2} onclick={() => slot = 2}>Preset 3</button>
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        background: var(--surface);
    }

    
    #preset-holder {
        display: flex;
        gap: 1rem;
    }

    h2 {
        color: var(--text);
        margin-right: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        background: transparent;
        color: var(--text);
        border: 1px solid var(--line);
        border-radius: 0.4rem;
        cursor: pointer;
    }

    button:hover {
        border-color: var(--accent);
        filter: brightness(1.15);
    }

    button:active {
        transform: scale(0.95);
    }

    button {
        padding: 0.5rem 1rem;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--line);
        border-radius: 0.4rem;
        cursor: pointer;
    }

    button.active {
        background: var(--accent);
        color: var(--text-on-light);
        border-color: var(--accent);
    }
</style>