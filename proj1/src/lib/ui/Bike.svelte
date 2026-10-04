<script>
    let { pants = $bindable() } = $props()
</script>

<main>
  <h2>Bike Mode</h2>
  <button
    class="switch"
    class:on={pants.bike}
    role="switch"
    aria-checked={pants.bike}
    aria-label="Bike mode"
    onclick={() => (pants.bike = !pants.bike)}
  ><span>ON</span></button>
</main>

<style>
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